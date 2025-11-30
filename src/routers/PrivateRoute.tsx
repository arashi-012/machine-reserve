import { Navigate } from "react-router-dom";
import { useLoginContext } from "../contexts/login/useLoginContext";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export const PrivateRoute = ({ children }: Props) => {
    const { loginAuth } = useLoginContext();

    if (!loginAuth.auth) {
        return <Navigate to="/login" replace />;
    }

    // ログイン済みなら子コンポーネントをそのまま表示
    return <>{children}</>;
};
