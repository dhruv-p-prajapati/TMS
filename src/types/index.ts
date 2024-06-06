import { UserRole } from "@/constants/enums";
import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

/** Single LinkItem Type */
export type LinkItem = {
  label: string;
  slug: string;
  icon: React.ReactNode;
};

/**Links Type in which key must be of one of the UserRole*/
export type Links = {
  [key in UserRole]?: LinkItem[];
};

/** Token Type */
export type Token = JWT & {
  role: UserRole;
};

/** Extending "next-auth" module to add custom field role as UserRole */
declare module "next-auth" {
  interface Session {
    user: {
      role: UserRole;
    } & DefaultSession["user"];
  }
}
