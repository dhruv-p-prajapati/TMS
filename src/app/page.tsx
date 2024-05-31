"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const session = useSession();
  const router = useRouter();

  return (
    <>
      <div>
        <Button
          onClick={() => {
            signOut();
            router.push("/login");
          }}
        >
          logout
        </Button>
      </div>
    </>
  );
}
