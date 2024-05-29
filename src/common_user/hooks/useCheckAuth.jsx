import { useDispatch, useSelector } from "react-redux";
import { apiAuth } from "../../api/api";
import { userLogout, userLogin } from "../../router/Store/auth/authSlice";

export const useCheckAuth = () => {
    const dispatch = useDispatch()

    const { status, employeeName } = useSelector((state) => state.auth);

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
        employeeName
    };
};
