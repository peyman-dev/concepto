import { HTMLAttributes, ReactNode } from "react";

export interface IContainerProps  {
  as?: keyof HTMLElementTagNameMap;
  children: ReactNode;
  className?: string
}
