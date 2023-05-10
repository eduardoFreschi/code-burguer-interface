import { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import offerImage from '../../assets/offer.png'
import { UseCard } from '../../hooks/CardContext'
import { apiCodeburguer as api } from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
	Container,
	ContainerItems,
	Image,
	Button,
	OfferImage,
	Paragraph
} from './styles'

export function OfferCarousel() {
	const [offers, setOffers] = useState([])

	const { putProductInCard } = UseCard()

	useEffect(() => {
		async function loadOffer() {
			const { data } = await api.get('products')

			setOffers(
				data
					.filter(element => element.offer === true)
					.map(product => {
						return { ...product, formatedPrice: formatCurrency(product.price) }
					})
			)
		}

		loadOffer()
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
			<OfferImage src={offerImage} alt="logo de offer"></OfferImage>
			<Carousel breakPoints={breakPoints}>
				{offers &&
					offers.map(offer => (
						<ContainerItems key={offer.id}>
							<Image src={offer.url} alt="logo da oferta" />
							<Paragraph>{offer.name}</Paragraph>
							<Paragraph>{offer.formatedPrice}</Paragraph>
							<Button
								onClick={() => {
									putProductInCard(offer)
								}}
								to={{ pathname: '/carrinho' }}
							>
								Peça agora
							</Button>
						</ContainerItems>
					))}
			</Carousel>
		</Container>
	)
}
