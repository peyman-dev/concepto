import Container from "@/components/ui/container";
import React from "react";
import Instruction from "./instruction";
import { IInstructionProps } from "@/core/lib/types/types";
import instructions from "@/core/constants/instructions";



const Instructions = () => {

  return <Container as="section" className="grid grid-cols-3 gap-6">
   {instructions.map((instruction) => <Instruction {...instruction} key={instruction.id}/>)}
  </Container>;
};

export default Instructions;
