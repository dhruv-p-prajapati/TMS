import Header from "@/components/custom/Header";
import { Sidebar } from "@/components/custom/Sidebar";
import { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <div className="h-screen">
        <Sidebar />
      </div>
      <div className="w-full h-screen p-2 overflow-y-auto">
        <Header />
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
