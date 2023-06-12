export function trimLinkReadNext(str) {
  const regex = /<a.*entry-more-link.*\/a>/gi;
  const result = str.replace(regex, "");

  return result;
}

const words = ["mobile", "iphone", "android"];
export function isMobile() {
  // const userAgent = window ? window.navigator.userAgent.toLowerCase() : false;

  // return words.reduce(
  //   (acc, word) => (userAgent.includes(word) ? true : acc),
  //   false
  // );
  return false;
}

export async function fetchPostsApi({
  postId = 0,
  slug = "",
  pageIndex = 1,
  loadFull = true,
}) {
  const url = new URL("posts", process.env.API_BASE_URL);

  const fields = `id,title,categories,excerpt,date,link,type,slug,modified${
    loadFull ? ",content" : ""
  }`;
  url.searchParams.set("_fields", fields);

  if (!postId && !slug && pageIndex) {
    url.searchParams.set("page", pageIndex);
    url.searchParams.set("per_page", process.env.POSTS_PER_PAGE);
  }
  if (postId) url.searchParams.set("include", postId);
  if (slug) url.searchParams.set("slug", slug);

  const response = await fetch(url);
  return await response.json();
}
