'use client';

import { motion } from "framer-motion";

export function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: "easeOut",
        delay
      }}
    >
      {children}
    </motion.div>
  );
}
