import axios from "axios";

const axiosConfig = {
  baseURL: "https://fakestoreapi.com",
};

export const fakeStoreApi = axios.create(axiosConfig);
