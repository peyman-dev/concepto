import { IInstructionProps } from "../types/types";

interface InstructionItemType extends IInstructionProps {
  id: string | number;
}

const instructions: InstructionItemType[] = [
    {
        id: crypto.randomUUID(),
        imageSource: "/assets/static/instruction-1.png",
        label: "شرکت‌های مورد علاقت رو پیدا کن",
        level: "1"
    },
    {
        id: crypto.randomUUID(),
        imageSource: "/assets/static/instruction-2.png",
        label: "کسب و کارهای مناسب رو پیدا کن",
        level: "2"
    },
    {
        id: crypto.randomUUID(),
        imageSource: "/assets/static/instruction-3.png",
        label: "با کسب و کارها ارتباط بگیر",
        level: "3"
    },
    
]

export default instructions