'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const FlippingCircles = () => {
  const [flippedStates, setFlippedStates] = useState(Array(5).fill(false));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setActiveIndex(index);
    const newStates = [...flippedStates];
    newStates[index] = !newStates[index];
    setFlippedStates(newStates);
  };

  const getYOffset = (circleIndex: number) => {
    if (activeIndex === null) return 0;
    
    // Calculate distance from active circle
    const distance = Math.abs(circleIndex - activeIndex);
    
    // If it's the clicked circle, move up
    if (distance === 0) return -20;
    
    // Adjacent circles move down, with decreasing intensity
    if (distance === 1) return 15;
    if (distance === 2) return 5;
    
    return 0;
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex space-x-[18px]">
        {flippedStates.map((isFlipped, index) => (
          <motion.div
            key={index}
            onClick={() => handleFlip(index)}
            className="relative w-[150px] h-[150px] cursor-pointer"
            style={{ perspective: 1000 }}
            animate={{
              y: getYOffset(index),
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25
            }}
          >
            <motion.div
              className="relative w-full h-full"
              animate={{
                rotateY: isFlipped ? 180 : 0,
              }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 500,
                damping: 30
              }}
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              {/* Front - Smiley Face */}
              <div
                className="absolute w-full h-full rounded-full backface-hidden"
                style={{ 
                  backgroundColor: '#D0FF00',
                  backfaceVisibility: 'hidden'
                }}
              >
                <Image
                    src="/smiley-face.svg"
                    alt="Smiley face"
                    width={150}
                    height={150}
                    className="absolute inset-0 w-full h-full p-4"
                    priority
                    />
              </div>

              {/* Back - User Photo */}
              <div
                className="absolute w-full h-full rounded-full backface-hidden"
                style={{ 
                  transform: 'rotateY(180deg)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <Image
                  src="/userPhoto.jpg"
                  alt="User photo"
                  className="rounded-full object-cover"
                  fill
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FlippingCircles;