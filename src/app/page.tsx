"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  console.log(session);
  
  return <>
   <div>
     <Button onClick={() => signOut()}>logout</Button>
   </div>
  </>;
}
