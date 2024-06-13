'use client'

import { TSpace } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const spaceColumns: ColumnDef<TSpace>[] = [
    {
      accessorKey: "name",
      header: () => <div className="font-bold">Spaces</div>,
    },

  ]