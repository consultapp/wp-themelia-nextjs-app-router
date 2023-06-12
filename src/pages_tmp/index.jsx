import { fetchPost } from "@/store/entities/post/thunk/fetchPost";
import PostsContainer from "../containers/Posts/Posts";
import MainLayout from "../layouts/MainLayout";
import { configureAppStore, store } from "@/store";
import { postSlice } from "@/store/entities/post";
import { useLayoutEffect, useRef } from "react";
import { Provider } from "react-redux";
import HeaderContainer from "@/containers/Header/Header";
import Workarea from "@/components/Workarea/Workarea";

export default function Home() {
  // const preloadRef = useRef(false);
  // if (!preloadRef.current) {
  // store.dispatch(postSlice.actions.loadPreloadedState(preloadedState));
  //   preloadRef.current = true;
  // }

  return (
    <>
      <Workarea>
        <PostsContainer />
      </Workarea>
    </>
  );
}

// // This gets called on every request
export async function getServerSideProps() {
  await store.dispatch(fetchPost({ pageIndex: 1 }));

  return { props: { preloadedState: store.getState() } };
}
