import {
  getMetaTitle,
  getPagesCount,
  getPostsByPageIndex,
} from "@/utils/functions";
import Posts from "@/components/Posts/Posts";
import Pagination from "@/components/Pagination/Pagination";

export async function generateMetadata({ params }) {
  const { pageIndex = 1 } = params;

  return {
    title: getMetaTitle("Статьи (" + pageIndex + ")"),
  };
}

export default async function PostsPage({ params }) {
  const { pageIndex } = params;
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
