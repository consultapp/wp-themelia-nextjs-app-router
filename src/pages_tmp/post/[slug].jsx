import { fetchPost } from "@/store/entities/post/thunk/fetchPost";
import { configureAppStore, store } from "@/store";
import { postSlice } from "@/store/entities/post";
import { Provider } from "react-redux";
import HeaderContainer from "@/containers/Header/Header";
import Workarea from "@/components/Workarea/Workarea";
import { useRouter } from "next/router";
import PostContainer from "../../containers/Post/Post";
import { useRef } from "react";

export default function PostPage({ preloadedState }) {
  //   const preloadRef = useRef(Boolean(preloadedState));
  //   if (preloadRef.current) {
  //     store.dispatch(postSlice.actions.loadPreloadedState(preloadedState));
  //     preloadRef.current = false;
  //   }

  return (
    <>
      <Workarea>
        <PostContainer />
      </Workarea>
    </>
  );
}

// // This gets called on every request
export async function getServerSideProps(ctx) {
  const { query } = ctx;
  const { slug } = query || {};

  await store.dispatch(fetchPost({ slug }));

  return { props: { preloadedState1: store.getState() } };
}
