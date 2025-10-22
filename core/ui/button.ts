import { tv } from "tailwind-variants";

export const ripple = tv({
  base: "absolute size-8  duration-200 transition-all -top-2 -right-2 rounded-full scale-0",
  variants: {
    color: {
      white: "bg-black/10",
      blue: "bg-white/20",
      yellow: "bg-white/20",
      gray: "bg-white/20",
    },
  },
});

export const RIPPLE_SIZE = 32;
export const RIPPLE_SCALE = "6";
export const RIPPLE_FADE_DURATION = 350;
