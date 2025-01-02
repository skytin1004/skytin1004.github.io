'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

const roles = [
  'AI Engineer',
  'Maintainer of Co-op Translator',
  'Industrial Management & AI Engineering',
  'Microsoft Learn Student Ambassador',
  'Open Source Contributor',
  'Technical Writer',
  'Community Leader'
];

export default function HeroTitle() {
  const [roleIndex, setRoleIndex] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 }
      });
      await new Promise(resolve => setTimeout(resolve, 2000));
      if (roleIndex !== roles.length - 1) {
        await controls.start({
          opacity: 0,
          y: 20,
          transition: { duration: 0.5 }
        });
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
          className="text-2xl md:text-3xl text-gray-400"
        >
          {roles[roleIndex].split('').map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              custom={i}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
