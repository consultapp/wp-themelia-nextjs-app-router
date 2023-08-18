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

export async function getPostByCategoriesApi(id) {
  const url = new URL("posts", process.env.API_BASE_URL);
  url.searchParams.set("per_page", "100");
  url.searchParams.set(
    "_fields",
    "id,title,categories,excerpt,date,link,type,slug,modified"
  );
  url.searchParams.set("categories", id);

  const response = await fetch(url);
  const data = await response.json();
  return data;
}
