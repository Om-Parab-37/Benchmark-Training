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
import ProductDetails from "./ProductDetails";
import { Skeleton } from "../ui/skeleton";

const PrdouctsList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProductId, setSelectedProductId] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchProducts = async () =>
    selectedCategory === "All"
      ? await getAllProducts()
      : await getProductsByCategory(selectedCategory);

  const {
    data: products,
    isLoading: isProductsLoading,
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

      {isProductsLoading ? (
        <>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3 mt-2">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3 mt-2">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </>
      ) : (
        products?.map((product: IProduct) => (
          <div
            key={product.id}
            onClick={() => {
              setIsDialogOpen(true);
              setSelectedProductId(product.id);
            }}
          >
            <ProductsListItem product={product} />
          </div>
        ))
      )}
      <ProductDetails
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        productId={selectedProductId}
      />
    </>
  );
};

export default PrdouctsList;
