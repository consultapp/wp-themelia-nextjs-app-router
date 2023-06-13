import { store } from "@/store";
import Providers from "@/components/Provider/Provider";
import PostsPreloader from "../components/Preloaders/PostsPreloader";
import PostsContainer from "@/containers/Posts/Posts";
import { setPreloadedPosts } from "@/store/entities/post";
import { addPostsPageIndex, fetchPostsApi } from "@/utils/functions";
import AppLayout from "@/layouts/MainLayout";

export default async function Home() {
  const posts = await fetchPostsApi({ pageIndex: 1 });
  if (posts) {
    console.log("preloadedPosts", addPostsPageIndex(posts, 1));
    store.dispatch(setPreloadedPosts(addPostsPageIndex(posts, 1)));
  }

  return (
    <AppLayout>
      <PostsContainer preloadedPosts={posts} />
    </AppLayout>
  );
}
