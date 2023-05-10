import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import ViewInArIcon from '@mui/icons-material/ViewInAr'

import path from '../../constants/paths'

export const listLinks = [
	{
		id: 1,
		label: 'Pedidos',
		link: path.Order,
		icon: LocalMallOutlinedIcon
	},
	{
		id: 2,
		label: 'Produtos',
		link: path.ListProdutcts,
		icon: StorefrontOutlinedIcon
	},
	{
		id: 3,
		label: 'Adicionar Produto',
		link: path.newProduct,
		icon: ViewInArIcon
	}
]
