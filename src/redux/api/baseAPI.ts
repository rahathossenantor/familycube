import axiosBaseQuery from "@/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQuery({ baseUrl: "https://familycube.vercel.app/api/v1" }),
    // baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL as string }),
    // baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
    endpoints: () => ({}),
    tagTypes: [
        "users",
    ],
});

export default baseApi;
