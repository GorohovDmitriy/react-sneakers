import React from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context'

function Header(props) {
	const { cartItems } = React.useContext(AppContext)


	const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)


	return (
		<header className='d-flex justify-between align-center p-40'>
			<Link to='/'>
				<div className='d-flex align-center'>
					<img src='img/logo.png' alt='Логотип' width={40} height={40} />
					<div>
						<h3 className='text-uppercase'>React SNEAKERS</h3>
						<p>Магазин лучших красовок</p>
					</div>
				</div>
			</Link>
			<ul className='d-flex'>
				<li className='mr-30 cu-p' onClick={props.onClickCart}>
					<img src='img/card.svg' alt='Карзина' width={18} height={18} />
					<span>{totalPrice} руб</span>
				</li>
				<li className=' mr-20 cu-p'>
					<Link to='/favorites'>
						<img src='img/heart.svg' alt='Закладки' width={18} height={18} />
					</Link>
				</li>
				<li>
					<Link to='/orders'>
						<img src='img/user.svg' alt='User' width={18} height={18} />
					</Link>

				</li>
			</ul>
		</header>
	)
}

export default Header
