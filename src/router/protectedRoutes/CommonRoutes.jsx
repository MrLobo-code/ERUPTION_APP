import { Navigate, Outlet } from "react-router-dom";
import MenuNavbar from "../../common_user/MenuNavbar";

const CommonRoutes = ({ status }) => {
    return status !== "authenticated" ?
        (
            <MenuNavbar status={status}>
                <Outlet />
            </MenuNavbar>
        )
        : <Navigate to="/home" />;
}

export default CommonRoutes;