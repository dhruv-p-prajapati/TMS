import { JWT, decode } from "next-auth/jwt";
import { NextRequest } from "next/server";
import { PrivateRoutes, PublicRoutes } from "../constants/route";
import { cookies } from "next/headers";

export const getRole = async () => {
  const token = cookies().get("next-auth.session-token")?.value;
  const user = await decode({
    token: token,
    secret: process.env.NEXTAUTH_SECRET!,
  });
  return user;
};

export const hasAccessToURL = async (req: NextRequest) => {
  const {role} = await getRole();
  if (PublicRoutes.includes(req.nextUrl.pathname)) return true;
  const accessibleRoute = PrivateRoutes[role];
  return accessibleRoute.includes(req.nextUrl.pathname);
};
