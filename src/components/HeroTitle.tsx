'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const roles = [
  'Open Source Contributor',
  'Community Leader',
  'Maintainer of Co-op Translator',
  'Industrial Management & AI Engineering',
  'Microsoft Learn Student Ambassador',
  'Technical Writer',
  'AI Engineer'
];

export default function HeroTitle() {
  const [roleIndex, setRoleIndex] = useState(0);
  const controls = useAnimationControls();
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

  useEffect(() => {
    const animate = async () => {
      if (!isMounted.current) return;

      try {
        await controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 1 }
        });

        if (!isMounted.current) return;
        await new Promise(resolve => setTimeout(resolve, 2000));

        if (!isMounted.current) return;
        if (roleIndex !== roles.length - 1) {
          await controls.start({
            opacity: 0,
            y: 20,
            transition: { duration: 0.5 }
          });
        }
      } catch (error) {
        // Animation was interrupted, which is fine during unmount
      }
    };

    animate();
  }, [controls, roleIndex]);

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
    <div className="text-center space-y-6">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-gray-300">Hello, I'm </span>
        <br className="md:hidden" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Minseok Song
        </span>
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
  );
}
