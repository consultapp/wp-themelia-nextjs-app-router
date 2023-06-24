import LoadingWheel from "@/components/LoadingWheel/LoadingWheel";

export default function CategoriesPlugin({ categories, isLoading }) {
  if (isLoading) {
    return <LoadingWheel />;
  }

  return "category Tree";
}
