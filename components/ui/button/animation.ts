import { isMobile } from "@/core/hooks/useIsMobile";
import {
  RIPPLE_FADE_DURATION,
  RIPPLE_SCALE,
  RIPPLE_SIZE,
} from "@/core/ui/button";

interface IRippleProps {
  ripple: HTMLElement;
  x: number;
  y: number;
  isIconButton?: boolean
}
export default function startRippleAnimation({ ripple, x, y, isIconButton }: IRippleProps) {
  const size = RIPPLE_SIZE;
  const halfSize = size / 2;

  ripple.style.left = `${x - halfSize}px`;
  ripple.style.top = `${y - halfSize}px`;
  ripple.style.scale = RIPPLE_SCALE(isIconButton);
  ripple.style.right = "auto";

  setTimeout(() => {
    ripple.style.scale = "0";
  }, RIPPLE_FADE_DURATION);
}
