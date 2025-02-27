import { useCart } from "@/stores/cartsStore";
import CartProductsListItem from "./CartProductsListItem";
import { Button } from "../ui/button";
import { ArrowBigRight, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/api/ProductApi";
import { CartProductType } from "@/lib/types/cartTypes";
import { IProduct } from "@/lib/types/productTypes";

const CartProductsList = () => {
  const cart = useCart((state) => state.cart);
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", cart],
    queryFn: getAllProducts,
  });

  const handleCheckOut = useCart((state) => state.setCart);

  return (
    <>
      {cart.products.map((product) => (
        <CartProductsListItem key={product.productId} product={product} />
      ))}
      <div className="m-5 mx-10 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="font-black text-3xl ">Total :</div>
          <div className="font-black text-3xl ">
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              cart.products
                .reduce(
                  (totalPrice: number, product: CartProductType) =>
                    (totalPrice +=
                      products?.find(
                        (p: IProduct) => p?.id === product?.productId
                      )?.price * product.quantity),
                  0
                )
                .toFixed(2)
            )}
          </div>
        </div>
        <Button
          onClick={() => {
            alert("checked Out");
            handleCheckOut({ ...cart, products: [] });
          }}
        >
          <span className="text-xl text-white font-black">Check Out</span>
          <ArrowBigRight className="text-2xl text-white font-black" />
        </Button>
      </div>
    </>
  );
};

export default CartProductsList;
