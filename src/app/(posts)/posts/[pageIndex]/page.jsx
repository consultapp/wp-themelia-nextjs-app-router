import { getPagesCount, getPostsByPageIndex } from "@/utils/functions";
import Posts from "@/components/Posts/Posts";
import Pagination from "@/components/Pagination/Pagination";

export default async function PostsPage({ params }) {
  const { pageIndex } = params;
  console.log("pageIndex", pageIndex);
  const [posts, postsPages] = await Promise.all([
    getPostsByPageIndex(pageIndex),
    getPagesCount(),
  ]);

  return (
    <>
      <Posts posts={posts || []} />
      <Pagination
        postsCount={postsPages.length || 1}
        pageIndex={pageIndex || 1}
      />
    </>
  );
}
