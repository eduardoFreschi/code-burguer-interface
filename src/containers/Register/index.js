import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import burgerHot from '../../assets/burgerHot.svg'
import codeBurger from '../../assets/codeBurger.svg'
import { ButtonSing as Button } from '../../components'
import { Error } from '../../components/ErrorMessage/styles'
import { apiCodeburguer as api } from '../../services/api'
import { Container, RegisterImage, ContainerItens, H1, Input, Label, SignLink } from './styles'

export function Register() {
	const schema = yup
		.object({
			name: yup.string().required('O Nome é obrigatório'),
			email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
			password: yup.string().min(6, 'A senha deve ter no mínimo 6 digitos').required('A senha é obrigatória'),
			confirmPassword: yup
				.string()
				.required('A senha é obrigatória')
				.oneOf([yup.ref('password')], 'As senhas devem ser iguais')
		})
		.required()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	})

	const onSubmit = async dataClient => {
		try {
			const { status } = await api.post(
				'users',
				{
					name: dataClient.name,
					email: dataClient.email,
					password1: dataClient.password
				},
				{
					validateStatus: () => true
				}
			)

			if (status === 201 || status === 200) {
				toast.success('Cadastro criado com sucesso')
			} else if (status === 409) {
				toast.error('E-mail ja cadastrado ! Faça login para continuar')
			} else {
				throw new Error()
			}
		} catch (err) {
			toast.error('Falha no sistema! Tente novamente')
		}
	}

	return (
		<Container>
			<RegisterImage src={burgerHot} alt="Register Image" />
			<ContainerItens>
				<img src={codeBurger} alt="codeBurger"></img>
				<H1>Cadastre-se</H1>
				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<Label error={errors.name?.message}>Nome</Label>
					<Input type="text" {...register('name')} error={errors.name?.message}></Input>
					<Error>{errors.name?.message}</Error>

					<Label error={errors.email?.message}>Email</Label>
					<Input {...register('email')} error={errors.email?.message}></Input>
					<Error>{errors.email?.message}</Error>

					<Label error={errors.password?.message}>Senha</Label>
					<Input type="password" {...register('password')} error={errors.password?.message}></Input>
					<Error>{errors.password?.message}</Error>

					<Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
					<Input type="password" {...register('confirmPassword')} error={errors.confirmPassword?.message}></Input>
					<Error>{errors.confirmPassword?.message}</Error>

					<Button type="submit" style={{ marginTop: 28, marginBottom: 28 }}>
						Sign In
					</Button>
				</form>
				<SignLink>
					Já possui conta?{' '}
					<Link style={{ color: 'white' }} to="/login">
						Sign Up
					</Link>
				</SignLink>
			</ContainerItens>
		</Container>
	)
}
