import { store } from "@/store";
import Providers from "@/components/Provider/Provider";
import PostsPreloader from "../components/Preloaders/PostsPreloader";
import PostsContainer from "@/containers/Posts/Posts";
import MainLayout from "@/layouts/MainLayout";
import { setPreloadedPosts } from "@/store/entities/post";
import { fetchPostsApi } from "@/utils/functions";

export default async function Home() {
  const posts = await fetchPostsApi({});
  await store.dispatch(setPreloadedPosts(posts));

  return (
    <main>
      {/* <PostsPreloader posts={posts} /> */}
      <Providers>
        <MainLayout>
          <PostsContainer />
        </MainLayout>
      </Providers>
    </main>
  );
}
