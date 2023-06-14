"use client";
import { useRef } from "react";
import { setPreloadedPosts } from "@/store/entities/post";
import { store } from "@/store";

export default function PostPreloader({ post }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setPreloadedPosts(post));
    loaded.current = true;
  }
  // return <>{children}</>;
  return null;
}
