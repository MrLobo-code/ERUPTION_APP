import { Outlet } from "react-router-dom";
import MenuNavbar from "../../common_user/MenuNavbar";

const PrivateRoutes = () => {

    return (
        <MenuNavbar>
            <Outlet />
        </MenuNavbar>
    )
}

export default PrivateRoutes;