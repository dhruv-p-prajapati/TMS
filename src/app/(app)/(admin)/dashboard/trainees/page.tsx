import { DataTable } from "@/components/custom/DataTable";
import React from "react";
import { traineesColumns } from "./columns";
import { getAllTrainees } from "@/actions/trainees";

const TraineesPage = async () => {
  const trainees = await getAllTrainees()
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl">Trainees</h1>
        <DataTable data={trainees} columns={traineesColumns} />
      </div>
    </>
  );
};

export default TraineesPage;
