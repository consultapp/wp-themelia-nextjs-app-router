import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL("posts", process.env.API_BASE_URL);
  url.searchParams.set("_fields", "id");
  url.searchParams.set("per_page", "100");

  const response = await fetch(url);
  return NextResponse.json(await response.json());
}
