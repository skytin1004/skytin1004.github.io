'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLightbulb, FaTools, FaUsers } from 'react-icons/fa';

const showcaseItems = [
  {
    icon: FaLightbulb,
    iconColor: 'text-yellow-400',
    title: 'Empowering Developers',
    impact: '40,000+ Developers Reached',
    description: 'Creating comprehensive guides and documentation that simplify complex AI implementations',
    stats: 'Through Microsoft\'s platform',
    gradient: 'from-yellow-600/20 to-orange-600/20'
  },
  {
    icon: FaTools,
    iconColor: 'text-blue-400',
    title: 'Building the Future',
    impact: 'Azure Co-op Translator',
    description: 'Developing open-source tools that revolutionize how teams work with AI',
    stats: 'Official Azure Project',
    gradient: 'from-blue-600/20 to-cyan-600/20'
  },
  {
    icon: FaUsers,
    iconColor: 'text-purple-400',
    title: 'Driving Innovation',
    impact: 'Community Leadership',
    description: 'Leading technical communities and sharing knowledge through practical implementations',
    stats: 'Microsoft Learn Ambassador',
    gradient: 'from-purple-600/20 to-pink-600/20'
  }
];

export default function ImpactShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-gray-400">Transforming</span>{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Ideas
        </span>{' '}
        <span className="text-gray-400">into</span>{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Impact
        </span>
      </motion.h2>

      <div className="relative h-[400px] perspective-1000">
        <div className="absolute inset-0 flex items-center justify-center">
          {showcaseItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = index === currentIndex;
            const rotation = (index - currentIndex) * 120;
            
            return (
              <motion.div
                key={index}
                animate={{
                  rotateY: rotation,
                  scale: isActive ? 1 : 0.8,
                  zIndex: isActive ? 1 : 0,
                  opacity: isActive ? 1 : 0.5
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut"
                }}
                style={{
                  position: 'absolute',
                  transformStyle: 'preserve-3d'
                }}
                className={`w-full max-w-2xl ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                <div className={`bg-gradient-to-br ${item.gradient} p-8 rounded-2xl backdrop-blur-lg border border-white/10 shadow-2xl`}>
                  <div className="flex items-center gap-4 mb-6">
                    <Icon className={`text-4xl ${item.iconColor}`} />
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                      {item.impact}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {item.stats}
                    </div>
                  </div>

                  <p className="text-lg text-gray-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-3">
        {showcaseItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 transition-all ${
              index === currentIndex 
                ? 'w-8 bg-blue-400' 
                : 'w-4 bg-gray-600'
            } rounded-full`}
          />
        ))}
      </div>
    </div>
  );
}
