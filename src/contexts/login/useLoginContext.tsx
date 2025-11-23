import { useContext } from "react";
import { LoginContext } from "./LoginContext";

export const useLoginContext = () => {
    const context = useContext(LoginContext);

    if (!context) {
        throw new Error("useLoginAuth must be used within a LoginAuthProvider");
    }
    return context;
};