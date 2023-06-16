import { getPostsBySlug } from "@/utils/functions";
import Post from "@/components/Post/Post";

export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await getPostsBySlug(slug);

  return (
    <>
      <Post post={post || []} />
    </>
  );
}
