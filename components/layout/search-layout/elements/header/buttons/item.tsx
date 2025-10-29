import React, { JSX } from "react";
import { tv } from "tailwind-variants";

const ButtonItem = ({label, onClick,Icon}: {label: string, onClick: () => void,Icon: JSX.Element}) => {
  const btn = tv({
    base: "cursor-pointer px-3 py-3 text-[#5B6176] font-medium",
  });
  return (
    <button onClick={onClick} className={btn({className: "flex-ic hover:text-neutral-900! duration-150 gap-2"})}>
        {Icon}
        {label}
    </button>
  );
};

export default ButtonItem;
