
import { tagTypes } from "../tagTypes"
import { baseApi } from "./baseApi"


const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        getMyProfile: build.query({
            query: () => ({
                url: "/profile",
                method: "GET"
            }),
            providesTags: [tagTypes.user]
        })
    }),
})

export const {
    useGetMyProfileQuery
} = userApi