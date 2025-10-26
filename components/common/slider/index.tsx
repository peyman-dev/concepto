"use client";
import React, { Children, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderType } from "./lib/slider.type";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/container";
import ButtonsProvider from "./fragments/buttons-provider";

const Slider = ({ children, useArrows, ...props }: SliderType) => {
  const swiperRef = useRef<any>(null);


  return (
    <Container as="section" className="relative">
      <ButtonsProvider swiper={swiperRef} useArrows={useArrows}>
        <Swiper
          {...props}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="relative"
        >
          {Children.map(children, (child, i) => (
            <SwiperSlide key={i}>{child}</SwiperSlide>
          ))}
        </Swiper>
      </ButtonsProvider>
    </Container>
  );
};

export default Slider;