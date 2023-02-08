import { createSlice } from "@reduxjs/toolkit";

export const currentToken = createSlice({
  name: "token",
  initialState: "",
  reducers: {
    newToken: (_state, action) => action.payload,
  },
});

export const { newToken } = currentToken.actions;
