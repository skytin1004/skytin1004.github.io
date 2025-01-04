'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const roles = [
  'Open Source Contributor',
  'Community Leader',
  'Maintainer of Co-op Translator',
  'Industrial Management & AI Engineering',
  'Microsoft Learn Student Ambassador',
  'Technical Writer',
  'AI Engineer'
];

const navigationItems = [
  { 
    name: 'About',
    path: '/about',
    color: 'from-blue-400 to-purple-400'
  },
  { 
    name: 'Projects',
    path: '/projects',
    color: 'from-purple-400 to-pink-400'
  },
  { 
    name: 'Speaking',
    path: '/speaking',
    color: 'from-pink-400 to-rose-400'
  },
  { 
    name: 'Contact',
    path: '/contact',
    color: 'from-rose-400 to-red-400'
  }
];

export default function HeroTitle() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMounted.current) {
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const calculateLetterIndex = (wordIndex: number, letterIndex: number, words: string[]): number => {
    let totalIndex = 0;
    for (let i = 0; i < wordIndex; i++) {
      totalIndex += words[i].length + 1;
    }
    return totalIndex + letterIndex;
  };

  return (
    <div className="text-center space-y-16">
      <div className="space-y-6">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold inline-flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gray-300">Hello, I'm</span>
          <motion.div 
            className="relative group"
            whileHover="hover"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Minseok Song
            </span>
            
            <motion.div 
              className="absolute -bottom-4 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400"
              initial={{ scaleX: 0 }}
              variants={{
                hover: { scaleX: 1 }
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </motion.div>
        </motion.h1>

        <div className="h-20">
          <motion.div
            key={roleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl text-gray-400 flex flex-wrap justify-center gap-x-2"
          >
            {roles[roleIndex].split(' ').map((word, wordIndex, words) => (
              <span key={wordIndex} className="inline-flex">
                {word.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    variants={letterVariants}
                    custom={calculateLetterIndex(wordIndex, letterIndex, words)}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
                {wordIndex < words.length - 1 && (
                  <span className="inline-block">&nbsp;</span>
                )}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Minimal Navigation */}
      <motion.div
        className="flex justify-center items-center gap-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="h-[1px] w-12 bg-gray-700" />
        <div className="flex gap-8 px-4">
          {navigationItems.map((item, index) => (
            <Link key={item.name} href={item.path}>
              <motion.div
                className="relative"
                onHoverStart={() => setHoveredNav(item.name)}
                onHoverEnd={() => setHoveredNav(null)}
                whileHover={{ y: -2 }}
              >
                <motion.span 
                  className={`text-lg relative z-10 ${
                    hoveredNav === item.name 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r ' + item.color
                      : 'text-gray-400'
                  }`}
                >
                  {item.name}
                </motion.span>
                {hoveredNav === item.name && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-[1px]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`h-full bg-gradient-to-r ${item.color}`} />
                  </motion.div>
                )}
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="h-[1px] w-12 bg-gray-700" />
      </motion.div>
    </div>
  );
}
