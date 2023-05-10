import styled from 'styled-components'

export const Container = styled.div`
	background-color: #ffffff;
	box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
	border-radius: 20px;
	padding: 10px;
	width: max-content;
	margin-top: 10px;
`

export const Header = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	border-bottom: 1px solid #b5b5b5;
	padding: 10px;

	p {
		font-size: 16px;
		color: #9a9a9d;
	}
`

export const Body = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	margin-top: 10px;
	width: ;
	grid-gap: 10px 15px;

	img {
		border-radius: 10px;
		width: 120px;
	}

	p {
		font-size: 16px;
		color: #000000;
	}

	.quantity-container {
		display: flex;
		gap: 20px;
		align-items: baseline;
		button {
			height: 30px;
			border: none;
			background: transparent;
			font-size: 24px;
			cursor: pointer;
		}
	}
`

export const EmptyCart = styled.p`
	padding: 20px;
	text-align: center;
	font-weight: bold;
`
