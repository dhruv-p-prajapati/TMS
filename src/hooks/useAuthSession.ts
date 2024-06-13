"use client";

import { useSession } from "next-auth/react";

const useAuthSession = () => {
  const session = useSession();
  const isAuthenticated = session?.status === "authenticated" ? true : false;
  const user = session?.data?.user;
  const role = session?.data?.user?.role;
  return {isAuthenticated, user, role};
};

export default useAuthSession;
