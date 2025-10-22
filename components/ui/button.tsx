"use client";
import IButtonProps from "@/core/lib/types/button.type";
import React, { useRef } from "react";
import { tv } from "tailwind-variants";
import { m, motion } from "motion/react";

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
    base: "px-4 flex items-center h-10 select-none relative overflow-hidden rounded-sm cursor-pointer gap-2",
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
        default: "rounded-[6px]",
        lg: "rounded-[16px]",
        full: "rounded-full",
      },
      variant: {
        outlined: "border",
      },
    },
  });

  const ripple = tv({
    base: "absolute size-8  duration-250 transition-all -top-2 -right-2 rounded-full scale-0",
    variants: {
      color: {
        white: "bg-black/10",
        blue: "bg-white/20",
        yellow: "bg-white/20",
        gray: "bg-white/20",
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
    const size = 32;
    const halfSize = size / 2;

    ripple.style.left = `${x - halfSize}px`;
    ripple.style.top = `${y - halfSize}px`;
    ripple.style.scale = "8";
    ripple.style.right = "auto";

    setTimeout(() => {
      ripple.style.scale = "0";
    }, 350);

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
      <span
        className={ripple({
          color,
        })}
        ref={rippleRef}
      />
    </motion.button>
  );
};

export default Button;
