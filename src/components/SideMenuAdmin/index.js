import LogoutIcon from '@mui/icons-material/Logout'
import { teal } from '@mui/material/colors'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import { listLinks } from './menu-list'
import { Container, ItemContainer, LinkList } from './styles'

export function SideMenuAdmin({ path }) {
	const [activeButton, setActiveButton] = useState(false)

	const { exitUser } = useUser()
	const navigate = useNavigate()
	return (
		<Container>
			<hr></hr>

			{listLinks.map(link => (
				<ItemContainer isActive={path === link.link} key={link.id}>
					<link.icon sx={{ color: teal[50] }} fontSize="medium" />
					<LinkList to={link.link}>{link.label}</LinkList>
				</ItemContainer>
			))}

			<hr></hr>

			<ItemContainer
				isActive={activeButton}
				onClick={() => {
					if (!activeButton) {
						setActiveButton(true)
					} else {
						setActiveButton(false)
					}
				}}
				style={{ position: 'fixed', bottom: '30px' }}
			>
				<LogoutIcon style={{ color: '#ffffff' }} />
				<LinkList
					onClick={() => {
						exitUser()
						setTimeout(() => {
							navigate('/login')
						}, 1000)
					}}
				>
					Sair
				</LinkList>
			</ItemContainer>
		</Container>
	)
}
