import { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
	const [userData, setUserData] = useState({})
	const [nameUser, setNameUser] = useState('')
	const putUserData = async userInfo => {
		setUserData(userInfo)

		await localStorage.setItem('codeburguer:userData', JSON.stringify(userInfo))

		const newName = userInfo.name.split(' ')[0]
		setNameUser(newName)
		await localStorage.setItem('codeburguer:userName', JSON.stringify(newName))
	}

	const exitUser = async () => {
		await localStorage.removeItem('codeburguer:userData')
	}

	useEffect(() => {
		const loadUserData = async () => {
			const clientInfo = await JSON.parse(localStorage.getItem('codeburguer:userData'))

			if (clientInfo) {
				setUserData(clientInfo)
			}
		}

		const loadName = async () => {
			const newName = await JSON.parse(localStorage.getItem('codeburguer:userName'))

			if (newName) {
				setNameUser(newName)
			}
		}

		loadUserData()
		loadName()
	}, [])

	return <UserContext.Provider value={{ putUserData, userData, exitUser, nameUser }}>{children}</UserContext.Provider>
}

export const useUser = () => {
	const context = useContext(UserContext)

	if (!context) {
		throw new Error('useUser must be used with userContext')
	}

	return context
}
