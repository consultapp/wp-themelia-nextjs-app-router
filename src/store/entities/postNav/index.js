import { createSlice } from "@reduxjs/toolkit";

export const postNavSlice = createSlice({
  name: "postNav",
  initialState: {
    pages: {},
    pagesCount: 0,
  },
  reducers: {
    setPreloadedPostNav: (state, { payload }) => {
      state.pages[payload.pageIndex] = payload.postIds;
    },
    setPagesCount: (state, { payload }) => {
      state.pagesCount = Number(payload);
    },
  },
});

export const { setPreloadedPostNav, setPagesCount } = postNavSlice.actions;
