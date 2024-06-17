import { getAllSpaces } from "@/actions/spaces";
import { DataTable } from "@/components/custom/DataTable";
import { spaceColumns } from "./columns";

const SpacesPage = async () => {
  const space = await getAllSpaces();

  
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl">Technologies</h1>
        <div>
        
        </div>
      </div>
    </>
  );
};

export default SpacesPage;
