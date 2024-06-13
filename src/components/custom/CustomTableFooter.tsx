import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "../ui/button";

const CustomTableFooter = ({ table }) => {
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <div className="flex gap-1 items-center">
          <span className="font-medium">rows :</span>
          <div>
            <Select onValueChange={(value) => table.setPageSize(Number(value))}>
              <SelectTrigger>
                <SelectValue placeholder="number of rows" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {[5, 10, 15, 20].map((curr, idx) => (
                    <SelectItem key={idx} value={curr.toString()}>
                      {curr}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft />
          </Button>
          <div className="mx-1">
            {table.getState().pagination.pageIndex + 1}-{table.getPageCount()}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </>
  );
};

export default CustomTableFooter;
