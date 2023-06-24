import "@/css/index.css";
import "@/css/unsemantic.css";
import Workarea from "@/components/Workarea/Workarea";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StoreProvider from "@/components/StoreProvider/StoreProvider";
import { getMetaTitle } from "@/utils/functions";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <StoreProvider>
          <Header />
          <Workarea>{children}</Workarea>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
