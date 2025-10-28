import React from "react";

const Title = ({ text }: { text: string }) => {
  return (
    <h5 className="font-bold text-[#444859] text-[20px]">
      {text}
    </h5>
  );
};

export default Title;
