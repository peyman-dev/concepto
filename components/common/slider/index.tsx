"use client";
import React, { Children } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { SliderType } from "./lib/slider.type";
import "swiper/css";
import ArrowsHandler from "./fragments/arrows-handler";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/container";

const Slider = ({ children, useArrows, ...props }: SliderType) => {
  const swiper = useSwiper();

  return (
    <Container as="section" className="relative">
           <button className="absolute z-10 cursor-pointer border border-neutral-100 text-2xl text-black size-[50px]! bg-white flex-center rounded-full left-[105%] top-0 bottom-0 my-auto">
        <ChevronRight className="size-4.5" />
      </button>
      <Swiper {...props} className="relative!">
        <ArrowsHandler hasButtons={useArrows} swiper={swiper}>
          {Children.map(children, (child, i) => (
            <SwiperSlide key={i}>{child}</SwiperSlide>
          ))}
        </ArrowsHandler>
      </Swiper>
      <button className="absolute z-10 cursor-pointer border border-neutral-100 text-2xl text-black size-[50px]! bg-white flex-center rounded-full right-[105%] top-0 bottom-0 my-auto">
        <ChevronLeft className="size-4.5" />
      </button>
    </Container>
  );
};

export default Slider;
