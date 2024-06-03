import type { NextRequest } from "next/server";
import { hasAccessToURL } from "./utils/helpers";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const token = cookies().get("next-auth.session-token")?.value;

  if (!token && request.nextUrl.pathname !== "/login") {
    return Response.redirect(new URL("/login", request.nextUrl));
  }

  if (token && request.nextUrl.pathname === "/login") {
    return Response.redirect(new URL("/", request.nextUrl));
  }

  const hasAccess = await hasAccessToURL(token!, request);
  console.log({hasAccess});
  
  if (!hasAccess) {
    return Response.redirect(new URL("/access-denied", request.nextUrl));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
