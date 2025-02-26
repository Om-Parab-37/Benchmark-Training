import { useReducer } from "react";
import { ProductsProviderPropsType } from "../lib/types/ProductTypes";
import { ProductsContext, productsReducer } from "../contexts/ProductsContext";

export const ProductsProvider = ({ children }: ProductsProviderPropsType) => {
  const [products, productsDispatch] = useReducer(productsReducer, []);

  return (
    <ProductsContext.Provider value={{ products, productsDispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};
