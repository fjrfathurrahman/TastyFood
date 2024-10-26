"use client";

import React from "react";
import { motion } from "framer-motion";
import { gap, TailwindResponsiveProps } from "@/lib/types/tailwindProps";
import clsx from "clsx";

interface ListAnimatedProps extends TailwindResponsiveProps {
  direction?: "vertical" | "horizontal";
  children: React.ReactNode;
  gap?: gap;
}

const ListAnimation: React.FC<ListAnimatedProps> = ({ className, direction, children, gap = 'gap-6' }) => {
  const classNames = clsx(
    "flex",
    direction === "vertical" ? "flex-col" : "flex-row",
    className,
    gap
  );

  const MotionComponent = motion.div;

  return (
    <MotionComponent
      className={classNames}
      variants={containerVariants}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.2 }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </MotionComponent>
  );
};

export default ListAnimation;

// Variant Animation Container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
// Variant Animation Item
const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};
