import styled from 'styled-components'

export const Container = styled.div`
	background-color: #ffffff;
	box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
	border-radius: 20px;
	padding: 10px;
	width: max-content;
	margin-top: 10px;
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.container-top {
		display: grid;
		gap: 10px 50px;
		grid-template-areas:
			'title title'
			'itens itens-price'
			'delivery-tax delivery-tax-price';

		.title {
			grid-area: title;
			margin-bottom: 20px;
		}

		.itens {
			grid-area: itens;
		}

		.itens-price {
			grid-area: itens-price;
		}

		.delivery-tax {
			grid-area: delivery-tax;
		}

		.delivery-tax-price {
			grid-area: delivery-tax-price;
		}
	}

	.container-bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 24px;
		margin-top: 50px;
	}
`
