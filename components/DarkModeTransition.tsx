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
      const timer = setTimeout(() => setIsAnimating(false), 600);
      return () => clearTimeout(timer);
    }
  }, [triggerPosition]);

  return (
    <AnimatePresence>
      {isAnimating && triggerPosition && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-[10000]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, delay: 0.4 }}
        >
          {/* Expanding circle */}
          <motion.div
            className={`absolute rounded-full ${
              isDark 
                ? 'bg-slate-900' 
                : 'bg-slate-100'
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
            }}
            animate={{
              width: '300vmax',
              height: '300vmax',
              x: '-150vmax',
              y: '-150vmax',
            }}
            transition={{
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}