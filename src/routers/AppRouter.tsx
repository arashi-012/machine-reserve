import { Route, Routes } from "react-router-dom"
import { Home } from "../components/pages/Home"
import { Login } from "../components/pages/Login"
import { PrivateRoute } from "./PrivateRoute"
import { NotFound } from "../components/pages/errors/NotFound"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}