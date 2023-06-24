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

export async function getCategories(slug) {
  if (typeof window === "undefined") {
    return await getCategoriesApi(slug);
  }
  const response = await fetch(`/api/categories`);
  return await response.json();
}

export async function getPageBySlugApi(slug) {
  const url = new URL("pages", process.env.API_BASE_URL);
  const fields = `id,title,content,date,link,slug,modified,author`;
  url.searchParams.set("_fields", fields);
  url.searchParams.set("slug", slug);

  const response = await fetch(url);

  return await response.json();
}

export async function getPostBySlugApi(slug) {
  const url = new URL("posts", process.env.API_BASE_URL);
  url.searchParams.set(
    "_fields",
    "id,title,categories,excerpt,date,link,type,slug,modified,content"
  );
  url.searchParams.set("slug", slug);

  const response = await fetch(url);
  return await response.json();
}

export async function getPostByPageIndexApi(pageIndex) {
  const url = new URL("posts", process.env.API_BASE_URL);
  url.searchParams.set("per_page", process.env.POSTS_PER_PAGE || "");
  url.searchParams.set(
    "_fields",
    "id,title,categories,excerpt,date,link,type,slug,modified,content"
  );
  url.searchParams.set("pageIndex", pageIndex);

  const response = await fetch(url);
  return await response.json();
}

export async function getPostsCountApi() {
  const url = new URL("posts", process.env.API_BASE_URL);
  url.searchParams.set("_fields", "id");
  url.searchParams.set("per_page", "100");

  const response = await fetch(url);
  return await response.json();
}

export async function getCategoriesApi() {
  const url = new URL("categories", process.env.API_BASE_URL);
  url.searchParams.set(
    "_fields",
    "slug,id,taxonomy,parent,name,description,count,link"
  );
  url.searchParams.set("per_page", "100");

  const response = await fetch(url);
  return await response.json();
}
