import { fetchPost } from "@/store/entities/post/thunk/fetchPost";
import PostsContainer from "../containers/Posts/Posts";
import MainLayout from "../layouts/MainLayout";
import { store } from "@/store";
import { postSlice } from "@/store/entities/post";
import { useLayoutEffect, useRef } from "react";

export default function Home({ preloadedState }) {
  const preloadRef = useRef(false);
  if (!preloadRef.current) {
    store.dispatch(postSlice.actions.loadPreloadedState(preloadedState));
    preloadRef.current = true;
  }

  return (
    <>
      <MainLayout>
        <PostsContainer />
      </MainLayout>
    </>
  );
}

// // This gets called on every request
export async function getServerSideProps() {
  await store.dispatch(fetchPost({ pageIndex: 1 }));

  return { props: { preloadedState: store.getState() } };
}