import Container from "@/components/ui/container";
import React from "react";
import Logo from "./elements/logo";
import Input from "@/components/ui/input";
import { LogIn, MoveUpLeft, Search } from "lucide-react";
import Button from "@/components/ui/button/";
import Navigation from "./elements/navigation";
import SearchSystem from "./../common/search-system/";
import StartFreeButton from "../common/buttons/free-start-button";

const Desktop = () => {
  return (
    <Container as="nav" className="lg:visible lg:block hidden invisible">
      <div className="flex-between pt-6 mx-auto">
        <div className="flex-ic gap-6">
          <Logo />
          <SearchSystem />
        </div>
        <div className="flex-ic gap-4">
          <StartFreeButton />
          <Button prefixIcon={<LogIn />} color="white" size="md">
            ورود / ثبت نام
          </Button>
        </div>
      </div>
      <Navigation />
    </Container>
  );
};

export default Desktop;
