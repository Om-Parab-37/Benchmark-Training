import { ProductListItemProps } from "../../lib/types/ProductTypes";

const ProductListItem = ({ title, price, image }: ProductListItemProps) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-2xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
        <div className="w-full h-60 bg-white flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-4 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-indigo-600 font-bold text-lg mt-1">₹{price}</p>

          <button className="mt-3 bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition">
            <i className="fas fa-edit mr-2"></i>
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductListItem;
