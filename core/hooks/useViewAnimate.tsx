"use client";
import React from "react";
import { motion } from "motion/react";

const useViewAnimate = () => {
  const config = {
    initial: {
      opacity: 0,
      x: 200,
    },
    whileInView: {
      opacity: 1,
      x: 0
    },
    viewport: {
    }
  };
  return { motion, config };
};

export default useViewAnimate;
