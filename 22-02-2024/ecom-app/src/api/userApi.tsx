import { LoginUserData, LoginUserResponse } from "../lib/types";
import { fakeStoreApi } from "./axiosInstance";

export const loginUser: (
  loginUserData: LoginUserData
) => Promise<LoginUserResponse> = async (loginUserData) => {
  const res = await fakeStoreApi.post("/auth/login", loginUserData);
  return res.data;
};
