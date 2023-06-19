import { getPageBySlugApi } from "@/app/api/pageBySlug/route";
import { getPostBySlugApi } from "@/app/api/postBySlug/route";
import { getPostByPostIndexApi } from "@/app/api/postsByPageIndex/route";
import { getPostsCountApi } from "@/app/api/postsCount/route";

export function trimLinkReadNext(str) {
  const regex = /<a.*entry-more-link.*\/a>/gi;
  const result = str.replace(regex, "");

  return result;
}

export async function getPostsByPageIndex(pageIndex = 1) {
  if (typeof window === "undefined") {
    return await getPostByPostIndexApi(pageIndex);
  }

  const response = await fetch(
    `${window.location.origin}/api/postsByPageIndex?page=${pageIndex}`
  );
  return await response.json();
}

export async function getPostsBySlug(slug) {
  if (typeof window === "undefined") {
    return await getPostBySlugApi(slug);
  }

  const response = await fetch(`/api/postBySlug?slug=${slug}`);
  return await response.json();
}

export async function getPagesCount() {
  if (typeof window === "undefined") {
    return await getPostsCountApi();
  }

  const response = await fetch("/api/postsCount");
  return await response.json();
}

export async function getPageBySlug(slug) {
  if (typeof window === "undefined") {
    return await getPageBySlugApi(slug);
  }
  const response = await fetch(`/api/pageBySlug?slug=${slug}`);
  return await response.json();
}

export async function searchByText(text) {
  if (!text && !typeof window) return;

  const regexp = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
  const response = await fetch(`/api/search?s=${text.replaceAll(regexp, "")}`);
  return await response.json();
}
