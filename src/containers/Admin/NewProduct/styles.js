import Select from 'react-select'
import styled from 'styled-components'

import { ButtonSing } from '../../../components'

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	form {
		display: flex;
		flex-direction: column;
		background: #565656;
		border-radius: 10px;
		padding: 30px;
		gap: 25px;
	}
`

export const Label = styled.label`
	font-size: 12px;
	color: #ffffff;
	margin-bottom: 3px;
`

export const Input = styled.input`
	height: 40px;
	box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	border: none;
	background: #ffffff;
	width: 100%;
	min-width: 280px;
	padding-left: 10px;
`

export const LabelUpload = styled.label`
	cursor: pointer;
	display: flex;
	align-items: center;
	border-radius: 5px;
	border: 1px dashed #ffffff;
	padding: 10px;
	gap: 10px;

	input {
		opacity: 0;
		width: 1px;
	}
`

export const SelectInput = styled(Select)`
	.css-1fdsijx-ValueContainer {
		height: 40px;
		box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		border: none;
		background: #ffffff;
	}
`

export const Button = styled(ButtonSing)`
	width: 100%;
`
