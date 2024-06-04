import { Sidebar } from "@/components/Sidebar";
import { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <div className="h-screen">
      <Sidebar/>
      </div>
      <div className="w-full h-screen bg-blue-300 overflow-y-auto">{children}</div>
    </div>
  );
};

export default AppLayout;
