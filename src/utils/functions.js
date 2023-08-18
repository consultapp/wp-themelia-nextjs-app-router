import {
  getCategoriesApi,
  getPageBySlugApi,
  getPostByPageIndexApi,
  getPostBySlugApi,
  getPostsCountApi,
} from "./server-functions";

export function trimLinkReadNext(str) {
  const regex = /<a.*entry-more-link.*\/a>/gi;
  const result = str.replace(regex, "");

  return result;
}

export function clearStringForParams(text) {
  const regexp = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;

  return text.replaceAll(regexp, "").toLowerCase();
}

export function getMetaTitle(title, clear = false) {
  return clear ? title : `${title} | ${process.env.MAIN_TITLE}`;
}

export async function searchByText(text) {
  if (!text && !typeof window) return;

  const response = await fetch(`/api/search?s=${clearStringForParams(text)}`);
  return await response.json();
}

export async function getPostsByPageIndex(pageIndex = 1) {
  if (typeof window === "undefined") {
    return await getPostByPageIndexApi(pageIndex);
  }

  const response = await fetch(`/api/postsByPageIndex?page=${pageIndex}`);
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

export async function getCategories(slug) {
  if (typeof window === "undefined") {
    return await getCategoriesApi(slug);
  }
  const response = await fetch(`/api/categories`);
  return await response.json();
}
