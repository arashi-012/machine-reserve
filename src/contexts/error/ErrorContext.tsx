import {
    createContext,
    type Dispatch,
    type SetStateAction
} from "react";

export type ErrorContextType = {
    error: string,
    setError: Dispatch<SetStateAction<string>>
}

export const ErrorContext = createContext<ErrorContextType | undefined>(undefined);