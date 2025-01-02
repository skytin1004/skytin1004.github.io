'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatsCardProps {
  number: number;
  label: string;
  duration?: number;
  delay?: number;
}

export default function StatsCard({ 
  number, 
  label, 
  duration = 2,
  delay = 0 
}: StatsCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = number;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, number, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10
                 hover:bg-white/10 transition-colors"
    >
      <div className="text-4xl font-bold bg-clip-text text-transparent 
                      bg-gradient-to-r from-blue-400 to-purple-400">
        {count.toLocaleString()}+
      </div>
      <div className="text-gray-400 mt-2">{label}</div>
    </motion.div>
  );
}
