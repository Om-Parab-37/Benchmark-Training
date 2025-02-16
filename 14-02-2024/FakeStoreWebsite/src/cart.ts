import { getCartById, getCartByUserId, getProductById, updateProductsInCart ,ICartProduct,IProduct} from "./fakeStoreApi.js";

type CartProduct = {
  productId: number;
  quantity: number;
};

type DecodedToken = {
  sub: number;
};

const authToken = localStorage.getItem("authToken");
if (!authToken) {
  window.location.href = "login.html";
}

const userId = (jwtDecode(authToken)).sub;
console.log("User ID:", userId);

const cartListEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
let cartProducts: CartProduct[] = [];
const cartId = 6;

const TotalPrices: number[] = [];

const createCartProduct = async ({ productId, quantity }: CartProduct): Promise<void> => {
  console.log(productId, quantity);
  const { title, price, category, image } = await getProductById(productId);

  const cartProductLi = document.createElement("li");
  cartProductLi.id = productId.toString();
  cartProductLi.innerHTML = `
    <li class="list-group-item d-flex justify-content-between align-items-center mb-4">
      <div class="d-flex">
        <img src="${image}" alt="Product Image" class="img-thumbnail" style="width: 80px; height: 80px;">
        <div class="ms-3">
          <h5 class="mb-1">${title}</h5>
          <p class="mb-1">Category: ${category}</p>
          <p class="mb-0">₹${price} x <span class="quantity">${quantity}</span></p>
        </div>
      </div>
      <span class="badge bg-primary rounded-pill">₹${quantity * price}</span>
      <button class="btn btn-danger btn-remove-product btn-sm ms-2">Remove</button>
    </li>`;

  TotalPrices.push(quantity * price);
  cartTotalEl.innerHTML = TotalPrices.reduce((sum, price) => sum + price, 0).toString();
  cartListEl.appendChild(cartProductLi);
};

const removeElementFromCart = async (id: number): Promise<void> => {
  console.log("Removing");
  const updatedProducts = cartProducts.filter(({ productId }) => productId !== id);
  const res = await updateProductsInCart(cartId, updatedProducts);
  console.log(res);
  loadAllCartProducts(userId);
};

const loadAllCartProducts = async (userId: number): Promise<void> => {
  const cart = await getCartByUserId(userId);
  if (cart && cart.products) {
    console.log(...cart.products);
    cartProducts = [...cart.products];
    cartListEl.replaceChildren();
    cartProducts.forEach(async (product) => await createCartProduct(product));
  }
};

const handleRemoveClick = (e: Event): void => {
  const target = e.target as HTMLElement;
  if (target.classList.contains("btn-remove-product")) {
    const deleteElement = target.closest(".list-group-item");
    if (deleteElement && confirm("Do you really want to remove it from the cart?")) {
      deleteElement.remove();
    }
  }
};

await loadAllCartProducts(userId);
cartListEl.addEventListener("click", (e) => handleRemoveClick(e));
