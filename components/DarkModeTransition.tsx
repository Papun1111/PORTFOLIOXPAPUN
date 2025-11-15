'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface DarkModeTransitionProps {
  isDark: boolean;
  triggerPosition: { x: number; y: number } | null;
}

export default function DarkModeTransition({ isDark, triggerPosition }: DarkModeTransitionProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (triggerPosition) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [triggerPosition]);

  // Generate spider web pattern with 12 legs
  const spiderLegs = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 360) / 12;
    return { angle, delay: i * 0.03 };
  });

  return (
    <AnimatePresence>
      {isAnimating && triggerPosition && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-[10000] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 1 }}
        >
          {/* Spider body - central point */}
          <motion.div
            className={`absolute rounded-full ${
              isDark 
                ? 'bg-[#D9FF5C]' 
                : 'bg-gray-800'
            }`}
            style={{
              left: triggerPosition.x,
              top: triggerPosition.y,
            }}
            initial={{
              width: 0,
              height: 0,
              x: 0,
              y: 0,
              scale: 0,
            }}
            animate={{
              width: 24,
              height: 24,
              x: -12,
              y: -12,
              scale: [0, 1.2, 1, 0],
            }}
            transition={{
              duration: 0.8,
              times: [0, 0.3, 0.5, 1],
              ease: 'easeInOut',
            }}
          />

          {/* Spider legs crawling out */}
          {spiderLegs.map((leg, i) => {
            const distance = 150; // Length of each leg
            const endX = Math.cos((leg.angle * Math.PI) / 180) * distance;
            const endY = Math.sin((leg.angle * Math.PI) / 180) * distance;
            
            return (
              <motion.div
                key={i}
                className={`absolute origin-left ${
                  isDark 
                    ? 'bg-[#D9FF5C]' 
                    : 'bg-gray-800'
                }`}
                style={{
                  left: triggerPosition.x,
                  top: triggerPosition.y,
                  height: '3px',
                  transformOrigin: '0 50%',
                  rotate: `${leg.angle}deg`,
                }}
                initial={{
                  width: 0,
                  opacity: 0.9,
                }}
                animate={{
                  width: `${distance}vmax`,
                  opacity: 0.7,
                }}
                transition={{
                  duration: 0.5,
                  delay: leg.delay,
                  ease: [0.34, 1.56, 0.64, 1], // Bouncy crawl effect
                }}
              />
            );
          })}

          {/* Web nodes - connection points */}
          {spiderLegs.map((leg, i) => {
            const distance = 80;
            const x = Math.cos((leg.angle * Math.PI) / 180) * distance;
            const y = Math.sin((leg.angle * Math.PI) / 180) * distance;
            
            return (
              <motion.div
                key={`node-${i}`}
                className={`absolute rounded-full ${
                  isDark 
                    ? 'bg-[#D9FF5C]' 
                    : 'bg-gray-800'
                }`}
                style={{
                  left: triggerPosition.x,
                  top: triggerPosition.y,
                }}
                initial={{
                  width: 0,
                  height: 0,
                  x: 0,
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  width: 8,
                  height: 8,
                  x: x - 4,
                  y: y - 4,
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: leg.delay + 0.2,
                  ease: 'easeOut',
                }}
              />
            );
          })}

          {/* Main color spread - follows spider crawl */}
          <motion.div
            className={`absolute rounded-full ${
              isDark 
                ? 'bg-black' 
                : 'bg-gray-50'
            }`}
            style={{
              left: triggerPosition.x,
              top: triggerPosition.y,
            }}
            initial={{
              width: 0,
              height: 0,
              x: 0,
              y: 0,
              scale: 0,
            }}
            animate={{
              width: '350vmax',
              height: '350vmax',
              x: '-175vmax',
              y: '-175vmax',
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Web silk strands - secondary thin lines */}
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i * 360) / 6 + 30;
            const distance = 200;
            
            return (
              <motion.div
                key={`silk-${i}`}
                className={`absolute origin-left opacity-30 ${
                  isDark 
                    ? 'bg-gray-600' 
                    : 'bg-gray-400'
                }`}
                style={{
                  left: triggerPosition.x,
                  top: triggerPosition.y,
                  height: '1px',
                  transformOrigin: '0 50%',
                  rotate: `${angle}deg`,
                }}
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: `${distance}vmax`,
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + (i * 0.05),
                  ease: 'easeOut',
                }}
              />
            );
          })}

          {/* Crawling particles - like tiny spiders */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            const distance = 120 + Math.random() * 80;
            const size = 4 + Math.random() * 4;
            
            return (
              <motion.div
                key={`particle-${i}`}
                className={`absolute rounded-full ${
                  isDark 
                    ? 'bg-[#a3e635]' 
                    : 'bg-gray-600'
                }`}
                style={{
                  left: triggerPosition.x,
                  top: triggerPosition.y,
                }}
                initial={{
                  width: size,
                  height: size,
                  x: -size / 2,
                  y: -size / 2,
                  opacity: 0,
                }}
                animate={{
                  x: Math.cos((angle * Math.PI) / 180) * distance - size / 2,
                  y: Math.sin((angle * Math.PI) / 180) * distance - size / 2,
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 + (i * 0.02),
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}