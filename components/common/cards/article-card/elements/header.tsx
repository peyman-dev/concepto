import { cssHelpers } from "@/core/lib/helpers/css-helpers";
import React from "react";

const Header = () => {
  return (
    <header  className="overflow-hidden flex-center rounded-smooth relative w-full h-[194px]  ">
        <img src="/assets/static/snappbox.jpg" className=" object-cover" alt="" />
    </header>
  );
};

export default Header;
