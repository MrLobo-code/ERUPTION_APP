import { Outlet } from "react-router-dom";
import MenuNavbar from "../../common_user/MenuNavbar";

const PrivateRoutes = () => {

    return status !== "not-authenticated"
        ? (
            <MenuNavbar status={status}>
                <Outlet />
            </MenuNavbar>
        )
        : <Navigate to="/login" />;
}

export default PrivateRoutes;