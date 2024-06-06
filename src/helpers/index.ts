import { NextRequest } from "next/server";
import { PrivateRoutes, PublicRoutes } from "../constants/routes";
import { UserRole } from "../constants/enums";

export const hasAccessToURL = async (req: NextRequest, role: UserRole) => {
  if (PublicRoutes.includes(req.nextUrl.pathname)) return true;
  const accessibleRoute = PrivateRoutes[role];
  return accessibleRoute.includes(req.nextUrl.pathname);
};
