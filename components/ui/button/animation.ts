interface IRippleProps {
    ripple: HTMLElement;
    x: number;
    y: number;
  }
export default function startRippleAnimation({
  ripple,
  x,
  y,
}: IRippleProps) {
  const size = 32;
  const halfSize = size / 2;

  ripple.style.left = `${x - halfSize}px`;
  ripple.style.top = `${y - halfSize}px`;
  ripple.style.scale = "5";
  ripple.style.right = "auto";

  setTimeout(() => {
    ripple.style.scale = "0";
  }, 350);
}
