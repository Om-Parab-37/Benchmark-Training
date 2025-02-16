import { getProductById, getAllProducts, addNewProduct ,IProduct} from "./fakeStoreApi.js";


const productListEl = document.getElementById("product-list") as HTMLUListElement;

const createProduct = ({ id, title, price, category, description, image }: IProduct): void => {
  const productLi = document.createElement("li");
  productLi.id = id.toString();
  productLi.className = "list-group-item d-flex align-items-center mb-5";
  productLi.innerHTML = `
    <img src="${image}" alt="Product Image" class="me-3 rounded" style="width: 70px; height: 70px; object-fit: contain;">
    <div class="flex-grow-1">
        <h6 class="mb-1 fw-bold">${title}</h6> <!-- Title -->
        <p class="mb-1 text-muted small">Category: <span class="text-dark">${category}</span></p> <!-- Category -->
        <p class="mb-1 text-success fw-semibold">Price: ₹${price}</p> <!-- Price -->
        <small class="text-truncate d-block text-muted" style="max-width: 350px;">${description}</small> <!-- Description -->
    </div>
    <button class="btn btn-primary btn-sm ms-3 add-to-cart" data-id="${id}">Add to Cart</button>`;
  productListEl.appendChild(productLi);
};

const authToken = localStorage.getItem("authToken");
if (!authToken) {
  window.location.href = "login.html";
}

const loadProducts = async (): Promise<void> => {
  try {
    const products = await getAllProducts();
    products.forEach((product) => createProduct(product));
    console.log(products);
  } catch (error) {
    console.error("Failed to fetch products", error);
  }
};

loadProducts();
