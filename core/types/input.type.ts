import React, { ReactNode } from "react";
import clsx from "clsx";

interface IVariants {}
type ISize = "sm" | "md" | "lg" | "xl";

export interface InputComponentCustomProps {
  variant?: IVariants;
  inputSize?: ISize;
  color?: string; // اگر می‌خوای این prop جایگزین native باشه، بهتر نامشو تغییر بدی
  prefixIcon?: ReactNode;
  popoverTargetAction?: string;
}

export type InputComponentProps = React.InputHTMLAttributes<HTMLInputElement> & InputComponentCustomProps;
