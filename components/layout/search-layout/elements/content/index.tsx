import React, { ReactNode } from "react";

const Content = ({ children }: { children: ReactNode }) => {
  return <div className="mt-15 container w-full h-[70dvh] overflow-auto bg-white rounded-[24px] shadow-lg">
    {children}
  </div>;
};

export default Content;
