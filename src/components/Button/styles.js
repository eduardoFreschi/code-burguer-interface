import styled from 'styled-components'

export const Button = styled.button`
	width: 182.81px;
	height: 36.13px;
	background: #9758a6;
	border-radius: 20px;

	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	text-align: center;

	color: #eeeeee;
	border: none;
	cursor: pointer;
	margin-top: ${props => props.marginTop};
	margin-bottom: ${props => props.marginBottom};

	&:hover {
		opacity: 0.8;
	}

	&:active {
		opacity: 0.6;
	}
`
