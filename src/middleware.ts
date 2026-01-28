import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const auth = req.cookies.get("auth")?.value;
  const pathname = req.nextUrl.pathname;

  // BLOK SEMUA ADMIN & TURUNANNYA
  if (pathname.startsWith("/admin")) {
    if (!auth) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
