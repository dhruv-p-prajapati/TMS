"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const handleLoginGoogle = async () => {
    signIn("google", {
      callbackUrl: "/",
    });
  };

  return (
    <>
      <div className="flex w-screen h-screen">
        <div className="w-[65%] border-r-2 flex items-center justify-center">
          <div className=" flex flex-col justify-center items-center relative">
            <Image
              src="/images/bacancy-logo.png"
              alt="google"
              width={800}
              height={800}
            />
            <div className="absolute bottom-[5rem]">
              <h2 className="text-2xl font-medium text-primary">
                Training Management System
              </h2>
            </div>
          </div>
        </div>
        <div className="w-[45%] p-4 py-12 flex flex-col justify-center items-center gap-28 relative bg-primary">
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <h2 className="text-3xl text-white font-semibold">
                Work With Us.
              </h2>
              <h2 className="text-3xl text-white font-semibold ">
                Grow With Us.
              </h2>
            </div>
            <Button
              className="bg-white text-foreground border flex items-center justify-center gap-4 hover:bg-white hover:shadow-2xl transition-all"
              size="lg"
              onClick={handleLoginGoogle}
            >
              <div className="size-8">
                <Image
                  src="/images/google-icon.png"
                  alt="google"
                  width={100}
                  height={100}
                />
              </div>
              <p className="font-semibold">Login With Google</p>
            </Button>
          </div>
          <div className="absolute bottom-10">
            <h2 className="text-lg text-white font-medium">
              To the people, For the people.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
