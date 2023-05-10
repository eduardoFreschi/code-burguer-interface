import styled from 'styled-components'

export const Header = styled.header`
	width: 100%;
	height: 72px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	button {
		font-style: normal;
		font-weight: 700;
		font-size: 14px;
		line-height: 16px;
		color: #9758a6;
		border: none;
		cursor: pointer;
	}
`

export const ContainerLinks = styled.div`
	display: flex;
	align-items: center;

	.mall {
		display: flex;
	}

	.mall::after {
		content: '';
		height: 41px;
		border: 0.5px solid #bababa;
		display: inline-block;
		margin-left: 26px;
	}

	.link {
		cursor: pointer;
		color: #555555;
		font-style: normal;
		font-size: 16px;
		line-height: 19px;
		text-decoration: none;
	}

	.link:hover {
		color: #9758a6;
		border-bottom: 2px solid #9758a6;
	}
`
