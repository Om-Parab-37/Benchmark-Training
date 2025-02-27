import {getCartById, getCartByUserId, getProductById, updateProductsInCart} from './fakeStoreApi.js'
const userId = (jwtDecode(localStorage.getItem("authToken"))).sub
console.log("user ID :",userId)
const cartListEl = document.getElementById("cart-items")
const cartTotalEl = document.getElementById("cart-total")
let cartProducts = []
const cartId = 6



const TotalPrices = []

const createCartProduct = async ({
    productId,
    quantity
})=>{
    console.log(productId,quantity)
    const {
        title,
        price,
        category,
        image} = await getProductById(productId)

    const cartProductLi = document.createElement("li")
    cartProductLi.id = productId
    cartProductLi.innerHTML = `<li class="list-group-item d-flex justify-content-between align-items-center mb-4">
    <div class="d-flex">
        <img src="${image}" alt="Product Image" class="img-thumbnail" style="width: 80px; height: 80px;">
        
        <div class="ms-3">
            <h5 class="mb-1">${title}</h5>
            <p class="mb-1">Category: ${category}</p>
            <p class="mb-0">₹${price} x <span class="quantity">${quantity}</span></p>
        </div>
    </div>

    <span class="badge bg-primary rounded-pill">₹${quantity*price}</span>
    <button class="btn btn-danger btn-remove-product btn-sm ms-2" >Remove</button>
</li>`
TotalPrices.push(quantity*price)

cartTotalEl.innerHTML= TotalPrices.reduce((sum,price)=> sum +=price ,0)
cartListEl.appendChild(cartProductLi)

}

const removeElementFromCart = async (id)=>{
    console.log("removing")
    const updatedProducts = cartProducts.filter(({productId})=> productId!==id)
    const res  = await updateProductsInCart(cartId,updatedProducts)
    console.log(res)
    loadAllCartProducts(cartId)
}

const loadAllCartProducts = async (userId)=>{
    console.log(...(await getCartByUserId(userId)).products)
    cartProducts = [...(await getCartByUserId(userId)).products]
    cartListEl.replaceChildren()
    cartProducts.forEach(async (product) => await createCartProduct(product));
}

const handleRemoveClick = e=>{
    if(e.target.classList.contains("btn-remove-product")){
        const deleteElement = e.target.closest(".list-group-item")
        if(confirm("Do you want to really remove it from cart ...?")){
            deleteElement.remove()
        }
    }
}

await loadAllCartProducts(userId)
cartListEl.addEventListener("click",e=>handleRemoveClick(e))
        