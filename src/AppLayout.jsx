import { Provider } from "react-redux";
import { store } from "./store/index";

import HeaderContainer from "./containers/Header/Header";
import FooterContainer from "./containers/Footer/Footer";
import Workarea from "./components/Workarea/Workarea";

function AppLayout({ children }) {
  // const { pathname } = useLocation();

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  return (
    <Provider store={store}>
      <HeaderContainer />
      <Workarea>{children}</Workarea>
      <FooterContainer />
    </Provider>
  );
}

export default AppLayout;

// <Route index element={<PostsContainer />} />
// <Route path="/posts/:pageIndex" element={<PostsContainer />} />
// <Route path="/page/:slug" element={<PageContainer />} />
// <Route path="/post/:slug" element={<PostContainer />} />
// <Route path="/404" element={<NotFoundPage />} />
// <Route path="*" element={<NotFoundPage />} />
