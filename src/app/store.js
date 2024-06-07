import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../app/features/auth/authSlice";
import driverReducer from "../app/features/driver/driverSlice";
import registerReducer from "../app/features/registerTab/registerSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        driver: driverReducer,
        register: registerReducer
    }
})