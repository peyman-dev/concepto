"use client";
import { ChevronLeft, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { JSX, ReactNode, useState } from "react";

interface BreadcrumbItem {
  name: string;
  href: string;
  value: string;
  icon: ReactNode | JSX.Element;
}

interface IBreadcrumb {
  links?: BreadcrumbItem[]; // Make optional
}

const Breadcrumb = ({ links = [] }: IBreadcrumb) => {
  // Default to empty array
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState([
    {
      id: crypto.randomUUID(),
      name: "خانه",
      href: "/",
      icon: <Home className="size-5" />,
    },
    ...links,
  ]);

  return (
    <div className="flex-ic gap-1">
      {breadcrumbs.map((item, index) => (
        <>
          <Link
            href={item.href}
            className="flex-ic last:text-neutral-600! last gap-1  not-last:text-primary-shade-100"
            key={index}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
          <ChevronLeft className="size-4 text-neutral-500 last:hidden last:invisible" />
        </>
      ))}
    </div>
  );
};

export default Breadcrumb;
