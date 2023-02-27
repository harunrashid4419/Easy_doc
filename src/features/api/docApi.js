import apiSlice from "./apiSlice"

const docApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDocData: builder.query({
            query: () => '/doc-data'
        }),
        getDocCategory: builder.query({
            query: (path) => ({
                method: 'GET',
                url: path
            })
        }),
    })
})

export const { useGetDocDataQuery, useGetDocCategoryQuery } = docApi;