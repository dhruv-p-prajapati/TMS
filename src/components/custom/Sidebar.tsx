"use client";
import { UserRole } from "@/constants/enums";
import { SidebarLinks } from "@/constants/links";
import useAuthSession from "@/hooks/useAuthSession";
import { LinkItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathName = usePathname();
  const {isAuthenticated ,user, role} = useAuthSession();

  return (
    <div className="h-full w-auto p-4 px-3 bg-white shadow-xl">
      <div className=" flex items-center justify-center mb-8">
        <Image
          alt="logo"
          src="/images/bacancy-favicon.png"
          width={40}
          height={40}
        />
      </div>
      <div className="flex flex-col gap-2">
        {SidebarLinks[role as UserRole]?.map((link: LinkItem, idx: number) => (
          <Link
            key={idx}
            href={link.slug}
            className={`flex flex-col items-center justify-center size-12  rounded  duration-300 ${
              pathName === link.slug
                ? "bg-primary text-white"
                : "hover:bg-orange-200"
            }`}
          >
            <div>{link.icon}</div>
            <p className="text-[10px] font-semibold">{link.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
