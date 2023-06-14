import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../../constants/index";
import { fetchPost } from "./thunk/fetchPost";
import { trimLinkReadNext } from "../../../utils/functions";

const postEntityAdapter = createEntityAdapter();

const initialState = {
  slugToId: {},
};

export const postSlice = createSlice({
  name: "post",
  initialState: postEntityAdapter.getInitialState(initialState),

  reducers: {
    setPreloadedPosts: (state, { payload }) => {
      const newPayload = payload.map((item) => {
        if (item.slug) {
          state.slugToId[item.slug] = item.id;
        }
        return {
          ...item,
          content: trimLinkReadNext(item?.content?.rendered || ""),
          excerpt: trimLinkReadNext(item?.excerpt?.rendered || ""),
          title: item?.title?.rendered,
        };
      });

      postEntityAdapter.setMany(state, newPayload);
    },
  },
});

export const { setPreloadedPosts } = postSlice.actions;
