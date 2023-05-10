import { Navigate } from 'react-router-dom'

import { Head } from '../components'

function PrivateRouter({ children, isAdmin }) {
	const user = localStorage.getItem('codeburguer:userData')

	if (!user) {
		return <Navigate to="/login" />
	}

	if (isAdmin && !JSON.parse(user).admin) {
		return <Navigate to="/" />
	}
	return (
		<>
			{!isAdmin && <Head />}
			{children}
		</>
	)
}

export default PrivateRouter
