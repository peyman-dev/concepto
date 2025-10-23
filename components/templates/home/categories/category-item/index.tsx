import Link from "next/link";
import React from "react";

interface ICategoryProps {
  id: string;
  title: string;
  slug: string;
  image: string;
}

const CategoryItem = ({ id, title, slug, image }: ICategoryProps) => {
  return (
    <article>
      <Link href={`/categories${slug}`} className="flex-col-center gap-4 text-center">
        <div className="size-[56px] md:size-[96px] rounded-full bg-gradient-to-t from-primary-tint-700 to-primary-tint-300">
        </div>
        <p className="text-sm text-[#2A2A2A] font-medium min-w-max line-clamp-1">
          {title}
        </p>
      </Link>
    </article>
  );
};

export default CategoryItem;
