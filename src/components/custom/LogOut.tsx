import { LogOut } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const LogOutButton = () => {
  return (
    <Button
      size="icon"
      className="size-7"
      variant="outline"
      onClick={() => {
        signOut({
          callbackUrl: "/login",
        });
      }}
    >
      <LogOut strokeWidth={2} width={20} height={20} />
    </Button>
  );
};

export default LogOutButton;
