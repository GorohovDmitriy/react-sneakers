import React from 'react'

function Card() {
	return (
		<div className='card'>
			<div className='favorite'>
				<img src='/img/heart-liked.svg' alt='Liked' width={32} height={32} />
			</div>
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
	)
}

export default Card