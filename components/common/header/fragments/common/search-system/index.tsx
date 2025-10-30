"use client";
import Input from "@/components/ui/input";
import useSearchStore from "@/core/stores/search-store";
import { Search } from "lucide-react";
import React from "react";

const SearchSystem = () => {
  const {
    isTyping,
    isWrittedSomething,
    searchQuery,
    setIsTyping,
    setSearchQuery,
  } = useSearchStore();

  const  handleChange = (e: any) => {
    setSearchQuery(e.target.value);
  }

  return (
    <>
      <Input
        className="w-full md:w-[439px]! **:[.input-card]:w-[439px]! mx-0"
        prefixIcon={<Search className="size-5" />}
        placeholder="جستجو کنید"
        onChange={handleChange}
        value={searchQuery}
        onBlur={() => setIsTyping(false)}
        onFocus={() => setIsTyping(true)}   
      />
    </>
  );
};

export default SearchSystem;
