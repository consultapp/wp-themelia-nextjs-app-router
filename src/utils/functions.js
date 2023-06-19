export function trimLinkReadNext(str) {
  const regex = /<a.*entry-more-link.*\/a>/gi;
  const result = str.replace(regex, "");

  return result;
}

export async function getPostsByPageIndex(pageIndex = 1) {
  const url = new URL("/api/postsByPageIndex", process.env.SITE_URL);
  url.searchParams.set("page", pageIndex);

  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export async function getPostsBySlug(slug) {
  const url = new URL("/api/postBySlug", process.env.SITE_URL);
  url.searchParams.set("slug", slug);

  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export async function getPagesCount() {
  const url = new URL("/api/postsCount", process.env.SITE_URL);

  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export async function getPageBySlug(slug) {
  const url = new URL("/api/pageBySlug", process.env.SITE_URL);
  url.searchParams.set("slug", slug);

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function searchByText(text) {
  if (!text) return;

  const regexp = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
  const url = new URL("/api/search", process.env.SITE_URL);
  url.searchParams.set("s", text.replaceAll(regexp, ""));

  const response = await fetch(url);
  const data = await response.json();

  return data;
}
