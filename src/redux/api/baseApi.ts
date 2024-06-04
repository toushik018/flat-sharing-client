import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery'
import { createApi } from '@reduxjs/toolkit/query/react'
import { tagTypesList } from '../tagTypes'


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({ baseUrl: 'https://flat-sharing-backend-beta.vercel.app/api' }),
    endpoints: () => ({

    }),
    tagTypes: tagTypesList
})

