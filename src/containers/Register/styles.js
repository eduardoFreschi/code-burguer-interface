import styled from 'styled-components'

import BG from '../../assets/bg.svg'

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	background: url('${BG}');
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const RegisterImage = styled.img`
	height: 70%;
`

export const ContainerItens = styled.div`
	background: #373737;
	border-radius: 0px 10px 10px 0px;
	height: 70%;
	padding: 25px 75px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const H1 = styled.h1`
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 28px;
	color: #ffffff;
	text-align: center;
`

export const Label = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 14px;
	color: #ffffff;
	margin-top: ${props => (props.error ? '12px' : '28px')};
	margin-bottom: 5px;
`

export const Input = styled.input`
	width: 391.42px;
	height: 38.32px;
	background: #ffffff;
	box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
	border-radius: 5px;
	display: block;
	border: none;
	padding-left: 10px;

	${props =>
		props.error &&
		`
    border: 2px solid #cc1717;
    `}
`

export const SignLink = styled.p`
	font-style: normal;
	font-size: 14px;
	line-height: 16px;
	color: #ffffff;
	font-weight: 300;

	a {
		cursor: pointer;
		text-decoration: underline;
	}
`

export const Error = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	color: #cc1717;
	margin-top: 2px;
`
