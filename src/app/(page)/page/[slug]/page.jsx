import React from "react";
import Page from "@/components/Page/Page";

export default async function PagePage({ params }) {
  const { slug } = params;
  const page = await getPageBySlug(slug);

  return <Page page={page} />;
}
