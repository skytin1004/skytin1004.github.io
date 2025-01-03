'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaTrophy, FaNewspaper, FaUsers, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface AwardCardProps {
  title: string;
  date: string;
  description: string;
  iconType: 'trophy' | 'newspaper' | 'users';
  iconColor: string;
  imagePath?: string | string[];
  organization?: string;
}

const IconMap = {
  trophy: FaTrophy,
  newspaper: FaNewspaper,
  users: FaUsers,
};

export default function AwardCard({
  title,
  date,
  description,
  iconType,
  iconColor,
  imagePath,
  organization
}: AwardCardProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const Icon = IconMap[iconType];

  return (
    <motion.div 
      className="bg-white/5 p-6 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors"
              >
                <FaTimes size={24} />
              </button>
              <Image
                src={selectedImage}
                alt="Award Certificate"
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        <Icon className={`${iconColor} text-2xl`} />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400">{date}</p>
      {organization && (
        <p className="text-gray-400">{organization}</p>
      )}
      
      {imagePath && (
        <div className="mt-4 grid grid-cols-2 gap-4">
          {Array.isArray(imagePath) ? (
            imagePath.map((path, index) => (
              <motion.div
                key={index}
                className="cursor-pointer relative h-48 group"
                onHoverStart={() => setIsHovered(index)}
                onHoverEnd={() => setIsHovered(null)}
                onClick={() => setSelectedImage(path)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={path}
                  alt={`${title} Certificate ${index + 1}`}
                  fill
                  className="rounded-lg transition-all duration-300 object-contain bg-gray-900/50"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ opacity: isHovered === index ? 1 : 0 }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <p className="text-sm font-medium">Click to view full image</p>
                  </div>
                </motion.div>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="cursor-pointer col-span-2 relative h-48 group"
              onClick={() => setSelectedImage(imagePath)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={imagePath}
                alt={`${title} Certificate`}
                fill
                className="rounded-lg transition-all duration-300 object-contain bg-gray-900/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <p className="text-sm font-medium">Click to view full image</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}
      
      <p className="text-gray-300 mt-4">
        {description}
      </p>
    </motion.div>
  );
}
