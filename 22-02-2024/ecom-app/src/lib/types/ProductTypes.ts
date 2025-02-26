import { Dispatch, ReactNode } from "react";

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating?: { rate: number; coutn: number };
}

export type ProductContextType = {
    products: IProduct[]
    productsDispatch: Dispatch<ProductsActionsType>
}

export type ProductsActionsType =
    | {
        type: ProductsActions.SET_PRODUCTS;
        payload: { products: IProduct[] };
    }
    | {
        type: ProductsActions.ADD_PRODUCT;
        payload: { newProduct: IProduct };
    }
    | {
        type: ProductsActions.DELETE_PRODUCT;
        payload: { productId: number };
    }
    | {
        type: ProductsActions.EDIT_PRODUCT;
        payload: { editedProduct: IProduct };
    };

export enum ProductsActions {
    SET_PRODUCTS = "SET_PRODUCTS",
    ADD_PRODUCT = "ADD_PRODUCT",
    DELETE_PRODUCT = "DELETE_PRODUCT",
    EDIT_PRODUCT = "EDIT_PRODUCT",
}
export type ProductsProviderPropsType = {
    children: ReactNode;
};

export type ProductDetailsModalProps = {
    product: IProduct;
    onClose: () => void;
};

export type ProductListItemProps = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
};

