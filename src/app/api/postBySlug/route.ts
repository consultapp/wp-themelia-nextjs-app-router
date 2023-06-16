import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug: string = searchParams.get("slug") || "";

  const url = new URL("posts", process.env.API_BASE_URL);
  url.searchParams.set(
    "_fields",
    "id,title,categories,excerpt,date,link,type,slug,modified,content"
  );
  url.searchParams.set("slug", slug);

  const response = await fetch(url);
  const json = await response.json();

  return NextResponse.json(json);
}
