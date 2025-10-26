import { cssHelpers } from "@/core/lib/helpers/css-helpers";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="h-[138px] rounded-smooth relative w-full overflow-hidden  flex-center!">
      <Image
        src="/assets/static/snappbox.jpg"
        width={1000}
        height={138}
        alt="CompanyName"
      />
    </header>
  );
};

export default Header;
