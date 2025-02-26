import { useState, useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { ProductsActions } from "../../lib/types/ProductTypes";

interface ProductDetailsModalProps {
  categories: string[];
  onClose: () => void;
}

const AddProductModal = ({ categories, onClose }: ProductDetailsModalProps) => {
  const [productFormData, SetProductFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    price: 0,
  });
  const { productsDispatch } = useContext(ProductsContext);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    SetProductFormData({ ...productFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    productsDispatch({
      type: ProductsActions.ADD_PRODUCT,
      payload: { newProduct: { ...productFormData, id: Date.now() } },
    });
    onClose();
  };

  return (
    <div className="fixed backdrop-blur-xs inset-0 flex items-center justify-center z-50 overflow-y-hidden">
      <div className="bg-white p-2 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          <i className="fas fa-times text-lg"></i>
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <img
              src={productFormData?.image || undefined}
              alt={productFormData?.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <label className="block font-black">Image URL :</label>
            <input
              required
              type="text"
              name="image"
              onChange={(e) => handleChange(e)}
              className="text-xl font-semibold text-gray-900 border p-2 m-2"
              value={productFormData?.image}
            />
          </div>
          <div className="mt-4">
            <label className="block font-black">Title :</label>
            <input
              required
              type="text"
              name="title"
              onChange={(e) => handleChange(e)}
              className="text-xl font-semibold text-gray-900 border p-2 m-2"
              value={productFormData?.title}
            />
          </div>

          <div>
            <label className="font-bold">Category : </label>
            <select
              onChange={(e) => {
                handleChange(e);
              }}
              className="w-xs p-2 "
              name="category"
            >
              <option value={""}>All</option>
              {categories.map((category: string, idx) => (
                <option key={idx} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <label className="block font-black">Description :</label>

          <textarea
            required
            name="description"
            onChange={(e) => handleChange(e)}
            value={productFormData?.description}
            className="text-indigo-600 font-bold text-lg mt-2 border m-2"
          />

          <label className="block font-black">Price :</label>

          <input
            required
            type="number"
            name="price"
            onChange={(e) => handleChange(e)}
            className="text-indigo-600 font-bold text-lg mt-2 block border m-2"
            value={productFormData?.price}
          />

          <button
            type="submit"
            className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            <i className="fas fa-save mr-2"></i> Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
