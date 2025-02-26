import { useContext } from "react";
import { CartsContext } from "../../contexts/CartsContext";
import { ICart } from "../../lib/types/CartTypes";
import CartsListItem from "./CartsListItem";

const CartsList = () => {
  const { carts } = useContext(CartsContext);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Carts</h2>
      {carts.map((cart: ICart) => (
        <CartsListItem key={cart.id} cart={cart} />
      ))}
    </div>
  );
};

export default CartsList;
