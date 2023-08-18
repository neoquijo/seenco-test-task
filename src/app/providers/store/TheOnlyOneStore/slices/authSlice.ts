import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "app/domain/User/Interfaces/IUser";

const initialState: { isAuth: boolean, user: IUser } = {
    isAuth: false,
    user: undefined
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAuth: (state, { payload }) => {
            state.isAuth = payload
        },
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.isAuth = false
            state.user = undefined
            localStorage.removeItem('token')
        }
    }
})

export default authSlice
export const { setAuth, setUser, logout } = authSlice.actions