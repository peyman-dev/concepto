import ArticleCard from "@/components/common/cards/article-card";
import PopularCompany from "@/components/common/cards/popular-company";
import SectionWithBackground from "@/components/common/section-with-background";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const PopularCompanies = () => {
  return (
    <SectionWithBackground className="my-40">
      <div className="flex-between text-white">
        <div>
          <h4 className="text-[24px] font-bold">شرکت های محبوب</h4>
        </div>
        <Link href={"/companies?filter=popular"} className="flex-ic gap-1">
          <span>مشاهده همه</span>
          <ChevronLeft className="size-4" />
        </Link>
      </div>
      <div className="absolute w-full top-[150%]">
        <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4  h-full gap-6!">
          <PopularCompany />
          <PopularCompany />
          <PopularCompany />
          <PopularCompany />
        </div>
      </div>
    </SectionWithBackground>
  );
};

export default PopularCompanies;
