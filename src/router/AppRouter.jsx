import { Routes, Route, Navigate, Link } from "react-router-dom";
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
import LoadingView from "../common_user/LoadingView";
import ShoppingCart from "../common_user/pages/ShoppingCart";
import ProductView from "../common_user/components/productsPages/ProductView";
import MessageView from "../common_user/components/MessageView";
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
                    <Route path="/signUp" element={<SignUp />} />

                    <Route path="/loading" element={<LoadingView />} />

                    <Route path="/checkout" element={<Checkout />} />

                    {/* <Route path="/shoppingCart" element={<ShoppingCart />} /> */}
                    <Route path="/shoppingCart/:username" element={<ShoppingCart />} />

                    {/* </Route> */}
                    <Route path="/ProductView" element={<ProductView />} />
                    <Route path="/message" element={<MessageView />} />
                    {/* <Route element={<PrivateRoutes status={status} />}> */}
                    <Route path="/*" element={<Navigate to='/home' />} />
                    {/* </Route> */}
                </Route>
            </Routes>
        </>
    );
}