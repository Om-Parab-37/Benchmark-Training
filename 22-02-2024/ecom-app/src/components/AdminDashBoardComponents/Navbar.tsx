import { useContext } from "react";
import { UserIdContext } from "../../contexts/UserIdContext";
import { userIdActions } from "../../lib/types/UserTypes";

const Navbar = () => {
  const { userIdDispatch } = useContext(UserIdContext);
  return (
    <>
      <div className="bg-blue-900 mb-4 px-5 py-3 flex justify-between items-center">
        <a href="#" className="text-2xl text-white font-bold">
          E-Shop DashBoard
        </a>

        <button
          onClick={() => {
            userIdDispatch({ type: userIdActions.LOGOUT });
          }}
          className="bg-indigo-500  p-2 px-4 rounded shadow-2xl"
        >
          <i className="fa-solid fa-right-from-bracket text-amber-50"></i>
          <span className="font-black text-amber-50"> Log Out</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
