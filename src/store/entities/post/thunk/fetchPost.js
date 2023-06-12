import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../../../constants";
import {
  selectIfPostAlreadyLoaded,
  selectIsPostPageLoaded,
} from "../selectors";
import { fetchPostsApi } from "@/utils/functions";

export const fetchPost = createAsyncThunk(
  "post/fetchPost",
  async (
    { postId, slug, pageIndex, loadFull = true },
    { getState, rejectWithValue }
  ) => {
    const state = getState();
    const isPostPageLoaded = selectIsPostPageLoaded(state, {
      pageIndex,
    });

    const isPostAlreadyLoaded = selectIfPostAlreadyLoaded(state, { postId });

    if (isPostAlreadyLoaded) {
      return rejectWithValue({ status: LOADING_STATUS.earlyAdded });
    }

    if (!postId && isPostPageLoaded) {
      return rejectWithValue({ status: LOADING_STATUS.earlyAdded });
    }

    const data = await fetchPostsApi({
      postId,
      slug,
      pageIndex,
      loadFull: true,
    });

    if (!data || !data.length) {
      return rejectWithValue({ status: LOADING_STATUS.notfound });
    }

    return pageIndex
      ? data.map((item) => {
          return { ...item, pageIndex: Number(pageIndex) };
        })
      : data;
  }
);
