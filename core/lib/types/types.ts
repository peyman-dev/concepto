import { HTMLAttributes, ReactNode } from "react";
type InstructionLevel = "1" | "2" | "3";

export interface IInstructionProps  {
  level: InstructionLevel;
  imageSource: string,
  label: string
}


export interface IContainerProps  {
  as?: keyof HTMLElementTagNameMap;
  children: ReactNode;
  className?: string
}
