import {getProductById,getAllProducts, addNewProduct,} from "./fakeStoreApi.js";

const productListEl = document.getElementById("product-list")

const creatProduct = ({
    id,
    title,
    price,
    category,
    description,
    image
})=>{
    const productLi = document.createElement("li");
    productLi.id = id
    productLi.className = "list-group-item d-flex align-items-center mb-5"
    productLi.innerHTML = 
    `<img src="${image}" alt="Product Image" class="me-3 rounded" style="width: 70px; height: 70px; object-fit: contain;">
    <div class="flex-grow-1">
        <h6 class="mb-1 fw-bold">${title}</h6> <!-- Title -->
        <p class="mb-1 text-muted small">Category: <span class="text-dark">${category}</span></p> <!-- Category -->
        <p class="mb-1 text-success fw-semibold">Price: ₹${price}</p> <!-- Price -->
        <small class="text-truncate d-block text-muted" style="max-width: 350px;">${description}</small> <!-- Description -->
    </div>
    <button class="btn btn-primary btn-sm ms-3 add-to-cart" data-id="${id}">Add to Cart</button>`
    productListEl.appendChild(productLi)
}


const products = await getAllProducts()

products.forEach(product => creatProduct(product));

console.log(products)