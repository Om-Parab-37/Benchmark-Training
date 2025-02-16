export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface ICartProduct {
  productId: number;
  quantity: number;
}

export interface ICart {
  id: number;
  userId: number;
  date: string;
  products: ICartProduct[];
}

export interface IUser {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}

export const fakeStore = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// Product Routes
export const getAllProducts = async (limit: number = 20): Promise<IProduct[]> => {
  const { data } = await fakeStore.get(`/products?limit=${limit}`);
  return data;
};

export const getProductById = async (id: number): Promise<IProduct> => {
  const { data } = await fakeStore.get(`/products/${id}`);
  return data;
};

export const addNewProduct = async (
  title: string,
  price: number,
  category: string,
  description: string = "",
  image: string = "https://via.placeholder.com/150"
): Promise<IProduct> => {
  const { data } = await fakeStore.post(`/products`, {
    title,
    price,
    category,
    description,
    image,
  });
  return data;
};

export const updateProduct = async (id: number, newProduct: Partial<IProduct>): Promise<IProduct> => {
  const { data } = await fakeStore.patch(`/products/${id}`, newProduct);
  return data;
};

export const deleteProduct = async (id: number): Promise<IProduct> => {
  const { data } = await fakeStore.delete(`/products/${id}`);
  return data;
};

export const getProductsByCategory = async (category: string, limit: number = 20): Promise<IProduct[]> => {
  const { data } = await fakeStore.get(`/products/category/${category}?limit=${limit}`);
  return data;
};

// Cart Routes
export const getAllCarts = async (limit: number = 20): Promise<ICart[]> => {
  const { data } = await fakeStore.get(`/carts?limit=${limit}`);
  return data;
};

export const getCartById = async (id: number): Promise<ICart> => {
  const { data } = await fakeStore.get(`/carts/${id}`);
  return data;
};

export const getCartByUserId = async (userId: number): Promise<ICart> => {
  const { data } = await fakeStore.get(`/carts/user/${userId}`);
  return data[0];
};

export const deleteCartById = async (cartId: number): Promise<ICart> => {
  const { data } = await fakeStore.delete(`/carts/${cartId}`);
  return data;
};

export const updateProductsInCart = async (cartId: number, products: ICartProduct[]): Promise<ICart> => {
  const { data } = await fakeStore.patch(`/carts/${cartId}`, { products });
  return data;
};

// User Routes
export const getAllUsers = async (limit: number = 20): Promise<IUser[]> => {
  const { data } = await fakeStore.get(`/users?limit=${limit}`);
  return data;
};

export const getUserById = async (id: number): Promise<IUser> => {
  const { data } = await fakeStore.get(`/users/${id}`);
  return data;
};

export const addNewUser = async (
  email: string,
  username: string,
  password: string,
  firstname: string,
  lastname: string,
  city: string,
  street: string,
  zipcode: string,
  phone: string
): Promise<IUser> => {
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

export const updateUser = async (id: number, user: Partial<IUser>): Promise<IUser> => {
  const { data } = await fakeStore.patch(`/users/${id}`, user);
  return data;
};

export const deleteUserById = async (id: number): Promise<IUser> => {
  const { data } = await fakeStore.delete(`/users/${id}`);
  return data;
};

export const loginUser = async (username: string, password: string): Promise<{ token: string }> => {
  const { data } = await fakeStore.post(`/auth/login`, { username, password });
  return data;
};
