"use client";
import React from "react";

const useIsMobile = (customWidth: number = 768) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= customWidth) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
  });

  return isMobile;
};

export default useIsMobile;
