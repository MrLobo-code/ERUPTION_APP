import { Routes, Route, Navigate } from "react-router-dom";
import Jewelry from "../common_user/pages/Jewelry";
import HomePage from "../common_user/pages/HomePage";
import PrivateRoutes from "./protectedRoutes/PrivateRoutes";
import Checkout from "../root_user/components/Checkout";
import ProductPage from "../common_user/pages/ProductPage";
import MenuNavbar from "../common_user/MenuNavbar";
import Pro1RogAlly from "/src/common_user/components/productsPages/Pro1RogAlly.jsx";
import Login from "../common_user/pages/Login";
import CommonRoutes from "./protectedRoutes/CommonRoutes";
import SignUp from "../common_user/pages/SignUp";
import { useCheckAuth } from "../common_user/hooks/useCheckAuth";
import Pro2SmartTV from "../common_user/components/productsPages/Pro2SmartTV";
import SudaderaCard from "../common_user/components/Cards/SudaderaCard";
import Pro3Sudadera from "../common_user/components/productsPages/Pro3Sudadera";
export default function AppRouter() {

    const { status } = useCheckAuth();

    return (
        <>
            <Routes>
                <Route element={<CommonRoutes status={status} />}>
                    {/* <Route element={<CommonRoutes status={status} />}> */}
                    <Route path="/RogAlly" element={<Pro1RogAlly />} />
                    <Route path="/SmartTV" element={<Pro2SmartTV />} />
                    <Route path="/Sudadera" element={<Pro3Sudadera />} />
                    <Route path="/product-page" element={<ProductPage />} />
                    <Route path="/jewelry" element={<Jewelry />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign_up" element={<SignUp />} />
                    <Route path="/checkout" element={<Checkout />} />
                    {/* </Route> */}

                    {/* <Route element={<PrivateRoutes status={status} />}> */}
                    <Route path="/*" element={<Navigate to='/home' />} />
                    {/* </Route> */}
                </Route>
            </Routes>
        </>
    );
}