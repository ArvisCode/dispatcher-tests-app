import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "./BASE_URL";

export const tasksApi = createApi({
  reducerPath: "tasksApi",

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["tasks"],

  endpoints: (builder) => ({
    taskAdd: builder.mutation({
      query: (newTask) => ({
        url: "/question/add",
        method: "POST",
        body: newTask,
      }),
      invalidatesTags: ["tasks"],
    }),

    taskGetAll: builder.query({
      query: () => ({
        url: "/question/",
        method: "GET",
      }),
      providesTags: ["tasks"],
    }),

    taskPatchById: builder.mutation({
      query: ({ id, patch }) => ({
        url: "/question/:id",
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["tasks"],
    }),

    taskRemoveById: builder.mutation({
      query: (id) => ({
        url: "/question/remove",
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const {
  useTaskAddMutation,
  useTaskGetAllQuery,
  useTaskPatchByIdMutation,
  useTaskRemoveByIdMutation,
} = tasksApi;
