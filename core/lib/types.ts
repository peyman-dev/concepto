import { ReactNode } from "react";

export interface IContainerProps {
  as?: keyof HTMLElementTagNameMap;
  children: ReactNode;
}
