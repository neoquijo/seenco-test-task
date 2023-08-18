import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authSlice from "./slices/authSlice";
import authApi from "./API/authApi";


export const store = configureStore({
    reducer: {
        //state
        [authSlice.name]: authSlice.reducer,
        //api
        [authApi.reducerPath]: authApi.reducer
    },

    middleware: (gdm) => gdm({
        serializableCheck: false,
    }).concat(authApi.middleware)
})

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;