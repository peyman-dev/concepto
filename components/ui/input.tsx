import { InputComponentProps } from "@/core/lib/types/input.type";
import clsx from "clsx";
import React, { isValidElement } from "react";

const Input = (props: InputComponentProps) => {
  const hasPrefix = isValidElement(props.prefixIcon);
  return (
    <div className="relative flex-ic min-w-max min-h-[48px]">
      <div className="absolute text-neutral-400! z-1 size-5 top-0 bottom-0 my-auto right-4">
        {props?.prefixIcon}
      </div>
      <input
        {...props}
        className={clsx(
          "h-12 absolute size-full top-0 right-0 rounded-[12px] placeholder:text-sm  focus-within:ring-2 ring-offset-2 ring-blue-500/40 duration-150 transition-all outline-none! bg-[#E9EAEE]",
          props.className, hasPrefix ? "px-10" : "px-4"
        )}
      />
    </div>
  );
};

export default Input;
