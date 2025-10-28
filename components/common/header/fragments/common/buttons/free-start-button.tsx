import Button from "@/components/ui/button";
import { MoveUpLeft } from "lucide-react";
import React from "react";

const StartFreeButton = ({
  hideTextOnMobile,
}: {
  hideTextOnMobile?: boolean;
}) => {
  return (
    <Button
      color="blue"
      prefixIcon={<MoveUpLeft />}
      radius="default"
      size="md"
      variant="default"
      hideTextOnMobile
    >
      رایگان شروع کن
    </Button>
  );
};

export default StartFreeButton;
