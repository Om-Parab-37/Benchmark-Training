import {
  getAllCategories,
  getAllProducts,
  getProductsByCategory,
} from "@/api/ProductApi";
import ProductsListItem from "./ProductsListItem";
import { useQuery } from "@tanstack/react-query";
import { IProduct } from "@/lib/types/productTypes";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";
import AddNewProductForm from "./AddNewProductForm";

const PrdouctsList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const fetchProducts = async () =>
    selectedCategory === "All"
      ? await getAllProducts()
      : await getProductsByCategory(selectedCategory);

  const {
    data: products,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["products", selectedCategory],
    queryFn: fetchProducts,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const {
    data: categories,
    error: categoriesError,
    isError: isCategoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 100000000,
  });

  const handleCategorySelect = (value: string) => {
    setSelectedCategory(value);
  };

  if (isError || isCategoriesError)
    return <h1>{error?.message || categoriesError?.message}</h1>;

  return (
    <>
      <div className="grid grid-cols-12 gap-4 p-4">
        <div className="col-span-4">
          <AddNewProductForm />
        </div>
        <div className=" col-span-4">
          <Select onValueChange={handleCategorySelect}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All">All</SelectItem>
                {categories?.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        products?.map((product: IProduct) => (
          <ProductsListItem key={product.id} product={product} />
        ))
      )}
    </>
  );
};

export default PrdouctsList;
