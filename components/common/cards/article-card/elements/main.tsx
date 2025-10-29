import React from "react";

interface IProps {
  label: string;
  title: string;
  href: string;
  description: string;
}

const Main = ({ href, label, title, description }: IProps) => {
  return (
    <main className="p-5 space-y-4">
      <div className="space-y-1">
        <p className="text-[#737993] text-xs font-bold">{label}</p>
        <h5 className="font-bold text-[#444859] text-base">{title}</h5>
      </div>
      <div>
        <p className="text-sm line-clamp-3 text-justify text-[#5B6176]">
            {description}
        </p>
      </div>
    </main>
  );
};

export default Main;
