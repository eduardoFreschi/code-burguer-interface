import { useEffect, useState, createContext, useContext } from 'react'

const CardContext = createContext({})

export const CardProvider = ({ children }) => {
	const [cardProducts, setCardProducts] = useState([])
	const [product, setProduct] = useState({})

	const storageCartProducts = async product => {
		await localStorage.setItem('codeburger:cardData', JSON.stringify(product))
	}
	const putProductInCard = async product => {
		const cardIndex = cardProducts.findIndex(prd => prd.id === product.id)
		let newCardProducts = []
		if (cardIndex >= 0) {
			newCardProducts = cardProducts

			newCardProducts[cardIndex].quantity += 1

			setCardProducts(newCardProducts)
		} else {
			product.quantity = 1
			newCardProducts = [...cardProducts, product]
			setCardProducts(newCardProducts)
		}

		storageCartProducts(newCardProducts)
	}

	const deleteProduct = async productId => {
		const newCart = cardProducts.filter(pd => pd.id !== productId)

		setCardProducts(newCart)

		storageCartProducts(newCart)
	}

	const increaseProducts = async productId => {
		const newCart = cardProducts.map(product => {
			return product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
		})
		setCardProducts(newCart)

		storageCartProducts(newCart)
	}

	const decreaseProduct = async productId => {
		const cartIndex = cardProducts.findIndex(pd => pd.id === productId)

		if (cardProducts[cartIndex].quantity > 1) {
			const newCart = cardProducts.map(product => {
				return product.id === productId ? { ...product, quantity: product.quantity - 1 } : product
			})

			setCardProducts(newCart)

			storageCartProducts(newCart)
		} else {
			deleteProduct(productId)
		}
	}

	useEffect(() => {
		const loadProductData = async () => {
			const clientCardData = await localStorage.getItem('codeburger:cardData')

			if (clientCardData) {
				setCardProducts(JSON.parse(clientCardData))
			}
		}
		loadProductData()
	}, [])

	return (
		<CardContext.Provider
			value={{
				putProductInCard,
				cardProducts,
				setCardProducts,
				increaseProducts,
				decreaseProduct,
				setProduct,
				product
			}}
		>
			{children}
		</CardContext.Provider>
	)
}

export const UseCard = () => {
	const context = useContext(CardContext)

	if (!context) {
		throw new Error('useCard must be used with CardContext')
	}

	return context
}
