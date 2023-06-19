import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const text: string = searchParams.get("s") || "";

  const regexp = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
  const url = new URL("search", process.env.API_BASE_URL);
  url.searchParams.set("per_page", process.env.SEARCH_PER_PAGE || "5");
  url.searchParams.set("_fields", "title,url,subtype");
  url.searchParams.set("search", text.replaceAll(regexp, ""));

  const response = await fetch(url);
  const json = await response.json();

  return NextResponse.json(
    json.map((item: any) => ({
      url: item.subtype + item.url.replace(process.env.SITE_BASE_URL, ""),
      title: item.title,
    }))
  );
}
// https://consultapp.ru/wp-json/wp/v2/search?per_page=10&search=1c
