import { HTMLAttributes, ReactNode } from "react";

type ISize = "xs" | "sm" | "lg" | "md";
type IRadius = "default" | "lg" | "full";
type IVariant =
  | "default"
  | "icon"
  | "outlined"
  | "ghost"
  | "rounded-full"
  | "ghost-rounded-full";
type IColors = "yellow" | "blue" | "white" | "gray";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  hideTextOnMobile?: boolean;
  size?: ISize;
  radius?: IRadius;
  variant?: IVariant;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  color?: IColors;
}

export default IButtonProps;
