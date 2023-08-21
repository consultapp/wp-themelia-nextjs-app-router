import { getPostsByCategoryApi } from "@/utils/server-functions";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  return NextResponse.json(getPostsByCategoryApi(id));
}

// https://consultapp.ru/wp-json/wp/v2/posts?categories=38
