import { store } from "@/store";
import PostsContainer from "@/containers/Posts/Posts";
import AppLayout from "@/layouts/AppLayout";

import { setPreloadedPosts } from "@/store/entities/post";

import { getPagesCount, getPostsByPageIndex } from "@/utils/functions";
import { setPagesCount, setPreloadedPostNav } from "@/store/entities/postNav";
import Preloader from "@/containers/Preloader/Preloder";
import { Suspense } from "react";

export default async function Home() {
  const [posts, pageCount] = await Promise.all([
    getPostsByPageIndex(1),
    getPagesCount(),
  ]);
  store.dispatch(setPreloadedPosts(posts));
  store.dispatch(
    setPreloadedPostNav({
      pageIndex: 1,
      postIds: posts.map((item: any) => item.id),
    })
  );
  store.dispatch(setPagesCount(pageCount));

  return (
    <AppLayout>
      <Preloader
        action={{
          type: "home",
          payload: {
            posts,
            pageCount,
          },
        }}
        key="main_preloader"
      />
      <Suspense fallback={<p>Loading post...</p>}>
        <PostsContainer />
      </Suspense>
    </AppLayout>
  );
}
