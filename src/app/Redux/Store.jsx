"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homeSlice from "./store/homeSlice";

const rootReducer = combineReducers({
  home: homeSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
