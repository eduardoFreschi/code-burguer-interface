import { Link, useNavigate, NavLink } from 'react-router-dom'

import mall from '../../assets/mall.svg'
import user from '../../assets/user.svg'
import { useUser } from '../../hooks/UserContext'
import { Header, ContainerLinks } from './styles'

export function Head({ children, ...rest }) {
	const { exitUser, nameUser } = useUser()
	const navigate = useNavigate()

	return (
		<Header>
			<ContainerLinks style={{ marginLeft: '260px', gap: '30px' }}>
				<NavLink
					style={({ isActive }) => (isActive ? { color: '#9758a6', fontWeight: '700' } : { color: '#555555' })}
					className="link"
					to="/"
				>
					Home
				</NavLink>

				<NavLink
					style={({ isActive }) => (isActive ? { color: '#9758a6', fontWeight: '700' } : { color: '#555555' })}
					className="link"
					to="/produtos"
				>
					Ver produtos
				</NavLink>
			</ContainerLinks>

			<ContainerLinks style={{ marginRight: '42px' }}>
				<Link to="/carrinho" className="mall">
					<img src={mall} alt="logo de compras" />
				</Link>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '20px'
					}}
				>
					<Link style={{ marginLeft: '30px' }}>
						<img src={user} alt="logo de usuário" />
					</Link>

					<div>
						<p>Olá, {nameUser}</p>
						<button
							onClick={() => {
								exitUser()

								setTimeout(() => {
									navigate('/login')
								}, 1000)
							}}
						>
							Sair
						</button>
					</div>
				</div>
			</ContainerLinks>
		</Header>
	)
}
