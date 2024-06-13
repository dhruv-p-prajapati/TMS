import { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen">
      {children}
    </div>
  );
};

export default AppLayout;
