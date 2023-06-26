import LoadingWheel from "@/components/LoadingWheel/LoadingWheel";
import Link from "next/link";
import { useMemo } from "react";

function displayCategolyLevel(cats, first) {
  return (
    <ul className={first ? "" : "children"}>
      {Object.values(cats)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((item) => {
          return (
            <li className="cat-item" key={item.id}>
              <Link href={item.link}>{item.name}</Link>
              {item.childs && displayCategolyLevel(item.childs, false)}
            </li>
          );
        })}
    </ul>
  );
}

export default function CategoriesPlugin({ categories, isLoading }) {
  const jsx = useMemo(
    () => displayCategolyLevel(categories, true),
    [categories]
  );

  if (isLoading) {
    return <LoadingWheel />;
  }
  console.log("categories", categories);
  console.log("jsx", jsx);

  return (
    <section id="categories-2" className="widget widget_categories">
      <h3 className="widget-title font-headlines">
        <span className="wrap">Рубрики</span>
      </h3>
      {jsx}
    </section>
  );
}
