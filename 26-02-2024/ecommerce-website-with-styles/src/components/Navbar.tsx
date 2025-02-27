import { useCart } from "@/stores/cartsStore";
import { LogOutIcon, ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  const cart = useCart((state) => state.cart);
  return (
    <>
      <div className=" bg-blue-900 px-5 p-3 grid grid-cols-6 items-center">
        <a href="#" className="text-white text-2xl font-bold col-span-3">
          E-Shop
        </a>

        <nav className="md:flex space-x-10 col-span-3 justify-end mx-10 items-center">
          <Link to={"/"} className=" text-white hover:text-pink-300">
            Home
          </Link>

          <Link to={"/carts-page"} className="relative">
            <ShoppingCartIcon className="text-white" />
            <span className="absolute -top-2 -right-2 bg-emerald-500 text-xs text-white px-1 py-0.5 rounded-full">
              {cart.products.length}
            </span>
          </Link>
          {/* <Button
            onClick={() => {
              console.log("log out");
            }}
            className="bg-indigo-600  p-2 px-4 rounded shadow-2xl"
          >
            <LogOutIcon className="text-white" />
            <span className="font-black text-amber-50"> Log Out</span>
          </Button> */}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
