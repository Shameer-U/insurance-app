import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const proxy = async (req: NextRequest) => {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = req.nextUrl;

  // If unauthenticated user tries to access page other than login, redirect to /login
  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  //If authenticated user visits login page or (/), redirect to /forms
  if (token && ["/", "/login"].includes(pathname)) {
    return NextResponse.redirect(new URL("/forms", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/login", "/forms/:path*"],
};
