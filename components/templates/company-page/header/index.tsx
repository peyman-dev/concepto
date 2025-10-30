import React from "react";
import CompanyBanner from "./company-banner";
import Information from "./information";

const CompanyHeader = () => {
  return (
    <section className="mt-5 relative">
      <CompanyBanner />
      <Information />
    </section>
  );
};

export default CompanyHeader;
