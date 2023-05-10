import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import burgerLogin from '../../assets/burger.svg'
import devBurger from '../../assets/codeBurger.svg'
import { ButtonSing as Button } from '../../components'
import { Error } from '../../components/ErrorMessage/styles'
import { useUser } from '../../hooks/UserContext'
import { apiCodeburguer as api } from '../../services/api'
import { Container, ContainerItens, H1, Input, Label, LoginImage, SignLink } from './styles'

export function Login() {
	const { putUserData } = useUser()

	const schema = yup
		.object({
			email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
			password: yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter no mínimo 6 digitos')
		})
		.required()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({ resolver: yupResolver(schema) })

	const navigate = useNavigate()
	const onSubmit = async clientData => {
		const { data } = await toast.promise(
			api.post('session', {
				email: clientData.email,
				password: clientData.password
			}),
			{
				pending: 'Verificando seus dados',
				success: 'Seja bem-vindo(a)',
				error: 'Verifique seu e-mail e senha'
			}
		)

		setTimeout(() => {
			if (data.admin) navigate('/pedidos')
			else navigate('/')
		}, 2000)

		putUserData(data)
	}

	return (
		<Container>
			<LoginImage src={burgerLogin} alt="login Image" />
			<ContainerItens>
				<img src={devBurger} alt="codeBurger"></img>
				<H1>Login</H1>
				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<Label>Email</Label>
					<Input type="email" {...register('email')} error={errors.email?.message}></Input>
					<Error>{errors.email?.message}</Error>

					<Label>Password</Label>
					<Input {...register('password')} type="password" error={errors.password?.message}></Input>
					<Error>{errors.password?.message}</Error>

					<Button marginTop={'75px'} marginBottom={'25px'} type="submit">
						Sign In
					</Button>
				</form>
				<SignLink>
					Não possui conta?{' '}
					<Link style={{ color: 'white' }} to="/register">
						Sign Up
					</Link>
				</SignLink>
			</ContainerItens>
		</Container>
	)
}
