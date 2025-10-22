import React from "react";
import Orb from "./elements/orb";

interface IInvestmentProps {
    value: number,
    label: string
}

const InvestmentCard = ({value, label}: IInvestmentProps) => {
  return (
    <article className="relative h-[85px] flex-center gap-4">
      <Orb />
        <p className="text-[44px] font-medium relative inset-1">+{value.toLocaleString("fa-IR")}</p>
        <h4 className="font-bold text-[20px] text-[#0F0F0F] relative inset-1 w-[220.40px]">
    {label}
        </h4>
    </article>
  );
};

export default InvestmentCard;
