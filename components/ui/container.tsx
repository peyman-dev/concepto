"use client"
import useViewAnimate from "@/core/hooks/useViewAnimate";
import { IContainerProps } from "@/core/lib/types/types";
import clsx from "clsx";
import React from "react";

const Container = ({ as: Component = "div", children, className }: IContainerProps) => {
  const {config,motion} = useViewAnimate()
  const MotionComponent = motion(Component)

  return <MotionComponent {...config} className={clsx("container", className)} >
    {children}
  </MotionComponent>;
};

export default Container;
