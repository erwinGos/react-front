import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../app/features/auth/authSlice";
import driverReducer from "../app/features/driver/driverSlice";
import registerReducer from "../app/features/registerTab/registerSlice"
import carReducer from "../app/features/car/carSlice";
import documentReducer from "../app/features/documents/documentSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        driver: driverReducer,
        register: registerReducer,
        car: carReducer,
        document: documentReducer
    }
})