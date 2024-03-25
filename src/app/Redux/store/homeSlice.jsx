"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  device: "",
  popup: false,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    loadingPage: (state, action) => {
      state.loading = action.payload;
    },
    deviceState: (state, action) => {
      state.device = action.payload;
    },
    popupState: (state, action) => {
      state.popup = action.payload;
    },
  },
});

export const { loadingPage, deviceState, popupState } = homeSlice.actions;

export default homeSlice.reducer;
