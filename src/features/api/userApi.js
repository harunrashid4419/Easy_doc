import apiSlice from "./apiSlice";

const userApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        postUserInfo: builder.mutation({
            mutation: () => ({

            })
        })
    })
})

