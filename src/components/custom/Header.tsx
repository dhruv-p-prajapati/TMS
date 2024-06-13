"use client";

import { LogOut, Settings } from "lucide-react";
import Link from "next/link";
import CustomAvatar from "./CustomAvatar";
import useAuthSession from "@/hooks/useAuthSession";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import LogOutButton from "./LogOut";

const Header = () => {
  const { user, role } = useAuthSession();

  return (
    <div className="p-2 mb-4 flex items-center justify-between bg-slate-100 rounded border">
      <div className="flex gap-2 items-center">
        <h1 className="font-bold text-xl">Welcome {user?.name}</h1>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <Link href="/settings" className="p-1 rounded border bg-white">
          <Settings strokeWidth={2} height={20} width={20} />
        </Link>
        <div>
          <CustomAvatar
            image={user?.image}
            username={role === "admin" ? "TMS ADMIN" : user?.name}
          />
        </div>
        <LogOutButton/>
      </div>
    </div>
  );
};

export default Header;
