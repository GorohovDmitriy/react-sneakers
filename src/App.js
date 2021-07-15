import React from 'react'
import Card from './components/Card/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'
import './index.scss'

function App() {
	const [items, setItems] = React.useState([])
	const [cartItems, setCartItems] = React.useState([])
	const [cartOpened, setCartOpened] = React.useState(false)

	React.useEffect(() => {
		fetch('https://60f03d7ef587af00179d3e03.mockapi.io/items').then(async (response) => {
			const json = await response.json()
			return setItems(json)
		})
	}, [])

	const onAddToCart = (obj) => {
		setCartItems(prev => [...prev, obj])
	}
	return (
		<div className='wrapper clear'>
			{cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
			<Header onClickCart={() => setCartOpened(true)} />
			<div className='content p-40'>
				<div className='d-flex align-center mb-40 justify-between'>
					<h1>Все кроссовки</h1>
					<div className='search-block d-flex'>
						<img src='/img/search.svg' alt='search' />
						<input placeholder='Поиск...' />
					</div>
				</div>
				<div className='d-flex flex-wrap '>
					{items.map((item, index) => (
						<Card
							key={index}
							title={item.title}
							price={item.price}
							imageUrl={item.imageUrl}
							onFavorite={() => console.log('dobavili zakladki')}
							onPluse={(obj) => onAddToCart(item)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default App
