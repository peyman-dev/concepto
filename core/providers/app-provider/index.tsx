"use client";
import SearchLayout from "@/components/layout/search-layout";
import React from "react";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SearchLayout />
      {children}
    </>
  );
};

export default AppProvider;
