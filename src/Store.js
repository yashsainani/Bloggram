import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "./Slices/BlogSlice";

const store = configureStore({
    reducer: {
        blog: BlogSlice
    }
});

export default store;