"use client";

import CustomAvatar from "@/components/custom/CustomAvatar";
import { TUser } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const traineesColumns: ColumnDef<TUser>[] = [
  {
    accessorKey: "imgUrl",
    header: () => <div className="font-bold">Avatar</div>,
    cell: ({ row }) => (
      <div>
        <CustomAvatar
          image={row.original.imgUrl}
          username={row.original.name}
        />
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: () => <div className="font-bold">Name</div>,
    cell: ({ row }) => <div>{row.original.name}</div>,
  },
  {
    accessorKey: "email",
    header: () => <div className="font-bold">Email</div>,
    cell: ({ row }) => <div>{row.original.email}</div>,
  },
  {
    accessorKey: "role",
    header: () => <div className="font-bold">Role</div>,
    cell: ({ row }) => <div>{row.original.role}</div>,
  },
  {
    accessorKey: "space",
    header: () => <div className="font-bold">Space</div>,
    cell: ({ row }) => (
      <div>{row.original.space ? row.original.space : "Not Assigned"}</div>
    ),
  },
];
