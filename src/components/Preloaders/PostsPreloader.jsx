"use client";

import { useRef } from "react";
import { store } from "@/store";
import { setPreloadedPosts } from "@/store/entities/post";
import { useDispatch } from "react-redux";
import { addPostsPageIndex } from "@/utils/functions";

function PostsPreloader({ posts, pageIndex = 1 }) {
  console.log("PostsPreloader");

  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setPreloadedPosts(addPostsPageIndex(posts, pageIndex)));

    console.log("dispatch setPreloadedPosts");

    loaded.current = true;
  }

  return null;
}

export default PostsPreloader;
