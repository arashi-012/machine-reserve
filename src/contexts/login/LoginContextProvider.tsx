import { useState, type ReactNode } from "react";
import { LoginContext, type LoginState } from "./LoginContext";

export const LoginAuthProvider = ({ children }: { children: ReactNode }) => {
    const [loginAuth, setLoginAuth] = useState<LoginState>({
        auth: false,
        userName: "",
        email: ""
    });

    return (
        <LoginContext.Provider value={{ loginAuth, setLoginAuth }}>
            {children}
        </LoginContext.Provider>
    );
};