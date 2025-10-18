import IButtonProps from "@/core/lib/types/button.type";
import clsx from "clsx";
import React from "react";

const Button = (props: IButtonProps) => {
  return <button {...props} 
    className={clsx("cursor-pointer", props?.className)}
  />;
};

export default Button;
