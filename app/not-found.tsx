import Container from "@/components/ui/container";
import React from "react";
import NotFoundImage from "@/icons/not-found-404.svg";
import Image from "next/image";
import { Metadata } from "next";
import RedirectButton from "@/components/templates/not-found/redirect-button";

export const metadata: Metadata = {
  title: "۴۰۴ - صفحه مورد نظر یافت نشد",
};

const NotFoundPage = () => {
  return (
    <Container
      as="section"
      className="h-[calc(100dvh_-200px)] gap-y-4 w-full  flex-col-center"
    >
      <div className="w-[599px] h-[546px]">
        <Image
          src={NotFoundImage.src}
          width={1000}
          alt="not-found"
          height={1000}
        />
      </div>
      <h1 className="text-shadow-blue-700 text-2xl">
        صفحه مورد نظر شما یافت نشد!
      </h1>
      <RedirectButton />
    </Container>
  );
};

export default NotFoundPage;
