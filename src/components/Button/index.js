import { Button } from './styles'

export function ButtonSing({ children, ...rest }) {
	return <Button {...rest}>{children}</Button>
}
