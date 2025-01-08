import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const locales = ["en", "bn"] as const;
export const defaultLocale = "en";

type Locale = (typeof locales)[number];

// Get the user's preferred locale
function getLocale(request: NextRequest): Locale {
  const languageCookie = request.cookies.get("preferred-locale");
  if (languageCookie && locales.includes(languageCookie.value as Locale)) {
    return languageCookie.value as Locale;
  }

  const acceptLanguage = request.headers
    .get("accept-language")
    ?.split(",")[0]
    .split("-")[0];

  if (acceptLanguage && locales.includes(acceptLanguage as Locale)) {
    return acceptLanguage as Locale;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const pathname = nextUrl.pathname;

  // Handle root path specifically
  if (pathname === "/") {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}`, nextUrl));
  }

  // Check if the pathname starts with a valid locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and api routes
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
