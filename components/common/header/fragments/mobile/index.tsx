import React from "react";
import SearchSystem from "../common/search-system";
import Container from "@/components/ui/container";
import Logo from "../desktop/elements/logo";
import Link from "next/link";
import Hamburger from "./elements/hamburger";
import StartFreeButton from "../common/buttons/free-start-button";

const Mobile = () => {
  return (
    <Container as="nav" className="space-y-3 lg:hidden lg:invisible border-b py-2 border-[#E9EAEE]">
      <div className="flex-between">
        <div className="flex-ic gap-4">
          <Hamburger />
            <Logo />
        </div>
        <div className="flex-ic gap-4">
          <StartFreeButton hideTextOnMobile/>
        </div>
      </div>
      <SearchSystem />
    </Container>
  );
};

export default Mobile;
