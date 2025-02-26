import { createContext } from "react";
import {
  CartContextType,
  CartsActions,
  CartsActionType,
  ICart,
} from "../lib/types/CartTypes";

export const cartsReducer = (carts: ICart[], action: CartsActionType) => {
  switch (action.type) {
    case CartsActions.setCarts:
      return [...action.payload.carts];

    case CartsActions.addNewProduct: {
      let cartFound = false;
      const newCarts: ICart[] = carts.map((cart: ICart) => {
        if (cart.date === action.payload.date) {
          cartFound = true;
          let productFound = false;
          const newProducts = cart.products.map(({ productId, quantity }) => {
            if (productId === action.payload.products[0].productId) {
              productFound = true;
              return { productId, quantity: quantity + 1 };
            }
            return { productId, quantity };
          });

          if (productFound)
            return {
              ...cart,
              products: [...newProducts],
            };
          else
            return {
              ...cart,
              products: [...cart.products, ...action.payload.products],
            };
        } else return cart;
      });

      if (cartFound) return newCarts;

      return [...carts, { ...action.payload, id: Date.now() }];
    }

    case CartsActions.removeProduct:
      return carts
        .map((cart: ICart) => {
          if (cart.id === action.payload.cartId) {
            return {
              ...cart,
              products: cart.products.filter(
                (product) => product.productId !== action.payload.productId
              ),
            };
          }
          return cart;
        })
        .filter((cart) => cart?.products.length !== 0);

    // case CartsActions.increamentQuantity:
    //   return carts;

    case CartsActions.removeCart:
      return carts.filter((cart) => cart.id !== action.payload.cartId);
    default:
      return carts;
  }
};

export const CartsContext = createContext<CartContextType>({
  carts: [],
  cartsDispatch: () => {},
});
