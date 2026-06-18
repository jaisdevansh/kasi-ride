import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET || "supersecretdevelopmentkey" });
  const { pathname } = req.nextUrl;

  // Protect Admin Routes
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
    // RBAC: Verify Role Server-Side
    if (token.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", req.url)); // Forbidden
    }
  }

  // Protect Customer Dashboard Routes
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};
