import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SignInApi, checkTokenValidityApi } from "./authApi";
import Cookies from "js-cookie";

export const SignInMethod = createAsyncThunk(
    'auth/SignIn',
    async (credentials) => {
        const response = await SignInApi(credentials);
        return response;
    }
);


export const checkTokenValidity = createAsyncThunk(
    'auth/GetCurrentInfos',
    async () => {
        const response = await checkTokenValidityApi();
        return response;
    }
);




const initialState = {
    isAuth: null,
    user: null,
    error: null,
    loading: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutUser: (state, action) => {
            Cookies.remove('auth_token');
            state.isAuth = false;
        },
    },
    extraReducers: (builder) => {
        // SignIn method
        builder
        .addCase(SignInMethod.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(SignInMethod.fulfilled, (state, action) => {
            if(action.payload.id_token) {
                state.isAuth = true;
            }
        })
        .addCase(SignInMethod.rejected, (state, action) => {
            state.error = "une erreur s'est produite";
        })
        // GetInfos method
        builder
        .addCase(checkTokenValidity.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(checkTokenValidity.fulfilled, (state, action) => {
            state.isAuth = true
        })
        .addCase(checkTokenValidity.rejected, (state, action) => {
            state.isAuth = false;
        })
    }
})

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;