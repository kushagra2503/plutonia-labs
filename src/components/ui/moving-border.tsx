"use client";

import React from "react";
import { cn } from "./cn";
import { motion } from "framer-motion";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderRadius = "1.75rem",
  offset = 16,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderRadius?: string;
  offset?: number;
}) => {
  return (
    <div
      className={cn(
        "relative p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
    >
      <motion.div
        initial={{ top: -offset, left: -offset }}
        animate={{
          left: [
            -offset,
            -offset,
            offset,
            offset,
            -offset,
          ],
          top: [
            -offset,
            offset,
            offset,
            -offset,
            -offset,
          ],
        }}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 z-10"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, #4F46E5 15%, #4F46E5 35%, transparent 50%)",
          borderRadius: borderRadius,
          width: `calc(100% + ${offset * 2}px)`,
          height: `calc(100% + ${offset * 2}px)`,
        }}
      />
      <div
        className={cn(
          "relative z-20 bg-gray-900",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} - 1px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}; 