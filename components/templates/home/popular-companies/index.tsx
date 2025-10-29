"use client";
import PopularCompany from "@/components/common/cards/popular-company";
import SectionWithBackground from "@/components/common/section-with-background";
import Slider from "@/components/common/slider";
import companies from "@/core/constants/companies";
import useIsMobile from "@/core/hooks/useIsMobile";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const PopularCompanies = () => {
  const isMobile = useIsMobile();
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
      <div className="absolute w-full top-[150%] h-[410px]">
        <Slider
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          useAutoplay
          useArrows
          spaceBetween={24}
          slidesPerView={1}
        >
          {companies.map((company, i) => (
            <PopularCompany key={company.slug} />
          ))}
        </Slider>
      </div>
    </SectionWithBackground>
  );
};

export default PopularCompanies;
