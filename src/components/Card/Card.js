import React, { useState } from 'react'
import styles from './Card.module.scss'
import ContentLoader from 'react-content-loader'
import AppContext from '../../context'

function Card({
	id,
	title,
	price,
	imageUrl,
	onFavorite,
	onPluse,
	favorited = false,
	loading = false,
}) {
	const { isItemAdded } = React.useContext(AppContext)
	const [isFavorite, setFavorite] = useState(favorited)
	const obj = { id, parentId: id, title, price, imageUrl }
	const onClickPlus = () => {
		onPluse(obj)
	}
	const onClickFavorite = () => {
		onFavorite(obj)
		setFavorite(!isFavorite)
	}

	return (
		<div className={styles.card}>
			{
				loading ? <ContentLoader
					speed={2}
					width={150}
					height={190}
					viewBox="0 0 150 190"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb"
				>
					<rect x="2" y="99" rx="0" ry="0" width="1" height="1" />
					<rect x="-3" y="6" rx="8" ry="8" width="155" height="95" />
					<rect x="-1" y="110" rx="4" ry="4" width="150" height="15" />
					<rect x="1" y="135" rx="5" ry="5" width="90" height="15" />
					<rect x="1" y="162" rx="7" ry="7" width="80" height="24" />
					<rect x="111" y="155" rx="7" ry="7" width="32" height="32" />
				</ContentLoader>
					: <React.Fragment>
						<div className={styles.favorite} onClick={onClickFavorite}>
							{onFavorite && <img
								src={isFavorite ? 'img/heart-liked.svg' : 'img/heart-unliked.svg'}
								alt='Liked'
								width={32}
								height={32}
							/>}
						</div>
						<img src={imageUrl} alt='Sneakers' width={133} height={112} />
						<h5>{title}</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>{price} руб.</b>
							</div>
							{onPluse && <img
								className={styles.plus}
								onClick={onClickPlus}
								src={isItemAdded(id) ? 'img/btn-cheked.svg' : 'img/btn-plus.svg'}
								alt='Plus'
							/>}
						</div>
					</React.Fragment>
			}


		</div>
	)
}

export default Card
