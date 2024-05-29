import { Routes, Route, Navigate } from "react-router-dom";
import Jewelry from "../common_user/pages/Jewelry";
import HomePage from "../common_user/pages/HomePage";
import PrivateRoutes from "./protectedRoutes/PrivateRoutes";
import Checkout from "../root_user/components/Checkout";
import ProductPage from "../common_user/pages/ProductPage";
import MenuNavbar from "../common_user/MenuNavbar";
import BuyProductPage from "../common_user/pages/BuyProductPage";
import Login from "../common_user/pages/Login";
import CommonRoutes from "./protectedRoutes/CommonRoutes";
import SignUp from "../common_user/pages/SignUp";
import { useCheckAuth } from "../common_user/hooks/useCheckAuth";

export default function AppRouter() {

    const { status } = useCheckAuth();

    return (
        <>
            <Routes>
                {/* <Route element={<CommonRoutes status={status} />}> */}
                <Route path="/buy" element={<BuyProductPage />} />
                <Route path="/product-page" element={<ProductPage />} />
                <Route path="/jewelry" element={<Jewelry />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign_up" element={<SignUp />} />
                {/* </Route> */}

                {/* <Route element={<PrivateRoutes status={status} />}> */}
                <Route path="/*" element={<Navigate to='/home' />} />
                {/* </Route> */}
            </Routes>
        </>
    );
}