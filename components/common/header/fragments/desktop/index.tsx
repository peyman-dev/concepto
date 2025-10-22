import Container from "@/components/ui/container";
import React from "react";
import Logo from "./elements/logo";
import Input from "@/components/ui/input";
import { LogIn, MoveUpLeft, Search } from "lucide-react";
import Button from "@/components/ui/button";
import Navigation from "./elements/navigation";

const Desktop = () => {
  return (
    <Container as="nav">
      <div className="flex-between pt-6 mx-auto">
        <div className="flex-ic gap-6">
          <Logo />
          <Input
            className="w-[439px]"
            prefixIcon={<Search className="size-5" />}
            placeholder="جستجو کنید"
          />
        </div>
        <div className="flex-ic gap-4">
          <Button
            color="blue"
            prefixIcon={<MoveUpLeft />}
            radius="default"
            size="md"
            variant="default"
          >
            رایگان شروع کن
          </Button>
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
