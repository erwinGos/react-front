import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetCurrentInfosApi, patchPersonnalInformationsApi } from "./driverApi";
import Cookies from "js-cookie";

export const GetCurrentInfos = createAsyncThunk(
    'auth/GetPersonnalInformations',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await GetCurrentInfosApi(credentials);
            return response;
        } catch(err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const patchPersonnalInformations = createAsyncThunk(
    'auth/PatchPersonnalInformations',
    async (userInformations, { rejectWithValue }) => {
        try {
            const response = await patchPersonnalInformationsApi(userInformations);
            return response;
        } catch(err) {
            return rejectWithValue(err.response.data);
        }
    }
);




const initialState = {
    user: null,
    error: null
};

const driverSlice = createSlice({
    name: 'driver',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // Get Personnal Infos
        builder
        .addCase(GetCurrentInfos.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(GetCurrentInfos.fulfilled, (state, action) => {
            if(action.payload) {
                state.user = action.payload;
            }
        })
        .addCase(GetCurrentInfos.rejected, (state, action) => {
            state.error = "une erreur s'est produite";
        })
        // Patch Personnal Infos
        builder
        .addCase(patchPersonnalInformations.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(patchPersonnalInformations.rejected, (state, action) => {
            state.error = "une erreur s'est produite";
        })
    }
})

export const {  } = driverSlice.actions;
export default driverSlice.reducer;