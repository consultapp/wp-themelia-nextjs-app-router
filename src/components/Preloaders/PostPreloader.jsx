"use client";

import { useRef } from "react";
import { store } from "@/store";
import { setPreloadedPosts } from "@/store/entities/post";

function PostPreloader({ post }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setPreloadedPosts(post));

    console.log("dispatch PostPreloader");

    loaded.current = true;
  }

  return null;
}

export default PostPreloader;
