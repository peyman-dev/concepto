import React from "react";

interface IProps {
  label: string;
  value: number | string;
}

const DetailCard = ({ label, value }: IProps) => {
  return (
    <div className="h-[67px] space-y-1 flex flex-col justify-between select-none cursor-pointer hover:shadow-md duration-150 border border-neutral-100 p-2 rounded-lg">
      <p className="text-xs font-semibold text-[#444859]">{label}</p>
      <div className="text-sm text-[#0D6EFD]">
        <strong>
          {typeof value === "number"
            ? Number(value).toLocaleString("fa-IR")
            : value}
        </strong>
      </div>
    </div>
  );
};

export default DetailCard;
