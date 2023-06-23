import { configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./entities/category";

export const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
  },
});
