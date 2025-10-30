"use client";
import Button from "@/components/ui/button";
import { redirect, RedirectType } from "next/navigation";
import React from "react";

const RedirectButton = () => {
  const handleBackClick = async () => {
    await redirect("/", RedirectType.push);
  };
  return <Button className="z-32523523532532! relative" color="blue" onClick={() => handleBackClick()}>بازگشت به صفحه اصلی</Button>;
};

export default RedirectButton;
