import {
  getCategories,
  getMetaTitle,
  getPagesCount,
  getPostsByPageIndex,
} from "@/utils/functions";
import Posts from "@/components/Posts/Posts";
import Pagination from "@/components/Pagination/Pagination";
import PreloaderCategories from "../components/Preloaders/PreloaderCategories";

export default async function Home() {
  const [posts, postsPages, categories] = await Promise.all([
    getPostsByPageIndex(1),
    getPagesCount(),
    getCategories(),
  ]);

  return (
    <>
      <PreloaderCategories categories={categories} />
      <Posts posts={posts.reverse() || []} />
      <Pagination postsCount={postsPages.length || 0} pageIndex={1} />
    </>
  );
}
