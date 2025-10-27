import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { ReactNode } from "react";
import { tv } from "tailwind-variants";

const ButtonsProvider = ({
  children,
  swiper,
  useArrows,
}: {
  children: ReactNode;
  swiper: any;
  useArrows?: boolean;
}) => {
  const button = tv({
    base: "absolute z-10 cursor-pointer border border-neutral-100 text-2xl text-black size-[50px]! bg-white flex-center rounded-full top-0 bottom-0 my-auto",
    variants: {
      position: {
        right: "left-[-5%]",
        left: "right-[-5%]",
      },
    },
  });

  if (useArrows)
    return (
      <>
        <button
          onClick={() => {
            swiper?.current?.slideNext();
          }}
          className={button({ position: "right" })}
        >
          <ChevronLeft className="size-4.5" />
        </button>
        {children}
        <button
          onClick={() => swiper?.current?.slidePrev()}
          className={button({ position: "left" })}
        >
          <ChevronRight className="size-4.5" />
        </button>
      </>
    );
  else return children;
};

export default ButtonsProvider;
