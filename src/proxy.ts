import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Proxy (pengganti middleware)
 * Akan dijalankan di setiap request sesuai matcher
 */
export default function proxy(req: NextRequest) {
  const auth = req.cookies.get("auth")?.value;
  const pathname = req.nextUrl.pathname;

  // 🔒 PROTECT SEMUA ROUTE /admin
  if (pathname.startsWith("/admin")) {
    if (!auth) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

/**
 * Tentukan route mana saja yang kena proxy
 */
export const config = {
  matcher: ["/admin/:path*"],
};
