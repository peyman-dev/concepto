import { IContainerProps } from "@/core/lib/types";
import React from "react";

const Container = ({ as: Component = "div", children }: IContainerProps) => {
  return <Component className="container">
    {children}
  </Component>;
};

export default Container;
