import { configureStore } from "@reduxjs/toolkit";
import storageSlice from "./features/storageSlice";

export default configureStore({
    reducer: {
        storage: storageSlice
    }
})