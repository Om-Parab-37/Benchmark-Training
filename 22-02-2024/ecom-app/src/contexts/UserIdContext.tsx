import { createContext } from "react";
import { UserIdActionsType, UserIdContextType } from "../lib/types/UserTypes";

export const userIdReducer = (userId: number, action: UserIdActionsType) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload.userId;
    case "LOGOUT":
      return 0;
    default:
      return 0;
  }
};

export const UserIdContext = createContext<UserIdContextType>({
  userId: 0,
  userIdDispatch: () => {},
});
