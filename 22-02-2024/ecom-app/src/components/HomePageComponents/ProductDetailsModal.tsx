import { useContext, useEffect } from "react";
import { CartsContext } from "../../contexts/CartsContext";
import { UserIdContext } from "../../contexts/UserIdContext";
import { getISODateMidnight } from "../../lib/helperFunctions";
import { CartsActions } from "../../lib/types/CartTypes";
import { ProductDetailsModalProps } from "../../lib/types/ProductTypes";

const ProductDetailsModal = ({
  product,
  onClose,
}: ProductDetailsModalProps) => {
  const { cartsDispatch } = useContext(CartsContext);
  const { userId } = useContext(UserIdContext);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const handleAddToCart = () => {
    onClose();
    cartsDispatch({
      type: CartsActions.addNewProduct,
      payload: {
        date: getISODateMidnight(),
        products: [{ productId: product?.id, quantity: 1 }],
        userId,
      },
    });
    alert(`${product?.title} added to Cart `);
  };

  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          <i className="fas fa-times text-lg"></i>
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-contain rounded-lg"
        />

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-900">
            {product.title}
          </h2>
          <p className="text-gray-600 text-sm mt-2">{product.description}</p>
          <p className="text-indigo-600 font-bold text-lg mt-2">
            ${product.price.toFixed(2)}
          </p>

          <div className="flex items-center mt-2">
            {Array.from({ length: 5 }, (_, index) => (
              <i
                key={index}
                className={`fas fa-star ${
                  index < product?.rating?.rate
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
              ></i>
            ))}
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            <i className="fas fa-shopping-cart mr-2"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
