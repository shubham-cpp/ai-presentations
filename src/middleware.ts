import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

const publicRoutes = ["/sign-in", "/privacy", "/"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPublicRoute = publicRoutes.includes(pathname);

  if (isPublicRoute) {
    return NextResponse.next();
  }

  const res = await fetch(`${request.nextUrl.origin}/api/auth/get-session`, {
    headers: {
      cookie: request.headers.get("cookie") || "", // Forward the cookies from the request
    },
  });

  const session = await res.json();
  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // runtime: "nodejs",
  // matcher: ["/dashboard"], // Apply middleware to specific routes
  matcher: ["/((?!_next/static|_next/image|api|robots.txt|sitemap.xml|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"], // Apply middleware to specific routes
};
