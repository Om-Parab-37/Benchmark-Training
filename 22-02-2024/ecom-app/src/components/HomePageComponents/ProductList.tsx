import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { getAllProducts, getAllCategories } from "../../api/productsApi";
import { ProductsContext } from "../../contexts/ProductsContext";
import { IProduct, ProductsActions } from "../../lib/types/ProductTypes";
import ProductDetailsModal from "./ProductDetailsModal";
import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const fetchProducts = async () => {
    const result = await getAllProducts();
    productsDispatch({
      type: ProductsActions.SET_PRODUCTS,
      payload: { products: [...result] },
    });
    return result;
  };

  const { products, productsDispatch } = useContext(ProductsContext);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const { isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const { data: categories, isLoading: isLoadingCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading || isLoadingCategories) return <h1>Loading...</h1>;
  return (
    <div>
      <div className="flex justify-end mx-7 items-center">
        <label className="font-bold">Category : </label>
        <select
          onChange={(e) => {
            setSelectedCategory(e.target.value);
          }}
          className="w-xs p-2 "
          name="category"
        >
          <option value={""}>All</option>
          {categories &&
            categories.map((category: string, idx) => (
              <option key={idx} value={category}>
                {category}
              </option>
            ))}
        </select>
      </div>
      <div className="container mx-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products
          .filter(
            (product: IProduct) =>
              !selectedCategory || product.category === selectedCategory
          )
          .map((product: IProduct) => (
            <div key={product.id} onClick={() => setSelectedProduct(product)}>
              <ProductListItem {...product} />
            </div>
          ))}
        {selectedProduct && (
          <ProductDetailsModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ProductList;
