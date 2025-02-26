import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartsContext } from "../contexts/CartsContext";
import { UserIdContext } from "../contexts/UserIdContext";
import { userIdActions } from "../lib/types/UserTypes";

const Navbar = () => {
  const { carts } = useContext(CartsContext);
  const { userIdDispatch } = useContext(UserIdContext);

  return (
    <>
      <div className=" bg-blue-900 px-5 p-3 flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold">
          E-Shop
        </a>

        <nav className="md:flex space-x-10 items-center">
          <Link to={"/home-page"} className=" text-white hover:text-pink-300">
            Home
          </Link>

          <Link to={"/carts-page"} className="relative">
            <i className="fas fa-shopping-cart text-2xl text-white"></i>
            <span className="absolute -top-2 -right-2 bg-emerald-500 text-xs text-white px-1 py-0.5 rounded-full">
              {carts.length}
            </span>
          </Link>
          <button
            onClick={() => {
              userIdDispatch({ type: userIdActions.LOGOUT });
            }}
            className="bg-indigo-600  p-2 px-4 rounded shadow-2xl"
          >
            <i className="fa-solid fa-right-from-bracket text-amber-50"></i>
            <span className="font-black text-amber-50"> Log Out</span>
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
