import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiForAll = createApi({
    reducerPath: "same",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://easy-doc-server.vercel.app"
    }),
    endpoints: (builder) => ({
        fetchData: builder.query({
            query: (path) => ({
                url: path
            })
        }),
        // postData: builder.mutation({
        //     query: (data) => ({
        //         method: 'POST',
        //         url: path,
        //         body: data
        //     })
        // }),
        putData: builder.mutation({
            query: (data, path) => ({
                method: 'PUT',
                url: path,
                body: data
            })
        }),
    })
});
export const { useFetchDataQuery, usePostDataMutation, usePutDataMutation } = apiForAll;