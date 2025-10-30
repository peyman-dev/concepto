"use client";
import useSearchStore from "@/core/stores/search-store";
import { tv } from "tailwind-variants";
import { motion } from "framer-motion";
import Header from "./elements/header";
import useScrollController from "@/core/hooks/useScrollController";
import Suggestions from "./elements/suggestions";
import { useEffect } from "react";
import Content from "./elements/content";

const HEADER_HEIGHT = "150px";

const SearchLayout = () => {
  const isUsingSearch = useSearchStore((state) => state.isWrittedSomething());
  const { isFullScreen, setIsFullScreen } = useSearchStore();
  const { isScrolled } = useScrollController();

  const layout = tv({
    base: "bg-[#F3F5F6] fixed inset-x-0 border-t border-neutral-300 w-full z-50 overflow-auto",
  });

  useEffect(() => {
    if (isScrolled) {
      setIsFullScreen(true);
    } else {
      setIsFullScreen(false);
    }
  }, [isScrolled]);

  return (
    <motion.section
      initial={false}
      animate={{
        y: isUsingSearch ? 0 : "90%",
        opacity: isUsingSearch ? 1 : 0,
        minHeight: isUsingSearch
          ? isScrolled || isFullScreen
            ? "100dvh"
            : `calc(100dvh - ${HEADER_HEIGHT})`
          : "90vh",
        top: isUsingSearch
          ? isScrolled || isFullScreen
            ? 0
            : HEADER_HEIGHT
          : "auto",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      }}
      className={layout()}
    >
      <Header />
      <Content>
        <Suggestions />
      </Content>
    </motion.section>
  );
};

export default SearchLayout;
  