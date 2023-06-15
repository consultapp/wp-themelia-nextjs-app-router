import { getPostsBySlug } from "@/utils/functions";
import { store } from "@/store";
import { setPreloadedPosts } from "@/store/entities/post";
import PostContainer from "@/containers/Post/Post";
import Preloader from "@/containers/Preloader/Preloder";
import AppLayout from "@/layouts/AppLayout";
import Link from "next/link";
import { Suspense } from "react";

export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await getPostsBySlug(slug);
  store.dispatch(setPreloadedPosts(post));

  console.log("slug", slug);

  return (
    <AppLayout>
      <Preloader
        action={{
          type: "post",
          payload: {
            post,
          },
        }}
        key="main_preloader"
      />
      <Suspense fallback={<p>Loading post...</p>}>
        <PostContainer slug={slug} />
      </Suspense>
    </AppLayout>
  );
}
