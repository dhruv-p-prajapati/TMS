import { JWT, decode } from "next-auth/jwt";
import { NextRequest } from "next/server";
import { PrivateRoutes, PublicRoutes } from "../constants/route";

export const hasAccessToURL = async (token: string, req: NextRequest) => {
  const user = await decode({
    token: token,
    secret: process.env.NEXTAUTH_SECRET!,
  });

  if (PublicRoutes.includes(req.nextUrl.pathname)) return true;
  const accessibleRoute = PrivateRoutes[user?.role];  
  return accessibleRoute.includes(req.nextUrl.pathname);
};
