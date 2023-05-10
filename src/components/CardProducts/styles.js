import styled from 'styled-components'

export const CardContainer = styled.div`
	display: flex;
	background: #ffffff;
	box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
	border-radius: 30px;
	gap: 12px;
	padding: 16px;
	width: max-content;

	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
`

export const ImageCard = styled.img`
	width: 200px;
	border-radius: 8px;
`

export const ParagraphCard = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: #000000;
`
