import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative z-10 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full text-center p-8 sm:p-12 rounded-3xl bg-surface border border-border shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-from/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl bg-surface-raised border border-border flex items-center justify-center mx-auto mb-6 text-accent-from shadow-inner">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '20s' }} />
        </div>

        <span className="font-mono text-xs uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-accent-from to-accent-to font-bold block mb-2">
          ERROR 404
        </span>

        <h1 className="font-heading font-extrabold uppercase tracking-tight text-5xl sm:text-6xl text-text mb-4 leading-none">
          Lost In <span className="headline-accent">space.</span>
        </h1>

        <p className="text-muted font-sans text-sm sm:text-base leading-relaxed mb-8">
          The celestial coordinates you followed don&apos;t seem to exist. Let&apos;s navigate you back into known orbit.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-from to-accent-to text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-lg shadow-accent-from/30 hover:scale-105 active:scale-95 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Orbit (Home)</span>
        </Link>
      </motion.div>
    </div>
  );
}
