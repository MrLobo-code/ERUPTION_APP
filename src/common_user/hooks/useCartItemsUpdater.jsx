import { useDispatch, useSelector } from "react-redux";
import { apiAuth } from "../../api/api";
import { quantity } from "../../router/Store/cartSlices/itemsCartUpdaterSlice";

export const useCartItemsUpdater = () => {
    const dispatch = useDispatch()

    const { status } = useSelector((state) => state.cartItemsUpdater);

    const checkUserAuthentication = async () => {
        try {
            const token = localStorage.getItem("x-access-token") ? true : false;
            if (!token) return dispatch(userLogout());
            const { data } = await apiAuth({
                method: "get",
                url: "/validateToken",
            });
            dispatch(userLogin(data.username));
        } catch (error) {
            dispatch(userLogout());
        }
    };

    return {
        checkUserAuthentication,
        status,
        employeeName,
        username
    };
};
