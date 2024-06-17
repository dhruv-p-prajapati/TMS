'use client'

import { TUser } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const trainersColumns: ColumnDef<TUser>[] = [
    {
      accessorKey: "name",
      header: () => <div className="font-bold">Spaces</div>,
    },

  ]