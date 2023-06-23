"use client";
import { useRef } from "react";
import { store } from "../../store/index";
import { categorySlice } from "@/store/entities/category";

export default function PreloaderCategories({ categories }) {
  const ref = useRef(true);
  if (ref.current) {
    ref.current = false;
    store.dispatch(categorySlice.actions.preload(categories));
  }

  return <></>;
}
