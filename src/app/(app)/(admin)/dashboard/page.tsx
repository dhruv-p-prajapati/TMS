import { getAllSpaces } from "@/actions/spaces";
import { getAllTrainees } from "@/actions/trainees";
import { getAllTrainers } from "@/actions/trainers";
import { DataTable } from "@/components/custom/DataTable";
import { spaceColumns } from "./columns";

const SpacesPage = async () => {
  const space = await getAllSpaces();
  const trainees = await getAllTrainees();
  const trainers = await getAllTrainers();

  console.log({space,trainees,trainers});
  

  return (
    <>
      <div>
        <h1 className="font-bold text-2xl">Technologies</h1>
        <div>
          <DataTable data={space} columns={spaceColumns} />
        </div>
      </div>
    </>
  );
};

export default SpacesPage;
