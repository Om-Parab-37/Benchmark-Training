import { ICart } from "@/lib/types/cartTypes";
import { fakeStoreApi } from "./axiosConfig";

export const getCartsByUserId: (userId: number) => Promise<ICart> = async (
    userId
) => {
    const result = await fakeStoreApi.get(`/carts/user/${userId}`);
    return result.data[0];



};