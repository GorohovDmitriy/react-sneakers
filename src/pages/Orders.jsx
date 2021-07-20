import axios from 'axios'
import React from 'react'
import Card from '../components/Card/Card'
import AppContext from '../context'

function Orders() {
	const {onAddToFavorite} = React.useContext(AppContext)
	const [orders, setOrders] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)

	React.useEffect(() => {
		async function ordersData() {
			try {
				const {data} = await axios.get('https://60f03d7ef587af00179d3e03.mockapi.io/orders')
				setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
				setIsLoading(false)
			} catch (error) {
				alert('Ошибка при запросе заказов!')
				console.error(error)
			}
		}
		ordersData()
	}, [])

	return (
		<div className='content p-40'>
			<div className='d-flex align-center mb-40 justify-between'>
				<h1>Мои заказы</h1>
			</div>
			<div className='d-flex flex-wrap '>
				{(isLoading ? [...Array(12)] : orders).map((item, index) => (
					<Card
						key={index}
						onFavorite={(obj) => onAddToFavorite(obj)}
						loading={isLoading}
						{...item}
					/>
				))}
			</div>
		</div>
	)
}

export default Orders
