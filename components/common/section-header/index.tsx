import Divider from "@/components/ui/divider";
import Link from "next/link";
import React from "react";

interface IProps {
  title: string;
  link?: {
    title: string;
    url: string;
  };
}

const SectionHeader = ({ link, title }: IProps) => {
  return (
    <div className="grow w-full gap-4 flex-between">
      <h3 className="text-[#737993] min-w-max text-2xl font-bold">
        {title}
      </h3>
    
    <Divider 
        orientation="horizontal"
    />

      {link && <Link href={link.url}>{link.title}</Link>}
    </div>
  );
};

export default SectionHeader;
