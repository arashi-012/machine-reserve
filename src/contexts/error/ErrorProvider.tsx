import { useState, type ReactNode } from "react";
import { ErrorContext} from "./ErrorContext";

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
    const [error, setError] = useState<string>("");

    return (
        <ErrorContext.Provider value={{ error, setError }}>
            {children}
        </ErrorContext.Provider>
    );
};