import { useNavigate } from 'react-router-dom'

import { ButtonSing as Button } from '../../components'
import { UseCard } from '../../hooks/CardContext'
import formatCurrency from '../../utils/formatCurrency'
import { CardContainer, ImageCard, ParagraphCard } from './styles'

export function CardProducts({ product }) {
	const { putProductInCard } = UseCard()
	const navigate = useNavigate()

	return (
		<CardContainer>
			<ImageCard src={product.url} alt="logo do card" />
			<div>
				<ParagraphCard>{product.name}</ParagraphCard>
				<ParagraphCard style={{ fontWeight: '500', marginTop: '50px' }}>
					{formatCurrency(product.price)}
				</ParagraphCard>
				<Button
					onClick={() => {
						putProductInCard(product)

						navigate('/carrinho')
					}}
				>
					Adicionar
				</Button>
			</div>
		</CardContainer>
	)
}
