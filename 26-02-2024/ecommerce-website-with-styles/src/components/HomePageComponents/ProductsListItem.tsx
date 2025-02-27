import { IProduct } from "@/lib/types/productTypes";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import { Label } from "../ui/label";
import { useCart } from "@/stores/cartsStore";

type ProductsListItemPropsType = {
  product: IProduct;
  onClick: () => void;
};

const ProductsListItem = ({ product, onClick }: ProductsListItemPropsType) => {
  const handleAddTocart = useCart((state) => state.addProductToCart);
  return (
    <>
      <div className="w-[300px]  group relative  p-2 m-8">
        <div className="mb-4" onClick={onClick}>
          <figure className="group-hover:opacity-90 mb-4">
            <img
              className="w-full rounded-lg aspect-square object-contain"
              src={product.image}
              width={300}
              height={500}
              alt={product.title}
            />
          </figure>
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg mb-2">
                <Label>{product.title}</Label>
              </h3>
              <p className="text-sm text-muted-foreground">
                {product.category}
              </p>
            </div>
            <p className="text-lg font-semibold">{product.price}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button
            onClick={() => {
              handleAddTocart({ productId: product.id, quantity: 1 });
              alert(`${product.title} is added to cart`);
            }}
            variant="outline"
            className="w-full"
          >
            <PlusIcon className="size-4 me-1" /> Add to Card
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductsListItem;
