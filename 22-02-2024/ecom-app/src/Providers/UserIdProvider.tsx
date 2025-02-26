import { useReducer } from "react";
import { UserIdProviderProps } from "../lib/types/UserTypes";
import { UserIdContext, userIdReducer } from "../contexts/UserIdContext";

const UserIdProvider = ({ children }: UserIdProviderProps) => {
  const [userId, userIdDispatch] = useReducer(userIdReducer, 0);

  return (
    <UserIdContext.Provider value={{ userId, userIdDispatch }}>
      {children}
    </UserIdContext.Provider>
  );
};

export default UserIdProvider;
