import AppLayout from "@/layouts/AppLayout";
import { getPostsBySlug } from "@/utils/functions";
import { store } from "@/store";
import { setPreloadedPosts } from "@/store/entities/post";
import PostContainer from "@/containers/Post/Post";
import PostPreloader from "./preloder";

export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await getPostsBySlug(slug);
  store.dispatch(setPreloadedPosts(post));

  return (
    <>
      <PostPreloader post={post} />
      <AppLayout>
        <PostContainer slug={slug} />
      </AppLayout>
    </>
  );
}
