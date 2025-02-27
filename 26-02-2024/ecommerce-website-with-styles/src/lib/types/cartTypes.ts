
export interface ICart {
    id: number;
    userId: number;
    date: Date;
    products: CartProductType[]
}

export type CartProductType = {
    productId: number
    quantity: number
}

export type CartStoreActionsType = {
    addProductToCart: (product: CartProductType) => void
    removeProductFromCart: (productId: number) => void
    increamentQuantity: (productId: number) => void
    decreamentQuantity: (productId: number) => void
    setCart: (cart: ICart) => void
}

export type CartStoreStateType = {
    cart: ICart
}

export type CartStoreType = CartStoreStateType & CartStoreActionsType