import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
	background: #3c3c3c;
	box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);

	hr {
		margin: 60px 16px;
		background: #e9ecef;
		transform: matrix(1, 0, 0, -1, 0, 0);
	}
`

export const ItemContainer = styled.div`
	width: 260px;
	height: 60px;
	display: flex;
	align-items: center;
	gap: 27px;
	background: ${props => (props.isActive ? '#565656' : 'none')};
	border-radius: 2px;
	margin: 8px;
	cursor: pointer;
`

export const LinkList = styled(Link)`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: #ffffff;
	text-decoration: none;
`
