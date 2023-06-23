import { getPostByPageIndexApi } from "@/utils/functions";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pageIndex = searchParams.get("pageIndex") || "1";

  return NextResponse.json(getPostByPageIndexApi(pageIndex));
}
