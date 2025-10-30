import Breadcrumb from "@/components/common/breadcrumb";
import CompanyBanner from "@/components/templates/company-page/company-banner";
import CompanyHeader from "@/components/templates/company-page/header";
import Information from "@/components/templates/company-page/information";
import Container from "@/components/ui/container";
import { Building2, LucideMegaphone } from "lucide-react";
import React from "react";

const page = async ({ params }: { params: { company: string } }) => {
  const { company } = params;

  const links = [
    {
      href: "/companies",
      name: "کمپانی ها",
      icon: <Building2 className="size-4" />,
      value: "companies",
    },
    {
      href: `/companies/${company}`,
      name: `دیجی‌کالا`,
      value: company,
      icon: <LucideMegaphone className="size-4" />,
    },
  ];

  return (
    <Container as="main" className="my-5">
      <Breadcrumb links={links} />
      <CompanyHeader />
    </Container>
  );
};

export default page;
