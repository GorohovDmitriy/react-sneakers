import axios from 'axios'
import React from 'react'
import AppContext from '../../context'
import Info from '../Info.jsx'
import styles from './Drawer.module.scss'


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({ items = [], onClose, onRemove, opened }) {
	const { cartItems, setCartItems } = React.useContext(AppContext)
	const [isOrderComplete, setIsOrderComplete] = React.useState(false)
	const [orderId, setOrderId] = React.useState(null)
	const [isLoading, setIsLoading] = React.useState(false)

	const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)
	const tax = Math.floor(totalPrice / 100 * 5)


	const onClickOrder = async () => {
		try {
			setIsLoading(true)
			const { data } = await axios.post('https://60f03d7ef587af00179d3e03.mockapi.io/orders', {
				items: cartItems,
			})

			setOrderId(data.id)
			setIsOrderComplete(true)
			setCartItems([])
			for (let i = 0; i < cartItems.length; i++) {
				const item = cartItems[i];
				await axios.delete('https://60f03d7ef587af00179d3e03.mockapi.io/cart/' + item.id)
				await delay(1000)
			}
		} catch (error) {
			alert('Ошибка при создании заказа :(')
		}
		setIsLoading(false)
	}

	return (
		<div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
			<div className={styles.drawer}>
				<h2 className='d-flex justify-between mb-30'>
					Корзина
					<img
						onClick={onClose}
						className='removeBtn cu-p '
						src='/img/btn-remove.svg'
						alt='Remove'
						width={32}
						height={32}
					/>
				</h2>
				{items.length > 0 ? (
					<React.Fragment>
						<div className='items flex'>
							{items.map((obj) => (
								<div key={obj.id} className='cartItem d-flex align-center mb-20'>
									<div
										style={{ backgroundImage: `url(${obj.imageUrl})` }}
										className='cartItemImg'
									></div>
									<div className='mr-20 flex'>
										<p className='mb-5'>{obj.title}</p>
										<b>{obj.price} руб.</b>
									</div>
									<img
										onClick={() => onRemove(obj.id)}
										className='removeBtn cu-p'
										src='img/btn-remove.svg'
										alt='Remove'
										w={32}
										height={32}
									/>
								</div>
							))}
						</div>
						<div className='cartTotalBlock'>
							<ul>
								<li>
									<span>Итого: </span>
									<div></div>
									<b>{totalPrice} руб. </b>
								</li>
								<li>
									<span>Налог 5%: </span>
									<div></div>
									<b>{tax} руб. </b>
								</li>
							</ul>
							<button disabled={isLoading} onClick={onClickOrder} className='greenButton'>
								Оформить заказ
								<img src='img/arrow.svg' alt='Arrow' width={13} height={12} />
							</button>
						</div>
					</React.Fragment>
				) : (
					<Info
						title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
						description={
							isOrderComplete
								? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
								: 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
						}
						imageUrl={isOrderComplete ? 'img/done.jpg' : 'img/empty.jpg'}
					/>
				)}
			</div>
		</div>
	)
}

export default Drawer
