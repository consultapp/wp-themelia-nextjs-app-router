"use client";
import { useRef } from "react";
import { setPreloadedHomePage } from "./page";

export default function HomePreloader({ posts, pageCount }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    setPreloadedHomePage(posts, pageCount);

    loaded.current = true;
  }
  // return <>{children}</>;
  return null;
}
