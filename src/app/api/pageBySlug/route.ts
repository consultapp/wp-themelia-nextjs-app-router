import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug: string = searchParams.get("slug") || "";

  return NextResponse.json(await getPageBySlugApi(slug));
}

export async function getPageBySlugApi(slug: string) {
  const url = new URL("pages", process.env.API_BASE_URL);
  const fields = `id,title,content,date,link,slug,modified,author`;
  url.searchParams.set("_fields", fields);
  url.searchParams.set("slug", slug);

  const response = await fetch(url);

  return await response.json();
}
