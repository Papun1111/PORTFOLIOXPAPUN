'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.onclick !== null ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot - follows instantly */}
      <motion.div
        className="fixed w-3 h-3 rounded-full pointer-events-none z-[9999] 
          bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 
          shadow-lg shadow-purple-500/50 mix-blend-screen"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isPointer ? 0.7 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 28,
          mass: 0.1,
          opacity: { duration: 0.2 }
        }}
      />
      
      {/* Cursor ring with smooth delay */}
      <motion.div
        className="fixed w-12 h-12 rounded-full pointer-events-none z-[9998]
          border-2 border-purple-400/50"
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          scale: isPointer ? 1.6 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5,
          opacity: { duration: 0.2 }
        }}
      />

      {/* Trailing glow effect */}
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-[9997]
          bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-xl"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
          mass: 0.8,
          opacity: { duration: 0.3 }
        }}
      />
    </>
  );
}
