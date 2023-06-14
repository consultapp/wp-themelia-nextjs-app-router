import { store } from "@/store";
import PostsContainer from "@/containers/Posts/Posts";
import AppLayout from "@/layouts/AppLayout";
import HomePreloader from "./preloder";

import { setPreloadedPosts } from "@/store/entities/post";

import { getPagesCount, getPostsByPageIndex } from "@/utils/functions";
import { setPagesCount, setPreloadedPostNav } from "@/store/entities/postNav";

export function setPreloadedHomePage(posts: any, pageCount: number) {
  store.dispatch(setPreloadedPosts(posts));
  store.dispatch(
    setPreloadedPostNav({
      pageIndex: 1,
      postIds: posts.map((item: any) => item.id),
    })
  );
  store.dispatch(setPagesCount(pageCount));
}

export default async function Home() {
  const [posts, pageCount] = await Promise.all([
    getPostsByPageIndex(1),
    getPagesCount(),
  ]);
  setPreloadedHomePage(posts, pageCount);

  return (
    <>
      <HomePreloader posts={posts} pageCount={pageCount} />
      <AppLayout>
        <PostsContainer />
      </AppLayout>
    </>
  );
}
