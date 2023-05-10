import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import ProductsBg from '../../assets/productsBg.svg'
import { CardProducts } from '../../components'
import { apiCodeburguer as api } from '../../services/api'
import { Button, CategoriesMenu, Container, ProdutsImage, ProductsContainer } from './styles'

export function Products() {
	const props = useLocation()

	let categoryId = 0
	if (props.state?.categoryId) {
		categoryId = props.state.categoryId
	}
	// ELVIS OPERATOR

	const [categories, setCategories] = useState([])
	const [activeCategory, setActiveCategory] = useState(categoryId)
	const [products, setProducts] = useState([])
	const [filteredProducts, setFilteredProducts] = useState(0)

	useEffect(() => {
		async function loadOffer() {
			const { data } = await api.get('categories')

			const categoriesData = data.categories
			const newCategories = [{ id: 0, name: 'Todas' }, ...categoriesData]

			setCategories(newCategories)
		}

		async function loadProduts() {
			const { data } = await api.get('products')

			setProducts(data)
		}
		loadProduts()
		loadOffer()
	}, [])

	useEffect(() => {
		if (activeCategory === 0) {
			setFilteredProducts(products)
		} else {
			const newFilteredProducts = products.filter(element => element.category_id === activeCategory)
			setFilteredProducts(newFilteredProducts)
		}
	}, [activeCategory, products])

	return (
		<Container>
			<ProdutsImage src={ProductsBg} alt="logo a home"></ProdutsImage>
			<CategoriesMenu>
				{categories &&
					categories.map(category => (
						<Button
							type="button"
							key={category.id}
							isActiveCategory={activeCategory === category.id}
							onClick={() => {
								setActiveCategory(category.id)
							}}
						>
							{category.name}
						</Button>
					))}
			</CategoriesMenu>
			<ProductsContainer>
				{filteredProducts && filteredProducts.map(product => <CardProducts key={product.id} product={product} />)}
			</ProductsContainer>
		</Container>
	)
}
