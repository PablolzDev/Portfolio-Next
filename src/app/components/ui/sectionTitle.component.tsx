'use client';

import { motion } from 'framer-motion';

export default function SectionTitle() {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-3xl font-bold text-white"
    >
      Experiences
    </motion.h2>
  );
}