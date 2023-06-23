import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: { entities: [] },
  reducers: {
    preload: (state, { payload }) => {
      state.entities = payload;
    },
  },
});

export const { preload } = categorySlice.actions;
