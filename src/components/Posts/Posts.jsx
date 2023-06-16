import PostShort from "@/components/PostShort/PostShort";
import { redirect } from "next/navigation";

export default function Posts({ posts }) {
  if (!posts || !posts.length) return redirect("/404");

  return posts
    .map((post) => {
      return <PostShort post={post} key={post.id} />;
    })
    .reverse();
}
