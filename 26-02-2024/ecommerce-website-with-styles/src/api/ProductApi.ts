import { IProduct } from "@/lib/types/productTypes";
import { fakeStoreApi } from "./axiosConfig";

export const getAllProducts: () => Promise<IProduct[]> = async () => {
    const result = await fakeStoreApi.get("/products");
    return result.data;
};
export const getProductsByCategory: (category: string) => Promise<IProduct[]> = async (category: string) => {
    const { data } = await fakeStoreApi.get(`/products/category/${category}`);
    return data;
};

export const getAllCategories: () => Promise<string[]> = async () => {
    const result = await fakeStoreApi.get("/products/categories");
    return result.data;
};

export const getProductById: (productId: number) => Promise<IProduct> = async (
    productId
) => {
    const result = await fakeStoreApi.get(`/products/${productId}`);
    return result.data;
};

export const addNewProduct = async (product: IProduct) => {
    const result = await fakeStoreApi.post(`/products`, product);
    return result.data;

}