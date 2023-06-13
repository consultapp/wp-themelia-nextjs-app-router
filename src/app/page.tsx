import { store } from "@/store";
import Providers from "@/components/Provider/Provider";
import PostsPreloader from "../components/Preloaders/PostsPreloader";
import PostsContainer from "@/containers/Posts/Posts";
import MainLayout from "@/layouts/MainLayout";
import { setPreloadedPosts } from "@/store/entities/post";
import { addPostsPageIndex, fetchPostsApi } from "@/utils/functions";

export default async function Home() {
  const posts = await fetchPostsApi({});
  if (posts) {
    console.log("preloadedPosts", addPostsPageIndex(posts, 1));
    store.dispatch(setPreloadedPosts(addPostsPageIndex(posts, 1)));
  }

  return (
    <main>
      <Providers>
        <PostsPreloader posts={posts} />
        <MainLayout>
          <PostsContainer />
        </MainLayout>
      </Providers>
    </main>
  );
}
