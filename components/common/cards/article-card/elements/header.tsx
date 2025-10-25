import { cssHelpers } from "@/core/lib/helpers/css-helpers";
import React from "react";

const Header = () => {
  return (
    <header  className="overflow-hidden flex-center relative w-full h-[194px]  ">
        <img src="/assets/static/snappbox.jpg" className=" object-cover" alt="" />
        <span className="w-[130%] h-[150%] absolute -bottom-14 rounded-[40%] border-b-60 border-white"></span>
    </header>
  );
};

export default Header;
