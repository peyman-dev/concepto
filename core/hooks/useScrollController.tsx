"use client";
import { useState, useEffect } from "react";

const useScrollController = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setIsScrolled(position > 0); // You can adjust the threshold if needed, e.g., position > 100
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollPosition, isScrolled };
};

export default useScrollController;
