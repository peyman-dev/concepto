import React from "react";

const Description = ({ content }: {
    content: string
}) => {
  return (
    <div className="text-[#737993] font-light">
      <p className="line-clamp-2">
        {content}
      </p>
    </div>
  );
};

export default Description;
