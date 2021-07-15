import React from 'react'
import styles from './Card.module.scss'


function Card(props) {
	return (
		<div className={styles.card}>
			<div className={styles.favorite}>
				<img src='/img/heart-unliked.svg' alt='Liked' width={32} height={32} />
			</div>
			<img src={props.imageUrl} alt='Sneakers' width={133} height={112} />
			<h5>{props.title}</h5>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<b>{props.price} руб.</b>
				</div>
				<button className='button'>
					<img width={11} height={11} src='/img/pluse.svg' alt='Plus' />
				</button>
			</div>
		</div>
	)
}

export default Card
