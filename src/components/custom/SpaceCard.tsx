import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

interface SpaceCardProps {
  technology: string;
  trainers: number;
  trainees: number;
  image: string;
}

export function SpaceCard({
  technology,
  trainers,
  trainees,
  image,
}: SpaceCardProps) {
  // console.log(image);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="bg-gray-100  border border-gray-300 rounded-lg shadow-md p-5 text-center flex flex-row items-center ">
          <div className="flex justify-center size-10">
            <Image
              src={image}
              alt={`${technology} logo`}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </div>
          <Button variant="link" className="text-md">{technology}</Button>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-72 p-4 border border-gray-200 bg-white shadow-lg rounded-md">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">
          Technology: {technology}
        </h3>
        <div className="flex justify-between items-center">
          <div className="text-left">
            <p className="text-sm font-medium text-gray-600">Trainers</p>
            <p className="text-lg font-bold text-gray-800">{trainers}</p>
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-gray-600">Trainees</p>
            <p className="text-lg font-bold text-gray-800">{trainees}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
