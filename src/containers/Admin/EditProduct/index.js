import { yupResolver } from '@hookform/resolvers/yup'
import UploadIcon from '@mui/icons-material/Upload'
import { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import { Error } from '../../../components/ErrorMessage/styles'
import { UseCard } from '../../../hooks/CardContext'
import { apiCodeburguer as api } from '../../../services/api'
import { SelectInput as Select, Container, Input, Label, Button, LabelUpload, ContainerInput } from './styles'

function EditProduct() {
	const [fileName, setFileName] = useState(null)
	const [categories, setCategories] = useState([])

	const { product } = UseCard()

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
			offer: yup.bool()
		})
		.required()

	const {
		register,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({ resolver: yupResolver(schema) })

	const onSubmit = async data => {
		console.log(data.offer)
		const productDataFormData = new FormData()

		productDataFormData.append('name', data.name)
		productDataFormData.append('price', data.price)
		productDataFormData.append('category_id', data.category.id)
		productDataFormData.append('file', data.file[0])
		productDataFormData.append('offer', data.offer)

		await toast.promise(api.put(`products/${product.id}`, productDataFormData), {
			pending: 'Editando novo produto...',
			success: 'Produto editado com sucesso',
			error: 'Falha ao editar produto'
		})
	}

	return (
		<Container>
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<div>
					<Label>Nome</Label>
					<Input type="text" {...register('name')} defaultValue={product.name} />
					<Error>{errors.name?.message}</Error>
				</div>

				<div>
					<Label>Preço</Label>
					<Input type="number" {...register('price')} defaultValue={product.price} />
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
						defaultValue={product.category}
						control={control}
						render={({ field }) => {
							return (
								<Select
									{...field}
									options={categories}
									getOptionLabel={cat => cat.name}
									getOptionValue={cat => cat.id}
									placeholder="Categorias"
									defaultValue={product.category}
								/>
							)
						}}
					></Controller>
					<Error>{errors.category?.message}</Error>
				</div>

				<ContainerInput>
					<input type="checkbox" {...register('offer')} defaultChecked={product.offer} />
					<Label>Produto em Oferta ?</Label>
				</ContainerInput>
				<Button type="submit">Editar Produto</Button>
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

export default EditProduct
