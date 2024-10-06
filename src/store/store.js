import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartSclice"

const store = configureStore({
    reducer: {
        cart:cartslice,
    } 
});

export default store;