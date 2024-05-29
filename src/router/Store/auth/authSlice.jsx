import { createSlice } from '@reduxjs/toolkit'
import { AutocloseAlert } from '../../../Utils/Functions';

const initialState = {
    status: "checking", //not-authenticated, authenticated or checking
    username: ""
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.status = "authenticated";
            state.username = action.payload;
        },
        userLogout: (state) => {
            state.status = "not-authenticated";
        },
    },
});

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;