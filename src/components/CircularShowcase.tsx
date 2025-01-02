'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaLightbulb, FaTools, FaUsers } from 'react-icons/fa';

const showcaseItems = [
  {
    icon: FaLightbulb,
    iconColor: 'text-yellow-400',
    title: 'Empowering Developers',
    impact: '40,000+ Developers Reached',
    description: 'Creating comprehensive guides and documentation that simplify complex AI implementations',
    gradient: 'from-yellow-600/20 to-orange-600/20'
  },
  {
    icon: FaTools,
    iconColor: 'text-blue-400',
    title: 'Building the Future',
    impact: 'Azure Co-op Translator',
    description: 'Developing open-source tools that revolutionize how teams work with AI',
    gradient: 'from-blue-600/20 to-cyan-600/20'
  },
  {
    icon: FaUsers,
    iconColor: 'text-purple-400',
    title: 'Driving Innovation',
    impact: 'Community Leadership',
    description: 'Leading technical communities and sharing knowledge through practical implementations',
    gradient: 'from-purple-600/20 to-pink-600/20'
  }
];

export default function CircularShowcase() {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startRotation = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);
  };

  const stopRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startRotation();
    return () => stopRotation();
  }, []);

  const radius = 250; // Radius of the circle
  const totalItems = showcaseItems.length;

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

      <div 
        className="relative h-[600px] mx-auto"
        style={{ width: radius * 2.5 }}
        onMouseEnter={() => {
          setIsHovered(true);
          stopRotation();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          startRotation();
        }}
      >
        {showcaseItems.map((item, index) => {
          const Icon = item.icon;
          const angle = (rotation + (index * (360 / totalItems))) * (Math.PI / 180);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const scale = Math.cos(angle) * 0.3 + 0.7; // Scale based on position
          const zIndex = Math.round(Math.cos(angle) * 100);

          return (
            <motion.div
              key={index}
              animate={{
                x: x + radius,
                y: y + radius,
                scale,
                zIndex
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              style={{
                position: 'absolute',
                transform: `translate(-50%, -50%)`,
                width: '300px'
              }}
              whileHover={{ scale: scale * 1.1 }}
              className="cursor-pointer"
            >
              <div 
                className={`bg-gradient-to-br ${item.gradient} p-6 rounded-xl backdrop-blur-lg 
                           border border-white/10 shadow-2xl transition-opacity duration-300`}
                style={{ opacity: scale }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`text-3xl ${item.iconColor}`} />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    {item.impact}
                  </div>
                </div>

                <p className="text-sm text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}

        {/* Center point indicator */}
        <div 
          className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 blur-2xl"
          style={{
            width: '100px',
            height: '100px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
    </div>
  );
}
