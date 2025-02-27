import { CartProductType, CartStoreType, ICart } from "@/lib/types/cartTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create<CartStoreType>()(
  persist(
    (set) => ({
      cart: { id: 0, userId: 0, date: new Date(), products: [] },
      increamentQuantity: (productId: number) =>
        set((state) => ({
          ...state,
          cart: {
            ...state.cart,
            products: state.cart.products.map((cartProduct) =>
              cartProduct.productId === productId
                ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
                : cartProduct
            ),
          },
        })),
      decreamentQuantity: (productId: number) =>
        set((state) => ({
          ...state,
          cart: {
            ...state.cart,
            products: state.cart.products.map((cartProduct) =>
              cartProduct.productId === productId
                ? {
                    ...cartProduct,
                    quantity:
                      cartProduct.quantity > 1 ? cartProduct.quantity - 1 : 1,
                  }
                : cartProduct
            ),
          },
        })),
      removeProductFromCart: (productId: number) =>
        set((state) => ({
          ...state,
          cart: {
            ...state.cart,
            products: state.cart.products.filter(
              (cartProduct) => cartProduct.productId !== productId
            ),
          },
        })),
      addProductToCart: (product: CartProductType) =>
        set((state) => ({
          ...state,
          cart: {
            ...state.cart,
            products: state.cart.products.find(
              (p: CartProductType) => p.productId === product.productId
            )
              ? state.cart.products.map((p: CartProductType) =>
                  p.productId === product.productId
                    ? { ...p, quantity: p.quantity + 1 }
                    : p
                )
              : [...state.cart.products, product],
          },
        })),
      setCart: (cart: ICart) => set({ cart }),
    }),
    { name: "cart" }
  )
);
