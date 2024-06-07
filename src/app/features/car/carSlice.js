import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetClientCarsApi, SetDefaultCarApi, GetBrandListApi, GetBrandModelsApi } from "./carApi";
import Cookies from "js-cookie";

export const GetClientCars = createAsyncThunk(
    'car/GetClientCars',
    async (parameters, { rejectWithValue }) => {
        try {
            const response = await GetClientCarsApi(parameters);
            return response;
        } catch(err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const SetDefaultCar = createAsyncThunk(
    'car/SetDefaultCar',
    async (id, { rejectWithValue }) => {
        try {
            const response = await SetDefaultCarApi(id);
            return response;
        } catch(err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const GetBrandList = createAsyncThunk(
    'car/GetBrandList',
    async (id, { rejectWithValue }) => {
        try {
            const response = await GetBrandListApi(id);
            return response;
        } catch(err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const GetBrandModels = createAsyncThunk(
    'car/GetBrandModels',
    async (brand, { rejectWithValue }) => {
        try {
            const response = await GetBrandModelsApi(brand);
            return response;
        } catch(err) {
            return rejectWithValue(err.response.data);
        }
    }
);



const initialState = {
    cars: [],
    brands: [],
    models: []
};

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // Get Client Cars
        builder
        .addCase(GetClientCars.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(GetClientCars.fulfilled, (state, action) => {
            state.cars = action.payload
        })
        .addCase(GetClientCars.rejected, (state, action) => {
            state.error = "une erreur s'est produite";
        })
        // Set Default Car
        builder
        .addCase(SetDefaultCar.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(SetDefaultCar.rejected, (state, action) => {
            state.error = "une erreur s'est produite";
        })
        // Get brand list
        builder
        .addCase(GetBrandList.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(GetBrandList.fulfilled, (state, action) => {
            state.brands = action.payload
        })
        .addCase(GetBrandList.rejected, (state, action) => {
            state.error = "une erreur s'est produite";
        })
        // Get brand list
        builder
        .addCase(GetBrandModels.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(GetBrandModels.fulfilled, (state, action) => {
            state.models = action.payload
        })
        .addCase(GetBrandModels.rejected, (state, action) => {
            state.error = "une erreur s'est produite";
        })
    }
})

export const {  } = carSlice.actions;
export default carSlice.reducer;