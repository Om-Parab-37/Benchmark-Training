import { ICart } from "../lib/types/CartTypes";
import { fakeStoreApi } from "./axiosInstance";

export const getCartsByUserId: (userId: number) => Promise<ICart[]> = async (
  userId
) => {
  try {
    if (userId) {
      const result = await fakeStoreApi.get(`/carts/user/${userId}`);
      if (result.status === 200) {
        return result.data;
      }
    }
  } catch (error) {
    console.log(error);
  }
};
