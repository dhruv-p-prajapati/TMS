import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { Token } from "./types";
import { hasAccessToURL } from "./lib/utils";



export async function middleware(request: NextRequest) {
  const token = (await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })) as Token;


  if (!token && request.nextUrl.pathname !== "/login") {
    return Response.redirect(new URL("/login", request.nextUrl));
  }
  if (token && request.nextUrl.pathname === "/login") {
    return Response.redirect(new URL("/", request.nextUrl));
  }
  const hasAccess = await hasAccessToURL(request, token?.role);

  if (!hasAccess) {
    return Response.redirect(new URL("/access-denied", request.nextUrl));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
