import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function ConstellationIntro() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const seen = sessionStorage.getItem('hasSeenIntro_lakshana');
    if (!seen) {
      setVisible(true);
      const timer = setTimeout(() => {
        handleDismiss();
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [reducedMotion]);

  const handleDismiss = () => {
    sessionStorage.setItem('hasSeenIntro_lakshana', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#090A12] select-none"
        onClick={handleDismiss}
      >
        <div className="relative flex flex-col items-center justify-center">
          {/* Constellation SVG forming "L A" */}
          <svg
            viewBox="0 0 240 120"
            className="w-64 sm:w-80 h-32 stroke-current text-white overflow-visible"
          >
            <defs>
              <linearGradient id="introGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C5CFF" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Letter L constellation lines */}
            <motion.path
              d="M 50,20 L 50,100 L 95,100"
              fill="none"
              stroke="url(#introGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />

            {/* Letter A constellation lines */}
            <motion.path
              d="M 125,100 L 155,20 L 185,100 M 138,65 L 172,65"
              fill="none"
              stroke="url(#introGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            />

            {/* Star Nodes L */}
            {[
              { cx: 50, cy: 20 },
              { cx: 50, cy: 60 },
              { cx: 50, cy: 100 },
              { cx: 95, cy: 100 },
            ].map((pt, i) => (
              <motion.circle
                key={`l-${i}`}
                cx={pt.cx}
                cy={pt.cy}
                r="3.5"
                fill="#F3F5FB"
                filter="url(#glow)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              />
            ))}

            {/* Star Nodes A */}
            {[
              { cx: 125, cy: 100 },
              { cx: 155, cy: 20 },
              { cx: 185, cy: 100 },
              { cx: 138, cy: 65 },
              { cx: 172, cy: 65 },
            ].map((pt, i) => (
              <motion.circle
                key={`a-${i}`}
                cx={pt.cx}
                cy={pt.cy}
                r="3.5"
                fill="#F3F5FB"
                filter="url(#glow)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + 0.1 * i }}
              />
            ))}
          </svg>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6 font-mono text-xs uppercase tracking-widest text-muted"
          >
            Lakshana
          </motion.div>
        </div>

        {/* Skip button in bottom right */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDismiss();
          }}
          className="absolute bottom-8 right-8 font-mono text-xs text-muted/60 hover:text-text transition-colors uppercase tracking-wider"
        >
          Skip ↗
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
