import AppLayout from "@/layouts/MainLayout";
import { fetchPostsApiBySlug } from "@/utils/functions";
import { store } from "@/store";
import { setPreloadedPosts } from "@/store/entities/post";
import PostContainer from "@/containers/Post/Post";
import PostPreloader from "../../../components/Preloaders/PostPreloader";

export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await fetchPostsApiBySlug(slug);
  if (post) {
    store.dispatch(setPreloadedPosts(post));
  }

  return (
    <AppLayout>
      <PostContainer slug={slug} preloadedPost={post} />
    </AppLayout>
  );
}
