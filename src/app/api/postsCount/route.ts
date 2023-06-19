import { getPostsCountApi } from "@/utils/functions";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(await getPostsCountApi());
}
