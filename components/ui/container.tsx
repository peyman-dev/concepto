import { IContainerProps } from "@/core/lib/types";
import clsx from "clsx";
import React from "react";

const Container = ({ as: Component = "div", children, className }: IContainerProps) => {
  return <Component className={clsx("container", className)} >
    {children}
  </Component>;
};

export default Container;
