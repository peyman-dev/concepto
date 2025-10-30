import Button from "@/components/ui/button";
import { ArrowLeft, EllipsisVertical, Plus } from "lucide-react";
import React from "react";

const Buttons = () => {
  return (
    <div className="flex-ic gap-3 justify-end">
        <Button prefixIcon={<Plus />} variant="outlined" color="blue">
            دنبال کردن
        </Button>
      <Button color="white" suffixIcon={<ArrowLeft />}>
        اطلاعات بیشتر
      </Button>
      <Button color="white" prefixIcon={<EllipsisVertical />} />
    </div>
  );
};

export default Buttons;
