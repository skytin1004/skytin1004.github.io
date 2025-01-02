'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  gradient?: string;
  hoverGradient?: string;
}

export default function AnimatedCard({ 
  children, 
  className = '', 
  delay = 0,
  gradient = 'from-blue-600/20 to-purple-600/20',
  hoverGradient = 'hover:from-blue-500/30 hover:to-purple-500/30'
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div 
        className={`bg-gradient-to-br ${gradient} ${hoverGradient} 
                   p-6 rounded-2xl backdrop-blur-lg border border-white/10 
                   shadow-2xl transition-all duration-300
                   group-hover:scale-105 group-hover:shadow-3xl ${className}`}
      >
        {children}
        <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-white/20 to-transparent 
                       transition-all duration-300 mt-4 rounded-full" />
      </div>
    </motion.div>
  );
}
