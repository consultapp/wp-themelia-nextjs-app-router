"use client";

import { useSelector } from "react-redux";
import { selectCategoryEntities } from "@/store/entities/category/selectors";
import { useEffect, useState } from "react";
import LoadingWheel from "@/components/LoadingWheel/LoadingWheel";

export default function CategoriesPlugin() {
  const [state, setState] = useState(true);
  const categories = useSelector(selectCategoryEntities);
  useEffect(() => {
    setState(false);
  }, []);

  if (state) {
    return <LoadingWheel />;
  }

  return categories.map((item) => <div key={item.id}>{item.name}</div>);
}
