import { yupResolver } from '@hookform/resolvers/yup'
import UploadIcon from '@mui/icons-material/Upload'
import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { Error } from '../../../components/ErrorMessage/styles'
import { apiCodeburguer as api } from '../../../services/api'
import { SelectInput as Select, Container, Input, Label, Button, LabelUpload } from './styles'

function NewProduct() {
	const [fileName, setFileName] = useState(null)
	const [categories, setCategories] = useState([])

	const navigate = useNavigate()

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get('categories')

			setCategories(data.categories)
		}

		loadCategories()
	}, [])

	const schema = yup
		.object()
		.shape({
			name: yup.string().required('Digite o nome do produto'),
			price: yup.string().required('Digite o preço do produto'),
			category: yup.object().required('Escolha uma categoria'),
			file: yup
				.mixed()
				.test('required', 'Carregue um arquivo', value => {
					return value?.length > 0
				})
				.test('fileSize', 'Carregue arquivos de ate 2MB', value => {
					return value[0]?.size < 200000
				})
				.test('type', 'Carregue apenas arquivos JPEG', value => {
					return value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
				})
		})
		.required()

	const {
		register,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({ resolver: yupResolver(schema) })

	const onSubmit = async data => {
		const productDataFormData = new FormData()

		productDataFormData.append('name', data.name)
		productDataFormData.append('price', data.price)
		productDataFormData.append('category_id', data.category.id)
		productDataFormData.append('file', data.file[0])

		await toast.promise(api.post('products', productDataFormData), {
			pending: 'Criando novo produto...',
			success: 'Produto criando com sucesso',
			error: 'Falha ao criar produto'
		})

		setTimeout(() => {
			navigate('/listar-produtos')
		}, 2000)
	}

	return (
		<Container>
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<div>
					<Label>Nome</Label>
					<Input type="text" {...register('name')} />
					<Error>{errors.name?.message}</Error>
				</div>

				<div>
					<Label>Preço</Label>
					<Input type="number" {...register('price')} />
					<Error>{errors.price?.message}</Error>
				</div>

				<div>
					<LabelUpload>
						{fileName ?? (
							<>
								<UploadIcon />
								Carregue a imagem do produto
							</>
						)}
						<input
							type="file"
							accept="image/png, image/jpeg"
							{...register('file')}
							onChange={value => setFileName(value.target.files[0]?.name)}
						/>
					</LabelUpload>
					<Error>{errors.file?.message}</Error>
				</div>

				<div>
					<Controller
						name="category"
						control={control}
						render={({ field }) => {
							return (
								<Select
									{...field}
									options={categories}
									getOptionLabel={cat => cat.name}
									getOptionValue={cat => cat.id}
									placeholder="Categorias"
								/>
							)
						}}
					></Controller>
					<Error>{errors.category?.message}</Error>
				</div>

				<Button type="submit">Adicionar Produto</Button>
			</form>
		</Container>
	)
}

/* 
Input

Não controlados => Eles não são controlados por NINGUÉM, se viram sozinhos.
Ex: Um input que ele próprio guarda o seu valor. Auto-suficiente

Controlados => Eles são controlados por algum outro component ou não são
auto-suficiente.
Ex: Um input que não guarda o valor dele próprio, ele necessita guardar em uma
variável
*/

export default NewProduct
