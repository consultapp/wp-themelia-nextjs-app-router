import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pageIndex = searchParams.get("pageIndex") || "1";

  const url = new URL("posts", process.env.API_BASE_URL);
  url.searchParams.set("per_page", process.env.POSTS_PER_PAGE || "");
  url.searchParams.set(
    "_fields",
    "id,title,categories,excerpt,date,link,type,slug,modified,content"
  );
  url.searchParams.set("pageIndex", pageIndex);

  const response = await fetch(url);
  return NextResponse.json(await response.json());
}
