export function trimLinkReadNext(str) {
  const regex = /<a.*entry-more-link.*\/a>/gi;
  const result = str.replace(regex, "");

  return result;
}

const words = ["mobile", "iphone", "android"];
export function isMobile() {
  const userAgent = window ? window.navigator.userAgent.toLowerCase() : false;

  return words.reduce(
    (acc, word) => (userAgent.includes(word) ? true : acc),
    false
  );
}

export async function getPostsByPageIndex(pageIndex = 1) {
  const url = new URL("posts", process.env.API_BASE_URL);

  const fields =
    "id,title,categories,excerpt,date,link,type,slug,modified,content";
  url.searchParams.set("_fields", fields);

  url.searchParams.set("page", pageIndex);
  url.searchParams.set("per_page", process.env.POSTS_PER_PAGE);

  const response = await fetch(url);
  return await response.json();
}

export async function getPostsBySlug(slug) {
  const url = new URL("posts", process.env.API_BASE_URL);

  const fields =
    "id,title,categories,excerpt,date,link,type,slug,modified,content";
  url.searchParams.set("_fields", fields);
  url.searchParams.set("slug", slug);

  const response = await fetch(url);
  return await response.json();
}

export async function getPagesCount() {
  const url = new URL("posts", process.env.API_BASE_URL);
  url.searchParams.set("_fields", "id");
  url.searchParams.set("per_page", "100");

  const response = await fetch(url);
  return await response.json();
}
