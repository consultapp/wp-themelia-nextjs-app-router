"use client";

import FooterContainer from "../containers/Footer/Footer";
import Workarea from "../components/Workarea/Workarea";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import HeaderContainer from "../containers/Header/Header";
import { store } from "../store";
import { Provider } from "react-redux";

function MainLayout({ children }) {
  // const { pathname } = usePathname();

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  //<Provider store={store}>
  //

  return (
    <>
      {/* <HeaderContainer /> */}
      <Workarea>{children}</Workarea>
      {/* <FooterContainer /> */}
    </>
  );
}

export default MainLayout;

// <Route index element={<PostsContainer />} />
// <Route path="/posts/:pageIndex" element={<PostsContainer />} />
// <Route path="/page/:slug" element={<PageContainer />} />
// <Route path="/post/:slug" element={<PostContainer />} />
// <Route path="/404" element={<NotFoundPage />} />
// <Route path="*" element={<NotFoundPage />} />
