import CartProductsList from "@/components/CartPageComponents/CartProductsList";
import Navbar from "@/components/Navbar";

const CartPage = () => {
  return (
    <>
      <div className="fixed w-full z-10 top-0">
        <Navbar />
      </div>
      <div className="mt-20">
        <CartProductsList />
      </div>
    </>
  );
};

export default CartPage;
