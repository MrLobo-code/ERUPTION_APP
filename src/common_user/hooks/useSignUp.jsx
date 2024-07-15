import { useDispatch } from 'react-redux'
import { api } from "../../api/api";
import { AutocloseAlert } from "../../Utils/Functions";

const useSignUp = () => {
    const dispatch = useDispatch();

    const trySignUp = async (
        event,
        formState
    ) => {
        try {
            event.preventDefault();

            const { data } = await api.post(
                "/signUp",
                { ...formState }
            )
            AutocloseAlert(data.message);
            localStorage.setItem("x-access-token", data.token);
            dispatch(userLogin(data.username));
        } catch (e) {
            AutocloseAlert(e.response.data.message);
        }

    }

    return {
        trySignUp
    }
}


export default useSignUp;