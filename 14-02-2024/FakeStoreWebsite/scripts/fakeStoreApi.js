export const fakeStore = axios.create({
    baseURL: "https://fakestoreapi.com",
});
// Product Routes
export const getAllProducts = async (limit = 20) => {
    const { data } = await fakeStore.get(`/products?limit=${limit}`);
    return data;
};
export const getProductById = async (id) => {
    const { data } = await fakeStore.get(`/products/${id}`);
    return data;
};
export const addNewProduct = async (title, price, category, description = "", image = "https://via.placeholder.com/150") => {
    const { data } = await fakeStore.post(`/products`, {
        title,
        price,
        category,
        description,
        image,
    });
    return data;
};
export const updateProduct = async (id, newProduct) => {
    const { data } = await fakeStore.patch(`/products/${id}`, newProduct);
    return data;
};
export const deleteProduct = async (id) => {
    const { data } = await fakeStore.delete(`/products/${id}`);
    return data;
};
export const getProductsByCategory = async (category, limit = 20) => {
    const { data } = await fakeStore.get(`/products/category/${category}?limit=${limit}`);
    return data;
};
// Cart Routes
export const getAllCarts = async (limit = 20) => {
    const { data } = await fakeStore.get(`/carts?limit=${limit}`);
    return data;
};
export const getCartById = async (id) => {
    const { data } = await fakeStore.get(`/carts/${id}`);
    return data;
};
export const getCartByUserId = async (userId) => {
    const { data } = await fakeStore.get(`/carts/user/${userId}`);
    return data[0];
};
export const deleteCartById = async (cartId) => {
    const { data } = await fakeStore.delete(`/carts/${cartId}`);
    return data;
};
export const updateProductsInCart = async (cartId, products) => {
    const { data } = await fakeStore.patch(`/carts/${cartId}`, { products });
    return data;
};
// User Routes
export const getAllUsers = async (limit = 20) => {
    const { data } = await fakeStore.get(`/users?limit=${limit}`);
    return data;
};
export const getUserById = async (id) => {
    const { data } = await fakeStore.get(`/users/${id}`);
    return data;
};
export const addNewUser = async (email, username, password, firstname, lastname, city, street, zipcode, phone) => {
    const { data } = await fakeStore.post(`/users`, {
        email,
        username,
        password,
        name: { firstname, lastname },
        address: {
            city,
            street,
            number: 3,
            zipcode,
            geolocation: {
                lat: "-37.3159",
                long: "81.1496",
            },
        },
        phone,
    });
    return data;
};
export const updateUser = async (id, user) => {
    const { data } = await fakeStore.patch(`/users/${id}`, user);
    return data;
};
export const deleteUserById = async (id) => {
    const { data } = await fakeStore.delete(`/users/${id}`);
    return data;
};
export const loginUser = async (username, password) => {
    const { data } = await fakeStore.post(`/auth/login`, { username, password });
    return data;
};
