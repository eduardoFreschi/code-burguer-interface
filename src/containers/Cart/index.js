import cartLogo from '../../assets/cartLogo.svg'
import { CartItems, Summary } from '../../components'
import { CartImage, Container, Wrapper } from './styles'

export function Cart() {
	return (
		<Container>
			<CartImage src={cartLogo} alt="logo do carrinho" />
			<Wrapper>
				<CartItems />
				<Summary />
			</Wrapper>
		</Container>
	)
}
