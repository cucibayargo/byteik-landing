import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  // Get the preferred language from the Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") || ""
  const preferredLanguage = acceptLanguage.includes("id") ? "id" : "en"

  // Get the current pathname
  const { pathname } = request.nextUrl

  // If the pathname doesn't include a language prefix, redirect to the preferred language
  if (!pathname.includes("/en/") && !pathname.includes("/id/") && pathname !== "/") {
    const url = request.nextUrl.clone()
    url.pathname = `/${preferredLanguage}${pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
}
