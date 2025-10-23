import { IInstructionProps } from "@/core/types/types";
import Image from "next/image";
import React from "react";
import { tv } from "tailwind-variants";

const Card = (props: IInstructionProps) => {
  const instruction = tv({
    base: "w-full sm:w-[392px] h-21 md:h-[138px] rounded-[32px] text-primary-tint-100 relative flex justify-center",
    variants: {
      level: {
        "1": "bg-primary-tint-100",
        "2": "bg-primary-tint-500",
        "3": "bg-primary-tint-700",
      },
    },
  });
  return (
    <div
      className={instruction({
        level: props.level,
      })}
    >
        <Image
          unoptimized
          unselectable="on"
          src={props.imageSource}
          width={1000}
          height={1000}
          alt={props.label}
          className="md:w-[307px]! w-[173.6px] h-[128.8px ] absolute bottom-0 md:h-[225px]!"
        />
      {/* </div> */}
    </div>
  );
};

export default Card;
