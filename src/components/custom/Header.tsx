"use client";

import { Settings } from "lucide-react";
import Link from "next/link";
import CustomAvatar from "./CustomAvatar";
import useAuthSession from "@/hooks/useAuthSession";
import LogOutButton from "./LogOut";

const Header = () => {
  const { user, role } = useAuthSession();

  return (
    <div className="p-2 mb-4 flex items-center justify-end">
      <div className="flex gap-3 items-center justify-center">
        <Link href="/settings" className="p-1 rounded border bg-slate-100">
          <Settings strokeWidth={2} height={22} width={22} />
        </Link>
        <div>
          <CustomAvatar
            image={user?.image}
            username={role === "admin" ? "TMS ADMIN" : user?.name}
          />
        </div>
        <LogOutButton />
      </div>
    </div>
  );
};

export default Header;
