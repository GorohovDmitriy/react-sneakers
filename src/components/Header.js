import React from 'react'

function Header(props) {
	return (
		<header className='d-flex justify-between align-center p-40'>
			<div className='d-flex align-center'>
				<img src='img/logo.png' alt='Логотип' width={40} height={40} />
				<div>
					<h3 className='text-uppercase'>React SNEAKERS</h3>
					<p>Магазин лучших красовок</p>
				</div>
			</div>
			<ul className='d-flex'>
				<li className='mr-30 cu-p' onClick={props.onClickCart} >
					<img src='img/card.svg' alt='Карзина' width={18} height={18} />
					<span>1205 руб</span>
				</li>
				<li onClick={props.onCloseCart}>
					<img src='img/user.svg' alt='User' width={18} height={18} />
				</li>
			</ul>
		</header>
	)
}

export default Header
