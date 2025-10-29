'use client'; // Add this if using Next.js App Router (recommended for client components)

import { InputComponentProps } from "@/core/types/input.type";
import clsx from "clsx";
import React, { isValidElement } from "react";

const Input = ({
  prefixIcon,
  className,
  ...inputProps
}: InputComponentProps) => {
  const hasPrefix = isValidElement(prefixIcon);

  return (
    <div className="relative flex items-center input-card min-w-[200px] min-h-[48px]">
      {hasPrefix && (
        <div className="absolute left-10 top-0 bottom-0 my-auto flex items-center cursor-pointer z-10">
          {prefixIcon}
        </div>
      )}
      <input
        {...inputProps}
        className={clsx(
          "h-12 w-full rounded-[12px] bg-[#E9EAEE] placeholder:text-sm transition-all duration-150 outline-none focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-2",
          hasPrefix ? "pl-12 pr-4" : "px-4",
          className
        )}
      />
    </div>
  );
};

export default Input;