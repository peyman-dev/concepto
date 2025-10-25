import React from "react";
import Header from "./elements/header";
import Main from "./elements/main";
import Footer from "./elements/footer";

const ArticleCard = () => {
  return (
    <article className="w-full overflow-hidden relative bg-white h-[418px] rounded-[24px] shadow-lg">
      <Header />
      <Main
        label="تجارت الکترونیک"
        title="اسنپ رکورد خود را با بیش از ۵ میلیون سفر روزانه شکست"
        href="/articles/test"
        description="در ماه پایانی سال ۱۴۰۲، اسنپ رکورد ۵ میلیون و ۱۳۹ هزار و ۶۵ سفر روزانه در سرویس خودرو و باکس را زد. این رکورد در روز چهارشنبه، دوم اسفند، ثبت شد."
      />
      <Footer />
    </article>
  );
};

export default ArticleCard;
