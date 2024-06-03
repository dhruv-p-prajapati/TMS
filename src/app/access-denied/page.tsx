import { Button } from "@/components/ui/button";
import Image from "next/image";

const AccessDeniedPage = () => {
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
            Sorry You Can't have access to this Page
          </h2>
        </div>
        <Button className="mt-4">Go Back</Button>
      </div>
    </div>
  );
};

export default AccessDeniedPage;
