import Link from "next/link";
import React from "react";

const Navigation = () => {
  const links = [
    {
      id: crypto.randomUUID(),
      title: "شرکت ها",
      href: "/companies",
    },
    {
      id: crypto.randomUUID(),
      title: "فرصت های شغلی",
      href: "/jobs",
    },
    {
      id: crypto.randomUUID(),
      title: " اخبار و رویداد ها",
      href: "/events",
    },
    {
      id: crypto.randomUUID(),
      title: "درباره ما",
      href: "/about-us",
    },
    {
      id: crypto.randomUUID(),
      title: "تماس با ما",
      href: "/contact-us",
    },
  ];
  return (
    <div className="mt-3 h-14 flex-ic gap-8">
      {links.map((link) => (
        <Link href={link.href} key={link.id} className="font-medium">{link.title}</Link>
      ))}
    </div>
  );
};

export default Navigation;
