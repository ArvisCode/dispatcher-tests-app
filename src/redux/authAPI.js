import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL } from "./BASE_URL";

export const authApi = createApi({
  reducerPath: "userApi",

  baseQuery: fetchBaseQuery({
    baseURL: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["user"],

  endpoints: (builder) => ({
    userSignup: builder.mutation({
      query: (newUser) => ({
        url: "/signup",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["user"],
    }),

    userLogin: builder.mutation({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["user"],
    }),

    userCurrent: builder.query({
      query: () => ({
        url: "/current",
        method: "GET",
      }),
      providesTags: ["user"],
    }),

    userLogout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useUserSignupMutation,
  useUserLoginMutation,
  useUserCurrentQuery,
  useUserLogoutMutation,
} = authApi;
