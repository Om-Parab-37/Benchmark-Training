import { IProduct } from "../lib/types/ProductTypes";
import { fakeStoreApi } from "./axiosInstance";

export const getAllProducts: () => Promise<IProduct[]> = async () => {
  const result = await fakeStoreApi.get("/products");
  return result.data;
};

export const getAllCategories: () => Promise<string[]> = async () => {
  const result = await fakeStoreApi.get("/products/categories");
  return result.data;
};

export const getProductById: (productId: number) => Promise<IProduct> = async (
  productId
) => {
  try {
    const result = await fakeStoreApi.get(`/products/${productId}`);
    if (result) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
  }
};

// export const addNewProduct: (
//   title: string,
//   price: number,
//   description: string,
//   image: string
// ) => Promise<IProduct> = () => {};
