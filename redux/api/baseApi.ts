import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "/api",
  }),
  tagTypes: ["Project", "Inquiry"],
  endpoints: (builder) => ({
    submitInquiry: builder.mutation<
      { success: boolean; message: string },
      { name: string; email: string; phone: string; vehicle?: string; message: string }
    >({
      query: (body) => ({
        url: "/contact",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Inquiry"],
    }),
  }),
});

export const { useSubmitInquiryMutation } = baseApi;
