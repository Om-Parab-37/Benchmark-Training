import { JSX, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserIdContext } from "../../contexts/UserIdContext";

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { userId } = useContext(UserIdContext);

  return <>{userId ? children : <Navigate to={"/"} />}</>;
};

export default ProtectedRoute;
