export const fakeStore = axios.create({
    baseURL:"https://fakestoreapi.com"
})

//Product Routes

export const getAllProducts= async (limit=20)=>{
    try {
        const result = await fakeStore.get(`/products?limit=${limit}`)  
        return result.data  
    } catch (error) {
        console.log(error.message)
    }
}
export const getProductById = async(id)=>{
    try {
        const result = await fakeStore.get(`/products/${id}`)  
        return result.data
    } catch (error) {
        console.log(error.message)
    }
}

export const addNewProduct = async(id,title,price,category,description="",image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzarRZzdxjwFhIIdApYRTHBPLxbNUNj8thfA&s")=>{
    try {
        const result = await fakeStore.post(`/products`,{
            id,
            title,
            price,
            category,
            description,
            image
        })  
        return result.data
    } catch (error) {
        console.log(error.message)
    }
}

export const updateProduct = async(id,newProduct)=>{
    try{
        const result = await fakeStore.patch(`/products/${id}`,newProduct)  
        return result.data
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteProducts= async (id)=>{
    try {
        const result = await fakeStore.delete(`/products/{id}`)  
        return result.data  
    } catch (error) {
        console.log(error.message)
    }
}

export const getAllCategories= async (category)=>{
    try {
        const result = await fakeStore.get(`/products/category/${category}`)  
        return result.data  
    } catch (error) {
        console.log(error.message)
    }
}

export const getPRoductsByCategory= async (category,limit=20)=>{
    try {
        const result = await fakeStore.get(`/products/category/${category}?limit=${limit}`)  
        return result.data  
    } catch (error) {
        console.log(error.message)
    }
}


//Cart Routes
export const getAllCarts= async (limit=20)=>{
    try {
        const result = await fakeStore.get(`/cartss?limit=${limit}`)  
        return result.data  
    } catch (error) {
        console.log(error.message)
    }
}

export const getCartById= async (id)=>{
    try {
        const result = await fakeStore.get(`/carts/${id}`)  
        return result.data  
    } catch (error) {
        console.log(error.message)
    }
}

export const getCartsByUserId= async (userId)=>{
    try {
        const result = await fakeStore.get(`/carts/user/${userId}`)  
        return result.data  
    } catch (error) {
        console.log(error.message)
    }
}

export const addProductToCart = async(id,title,price,category,description="",image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzarRZzdxjwFhIIdApYRTHBPLxbNUNj8thfA&s")=>{
    try {
        const result = await fakeStore.post(`/products`,{
            id,
            title,
            price,
            category,
            description,
            image
        })  
        return result.data
    } catch (error) {
        console.log(error.message)
    }
}



export const DeleteCartById= async (cartId)=>{
    try {
        const result = await fakeStore.delete(`/carts/${cartId}`)  
        return result.data  
    } catch (error) {
        console.log(error.message)
    }
}

export const updateProductsInCart = async(cartId,products)=>{
    try{
        const result = await fakeStore.patch(`/carts/${cartId}`,{products})  
        return result.data
    } catch (error) {
        console.log(error.message)
    }
}

// user Routes

export const getAllUsers= async (limit=20)=>{
    try {
        const result = await fakeStore.get(`/users?limit=${limit}`)  
        return result.data  
    } catch (error) {
        console.log(error.message)
    }
}

export const getUserById = async (id)=>{
    try {
        const result = await fakeStore.get(`/users/${id}`)  
        return result.data  
    } catch (error) {
        console.log(error.message)
    }
}

export const addNewUser = async(email,username,password,firstname,lastname,city,street,zipcode,phone)=>{
    try {
        const result = await fakeStore.post(`/users`,{
            email,
                    username,
                    password,
                    name:{
                        firstname,
                        lastname
                    },
                    address:{
                        city,
                        street,
                        number:3,
                        zipcode,
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone
        })  
        return result.data
    } catch (error) {
        console.log(error.message)
    }
}

export const updateUser = async(id,user)=>{
    try {
        const result = await fakeStore.patch(`/users/${id}`,user)  
        return result.data
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteUserById = async (id)=>{
    try {
        const result = await fakeStore.delete(`/users/${id}`)  
        return result.data  
    } catch (error) {
        console.log(error.message)
    }
}

export const loginUser = async (username,password)=>{
    try {
        const result = await fakeStore.get(`/auth/login`,{username,password})  
        return result.data  
    } catch (error) {
        console.log(error.message)
    }
}
