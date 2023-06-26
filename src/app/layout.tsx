import "@/css/index.css";
import "@/css/unsemantic.css";
import Workarea from "@/components/Workarea/Workarea";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StoreProvider from "@/components/StoreProvider/StoreProvider";
import { getCategories, getMetaTitle } from "@/utils/functions";
import PreloaderCategories from "@/components/Preloaders/PreloaderCategories";
import { store } from "@/store";
import { preload } from "@/store/entities/category";

const title = getMetaTitle("Главная");
const description = "Theme Themelia for Wordpress - Next.js/React SSR";

export const metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <html lang="ru">
      <body>
        <PreloaderCategories categories={categories} />
        <StoreProvider>
          <Header />
          <Workarea>{children}</Workarea>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
