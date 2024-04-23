"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  accessToken: "1233",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.accessToken = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectAccessToken = (state) => state.auth.accessToken;

export default authSlice.reducer;
