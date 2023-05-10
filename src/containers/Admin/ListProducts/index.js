import CancelIcon from '@mui/icons-material/Cancel'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import path from '../../../constants/paths'
import { UseCard } from '../../../hooks/CardContext'
import { apiCodeburguer as api } from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import { ProductImage, Container, EditIcon } from './styles'

function ListProducts() {
	const [products, setProducts] = useState()

	const navigate = useNavigate()
	const { setProduct } = UseCard()

	useEffect(() => {
		async function loadOrders() {
			const { data } = await api.get('products')

			setProducts(data)
		}
		loadOrders()
	}, [])

	function editProduct(product) {
		navigate(path.EditProduct)
		setProduct(product)
	}

	return (
		<Container>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Nome</TableCell>
							<TableCell>Preço</TableCell>
							<TableCell>Produto em Oferta</TableCell>
							<TableCell align="center">Imagem do Produtos</TableCell>
							<TableCell>Editar</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{products &&
							products.map(product => (
								<TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell component="th" scope="row">
										{product.name}
									</TableCell>
									<TableCell>{formatCurrency(product.price)}</TableCell>
									<TableCell align="center">
										{product.offer ? (
											<CheckCircleIcon style={{ color: '#228b22' }} />
										) : (
											<CancelIcon style={{ color: '#cc1717' }} />
										)}
									</TableCell>
									<TableCell align="center">
										<ProductImage src={product.url} alt="logo produto" />
									</TableCell>
									<TableCell>
										<EditIcon
											onClick={() => {
												editProduct(product)
											}}
										/>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	)
}

export default ListProducts
