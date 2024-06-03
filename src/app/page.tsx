"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <>
      <div>
        <Button
          onClick={() => {
            signOut({
              callbackUrl: "/login",
            });
          }}
        >
          logout
        </Button>
      </div>
    </>
  );
}
