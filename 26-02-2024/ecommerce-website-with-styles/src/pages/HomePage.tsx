import { getCartsByUserId } from "@/api/CartApi";
import PrdouctsList from "@/components/HomePageComponents/PrdouctsList";
import Navbar from "@/components/Navbar";
import { useCart } from "@/stores/cartsStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [userId, setUserId] = useState(1);

  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCartsByUserId(userId),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const handleSetCart = useCart((state) => state.setCart);

  // useEffect(() => {
  //   if (cart) handleSetCart(cart);
  // }, []);
  return (
    <>
      <div className="fixed w-full z-10 top-0">
        <Navbar />
      </div>
      <div className="mt-15">
        <PrdouctsList />
      </div>
    </>
  );
};

export default HomePage;
