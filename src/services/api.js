import axios from 'axios'

export const apiCodeburguer = axios.create({
	baseURL: 'http://localhost:3001'
})

apiCodeburguer.interceptors.request.use(async config => {
	const userData = await localStorage.getItem('codeburguer:userData')
	const token = userData && JSON.parse(userData).token
	config.headers.Authorization = `Bearer ${token}`
	return config
})
