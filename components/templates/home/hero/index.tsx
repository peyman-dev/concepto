import Container from "@/components/ui/container";
import React from "react";
import Title from "./fragments/title";
import Description from "./fragments/description";
import Buttons from "./fragments/buttons";

const HeroSection = () => {
  return (
    <Container as="section" className="flex-col-center gap-8 mt-[96px]">
      <div className="flex-col-center gap-4 md:gap-6">
        <Title />
        <Description />
      </div>
      <Buttons />
    </Container>
  );
};

export default HeroSection;
