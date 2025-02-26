import { useContext } from "react";
import { CartsContext } from "../../contexts/CartsContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import { ICart, CartsActions } from "../../lib/types/CartTypes";
import { IProduct } from "../../lib/types/ProductTypes";
import CartsProductsListItem from "./CartsProductsListItem";

type CartsListItemProps = {
  cart: ICart;
};

const CartsListItem = ({ cart }: CartsListItemProps) => {
  const { products } = useContext(ProductsContext);
  const { cartsDispatch } = useContext(CartsContext);
  let totalCartPrice = 0;

  const handleCheckOut = () => {
    alert(`Checking out cart ${cart.id} with total ₹${totalCartPrice}`);
    cartsDispatch({
      type: CartsActions.removeCart,
      payload: { cartId: cart.id },
    });
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg mb-4">
      <h3 className="text-lg font-semibold">
        Date: {new Date(cart.date).toDateString()}
      </h3>
      <h4 className="text-gray-600">Cart ID: {cart.id}</h4>

      <div className="mt-3">
        {cart.products.map(({ productId, quantity }) => {
          const { id, image, price, title }: IProduct =
            products.find((p: IProduct) => p.id === productId) ||
            ({
              id: 0,
              image: "",
              price: 0,
              title: "",
              category: "",
            } as IProduct);
          const productTotal = price * quantity;
          totalCartPrice += productTotal;

          return (
            <CartsProductsListItem
              key={id}
              {...{ id, title, quantity, image, price, cartId: cart.id }}
            />
          );
        })}
      </div>

      <div className="mt-4 text-right font-bold text-lg text-green-600">
        Total: ₹{totalCartPrice.toFixed(2)}
      </div>

      <div className="mt-3 text-right">
        <button
          onClick={handleCheckOut}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartsListItem;
