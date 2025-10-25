import Container from "@/components/ui/container";
import { cssHelpers } from "@/core/lib/helpers/css-helpers";
import clsx from "clsx";
import React, { HTMLAttributes, ReactNode } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const SectionWithBackground = ({ children, ...props }: IProps) => {
  return (
    <section
      className={clsx(
        "min-h-[470px] relative w-full bg-[url('/assets/static/buildings.jpg')] bg-center bg-cover bg-no-repeat",
        props?.className
      )}
    >
      <Container className="relative z-10 h-full pt-30">{children}</Container>

      <div
        className={clsx(
          "absolute w-full -top-38 left-0 z-1 mx-auto right-0 bg-white h-[300px] "
        )}
        style={{
          clipPath: cssHelpers.clipPath.ellipse,
        }}
      ></div>

      <div className="bg-linear-to-t from-primary-shade-700 absolute size-full top-0 right-0 to-[#00183B]/75 inset-0"></div>
    </section>
  );
};
export default SectionWithBackground;
