import React, { ReactNode } from "react";

const ArrowsHandler = ({
  children,
  swiper,
  hasButtons,
}: {
  children: ReactNode;
  hasButtons?: boolean;
  swiper?: any;
}) => {
  return (
    <>
      <button className="absolute z-10 text-black size-40 bg-white border-4 rounded-full left-0 top-0 bottom-0 my-auto">
        بعدی
      </button>
      {children}
   
    </>
  );
};

export default ArrowsHandler;
