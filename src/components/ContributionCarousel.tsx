'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShareAlt, FaGithub, FaCode } from 'react-icons/fa';

const contributions = [
  {
    icon: FaShareAlt,
    iconColor: 'text-blue-400',
    title: 'Technical Assets',
    description: 'Created and maintained comprehensive guides for AI model fine-tuning and integration, reaching over 40,000 developers.',
    tags: ['Documentation', 'Tutorials', 'Best Practices'],
    bgColor: 'bg-blue-500/20'
  },
  {
    icon: FaGithub,
    iconColor: 'text-purple-400',
    title: 'Open Source Tools',
    description: 'Developed Azure Co-op Translator and other open-source tools to streamline AI implementation processes.',
    tags: ['Azure Tools', 'Process Automation', 'Developer Tools'],
    bgColor: 'bg-purple-500/20'
  },
  {
    icon: FaCode,
    iconColor: 'text-yellow-400',
    title: 'Implementation Examples',
    description: 'Built practical implementation examples and starter templates for various AI integration scenarios.',
    tags: ['Code Samples', 'Templates', 'Integration Guides'],
    bgColor: 'bg-yellow-500/20'
  }
];

export default function ContributionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contributions.length);
      setDirection(1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const current = contributions[currentIndex];
  const Icon = current.icon;

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Contributions & Tools</h2>
      <div className="relative h-[300px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction * 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 200 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="bg-white/5 p-8 rounded-lg h-full border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Icon className={`text-3xl ${current.iconColor}`} />
                <h3 className="text-2xl font-semibold">{current.title}</h3>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                {current.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {current.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 ${current.bgColor} rounded-full text-sm`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {contributions.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-blue-400 w-4' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
