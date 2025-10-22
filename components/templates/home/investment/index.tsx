import Container from "@/components/ui/container";
import React from "react";
import InvestmentCard from "./investment-card";

const Investment = () => {
  return <Container as="section" className="grid grid-cols-3 gap-6 mt-40">
    <InvestmentCard value={Number(Math.floor(Math.random() * 144))} label="شرکت فعال"/>
    <InvestmentCard value={Number(Math.floor(Math.random() * 144))} label="میلیارد تومان سرمایه گذاری"/>
    <InvestmentCard value={Number(Math.floor(Math.random() * 144))} label="سرمایه گذار"/>
  </Container>;
};

export default Investment;
