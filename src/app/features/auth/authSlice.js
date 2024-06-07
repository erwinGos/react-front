import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SignInApi, SignUpApi, checkTokenValidityApi, PostEmailValidationApi } from "./authApi";
import Cookies from "js-cookie";

export const SignInMethod = createAsyncThunk(
    'auth/SignIn',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await SignInApi(credentials);
            return response;
        } catch(err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const SignUpMethod = createAsyncThunk(
    'auth/SignUp',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await SignUpApi(credentials);
            return response;
        } catch(err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const PostEmailValidation = createAsyncThunk(
    'auth/PostEmailValidation',
    async (code, { rejectWithValue }) => {
        try {
            const response = await PostEmailValidationApi(code);
            return response;
        } catch(err) {
            return rejectWithValue(err.response.data);
        }
    }
);


export const checkTokenValidity = createAsyncThunk(
    'auth/checkTokenValidity',
    async () => {
        const response = await checkTokenValidityApi();
        return response;
    }
);




const initialState = {
    isAuth: null,
    user: {
        "mailConfirmed": false,
        "phoneNumberConfirmed": false
    },
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

        // SignUp method
        builder
        .addCase(SignUpMethod.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(SignUpMethod.fulfilled, (state, action) => {
            if(action.payload.id_token) {
                state.isAuth = true;
            }
        })
        .addCase(SignUpMethod.rejected, (state, action) => {
            state.error = "une erreur s'est produite";
            console.log(action)
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

        // PostEmailValidation method
        builder
        .addCase(PostEmailValidation.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(PostEmailValidation.rejected, (state, action) => {
            state.isAuth = false;
        })
    }
})

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;