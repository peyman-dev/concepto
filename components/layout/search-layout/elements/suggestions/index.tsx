"use client";
import SearchSystem from "@/components/common/header/fragments/common/search-system";
import useScrollController from "@/core/hooks/useScrollController";
import useSearchStore from "@/core/stores/search-store";
import { Flag } from "lucide-react";
import React from "react";
import SuggestionItem from "./suggestion-item";

const Suggestions = () => {
  const { isScrolled } = useScrollController();
  const isFullScreen = useSearchStore((state) => state.isFullScreen);
  return (
    <div className="mt-5 container w-full min-h-[60dvh]  bg-white rounded-[24px] shadow-lg">
      <div className="border-b py-5.5 *:px-5 w-full  border-neutral-300 flex-between">
        <div className=" max-w-max flex-ic gap-2  text-[#444859] font-bold text-xl">
          <Flag />
          <span>پیشنهاد ها</span>
        </div>
        {(isScrolled || isFullScreen) && <SearchSystem />}
      </div>
      <div>
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
        <SuggestionItem />
      </div>
    </div>
  );
};

export default Suggestions;
