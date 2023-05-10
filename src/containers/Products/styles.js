import styled from 'styled-components'

export const Container = styled.div`
	background: #e5e5e5;
	min-height: calc(100vh - 72px);
`

export const ProdutsImage = styled.img`
	width: 100%;
`

export const CategoriesMenu = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
	gap: 50px;
`

export const Button = styled.button`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 17px;
	line-height: 20px;
	color: ${props => props.isActiveCategory && '#9758A6'};
	border: none;
	cursor: pointer;
	border-bottom: ${props => (props.isActiveCategory ? '2px solid #9758A6' : 'none')};
	padding-bottom: 5px;
	background: transparent;
`

export const ProductsContainer = styled.div`
	width: 100vw;
	background-color: #e5e5e5;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 55px;
	gap: 25px;
	padding: 40px;
	justify-items: center;
`
