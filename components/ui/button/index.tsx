"use client";
import IButtonProps from "@/core/types/button.type";
import React, { isValidElement, memo, useRef } from "react";
import { tv } from "tailwind-variants";
import { motion } from "framer-motion";
import startRippleAnimation from "./animation";
import { ripple } from "@/core/ui/button";
import useIsMobile from "@/core/hooks/useIsMobile";

const button = tv({
  base: "px-4 flex items-center h-10 select-none relative overflow-hidden rounded-[12px] cursor-pointer! gap-2",
  variants: {
    color: {
      blue: "bg-[#0D6EFD] text-white",
      yellow: "bg-[#FFC51A] text-black",
      white: "bg-white text-black border border-neutral-300",
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

const Button = memo(
  ({
    color,
    className,
    radius,
    size,
    hideTextOnMobile,
    prefixIcon,
    suffixIcon,
    children,
    onClick,
    ...rest
  }: IButtonProps) => {
    const isMobile = useIsMobile();
    const rippleRef = useRef<HTMLSpanElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const RenderContent = () => {

      return (
        <>
          {isValidElement(prefixIcon) && shouldHiddenText &&{prefixIcon}}
          {!shouldHiddenText && children}
          {shouldHiddenText && isValidElement(suffixIcon) && suffixIcon}
        </>
      )
    }

    const shouldHiddenText = isMobile && hideTextOnMobile;
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current || !rippleRef.current) return;

      const buttonRect = buttonRef.current.getBoundingClientRect();
      const { left, top } = buttonRect;

      const x = e.clientX - left;
      const y = e.clientY - top;

      const ripple = rippleRef.current;

      startRippleAnimation({ ripple, x, y, isIconButton: shouldHiddenText });

      onClick?.(e);
    };

    return (
      <motion.button
        ref={buttonRef}
        whileHover={{ scale: 1.05, opacity: 0.95 }}
        whileTap={{ scale: 1 }}
        {...(rest as any)}
        onClick={handleClick}
        className={button({ color, size, radius, className })}
      >
        <span className="*:size-4">{prefixIcon}</span>
        {shouldHiddenText && children ? null : children}
        {!shouldHiddenText && suffixIcon && <span className="*:size-4">{suffixIcon}</span>}
        <span className={ripple({ color })} ref={rippleRef} />
      </motion.button>
    );
  }
);

export default Button;
