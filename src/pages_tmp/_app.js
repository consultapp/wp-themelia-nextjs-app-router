import { Provider } from "react-redux";
import "../css/index.css";
import "../css/unsemantic.css";
import { configureAppStore } from "@/store";
import { useMemo, useRef } from "react";

export default function App({ Component, pageProps }) {
  console.dir("Component", Component);
  const storeRef = useRef(configureAppStore());
  const { preloadedState } = pageProps;
  console.log("preloadedState", preloadedState);
  if (preloadedState) {
    console.log("storeRef");
    storeRef.current = configureAppStore(preloadedState);
  }

  console.log("App");
  return (
    <Provider store={storeRef.current}>
      <Component {...pageProps} />
    </Provider>
  );
}

// <Route index element={<PostsContainer />} />
// <Route path="/posts/:pageIndex" element={<PostsContainer />} />
// <Route path="/page/:slug" element={<PageContainer />} />
// <Route path="/post/:slug" element={<PostContainer />} />
// <Route path="/404" element={<NotFoundPage />} />
// <Route path="*" element={<NotFoundPage />} />
