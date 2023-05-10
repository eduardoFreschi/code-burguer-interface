import { BrowserRouter, Route, Routes } from 'react-router-dom'

import path from '../constants/paths'
import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import PrivateRouter from './private-route'

function myRoute() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/cadastro" element={<Register />} />
				<Route
					path="/"
					element={
						<PrivateRouter>
							<Home />
						</PrivateRouter>
					}
				/>
				<Route
					path="/produtos"
					element={
						<PrivateRouter>
							<Products />
						</PrivateRouter>
					}
				/>
				<Route
					path="/carrinho"
					element={
						<PrivateRouter>
							<Cart />
						</PrivateRouter>
					}
				/>
				<Route
					path={path.Order}
					element={
						<PrivateRouter isAdmin>
							<Admin />
						</PrivateRouter>
					}
				/>
				<Route
					path={path.ListProdutcts}
					element={
						<PrivateRouter isAdmin>
							<Admin />
						</PrivateRouter>
					}
				/>
				<Route
					path={path.newProduct}
					element={
						<PrivateRouter isAdmin>
							<Admin />
						</PrivateRouter>
					}
				/>
				<Route
					path={path.EditProduct}
					element={
						<PrivateRouter isAdmin>
							<Admin />
						</PrivateRouter>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default myRoute
