import PostShort from "@/components/PostShort/PostShort";
import { notFound } from "next/navigation";

export default function Posts({ posts }) {
  if (!posts || !posts.length) return notFound();

  return posts
    .map((post) => {
      return <PostShort post={post} key={post.id} />;
    })
    .reverse();
}
