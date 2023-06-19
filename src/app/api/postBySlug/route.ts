import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug: string = searchParams.get("slug") || "";

  return NextResponse.json(await getPostBySlugApi(slug));
}

export async function getPostBySlugApi(slug: string) {
  const url = new URL("posts", process.env.API_BASE_URL);
  url.searchParams.set(
    "_fields",
    "id,title,categories,excerpt,date,link,type,slug,modified,content"
  );
  url.searchParams.set("slug", slug);

  const response = await fetch(url);
  return await response.json();
}
