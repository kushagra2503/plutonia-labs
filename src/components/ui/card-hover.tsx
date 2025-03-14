"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "./cn";

export const CardHover = ({
  children,
  className,
  containerClassName,
  hoverClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  hoverClassName?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const { left, top, width, height } = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setMousePosition({ x, y });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative", containerClassName)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className={cn(
          "relative h-full w-full rounded-xl transition-all duration-200",
          className,
          isHovered && hoverClassName
        )}
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX: isHovered ? mousePosition.y * 20 - 10 : 0,
          rotateY: isHovered ? mousePosition.x * 20 - 10 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}; 