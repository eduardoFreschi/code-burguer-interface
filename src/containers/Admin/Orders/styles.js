import Select from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
	background-color: #efefef;
	min-height: 100vh;
`
export const ProductsImg = styled.img`
	width: 60px;
	border-radius: 5px;
`

export const SelectStyled = styled(Select)`
	width: 250px;

	.css-13cymwt-control {
		cursor: pointer;
	}
`
export const Menu = styled.div`
	display: flex;
	gap: 50px;
	justify-content: center;
	margin-bottom: 20px;
`

export const LinkMenu = styled.a`
	color: #323d5d;
	cursor: pointer;
	padding-bottom: 5px;

	${props =>
		props.isActive &&
		`
	border-bottom: 2px solid #9758a6;
	font-weight: bold
	
	`}
`
