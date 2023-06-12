import "../css/index.css";
import "../css/unsemantic.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// <Route index element={<PostsContainer />} />
// <Route path="/posts/:pageIndex" element={<PostsContainer />} />
// <Route path="/page/:slug" element={<PageContainer />} />
// <Route path="/post/:slug" element={<PostContainer />} />
// <Route path="/404" element={<NotFoundPage />} />
// <Route path="*" element={<NotFoundPage />} />
