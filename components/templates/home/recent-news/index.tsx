import ArticleCard from "@/components/common/cards/article-card";
import SectionWithBackground from "@/components/common/section-with-background";
import Slider from "@/components/common/slider";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function RecentNews() {
  return (
    <SectionWithBackground className="my-40">
      <div className="flex-between text-white">
        <div>
          <h4 className="text-[24px] font-bold">تازه‌ترین اخبار</h4>
        </div>
        <Link href={"/articles"} className="flex-ic gap-1">
          <span>مشاهده همه</span>
          <ChevronLeft className="size-4" />
        </Link>
      </div>
      <div className="absolute h-[425px]! w-full top-[150%]">
        <Slider
          className=" pb-1"
          useAutoplay
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
          slidesPerView={1}
          spaceBetween={24}
        >
          {Array.from({ length: 10 }).map((_, index) => {
            return <ArticleCard key={index} />;
          })}
        </Slider>
      </div>
    </SectionWithBackground>
  );
}
