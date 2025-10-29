"use client";
import React, { Children, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderType } from "./lib/slider.type";
import "swiper/css";
import Container from "@/components/ui/container";
import ButtonsProvider from "./fragments/buttons-provider";
import { Autoplay } from "swiper/modules";
import clsx from "clsx";



const Slider = ({ children, className, useAutoplay,useArrows, ...props }: SliderType) => {
  const swiperRef = useRef<any>(null);

  return (
    <Container as="section" className={clsx("relative h-full!", className)}>
      <ButtonsProvider swiper={swiperRef} useArrows={useArrows}>
        <Swiper
        className={clsx("h-full!")}
          {...props}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay]}
          autoplay={useAutoplay}
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
