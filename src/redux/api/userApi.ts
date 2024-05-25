import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMyProfile: build.query({
            query: () => ({
                url: "/profile",
                method: "GET",
            }),
            providesTags: [tagTypes.user],
        }),
        updateProfile: build.mutation({
            query: (data) => {
                return {
                    url: "/profile",
                    method: "PUT",
                    data: data,
                };
            },
            invalidatesTags: [tagTypes.user],
        }),
    }),
});

export const { useGetMyProfileQuery, useUpdateProfileMutation } = userApi;
