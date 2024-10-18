'use client';

import { motion } from 'framer-motion';
import { Experience } from '../../types/types';
import ExperienceCard from '../ui/card.component';

interface AnimatedExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function AnimatedExperienceCard({ experience, index }: AnimatedExperienceCardProps) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <ExperienceCard experience={experience} />
    </motion.div>
  );
}