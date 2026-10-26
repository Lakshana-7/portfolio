import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { profile } from '../data/profile';
import ImageWithFallback from './ImageWithFallback';

export default function Hero() {
  // Typing effect state
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = profile.roles[currentRoleIndex];
    let timeout;

    if (!isDeleting && displayedText !== currentRole) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 70);
    } else if (!isDeleting && displayedText === currentRole) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText !== '') {
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, 35);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % profile.roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 bg-white overflow-hidden scroll-mt-24"
    >
      {/* Subtle ambient light gradient glow in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-accent-from/8 via-accent-to/6 to-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-slate-800 font-bold">
                {profile.statusText}
              </span>
            </div>

            {/* Huge Condensed Name */}
            <h1 className="font-heading font-extrabold uppercase tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-600 mb-4">
              Lakshana
            </h1>

            {/* Typing Effect Line */}
            <div className="h-8 flex items-center mb-5">
              <span className="font-mono text-sm sm:text-base text-slate-500 uppercase tracking-wide font-semibold">
                Specialization:{' '}
              </span>
              <span className="font-mono text-sm sm:text-base text-indigo-600 font-bold uppercase tracking-wide ml-2 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-100">
                {displayedText}
                <span className="inline-block w-2 h-4 ml-1 bg-indigo-600 animate-pulse" />
              </span>
            </div>

            {/* Scannable, Punchy Intro */}
            <p className="text-lg sm:text-xl text-slate-700 max-w-xl font-sans leading-relaxed mb-6 font-medium">
              B.Tech student in <strong className="text-slate-950 font-bold">Artificial Intelligence & Data Science</strong> building systems across <strong className="text-slate-950 font-bold">AI/ML</strong>, <strong className="text-slate-950 font-bold">IoT telemetry</strong>, and <strong className="text-slate-950 font-bold">full-stack web apps</strong>.
            </p>

            {/* CGPA Badge in Mono */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 mb-8 shadow-sm">
              <span className="font-mono text-xs uppercase text-slate-600 tracking-wider font-semibold">
                Rajalakshmi Institute of Technology
              </span>
              <span className="font-mono text-xs font-bold text-amber-700 tracking-widest bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                CGPA: {profile.cgpa}
              </span>
            </div>

            {/* Action Buttons & LinkedIn */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-accent-from to-accent-to text-white font-mono text-xs uppercase tracking-wider font-bold shadow-md shadow-accent-from/30 hover:shadow-lg hover:shadow-accent-from/50 hover:scale-105 active:scale-95 transition-all"
              >
                View Featured Work
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 border-2 border-slate-900 text-slate-950 font-mono text-xs uppercase tracking-wider font-bold transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                Let&apos;s Connect
              </button>

              {/* LinkedIn Icon only - strictly NO GitHub here */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-blue-600 transition-colors shadow-sm ml-1"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Floating Portrait & Floating Glass Chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Soft Radiant Ambient Glow */}
            <div className="absolute w-72 h-72 sm:w-88 sm:h-88 bg-gradient-to-tr from-accent-from/20 to-accent-to/15 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Floating Frame */}
            <div className="relative animate-float-slow">
              {/* Clean Studio Shadow Wrapper */}
              <div className="p-2 sm:p-2.5 rounded-[28px] bg-white border border-gray-200 shadow-2xl">
                <div className="relative w-72 sm:w-80 md:w-[380px] aspect-[16/11] rounded-[22px] overflow-hidden bg-slate-50 flex items-center justify-center">
                  {/* Photo shown in full proportion - never cropped */}
                  <ImageWithFallback
                    src="/images/hero/profile.jpg"
                    alt={profile.name}
                    className="max-w-full max-h-full object-contain relative z-10 drop-shadow-md rounded-[18px]"
                    containerClassName="w-full h-full flex items-center justify-center"
                    aspectRatio="aspect-auto"
                    placeholderText="images/hero/profile.jpg"
                    priority
                  />
                </div>
              </div>

              {/* Glass Chip 1: Python */}
              <div className="absolute left-1 sm:-left-3 top-4 sm:top-6 z-20 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg flex items-center gap-2 transform -rotate-3 hover:rotate-0 transition-transform">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-from" />
                <span className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold">
                  Python
                </span>
              </div>

              {/* Glass Chip 2: AI / ML (safe margin, no right-edge clipping) */}
              <div className="absolute right-1 sm:-right-2 top-1/3 z-20 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg flex items-center gap-2 transform rotate-3 hover:rotate-0 transition-transform">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold">
                  AI / ML
                </span>
              </div>

              {/* Glass Chip 3: IoT & Backend */}
              <div className="absolute left-1 sm:-left-2 bottom-3 sm:bottom-4 z-20 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg flex items-center gap-2 transform rotate-2 hover:rotate-0 transition-transform">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                <span className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold">
                  IoT & Backend
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Down Arrow at bottom center */}
      <div className="w-full flex justify-center mt-12 mb-2 relative z-10">
        <button
          onClick={() => scrollTo('about')}
          className="p-3 rounded-full text-slate-400 hover:text-slate-800 transition-colors flex flex-col items-center gap-1 group"
          aria-label="Scroll to About section"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-accent-from transition-colors font-semibold">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-slate-400 group-hover:text-accent-from transition-colors" />
        </button>
      </div>
    </section>
  );
}
