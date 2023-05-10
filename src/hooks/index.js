import { CardProvider } from './CardContext'
import { UserProvider } from './UserContext'

const AppProvider = ({ children, ...rest }) => (
	<CardProvider {...rest}>
		<UserProvider>{children}</UserProvider>)
	</CardProvider>
)

export default AppProvider
