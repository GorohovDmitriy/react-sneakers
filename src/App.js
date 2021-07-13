import React from 'react'
import './index.scss'

function App() {
	return (
		<div className='wrapper clear'>
			<header className='d-flex justify-between align-center p-40'>
				<div className='d-flex align-center'>
					<img src='img/logo.png' alt='Логотип' width={40} height={40} />
					<div>
						<h3 className='text-uppercase'>React SNEAKERS</h3>
						<p>Магазин лучших красовок</p>
					</div>
				</div>
				<ul className='d-flex'>
					<li className='mr-30'>
						<img src='img/card.svg' alt='Карзина' width={18} height={18} />
						<span>1205 руб</span>
					</li>
					<li>
						<img src='img/user.svg' alt='User' width={18} height={18} />
					</li>
				</ul>
			</header>
			<div className='content p-40'>
				<h1 className='mb-40'>Все кроссовки</h1>
				<div className='d-flex'>
					<div className='card'>
						<img src='/img/image1.jpg' alt='Sneakers' width={133} height={112} />
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='/img/pluse.svg' alt='Plus' />
							</button>
						</div>
					</div>
					<div className='card'>
						<img src='/img/image2.jpg' alt='Sneakers' width={133} height={112} />
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='/img/pluse.svg' alt='Plus' />
							</button>
						</div>
					</div>
					<div className='card'>
						<img src='/img/image3.jpg' alt='Sneakers' width={133} height={112} />
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='/img/pluse.svg' alt='Plus' />
							</button>
						</div>
					</div>
					<div className='card'>
						<img src='/img/image4.jpg' alt='Sneakers' width={133} height={112} />
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='/img/pluse.svg' alt='Plus' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
