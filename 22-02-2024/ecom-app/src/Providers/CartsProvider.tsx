import { ReactNode, useReducer, useContext, useEffect } from "react";
import { getCartsByUserId } from "../api/cartsApi";
import { cartsReducer, CartsContext } from "../contexts/CartsContext";
import { CartsActions } from "../lib/types/CartTypes";
import { UserIdContext } from "../contexts/UserIdContext";

export const CartsProvider = ({ children }: { children: ReactNode }) => {
  const [carts, cartsDispatch] = useReducer(cartsReducer, []);

  const { userId } = useContext(UserIdContext);

  useEffect(() => {
    const fetchCarts = async () => {
      const result = await getCartsByUserId(userId);
      if (result) {
        cartsDispatch({
          type: CartsActions.setCarts,
          payload: { carts: result },
        });
      }
    };
    fetchCarts();
  }, [userId]);

  return (
    <CartsContext.Provider value={{ carts, cartsDispatch }}>
      {children}
    </CartsContext.Provider>
  );
};
