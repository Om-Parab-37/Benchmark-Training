
export type CartContextType = {
    carts: ICart[];
    cartsDispatch: React.Dispatch<CartsActionType>;
};

export enum CartsActions {
    setCarts = "SET_CARTS",
    addNewProduct = "ADD_PRODUCT_TO_CART",
    removeProduct = "REMOVE_PRODUCT_FROM_CART",
    increamentQuantity = "INCREAMENT_QUANTITY",
    removeCart = "REMOVE_CART",
}

export type CartProductType = {
    productId: number;
    quantity: number;
}

export interface ICart {
    id: number;
    userId: number;
    date: Date;
    products: CartProductType[];
}

export type CartsActionType =
    | { type: CartsActions.setCarts; payload: { carts: ICart[] } }
    | {
        type: CartsActions.addNewProduct;
        payload: {
            userId: number
            date: Date;
            products: CartProductType[];
        };
    }
    | {
        type: CartsActions.removeProduct;
        payload: { productId: number; cartId: number };
    }
    | {
        type: CartsActions.removeCart;
        payload: { cartId: number };
    };
