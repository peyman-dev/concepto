import { CalendarDays } from "lucide-react";
import React from "react";

const Footer = ({ author, date }: { author?: string; date?: string }) => {
  return (
    <footer className="flex-between px-5 text-xs text-[#9095AA]">
      <div className="flex-ic gap-1">
        <div className="size-8 rounded-full bg-gradient-to-t from-primary-tint-700 to-primary-tint-500" />
        <p>پیمان احمدی</p>
      </div>

      <div className="flex-ic gap-1">
        <CalendarDays className="size-4.5"/>
        <span>
            1404/08/03
        </span>
      </div>
    </footer>
  );
};

export default Footer;
