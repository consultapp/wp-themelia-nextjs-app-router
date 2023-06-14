"use client";

import PostShort from "../../components/PostShort/PostShort";
import { useSelector } from "react-redux";
import {
  selectPostById,
  selectPostBySlug,
} from "../../store/entities/post/selectors";
import Post from "../../components/Post/Post";

export default function PostContainer({ postId, slug, showShort = false }) {
  const postById = useSelector((state) => selectPostById(state, postId));
  const postBySlug = useSelector((state) => selectPostBySlug(state, slug));
  const post = postById ? postById : postBySlug;

  console.log("PostContainer post", slug, post, postBySlug);

  return showShort ? (
    <PostShort post={post} key={postId || slug} />
  ) : (
    <Post post={post} key={postId || slug} />
  );
}
