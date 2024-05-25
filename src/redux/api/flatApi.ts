import { IMeta } from "@/types";
import { tagTypes } from "../tagTypes"
import { baseApi } from "./baseApi"
import { IFlat, IFlatResponse } from "@/types/flat/flat";

const flatApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createFlat: build.mutation({
            query: (flatData) => ({
                url: '/flats',
                method: 'POST',
                data: flatData,
            }),
            invalidatesTags: [tagTypes.flat]
        }),
        getAllFlats: build.query({
            query: (

                arg: Record<string, any>
            ) => ({
                url: '/flats',
                method: 'GET',
                params: arg,
            }),
            transformResponse: (response: { data: IFlat[]; meta: IMeta }) => {
                const { meta } = response;
                return {
                    flats: response.data,
                    meta,
                };
            },
            providesTags: [tagTypes.flat],
        }),

        deleteFlat: build.mutation({
            query: (id) => ({
                url: `/flats/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [tagTypes.flat],
        }),

    }),
})

export const { useCreateFlatMutation, useGetAllFlatsQuery, useDeleteFlatMutation } = flatApi
