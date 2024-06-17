import { DataTable } from "@/components/custom/DataTable";
import { trainersColumns } from "./columns";
import { getAllTrainers } from "@/actions/trainers";

const TrainersPage = async () => {
  const trainers = await getAllTrainers();
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl">Trainers</h1>
        <DataTable data={trainers} columns={trainersColumns} />
      </div>
    </>
  );
};

export default TrainersPage;
