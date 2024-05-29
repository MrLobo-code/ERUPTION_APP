import { useDispatch } from 'react-redux'
import { api } from "../../api/api";
import { AutocloseAlert } from "../../Utils/Functions";
import { userLogin, userLogout } from '../../router/Store/auth/authSlice';

export const useAuth = () => {
    const dispatch = useDispatch();

    const logIn = async (
        event,
        formState
    ) => {
        try {
            event.preventDefault();
            const response = await api.post("/login", { ...formState });
            // console.log(response);

            const { data } = await api.post(
                "/login",
                { ...formState }
            )
            AutocloseAlert(data.message);
            localStorage.setItem("x-access-token", data.token);
            dispatch(userLogin(data.username));
        } catch (e) {
            // console.log(e);
            AutocloseAlert(e.response.data.message);
        }
    };

    const logOut = () => {
        localStorage.clear();
        dispatch(userLogout());
    };

    return {
        logIn,
        logOut,
    };
};