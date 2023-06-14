"use client";

import { selectPostNavIdsByPage } from "@/store/entities/postNav/selectors";

import { useSelector } from "react-redux";
import Posts from "@/components/Posts/Posts";
import { selectPostsByIds } from "@/store/entities/post/selectors";

export default function PostsContainer({ pageIndex = 1 }) {
  const postIds = useSelector((state) =>
    selectPostNavIdsByPage(state, pageIndex)
  );
  console.log("postIds", postIds);

  return <Posts postIds={postIds || []} />;
}
