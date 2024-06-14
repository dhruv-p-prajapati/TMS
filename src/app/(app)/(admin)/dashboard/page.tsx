import { getAllSpaces } from "@/actions/spaces";
import { getAllTrainees } from "@/actions/trainees";
import { getAllTrainers } from "@/actions/trainers";
import { DataTable } from "@/components/custom/DataTable";
import { spaceColumns } from "./columns";
import { SpaceCard } from "@/components/custom/SpaceCard";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

const SpacesPage = async () => {
  const space = await getAllSpaces();
  const trainees = await getAllTrainees();
  const trainers = await getAllTrainers();

  // console.log("All the data:");
  // console.log("Spaces:", space);
  // console.log("Trainees:", trainees);
  // console.log("Trainers:", trainers);

  return (
    <>
      <div>
        <h1 className="font-bold text-2xl">Technologies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className=" border border-gray-300 rounded-lg shadow-md p-5 text-center flex items-center justify-center ">
            <Button variant="link" className="text-5xl">
              <CirclePlus width={30} height={30} />
            </Button>
          </div>
          {space.map((individualSpace) => {
            return (
              <SpaceCard
                key={individualSpace._id}
                technology={individualSpace.name}
                trainers={10}
                trainees={30}
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

{
  /* <DataTable data={space} columns={spaceColumns} /> */
}
