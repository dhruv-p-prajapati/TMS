"use client";
import { links } from "@/utils/constants/links";
import { getRole } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Sidebar() {
  const role = "trainee";
  const pathName = usePathname();

  return (
    <div className="h-full w-auto p-2 bg-white">
      <div className=" flex items-center justify-center mb-4">
        <Image
          alt="logo"
          src="/images/bacancy-favicon.png"
          width={40}
          height={40}
        />
      </div>
      <div className="flex flex-col gap-2">
        {links[role].map((link, idx: number) => (
          <Link
            key={idx}
            href={link.slug}
            className={`flex flex-col items-center justify-center size-16  rounded  duration-300 ${
              pathName === link.slug
                ? "bg-primary text-white"
                : "hover:bg-orange-200"
            }`}
          >
            <div>{link.icon}</div>
            <p className="text-xsm font-semibold">{link.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
