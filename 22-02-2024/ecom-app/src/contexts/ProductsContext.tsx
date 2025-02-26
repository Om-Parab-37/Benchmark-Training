import { createContext } from "react";
import {
  IProduct,
  ProductContextType,
  ProductsActionsType,
} from "../lib/types/ProductTypes";

export const ProductsContext = createContext<ProductContextType>({
  products: [],
  productsDispatch: () => {},
});

export const productsReducer = (
  products: IProduct[],
  action: ProductsActionsType
) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return [...action.payload.products];
    case "ADD_PRODUCT":
      return [...products, action.payload.newProduct];
    case "DELETE_PRODUCT":
      return products.filter(
        (product: IProduct) => action.payload.productId !== product.id
      );
    case "EDIT_PRODUCT":
      return products.map((product: IProduct) =>
        product.id === action.payload.editedProduct.id
          ? action.payload.editedProduct
          : product
      );
    default:
      return products;
  }
};
