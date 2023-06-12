"use client";

import { useRef } from "react";
import { store } from "@/store";
import { setPreloadedPosts } from "@/store/entities/post";

function PostsPreloader({ posts }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setPreloadedPosts(posts));
    loaded.current = true;
  }

  return null;
}

export default PostsPreloader;
