import navigation from "@/core/constants/navigation";
import Link from "next/link";
import React from "react";

const Navigation = () => {

  return (
    <div className="mt-3 h-14 flex-ic gap-8">
      {navigation.map((link) => (
        <Link href={link.href} key={link.id} className="font-medium">{link.title}</Link>
      ))}
    </div>
  );
};

export default Navigation;
