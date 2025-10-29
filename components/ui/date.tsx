import { CalendarDays } from "lucide-react";
import React from "react";

const Date = ({ date }: { date: string }) => {
  return (
    <div className="flex-ic gap-2 text-sm text-[#737993]">
      <CalendarDays className="size-5" />
      <p>
        {date}
      </p>
    </div>
  );
};

export default Date;
