import React from 'react'

function Footer(props) {
	return (
		<footer className='d-flex justify-center align-center border-top'>
			<ul className='d-flex mb-30 mt-30'>
				<li className='mr-30 cu-p'>
					<img src='img/twitter.svg' alt='Карзина' width={30} height={30} />
				</li>
				<li className=' mr-30 cu-p'>
					<img src='img/instagram.svg' alt='Закладки' width={30} height={30} />
				</li>
				<li className='cu-p'>
					<img src='img/facebook.svg' alt='User' width={30} height={30} />
				</li>
			</ul>
		</footer>
	)
}

export default Footer
