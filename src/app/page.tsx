import { getPostsByPageIndex } from "@/utils/functions";
import Posts from "@/components/Posts/Posts";

export default async function Home() {
  const posts = await getPostsByPageIndex(1);

  return <Posts posts={posts || []} />;
}
