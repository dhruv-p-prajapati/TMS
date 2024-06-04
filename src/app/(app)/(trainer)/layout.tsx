import { ReactNode } from "react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="w-full h-screen bg-yellow-300">{children}</div>
    </div>
  );
};

export default AppLayout;
