"use client"
import { IInstructionProps } from "@/core/types/types";
import React from "react";
import Card from "./elements/card";
import { motion } from "motion/react";

const Instruction = (props: IInstructionProps) => {
  return (
    <motion.article whileHover={{scale: 1.05}} className="space-y-4">
      <Card {...props} />
      <p className="text-center font-bold text-sm md:text-[20px]">{props.label}</p>
    </motion.article>
  );
};

export default Instruction;
