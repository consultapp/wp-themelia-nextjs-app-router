"use client";
import { useLayoutEffect, useRef } from "react";
import { setPreloadedPosts } from "@/store/entities/post";
import { store } from "@/store";

export default function PostPreloader({ children, preloadedPost }) {
  console.log("preloadedPost", preloadedPost);

  // const loaded = useRef(false);
  // if (!loaded.current && preloadedPost) {
  //   store.dispatch(setPreloadedPosts(preloadedPost));
  //   loaded.current = true;
  // }
  if (preloadedPost) store.dispatch(setPreloadedPosts(preloadedPost));

  return <>{children}</>;
}
