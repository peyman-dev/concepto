import { Verified } from "lucide-react";
import React from "react";

const CompanyName = ({
  name,
  isVerified,
}: {
  name: string;
  isVerified?: boolean;
}) => {
  return (
    <div>
      {" "}
      <h2 className="text-[24px]  font-extrabold inline-flex items-center gap-2">
        <span>{name}</span>
        {isVerified && (
          <Verified className="fill-primary-shade-100 size-8 stroke-white" />
        )}
      </h2>
    </div>
  );
};

export default CompanyName;
