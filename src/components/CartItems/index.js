import { UseCard } from '../../hooks/CardContext'
import formatCurrency from '../../utils/formatCurrency'
import { Body, Container, EmptyCart, Header } from './styles'

export function CartItems() {
	const { cardProducts, increaseProducts, decreaseProduct } = UseCard()

	return (
		<Container>
			<Header>
				<p></p>
				<p>Itens</p>
				<p>Preço</p>
				<p style={{ paddingRight: '30px' }}>Quantidade</p>
				<p>Total</p>
			</Header>

			{cardProducts && cardProducts.length > 0 ? (
				cardProducts.map(product => (
					<Body key={product.id}>
						<img src={product.url} />
						<p>{product.name}</p>
						<p>{formatCurrency(product.price)}</p>
						<div className="quantity-container">
							<button
								onClick={() => {
									decreaseProduct(product.id)
								}}
							>
								-
							</button>
							<p>{product.quantity}</p>
							<button
								onClick={() => {
									increaseProducts(product.id)
								}}
							>
								+
							</button>
						</div>
						<p>{formatCurrency(product.price * product.quantity)}</p>
					</Body>
				))
			) : (
				<EmptyCart>Carrinho Vazio</EmptyCart>
			)}
		</Container>
	)
}
