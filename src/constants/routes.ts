import { UserRole } from "./enums";

type PrivateRouteConfig = {
  [key in UserRole]: string[];
};

export const PrivateRoutes: PrivateRouteConfig = {
  [UserRole.ADMIN]: [
    "/dashboard",
    "/dashboard/spaces",
    "/dashboard/trainees",
    "/dashboard/trainers",
  ],
  [UserRole.TRAINER]: ["/trainer-dashboard"],
  [UserRole.TRAINEE]: ["/projects", "/trainee-dashboard"],
};
export const PublicRoutes: string[] = ["/access-denied", "/", "/login"];
