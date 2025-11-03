import { Route, Routes } from "react-router"
import { Home } from "../components/pages/Home"
import { Login } from "../components/pages/Login"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}