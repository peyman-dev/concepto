import SectionHeader from "@/components/common/section-header";
import Container from "@/components/ui/container";
import React from "react";
import CategoryItem from "./category-item";

const Categories = () => {
  const categories = [
    {
      id: crypto.randomUUID(),
      title: "هوش مصنوعی",
      slug: "/artificial-intelligence",
      image: "/assets/categories/ai.png",
    },
    {
      id: crypto.randomUUID(),
      title: "برنامه نویسی",
      slug: "/programming",
      image: "/assets/categories/programming.png",
    },
    {
      id: crypto.randomUUID(),
      title: "ارز دیجیتال",
      slug: "/digital-currency",
      image: "/assets/categories/crypto.png",
    },
    {
      id: crypto.randomUUID(),
      title: "حسابداری",
      slug: "/accounting",
      image: "/assets/categories/accounting.png",
    },
    {
      id: crypto.randomUUID(),
      title: "گرافیک",
      slug: "/graphics",
      image: "/assets/categories/graphics.png",
    },
    {
      id: crypto.randomUUID(),
      title: "رسانه‌ها",
      slug: "/media",
      image: "/assets/categories/media.png",
    },
    {
      id: crypto.randomUUID(),
      title: "هوافضا",
      slug: "/aerospace",
      image: "/assets/categories/aerospace.png",
    },
    {
      id: crypto.randomUUID(),
      title: "حمل و نقل",
      slug: "/transportation",
      image: "/assets/categories/transport.png",
    },
    {
      id: crypto.randomUUID(),
      title: "فیلم و سینما",
      slug: "/cinema",
      image: "/assets/categories/cinema.png",
    },
    {
      id: crypto.randomUUID(),
      title: "بیوتکنولوژی",
      slug: "/biotechnology",
      image: "/assets/categories/biotech.png",
    },
    {
      id: crypto.randomUUID(),
      title: "موسیقی",
      slug: "/music",
      image: "/assets/categories/music.png",
    },
    {
      id: crypto.randomUUID(),
      title: "علمی",
      slug: "/science",
      image: "/assets/categories/science.png",
    },
    {
      id: crypto.randomUUID(),
      title: "تجارت الکترونیک",
      slug: "/ecommerce",
      image: "/assets/categories/ecommerce.png",
    },
    {
      id: crypto.randomUUID(),
      title: "پزشکی",
      slug: "/medical",
      image: "/assets/categories/medical.png",
    },
  ];
  return (
    <Container as="section">
      <SectionHeader title="دسته‌بندی ها" />
      <div className="mt-6 grid lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-5 grid-cols-4 gap-[30px] md:gap-[92px]">
        {
            categories.map((cat) => <CategoryItem key={cat.id} {...cat}/>)
        }
      </div>
    </Container>
  );
};

export default Categories;
