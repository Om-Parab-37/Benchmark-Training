import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useCart } from "@/stores/cartsStore";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "@/api/ProductApi";
import { CartProductType } from "@/lib/types/cartTypes";
import { Separator } from "../ui/separator";

type CartProductsListItemPropsType = {
  product: CartProductType;
};

const CartProductsListItem = ({
  product: { productId, quantity },
}: CartProductsListItemPropsType) => {
  const { data: product } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
  });

  const handleIncrement = useCart((state) => state.increamentQuantity);
  const handleDecreament = useCart((state) => state.decreamentQuantity);
  const handleRemoveProduct = useCart((state) => state.removeProductFromCart);
  return (
    <>
      <div className="grid grid-cols-8 items-center">
        <div className="flex gap-3 col-span-4 items-center p-2 m-2">
          <img
            src={
              product?.image ||
              "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            }
            alt="Product Image"
            className="rounded-md object-contain w-20 h-20"
          />
          <div className="flex-col">
            <span className="font-black text-xl">{product?.title}</span>
            <div className="flex gap-2">
              <span className="font-bold">{product?.category}</span>
              <span className="font-extrabold">₹{product?.price}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 col-span-2 items-center justify-center">
          <Button
            onClick={() => handleDecreament(productId)}
            variant={"outline"}
          >
            <Minus />
          </Button>
          <span className="font-black text-xl">{quantity}</span>
          <Button
            onClick={() => handleIncrement(productId)}
            variant={"outline"}
          >
            <Plus />
          </Button>
        </div>
        <div className="col-span-2 flex justify-around items-center">
          <span className="font-bold">₹{quantity * product?.price}</span>
          <Button
            onClick={() => handleRemoveProduct(productId)}
            variant={"destructive"}
          >
            <Trash2 className="text-white" />
          </Button>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default CartProductsListItem;
