import Posts from "@/components/Posts/Posts";
import {
  getCategories,
  getMetaTitle,
  getPostsByCategory,
} from "@/utils/functions";
import { notFound } from "next/navigation";
import CategoryHeader from "@/components/CategoryHeader/CategoryHeader";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const categories = await getCategories();
  const category = categories.filter(
    (item) => item.slug === slug.at(-1).toLowerCase()
  );
  if (!category || !category.length) {
    return notFound();
  }
  const { name, description } = category[0];
  const title = getMetaTitle(name);

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = params;

  const categories = await getCategories();
  const category = categories.filter(
    (item) => item.slug === slug.at(-1).toLowerCase()
  );

  if (!category || !category.length) {
    return notFound();
  }
  const { id, name, description } = category[0];
  const posts = await getPostsByCategory(id);

  return (
    <>
      <CategoryHeader title={name || ""} description={description || ""} />
      <Posts posts={posts} />
    </>
  );
}
