import { useState, useContext, useEffect } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import {
  ProductDetailsModalProps,
  ProductsActions,
} from "../../lib/types/ProductTypes";

const ProductDetailsModal = ({
  product,
  onClose,
}: ProductDetailsModalProps) => {
  const [productFormData, SetProductFormData] = useState(product);
  const { productsDispatch } = useContext(ProductsContext);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    SetProductFormData({ ...productFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    productsDispatch({
      type: ProductsActions.EDIT_PRODUCT,
      payload: { editedProduct: { ...product, ...productFormData } },
    });
    onClose();
  };
  const handleDelete = () => {
    productsDispatch({
      type: ProductsActions.DELETE_PRODUCT,
      payload: { productId: product.id },
    });
    onClose();
  };

  if (!product) return null;
  return (
    <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50 ">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative ">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          <i className="fas fa-times text-lg"></i>
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-lg"
        />

        <div className="mt-4">
          <label className="block font-black">Title :</label>
          <input
            type="text"
            name="title"
            onChange={(e) => handleChange(e)}
            className="text-xl font-semibold text-gray-900 border p-2 m-2"
            value={productFormData.title}
          />

          <label className="block font-black">Description :</label>

          <textarea
            name="description"
            onChange={(e) => handleChange(e)}
            value={productFormData?.description}
            className="text-indigo-600 font-bold text-lg mt-2 border m-2"
          />

          <label className="block font-black">Price :</label>

          <input
            type="number"
            name="price"
            onChange={(e) => handleChange(e)}
            className="text-indigo-600 font-bold text-lg mt-2 block border m-2"
            value={productFormData.price}
          />

          <button
            onClick={handleSubmit}
            className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            <i className="fas fa-save mr-2"></i> Save Changes
          </button>
          <button
            onClick={handleDelete}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 transition"
          >
            <i className="fas fa-trash mr-2"></i> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
