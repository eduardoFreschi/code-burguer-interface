import homeBurger from '../../assets/homeBurger.svg'
import { CategoryCarousel, OfferCarousel } from '../../components'
import { Container, HomeImage } from './styles'

export function Home() {
	return (
		<Container>
			<HomeImage src={homeBurger} alt="logo a home"></HomeImage>
			<CategoryCarousel />
			<OfferCarousel />
		</Container>
	)
}
