import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import Route from './routes/routes'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<>
		<GlobalStyles />
		<ToastContainer autoClose={2000} theme="colored" />
		<AppProvider>
			<Route />
		</AppProvider>
	</>
)
