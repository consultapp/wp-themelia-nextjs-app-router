import { Inter } from "next/font/google";

import AppLayout from "../AppLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ConsultApp.ru",
  description:
    "Автоматизация бизнес-процессов, сопровождение информационных систем. Комплексный подход к ИТ решает многие вопросы бизнеса.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="canonical" href="https://consultapp.ru/"></link>
      <body className={inter.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
