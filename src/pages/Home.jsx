import React from 'react'
import Card from '../components/Card/Card'

function Home({
	searchValue,
	items,
	setSearchValue,
	onChangeSearchInput,
	onAddToFavorite,
	onAddToCart,
}) {
	return (
		<div className='content p-40'>
			<div className='d-flex align-center mb-40 justify-between'>
				<h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все кроссовки'}</h1>
				<div className='search-block d-flex'>
					<img src='/img/search.svg' alt='search' />
					{searchValue && (
						<img
							onClick={() => setSearchValue('')}
							className='removeBtn cu-p '
							src='/img/btn-remove.svg'
							alt='Clear'
							width={32}
							height={32}
						/>
					)}
					<input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...' />
				</div>
			</div>
			<div className='d-flex flex-wrap '>
				{items
					.filter((item) => item.title.toLowerCase().includes(searchValue))
					.map((item, index) => (
						<Card
							key={index}
							{...item}
							onFavorite={(obj) => onAddToFavorite(obj)}
							onPluse={(obj) => onAddToCart(obj)}
						/>
					))}
			</div>
		</div>
	)
}

export default Home
