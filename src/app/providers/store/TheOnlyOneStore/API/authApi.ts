import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ILoginRequest, ILoginResponse } from '../interfaces/IAuthAPI'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token')
            if (typeof token == 'string') {
                headers.set('Authorization', token)
            }
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation<ILoginResponse, ILoginRequest>({
            query: data => ({
                url: '/login',
                body: data,
                method: 'POST'
            })
        }),
        authVerify: builder.query({
            query: () => ({
                url: '/verify'
            })
        })
    }),

})
export default authApi
export const {
    useLoginMutation,
    useAuthVerifyQuery,
    useLazyAuthVerifyQuery
} = authApi