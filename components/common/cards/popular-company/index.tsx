import React from "react";
import Header from "./elements/header";
import Company from "./elements/main/company";
import DetailCard from "./elements/main/detail-card";
import AboutCompany from "./elements/main/about-company";
import CompanyLocation from "./elements/footer/company-location";

const PopularCompany = () => {
  return (
    <article className="w-full flex flex-col justify-between  h-[400px] border border-neutral-50 shadow-sm bg-white rounded-[24px] overflow-hidden">
      <Header />
      <main className="p-4 space-y-4">
        <Company />

        <div className="grid grid-cols-2 gap-2">
          <DetailCard label="مخاطبین جدید" value={4324} />
          <DetailCard label="سرمایه گذاران جدید" value={234} />
        </div>

        <AboutCompany />
      </main>
      <footer className="px-4 pb-[18px] mt-auto">
        <CompanyLocation />
      </footer>
    </article>
  );
};

export default PopularCompany;
