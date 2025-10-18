import Container from "@/components/ui/container";
import React from "react";
import Logo from "./elements/logo";
import Input from "@/components/ui/input";
import { Search } from "lucide-react";
import Button from "@/components/ui/button";

const Desktop = () => {
  return (
    <Container as="nav" className="flex-between pt-6">
      <div className="flex-ic gap-6">
        <Logo />
        <Input className="w-[439px]" prefixIcon={<Search className="size-5"/>} placeholder="جستجو کنید" />
      </div>
      <div>
        <Button>
          Hello World
        </Button>
      </div>
    </Container>
  );
};

export default Desktop;
