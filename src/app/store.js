import { configureStore } from "@reduxjs/toolkit";
import { apiForAll } from "../features/api/apiSlice";

const store = configureStore({
    reducer: {
        [apiForAll.reducerPath]: apiForAll.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiForAll.middleware)
})
export default store;