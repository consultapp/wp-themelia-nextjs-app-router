import { getPagesCount, getPostsByPageIndex } from "@/utils/functions";
import Posts from "@/components/Posts/Posts";
import Pagination from "@/components/Pagination/Pagination";

export default async function Home() {
  const [posts, postsPages] = await Promise.all([
    getPostsByPageIndex(1),
    getPagesCount(),
  ]);

  return (
    <>
      <Posts posts={posts.reverse() || []} />
      <Pagination postsCount={postsPages.length || 0} pageIndex={1} />
    </>
  );
}
