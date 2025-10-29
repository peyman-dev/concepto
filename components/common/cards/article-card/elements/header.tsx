import { cssHelpers } from "@/core/lib/helpers/css-helpers";
import React from "react";

const Header = () => {
  return (
    <header  className="overflow-hidden flex-center rounded-smooth relative w-full h-[154px]!  ">
        <img src="/assets/static/snappbox.jpg" className="max-h-[184px] w-full object-cover" alt="" />
    </header>
  );
};

export default Header;
