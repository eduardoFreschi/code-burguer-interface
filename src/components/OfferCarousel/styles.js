import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 35px;
	padding: 35px 0;

	.rec.rec-arrow {
		background-color: #9758a6;
		color: #e5e5e5;
		filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	}

	.rec.rec-arrow:hover {
		border: 2px solid #9758a6;
		background-color: #e5e5e5;
		color: #9758a6;
	}

	.rec.rec-arrow:disabled {
		border: none;
		background-color: #bebebf;
		color: #e5e5e5;
	}
`
export const OfferImage = styled.img``

export const ContainerItems = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`

export const Image = styled.img`
	width: 200px;
	border-radius: 8px;
`

export const Paragraph = styled.p`
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	max-width: 200px;
	line-height: 120%;

	color: #212121;
`

export const Button = styled(Link)`
	height: 50px;
	width: 200px;
	background: #9758a6;
	border: none;
	cursor: pointer;
	border-radius: 8px;
	box-shadow: 0px 5px 10px rgba(151, 88, 166, 0.22),
		0px 20px 40px rgba(151, 88, 166, 0.24);

	font-style: normal;
	text-decoration: none;
	font-weight: 700;
	font-size: 24px;
	line-height: 100%;
	color: #ffffff;

	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		opacity: 0.8;
	}

	&:active {
		opacity: 0.5;
	}
`
