import { getCategoriesApi } from "@/utils/server-functions";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(await getCategoriesApi());
}
