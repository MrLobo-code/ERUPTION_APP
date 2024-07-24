import { Navigate, Outlet } from "react-router-dom";
import MenuNavbar from "../../common_user/MenuNavbar";
import LoadingView from "../../common_user/LoadingView";

const CommonRoutes = ({ status }) => {
    // return status !== "authenticated" ?
    return (
        <>

            <MenuNavbar status={status}>
                <Outlet />
            </MenuNavbar>

        </>
    );
    // : <Navigate to="/home" />;
}

export default CommonRoutes;