"use client";

import PostShort from "../../components/PostShort/PostShort";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPostById,
  selectPostBySlug,
} from "../../store/entities/post/selectors";
import Post from "../../components/Post/Post";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";

export default function PostContainer({ postId, slug }) {
  const dispatch = useDispatch();

  const postById = useSelector((state) => selectPostById(state, { postId }));
  const postBySlug = useSelector((state) => selectPostBySlug(state, { slug }));
  const post = postById ? postById : postBySlug;

  return showShort ? (
    <PostShort post={post} key={postId} />
  ) : (
    <Post post={post} key={postId} />
  );
}
