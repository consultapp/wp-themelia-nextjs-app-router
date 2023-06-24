import { getMetaTitle, getPostsBySlug } from "@/utils/functions";
import Post from "@/components/Post/Post";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = await getPostsBySlug(slug);

  if (!post || !post.length) return notFound();

  const { title } = post[0];

  const renderTitle = getMetaTitle(title?.rendered || "");
  return {
    title: renderTitle,
    openGraph: {
      title: renderTitle,
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await getPostsBySlug(slug);

  return <Post post={post[0] || {}} />;
}
