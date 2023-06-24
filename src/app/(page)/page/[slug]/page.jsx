import React from "react";
import Page from "@/components/Page/Page";
import { getMetaTitle, getPageBySlug } from "@/utils/functions";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const page = await getPageBySlug(slug);

  if (!page || !page.length) {
    return;
  }

  const { title } = page[0];

  const renderTitle = getMetaTitle(title?.rendered || "");
  return {
    title: renderTitle,
    openGraph: {
      title: renderTitle,
    },
  };
}

export default async function PagePage({ params }) {
  const { slug } = params;
  const page = await getPageBySlug(slug);

  return <Page page={page[0] || {}} />;
}
