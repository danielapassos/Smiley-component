'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SmileyCirclesProps {
  className?: string;
}

const SmileyCircles: React.FC<SmileyCirclesProps> = ({ className }) => {
  const circles = Array(5).fill(null);

  return (
    <div className={`flex items-center justify-center min-h-screen ${className}`}>
      <div className="flex space-x-[18px]">
        {circles.map((_, index) => (
          <motion.div
            key={index}
            className="relative w-[150px] h-[150px] rounded-full"
            style={{ backgroundColor: '#D0FF00' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Image
              src="/smiley-face.svg"
              alt="Smiley face"
              width={150}
              height={150}
              className="absolute inset-0 w-full h-full p-4"
              priority
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SmileyCircles;