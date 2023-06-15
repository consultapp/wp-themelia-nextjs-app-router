"use client";
import { store } from "@/store";
import { setPreloadedPosts } from "@/store/entities/post";
import { setPagesCount, setPreloadedPostNav } from "@/store/entities/postNav";
import { useRef } from "react";

export default function Preloader({ action }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    console.log("action", action);

    const { type, payload } = action;
    switch (type) {
      case "home":
        const { posts, pageCount } = payload;
        store.dispatch(setPreloadedPosts(posts));
        store.dispatch(
          setPreloadedPostNav({
            pageIndex: 1,
            postIds: posts.map((item) => item.id),
          })
        );
        store.dispatch(setPagesCount(pageCount));
        break;
      case "post":
        store.dispatch(setPreloadedPosts(payload.post));
        break;
    }

    loaded.current = true;
  }
  return null;
}
