import React from 'react'
import styles from './Slider.module.scss'

const Slider = () => {
	return (
		<div className={styles.Slider}>
			<div className={styles.Info}>
				<img src="img/slider-logo.jpg" alt="Logo-Slider" width={99} height={40} />
				<p>Welcome <b>to shop</b></p>
				<button>Купить</button>
			</div>
			<div>
				<img src="img/foto.png" alt="foto" width={690} height={300} />
			</div>
		</div>
	)
}

export default Slider
