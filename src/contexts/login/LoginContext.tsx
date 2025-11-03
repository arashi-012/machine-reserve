import {
    createContext,
    type Dispatch,
    type SetStateAction
} from "react";

export type LoginState = {
    auth: boolean;
    userName: string;
    email: string;
};

export type LoginContextType = {
    loginAuth: LoginState;
    setLoginAuth: Dispatch<SetStateAction<LoginState>>;
};

export const LoginContext = createContext<LoginContextType | undefined>(undefined);
