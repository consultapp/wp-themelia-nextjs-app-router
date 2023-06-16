import { getPagesCount, getPostsByPageIndex } from "@/utils/functions";
import Posts from "@/components/Posts/Posts";
import Pagination from "@/components/Pagination/Pagination";

export default async function Home() {
  const [posts, postsPages] = await Promise.all([
    getPostsByPageIndex(1),
    getPagesCount(),
  ]);
  console.log("postsPages", postsPages);
  return (
    <>
      <Posts posts={posts || []} />
      <Pagination postsCount={postsPages.length} pageIndex={1} />
    </>
  );
}
