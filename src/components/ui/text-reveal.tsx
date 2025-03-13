"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { cn } from "./cn";

export const TextReveal = ({
  text,
  className,
  once = true,
}: {
  text: string;
  className?: string;
  once?: boolean;
}) => {
  const controls = useAnimation();
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={textRef}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {},
      }}
      className={cn("flex flex-wrap", className)}
    >
      {text.split(" ").map((word, i) => (
        <div key={i} className="mr-2 mt-2 overflow-hidden">
          <motion.span
            className="inline-block"
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: [0.2, 0.65, 0.3, 0.9],
                },
              },
              hidden: {
                y: 100,
                opacity: 0,
              },
            }}
          >
            {word}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
}; 