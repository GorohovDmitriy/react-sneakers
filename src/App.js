import React from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import Drawer from './components/Drawer'
import Header from './components/Header'
import Home from './pages/Home.jsx'
import './index.scss'
import Favorites from './pages/Favorites'

function App() {
	const [items, setItems] = React.useState([])
	const [cartItems, setCartItems] = React.useState([])
	const [favorites, setFavorites] = React.useState([])
	const [searchValue, setSearchValue] = React.useState('')
	const [cartOpened, setCartOpened] = React.useState(false)

	React.useEffect(() => {
		axios
			.get('https://60f03d7ef587af00179d3e03.mockapi.io/items')
			.then((response) => setItems(response.data))

		axios
			.get('https://60f03d7ef587af00179d3e03.mockapi.io/cart')
			.then((response) => setCartItems(response.data))
		axios
			.get('https://60f03d7ef587af00179d3e03.mockapi.io/favorites')
			.then((response) => setFavorites(response.data))
	}, [])

	const onAddToCart = (obj) => {
		axios.post('https://60f03d7ef587af00179d3e03.mockapi.io/cart', obj)
		setCartItems((prev) => [...prev, obj])
	}
	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find((favObj) => favObj.id === obj.id)) {
				axios.delete(`https://60f03d7ef587af00179d3e03.mockapi.io/favorites/${obj.id}`)
			} else {
				const { data } = await axios.post('https://60f03d7ef587af00179d3e03.mockapi.io/favorites', obj)
				setFavorites((prev) => [...prev, data])
			}
		} catch (error) {
			alert('Не удвлось добавить в фавориты')
		}
	}

	const onRemoveItem = (id) => {
		axios.delete(`https://60f03d7ef587af00179d3e03.mockapi.io/cart/${id}`)
		setCartItems((prev) => prev.filter((item) => item.id !== id))
	}

	const onChangeSearchInput = (event) => {
		event.preventDefault()
		setSearchValue(event.target.value)
	}

	return (
		<div className='wrapper clear'>
			{cartOpened && (
				<Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
			)}
			<Header onClickCart={() => setCartOpened(true)} />
			<Route path='/' exact>
				<Home
					searchValue={searchValue}
					items={items}
					setSearchValue={setSearchValue}
					onChangeSearchInput={onChangeSearchInput}
					onAddToFavorite={onAddToFavorite}
					onAddToCart={onAddToCart}
				/>
			</Route>
			<Route path='/favorites' exact>
				<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
			</Route>
		</div>
	)
}

export default App
