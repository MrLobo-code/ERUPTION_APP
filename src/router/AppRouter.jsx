import { Routes, Route, Navigate } from "react-router-dom";
import Jewelry from "../common_user/pages/Jewelry";
import HomePage from "../common_user/pages/HomePage";
import PrivateRoutes from "./protectedRoutes/PrivateRoutes";
import Checkout from "../root_user/components/Checkout";
import ProductPage from "../common_user/pages/ProductPage";
import MenuNavbar from "../common_user/MenuNavbar";
import BuyProductPage from "../common_user/pages/BuyProductPage";

export default function AppRouter() {
    return (
        <>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/jewelry" element={<Jewelry />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/product-page" element={<ProductPage />} />
                    <Route path="/buy" element={<BuyProductPage />} />
                </Route>
                {/* <Route element={<CommonRoutes />}> */}
                {/* <Route path="/product-page" element={<ProductPage />} /> */}
                {/* </Route> */}

            </Routes>
        </>
    );
}