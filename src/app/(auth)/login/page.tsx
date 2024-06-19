"use client";

import { Button } from "@/components/ui/button";
import useAuthSession from "@/hooks/useAuthSession";
import { signIn } from "next-auth/react";
import Image from "next/image";

const LoginPage = () => {
  const {isAuthenticated, user, role} = useAuthSession();
  
  const handleLoginGoogle = async () => {
    signIn("google", {
      callbackUrl: "/",
    });
  };

  return (
    <>
      <div className="flex w-screen h-screen flex-col md:flex-row absolute md:static">
        <div className="h-[50%] md:h-full md:w-[65%] border-r-2 flex items-center justify-center">
          <div className="flex justify-center items-center size-full">
            <Image
              src="/images/bacancy-logo.png"
              alt="google"
              width={550}
              height={550}
              priority
            />
          </div>
        </div>
        <div className="h-[50%] md:h-full p-4 py-12 flex flex-col justify-center items-center gap-28 relative bg-primary md:w-[45%]">
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl text-white font-semibold">
                Work With Us.
              </h2>
              <h2 className="text-2xl md:text-3xl text-white font-semibold ">
                Grow With Us.
              </h2>
            </div>
            <Button
              className="bg-white text-foreground border-2 flex items-center justify-center gap-2 hover:bg-white hover:shadow-2xl transition-all absolute top-[-20px] md:static "
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
              <p className="font-bold">Login With Google</p>
            </Button>
          </div>
          {/* <div className="absolute bottom-10">
            <h2 className="text-lg text-white font-medium">
              To the people, For the people.
            </h2>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
