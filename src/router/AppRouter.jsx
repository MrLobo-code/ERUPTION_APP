import { Routes, Route, Navigate } from "react-router-dom";
import Jewelry from "../common_user/pages/Jewelry";
import HomePage from "../common_user/pages/HomePage";
import PrivateRoutes from "./protectedRoutes/PrivateRoutes";

export default function AppRouter() {
    return (
        <>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/jewelry" element={<Jewelry />} />
                </Route>
            </Routes>
        </>
    );
}