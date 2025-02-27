import { IProduct } from "@/lib/types/productTypes";
import { Button } from "../ui/button";
import { HeartIcon, PlusIcon } from "lucide-react";
import { Label } from "../ui/label";

type ProductsListItemPropsType = {
  product: IProduct;
};

const ProductsListItem = ({ product }: ProductsListItemPropsType) => {
  return (
    // <>
    //   <h1>Title: {product.title}</h1>
    //   <h6>Description: {product.description}</h6>
    //   <h3>Price: ₹{product.price}</h3>
    // </>
    <>
      <div className="w-[300px] group relative space-y-4">
        <figure className="group-hover:opacity-90">
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
            <h3 className="text-lg">
              <Label>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
              </Label>
            </h3>
            <p className="text-sm text-muted-foreground">{product.category}</p>
          </div>
          <p className="text-lg font-semibold">{product.price}</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" size="icon" className="flex-shrink-0">
            <HeartIcon className="size-4" />
          </Button>
          <Button variant="outline" className="w-full">
            <PlusIcon className="size-4 me-1" /> Add to Card
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductsListItem;
