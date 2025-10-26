import SectionHeader from "@/components/common/section-header";
import Slider from "@/components/common/slider";
import Container from "@/components/ui/container";
import React from "react";
import OpportunityCard from "./fragments/opportunity-card/";

const CareerOpportunities = () => {
  return (
    <Container as="section" className="my-[347px]">
      <SectionHeader title="فرصت‌های شغلی" />

      <div className="mt-16">
        <Slider
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
          spaceBetween={24}
          useArrows
        >
          {Array.from({ length: 20 }).map((_) => (
            <OpportunityCard />
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default CareerOpportunities;
