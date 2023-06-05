import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../redux/slice/fomSlice"


export const store = configureStore({
    reducer: {
        form: formReducer,
    }
})