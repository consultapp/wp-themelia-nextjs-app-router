import { getPostByCategoriesApi } from "@/utils/functions";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  return NextResponse.json(getPostByCategoriesApi(id));
}

// https://consultapp.ru/wp-json/wp/v2/posts?categories=38
