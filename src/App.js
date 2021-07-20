import React from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import Drawer from './components/Drawer/Drawer'
import Header from './components/Header'
import Home from './pages/Home.jsx'
import './index.scss'
import Favorites from './pages/Favorites'
import AppContext from './context'
import Slider from './components/Slider/Slider'
import Footer from './components/Footer'
import Orders from './pages/Orders'

function App() {
	const [items, setItems] = React.useState([])
	const [cartItems, setCartItems] = React.useState([])
	const [favorites, setFavorites] = React.useState([])
	const [searchValue, setSearchValue] = React.useState('')
	const [cartOpened, setCartOpened] = React.useState(false)
	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
		async function fetchData() {
			try {
				const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
					axios.get('https://60f03d7ef587af00179d3e03.mockapi.io/cart'),
					axios.get('https://60f03d7ef587af00179d3e03.mockapi.io/favorites'),
					axios.get('https://60f03d7ef587af00179d3e03.mockapi.io/items'),
				])
				setIsLoading(false)

				setCartItems(cartResponse.data)
				setFavorites(favoritesResponse.data)
				setItems(itemsResponse.data)
			} catch (error) {
				alert('Ошибка при запросе данных ;-)')
			}
		}
		fetchData()
	}, [])

	const onAddToCart = async (obj) => {
		try {
			const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
			if (findItem) {
				setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)))
				await axios.delete(`https://60f03d7ef587af00179d3e03.mockapi.io/cart/${findItem.id}`)
			} else {
				setCartItems((prev) => [...prev, obj])
				const { data } = await axios.post('https://60f03d7ef587af00179d3e03.mockapi.io/cart', obj)
				setCartItems((prev) => prev.map(item => {
					if (item.parentId === data.parentId) {
						return {
							...item,
							id: data.id
						}
					}
					return item
				}))
			}
		} catch (error) {
			alert('Не добавилась в карзину :(')
		}
	}

	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
				axios.delete(`https://60f03d7ef587af00179d3e03.mockapi.io/favorites/${obj.id}`)
				setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
			} else {
				const { data } = await axios.post(
					'https://60f03d7ef587af00179d3e03.mockapi.io/favorites',
					obj,
				)
				setFavorites((prev) => [...prev, data])
			}
		} catch (error) {
			alert('Не удалось добавить в фавориты')
			console.error(error)
		}
	}

	const onRemoveItem = (id) => {
		try {
			setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)))
			axios.delete(`https://60f03d7ef587af00179d3e03.mockapi.io/cart/${id}`)
		} catch (error) {
			alert('Не удалось удалить из карзины ;-(')
			console.error(error)
		}
	}

	const onChangeSearchInput = (event) => {
		event.preventDefault()
		setSearchValue(event.target.value)
	}

	const isItemAdded = (id) => {
		return cartItems.some((obj) => Number(obj.parentId) === Number(id))
	}

	return (
		<AppContext.Provider
			value={{
				setCartItems,
				setCartOpened,
				cartItems,
				favorites,
				items,
				isItemAdded,
				onAddToFavorite,
				onAddToCart,
			}}
		>
			<div className='wrapper clear'>
				<Drawer
					items={cartItems}
					onClose={() => setCartOpened(false)}
					onRemove={onRemoveItem}
					opened={cartOpened}
				/>
				<Header onClickCart={() => setCartOpened(true)} />

				<Slider />

				<Route path='/' exact>
					<Home
						searchValue={searchValue}
						items={items}
						cartItems={cartItems}
						setSearchValue={setSearchValue}
						onChangeSearchInput={onChangeSearchInput}
						onAddToFavorite={onAddToFavorite}
						onAddToCart={onAddToCart}
						isLoading={isLoading}
					/>
				</Route>
				<Route path='/favorites' exact>
					<Favorites />
				</Route>
				<Route path='/orders' exact>
					<Orders />
				</Route>
				<Footer />
			</div>
		</AppContext.Provider>
	)
}

export default App
