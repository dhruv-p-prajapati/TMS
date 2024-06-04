import { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen bg-slate-300">
      {children}
    </div>
  );
};

export default AppLayout;
