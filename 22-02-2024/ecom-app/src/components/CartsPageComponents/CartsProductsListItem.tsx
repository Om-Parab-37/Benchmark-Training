import { useContext } from "react";
import { CartsContext } from "../../contexts/CartsContext";
import { CartsActions } from "../../lib/types/CartTypes";

type ProductListItemProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  cartId: number;
};

const CartsProductsListItem = ({
  id,
  title,
  price,
  quantity,
  image,
  cartId,
}: ProductListItemProps) => {
  const { cartsDispatch } = useContext(CartsContext);

  const handleDelete: () => void = () => {
    cartsDispatch({
      type: CartsActions.removeProduct,
      payload: { cartId, productId: id },
    });
  };

  return (
    <div className="flex items-center justify-between border-b py-2">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div>
          <h5 className="font-medium">{title}</h5>
          <p className="text-gray-500">Price: ₹{price}</p>
        </div>
      </div>
      <p className="font-bold">x{quantity}</p>
      <button onClick={handleDelete}>
        <i className="fa-solid fa-trash text-red-500 text-xl"></i>
      </button>
    </div>
  );
};

export default CartsProductsListItem;
