"use client";
import Workarea from "../components/Workarea/Workarea";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import HeaderContainer from "../containers/Header/Header";
import FooterContainer from "../containers/Footer/Footer";

import Link from "next/link";

export default function AppLayout({ children }) {
  // const { pathname } = usePathname();

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <>
      {/* <HeaderContainer /> */}
      <Link href="/">Home</Link>
      <Workarea>{children}</Workarea>
      {/* <FooterContainer /> */}
    </>
  );
}

// <Route index element={<PostsContainer />} />
// <Route path="/posts/:pageIndex" element={<PostsContainer />} />
// <Route path="/page/:slug" element={<PageContainer />} />
// <Route path="/post/:slug" element={<PostContainer />} />
// <Route path="/404" element={<NotFoundPage />} />
// <Route path="*" element={<NotFoundPage />} />
