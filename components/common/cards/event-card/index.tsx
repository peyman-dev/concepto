import React from "react";
import EventImage from "./elements/event-image";
import { tv } from "tailwind-variants";
import Location from "@/components/ui/location";
import Date from "@/components/ui/date";
import Description from "./elements/description";
import Title from "./elements/title";

const event = tv({
  slots: {
    card: "h-[208px] border border-[#CBCED7] flex items-ic gap-6 rounded-[24px] overflow-hidden",
    content:
      "h-full text-start w-full flex justify-between pl-10 flex-col pt-8 pb-6",
    footer: "grow max-h-max text-sm flex-between",
  },
});

const EventCard = () => {
  const { card, content, footer } = event();

  return (
    <article className={card()}>
      <EventImage />
      <div className={content()}>
        <Title text="بوت کمپ برنامه نویسی دیجی کالا" />
        <Description
          content=" در این دوره شما بر اساس سرفصل‌های تعیین شده توسط اساتید منتخب
      دیجی‌کالا، بوژان و کوئرا آموزش می‌بینید و در نهایت امکان استخدام در
      دیجی‌کالا را خواهید داشت"
        />
        <div className={footer()}>
          <Location location="تهران, ایران" />
          <Date date="6 آبان 1404" />
        </div>
      </div>
    </article>
  );
};

export default EventCard;
