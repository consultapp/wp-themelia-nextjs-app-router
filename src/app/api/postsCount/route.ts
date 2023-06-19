import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(await getPostsCountApi());
}

export async function getPostsCountApi() {
  const url = new URL("posts", process.env.API_BASE_URL);
  url.searchParams.set("_fields", "id");
  url.searchParams.set("per_page", "100");

  const response = await fetch(url);
  return await response.json();
}
