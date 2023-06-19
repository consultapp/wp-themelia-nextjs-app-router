import { getPostBySlugApi } from "@/utils/functions";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug: string = searchParams.get("slug") || "";

  return NextResponse.json(await getPostBySlugApi(slug));
}
