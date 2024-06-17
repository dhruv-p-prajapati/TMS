import { LogOut } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const LogOutButton = () => {
  return (
    <Button
      size="icon"
      className="size-8 bg-slate-100"
      variant="outline"
      onClick={() => {
        signOut({
          callbackUrl: "/login",
        });
      }}
    >
      <LogOut strokeWidth={2} width={22} height={22} />
    </Button>
  );
};

export default LogOutButton;
