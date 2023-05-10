import { useResolvedPath } from 'react-router-dom'

import { SideMenuAdmin } from '../../components'
import path from '../../constants/paths'
import EditProduct from './EditProduct'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin() {
	const { pathname } = useResolvedPath()

	return (
		<Container>
			<SideMenuAdmin path={pathname} />

			<ContainerItems>
				{pathname === path.Order && <Orders />}
				{pathname === path.ListProdutcts && <ListProducts />}
				{pathname === path.newProduct && <NewProduct />}
				{pathname === path.EditProduct && <EditProduct />}
			</ContainerItems>
		</Container>
	)
}
