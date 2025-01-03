'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

interface FeaturedProjectProps {
  title: string;
  description: string;
  image: string;
  github?: string;
  external?: string;
  tags: string[];
}

export default function FeaturedProject({
  title,
  description,
  image,
  github,
  external,
  tags
}: FeaturedProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br 
                 from-blue-600/20 to-purple-600/20 p-1"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 
                      group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500" />
      
      <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl 
                      h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="flex gap-4">
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-xl hover:text-blue-400 transition-colors"
              >
                <FaGithub />
              </motion.a>
            )}
            {external && (
              <motion.a
                href={external}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-xl hover:text-blue-400 transition-colors"
              >
                <FaExternalLinkAlt />
              </motion.a>
            )}
          </div>
        </div>

        <div className="relative h-64 mb-4 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>

        <p className="text-gray-300 mb-4 flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1 bg-white/5 rounded-full text-sm
                         hover:bg-white/10 transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
