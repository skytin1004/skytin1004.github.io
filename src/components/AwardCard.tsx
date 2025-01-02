'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaTrophy, FaNewspaper, FaUsers } from 'react-icons/fa';

interface AwardCardProps {
  title: string;
  date: string;
  description: string;
  iconType: 'trophy' | 'newspaper' | 'users';
  iconColor: string;
  imagePath?: string;
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
  const Icon = IconMap[iconType];

  return (
    <div className="bg-white/5 p-6 rounded-lg">
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-auto">
            <Image
              src={selectedImage}
              alt="Award Certificate"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
      <div className="flex items-center gap-3">
        <Icon className={`${iconColor} text-2xl`} />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400">{date}</p>
      {organization && (
        <p className="text-gray-400">{organization}</p>
      )}
      {imagePath && (
        <div className="mt-4 cursor-pointer" onClick={() => setSelectedImage(imagePath)}>
          <Image
            src={imagePath}
            alt={`${title} Certificate`}
            width={300}
            height={200}
            className="rounded-lg hover:opacity-80 transition-opacity"
          />
        </div>
      )}
      <p className="text-gray-300 mt-2">
        {description}
      </p>
    </div>
  );
}
