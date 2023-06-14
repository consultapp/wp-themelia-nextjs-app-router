"use client";

import { useSelector } from "react-redux";
import Posts from "../../components/Posts/Posts";
import { selectPostsIdsByPageIndex } from "../../store/entities/post/selectors";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";

export default function PostsContainer({ pageIndex = 1 }) {
  const postIds = useSelector((state) => {
    return selectPostsIdsByPageIndex(state, { pageIndex });
  });

  if (!postIds.length && isRejected) return <NotFoundPage />;

  return <Posts isLoading={isLoading} postIds={postIds || []} />;
}
