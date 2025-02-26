import { ReactNode } from "react";

export interface User {
    email: string;
    username: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    };
    address: {
        city: string;
        street: string;
        number: number;
        zipcode: string;
        geolocation: {
            lat: string;
            long: string;
        };
    };
    phone: string;
}


export type LoginUserData = {
    username: string;
    password: string;
};

export type LoginUserResponse = {
    token: string;
};


export type UserIdContextType = {
    userId: number;
    userIdDispatch: React.Dispatch<UserIdActionsType>;
};


export enum userIdActions {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
}

export type UserIdProviderProps = {
    children: ReactNode;
};

export type UserIdActionsType = { type: userIdActions.LOGIN; payload: { userId: number } } | { type: userIdActions.LOGOUT }