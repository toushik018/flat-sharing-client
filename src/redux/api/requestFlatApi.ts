import { tagTypes } from "../tagTypes"
import { baseApi } from "./baseApi"

const requestFlatApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        submitFlatRequest: build.mutation({
            query: (flatData) => ({
                url: '/flat-request',
                method: 'POST',
                data: flatData,
            }),
            invalidatesTags: [tagTypes.flatRequest]
        })
    }),
})

export const {useSubmitFlatRequestMutation } = requestFlatApi
