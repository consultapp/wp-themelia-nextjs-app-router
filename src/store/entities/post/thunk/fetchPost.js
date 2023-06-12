import { createAsyncThunk } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../../../constants";
import {
  selectIfPostAlreadyLoaded,
  selectIsPostPageLoaded,
} from "../selectors";

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

    const url = new URL("posts", process.env.API_BASE_URL);

    const fields = `id,title,categories,excerpt,date,link,type,slug,modified${
      loadFull ? ",content" : ""
    }`;
    url.searchParams.set("_fields", fields);

    if (!postId && !slug && pageIndex) {
      url.searchParams.set("page", pageIndex);
      url.searchParams.set("per_page", process.env.POSTS_PER_PAGE);
    }
    if (postId) url.searchParams.set("include", postId);
    if (slug) url.searchParams.set("slug", slug);

    const response = await fetch(url);
    const data = await response.json();

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