"use client";
import { useState, useEffect } from "react";
import CategoriesPlugin from "../../components/Plugins/Categories";
import { useSelector } from "react-redux";
import { selectCategoryTree } from "@/store/entities/category/selectors";

export default function CategoryContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const categories = useSelector(selectCategoryTree);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return <CategoriesPlugin categories={categories} isLoading={isLoading} />;
}
