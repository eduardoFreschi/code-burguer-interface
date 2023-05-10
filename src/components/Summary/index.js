import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { UseCard } from '../../hooks/CardContext'
import { apiCodeburguer as api } from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { ButtonSing as Button } from '../Button'
import { Container } from './styles'

export function Summary() {
	const [finalPrice, setFinalPrice] = useState(0)
	const [deliveryPrice] = useState(5)

	const { cardProducts } = UseCard()

	useEffect(() => {
		let sumALlItens
		if (cardProducts) {
			sumALlItens = cardProducts.reduce((acc, curr) => {
				return acc + curr.price * curr.quantity
			}, 0)
		}

		setFinalPrice(sumALlItens + deliveryPrice)
	}, [cardProducts, deliveryPrice])

	const submitOrder = async () => {
		const orders = cardProducts.map(products => {
			return {
				id: products.id,
				quantity: products.quantity
			}
		})
		await toast.promise(
			api.post('orders', {
				products: orders
			}),
			{
				pending: 'Realizando seu Pedido...',
				success: 'Pedido Realizado com Sucesso',
				error: 'Falha ao realizar seu pedido, tente novamente'
			}
		)
	}

	return (
		<div>
			<Container>
				<div className="container-top">
					<h2 className="title">Resumo do Pedido</h2>

					<p className="itens">Itens</p>
					<p className="itens-price">
						{formatCurrency(finalPrice - deliveryPrice)}
					</p>

					<p className="delivery-tax">Taxa de entrega</p>
					<p className="delivery-tax-price">{formatCurrency(deliveryPrice)}</p>
				</div>

				<div className="container-bottom">
					<p>Total</p>
					<p>{formatCurrency(finalPrice)}</p>
				</div>
			</Container>
			<Button
				onClick={submitOrder}
				style={{ width: '100%', marginTop: '30px' }}
			>
				Finalizar Pedido
			</Button>
		</div>
	)
}
