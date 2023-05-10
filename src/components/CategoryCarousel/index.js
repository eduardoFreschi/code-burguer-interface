import { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'

import categoryImg from '../../assets/category.png'
import { apiCodeburguer as api } from '../../services/api'
import { Container, CategoryImg, ContainerItems, Image, Button } from './styles'

export function CategoryCarousel() {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('categories')

			setCategories(data.categories)
		}

		loadCategories()
	}, [])

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 500, itemsToShow: 2 },
		{ width: 700, itemsToShow: 3 },
		{ width: 900, itemsToShow: 4 },
		{ width: 1200, itemsToShow: 5 }
	]

	return (
		<Container>
			<CategoryImg src={categoryImg} alt="logo da categoria" />
			<Carousel itemsToShow={5} breakPoints={breakPoints}>
				{categories &&
					categories.map(category => (
						<ContainerItems key={category.id}>
							<Image src={category.url} alt="foto da categoria"></Image>
							<Button
								to={{ pathname: '/produtos' }}
								state={{ categoryId: category.id }}
							>
								{category.name}
							</Button>
						</ContainerItems>
					))}
			</Carousel>
		</Container>
	)
}
