"use client";
import { setPreloadedPosts } from "@/store/entities/post";
import { store } from "@/store";

export default function HomePreloader({ children, preloadedPosts }) {
  store.dispatch(setPreloadedPosts(preloadedPosts));

  return <>{children}</>;
}
