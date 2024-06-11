import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetRequiredDocumentsApi, GetSentDocumentsApi, SendDocumentsApi } from "./documentApi";
import Cookies from "js-cookie";

export const GetRequiredDocuments = createAsyncThunk(
    'car/GetRequiredDocuments',
    async (parameters, { rejectWithValue }) => {
        try {
            const response = await GetRequiredDocumentsApi(parameters);
            return response;
        } catch(err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const SendDocuments = createAsyncThunk(
    'car/SendDocuments',
    async (fileObject, { rejectWithValue }) => {
        try {
            const response = await SendDocumentsApi(fileObject);
            return response;
        } catch(err) {
            return rejectWithValue(err.response.data);
        }
    }
);

export const GetSentDocuments = createAsyncThunk(
    'car/GetSentDocuments',
    async () => {
        const response = await GetSentDocumentsApi();
            return response;
    }
);

const initialState = {
    requiredDocument: [],
    sentDocuments: [],
    error: null,
    GetRequiredDocumentsFetched: false,
    GetSentDocumentsFetched: false
};

const documentSlice = createSlice({
    name: 'documents',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // Get brand list
        builder
        .addCase(GetRequiredDocuments.fulfilled, (state, action) => {
            state.requiredDocument = action.payload.filter(doc => doc != "CAR_REGISTRATION_CARD");
            state.GetRequiredDocumentsFetched = true;
        })
        .addCase(GetRequiredDocuments.rejected, (state, action) => {
            state.error = action.payload.details;
        })
        // Get brand list
        builder
        .addCase(GetSentDocuments.fulfilled, (state, action) => {
            if(action.payload.length > 0) {
                let sentDocs = [];
                action.payload.forEach(doc => sentDocs.push(doc.type))
                state.sentDocuments = sentDocs;
                
            }
            state.GetSentDocumentsFetched = true;
            
        })
        .addCase(GetSentDocuments.rejected, (state, action) => {
            state.error = action.payload;
        })
    }
})

export const {  } = documentSlice.actions;
export default documentSlice.reducer;