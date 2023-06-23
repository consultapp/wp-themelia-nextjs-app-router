import { getCategories, getMetaTitle } from "@/utils/functions";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const categories = await getCategories();
  const category = categories.filter((item) => item.slug === slug.at(-1));

  if (!category.length) {
    return;
  }

  const { name, description } = category[0];

  return {
    title: getMetaTitle(name),
    description: description,
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = params;
  const categories = await getCategories();
  const category = categories.filter((item) => item.slug === slug.at(-1));

  if (!category || !category.length) {
    return notFound();
  }
  console.log("slug", slug);

  return categories.map((item) => {
    return <div key={item.id}>{item.name}</div>;
  });
}
