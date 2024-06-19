import { getAllSpaces } from "@/actions/spaces";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { AddSpaceDialog } from "./components/AddSpaceDialog";
import { SpaceCard } from "./components/SpaceCard";

const SpacesPage = async () => {
  const space: any = await getAllSpaces();

  return (
    <>
      <div>
        <h1 className="font-bold text-2xl pb-5">Technologies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AddSpaceDialog>
            <div className=" border border-gray-300 rounded-lg shadow-md p-5 text-center flex items-center justify-center">
              <Button variant="link" className="text-5xl">
                <CirclePlus width={30} height={30} />
              </Button>
            </div>
          </AddSpaceDialog>
          {space.map((individualSpace: any) => {
            return (
              <SpaceCard
                key={individualSpace?._id}
                technology={individualSpace.name}
                spaceId={individualSpace._id}
                image={individualSpace.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SpacesPage;
