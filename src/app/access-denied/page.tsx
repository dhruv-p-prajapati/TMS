"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AccessDeniedPage = () => {
  const router = useRouter()
  return (
    <div className="flex justify-center items-center size-full">
      <div className="flex flex-col items-center">
        <Image
          alt="access-denied"
          src="/images/access-denied.jpg"
          width={450}
          height={450}
        />
        <div>
          <h2 className="font-bold text-center text-sm md:text-lg text-primary">
            Sorry you cant have access to this page
          </h2>
        </div>
        <Button className="mt-4" onClick={() => router.back()}>Go Back</Button>
      </div>
    </div>
  );
};

export default AccessDeniedPage;
