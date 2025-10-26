"use client"
import React from "react";
import { motion } from "motion/react";

const OpportunityCard = () => {
  return (
    <div className="h-[213px] flex items-end justify-end ">
      <motion.article whileHover={{
        scale: 1.03,
      }} whileTap={{
        scale: 1
      }} className="w-full cursor-pointer h-[187px] bg-[#F6F6F6] rounded-[24px] relative  flex-col-center gap-3 pt-4">
        <div className="size-[72px] rounded-md absolute left-0 right-0 mx-auto bg-white shadow -top-[24px]">
        </div>
            <p className="text-sm text-[#444859]">
                11 فرصت شغلی
            </p>
            <p className="text-[#0D6EFD] font-bold text-sm">
                علی بابا
            </p>
      </motion.article>
    </div>
  );
};

export default OpportunityCard;
