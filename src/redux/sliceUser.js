import { createSlice } from "@reduxjs/toolkit";

export const currentUser = createSlice({
  name: "user",
  initialState: "",
  reducers: {
    isUserName: (_state, action) => action.payload,
  },
});

export const { isUserName } = currentUser.actions;
