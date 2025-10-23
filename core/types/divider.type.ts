import { HTMLAttributes } from "react";

interface DividerType extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";

}

export default DividerType;
