'use client';

import { motion } from 'framer-motion';
import GradientText from './GradientText';

interface SectionTitleProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ 
  title, 
  highlight, 
  subtitle,
  className = ''
}: SectionTitleProps) {
  return (
    <motion.div 
      className={`text-center space-y-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold">
        {title}{' '}
        {highlight && <GradientText text={highlight} />}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-400">{subtitle}</p>
      )}
    </motion.div>
  );
}
