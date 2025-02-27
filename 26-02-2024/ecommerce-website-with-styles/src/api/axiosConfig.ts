import axios from "axios"
export const fakeStoreApi = axios.create({
    baseURL: import.meta.env.VITE_FAKESTORE_API_URL
})