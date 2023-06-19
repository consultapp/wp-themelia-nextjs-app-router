import "@/css/index.css";
import "@/css/unsemantic.css";
import Workarea from "@/components/Workarea/Workarea";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Next.js | Wordpress Headless | Themelia",
  description: "Theme Themelia for Wordpress - Next.js/React SSR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Workarea>{children}</Workarea>
        <Footer />
      </body>
    </html>
  );
}
