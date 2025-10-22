"use client";
import IButtonProps from "@/core/lib/types/button.type";
import React, { memo, useRef } from "react";
import { tv } from "tailwind-variants";
import { m, motion } from "motion/react";
import startRippleAnimation from "./animation";
import { ripple } from "@/core/ui/button";

const Button = ({
  color,
  className,
  radius,
  size,
  ...motionProps
}: IButtonProps) => {
  const rippleRef = useRef<HTMLButtonElement | null>(null);
  const buttonRef = useRef(null);
  const button = tv({
    base: "px-4 flex items-center h-10 select-none relative overflow-hidden rounded-[12px] cursor-pointer gap-2",
    variants: {
      color: {
        blue: "bg-[#0D6EFD] text-white",
        yellow: "bg-[#FFC51A] text-black",
        white: "bg-white text-black border-2 border-black",
        gray: "bg-[#2E303B] text-white",
      },
      size: {
        lg: "h-[56px] text-[18px]",
        sm: "h-[48px]",
        md: "h-[40px]",
        xs: "h-[32px]",
      },
      radius: {
        default: "rounded-[12px]",
        lg: "rounded-[16px]",
        full: "rounded-full",
      },
      variant: {
        outlined: "border",
      },
    },
  });



  const handleClick = (e: any) => {
    if (!buttonRef.current || !rippleRef.current) return;

    const button: HTMLButtonElement = buttonRef.current;
    const buttonRect = button.getBoundingClientRect();
    const { left, top } = buttonRect;

    const x = e.clientX - left;
    const y = e.clientY - top;

    const ripple = rippleRef.current;

    startRippleAnimation({ ripple, x, y }); // Starting Ripple Animation

    if (typeof motionProps.onClick === "function") {
      motionProps.onClick(e);
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      whileHover={{ scale: 1.05, opacity: 0.95 }}
      whileTap={{ scale: 1 }}
      onClick={handleClick}
      {...(motionProps as any)}
      className={
        // ClassNames
        button({ color, size, radius })
      }
    >
      <span className="*:size-4">{motionProps?.prefixIcon}</span>
      {motionProps.children}
      <span className="*:size-4">{motionProps?.suffixIcon}</span>
      <span
        className={ripple({
          color,
        })}
        ref={rippleRef}
      />
    </motion.button>
  );
};

export default memo(Button);
