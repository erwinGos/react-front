import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";



const initialState = {
    mailingList: [
        { 
            id: 1, 
            title: 'Informations personnelles',
            completed: false,
            description: "Merci de compléter avec soin vos informations personnelles.",
            icon: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          },
          { 
            id: 2, 
            title: 'Ajoutez un véhicule',
            description: "Fournissez les informations importantes de votre véhicule pour nous aider dans notre analyse.",
            completed: false, 
            icon: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          },
          { 
            id: 3, 
            title: 'Documents à fournir',
            description: "Merci de fournir les documents requis dans les formats demandés.",  
            completed: false, 
            icon: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          }
    ]
};

const registerSlice = createSlice({
    name: 'driver',
    initialState,
    reducers: {
      updateTab: (state, action) => {
        state.mailingList = action.payload;
      },
    },
})

export const { updateTab } = registerSlice.actions;
export default registerSlice.reducer;