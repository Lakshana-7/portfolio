import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profile } from '../data/profile';
import { useReducedMotion } from '../hooks/useReducedMotion';
import ImageWithFallback from './ImageWithFallback';

const aboutImages = [
  { id: 1, src: '/images/about/profile.jpg', label: 'Lakshana' },
  { id: 2, src: '/images/about/profile-conclave.jpg', label: 'FICCI Conclave Delegate' },
  { id: 3, src: '/images/about/coat-mirror-selfie.jpg', label: '' },
  { id: 4, src: '/images/about/about-2.jpg', label: 'Event Host & Speaker' },
];

function CounterItem({ target, label, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const stepTime = Math.max(20, Math.floor(duration / (target || 1)));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
      <div className="font-heading font-extrabold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-accent-from to-accent-to leading-none mb-2">
        {count}
        {suffix}
      </div>
      <div className="font-mono text-xs uppercase tracking-wider text-slate-600 font-bold">
        {label}
      </div>
    </div>
  );
}

export default function About({ onOpenLightbox }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || isHovered || aboutImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [reducedMotion, isHovered]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % aboutImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };

  const currentImg = aboutImages[currentIndex];

  return (
    <section id="about" className="py-20 md:py-28 relative z-10 bg-slate-50/60 border-t border-slate-100 scroll-mt-24">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with exactly one italic accent word */}
        <SectionHeading number="01" label="About">
          WHERE <span className="headline-accent">curiosity</span>
          <br className="hidden sm:inline" /> MEETS CODE.
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Generous, Full-Proportion Portrait Display (Zero Cropping) */}
          <div
            className="lg:col-span-5 flex flex-col items-center select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Main Photo Frame - Tall & 100% Uncropped */}
              <div
                onClick={() => {
                  if (onOpenLightbox) {
                    onOpenLightbox({
                      image: currentImg.src,
                      title: currentImg.label || 'Lakshana A',
                      caption: 'Lakshana A - About',
                    });
                  }
                }}
                className="relative w-full h-[420px] sm:h-[480px] rounded-[28px] overflow-hidden bg-white border border-slate-200 shadow-xl flex items-center justify-center p-3 cursor-pointer group"
                title="Click to view full screen"
              >
                {/* 100% Uncropped Full Natural Proportion Image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImg.id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="relative z-10 w-full h-full flex items-center justify-center"
                  >
                    <ImageWithFallback
                      src={currentImg.src}
                      alt={currentImg.label}
                      className="max-h-full max-w-full object-contain rounded-2xl drop-shadow-md"
                      containerClassName="w-full h-full flex items-center justify-center"
                      aspectRatio="aspect-auto"
                      placeholderText={currentImg.src.replace('/', '')}
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Top Right Expand Icon */}
                <div className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 group-hover:text-slate-900 group-hover:scale-110 transition-all shadow-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Label Pill */}
                <div className="absolute bottom-4 left-4 right-4 z-20 px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md flex items-center justify-between">
                  <span className="font-serif italic text-base text-slate-900 font-semibold">
                    {currentImg.label}
                  </span>
                  <span className="font-mono text-xs text-accent-from font-bold">
                    0{currentIndex + 1} / 0{aboutImages.length}
                  </span>
                </div>
              </div>

              {/* Navigation Controls under the photo */}
              <div className="flex items-center justify-between mt-4 px-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-sm"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center space-x-1.5">
                  {aboutImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentIndex
                          ? 'w-7 bg-gradient-to-r from-accent-from to-accent-to'
                          : 'w-2 bg-slate-200 hover:bg-slate-300'
                      }`}
                      aria-label={`Go to photo ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-sm"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Biography, Education, and Scannable Highlights */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Large Serif Intro Line with Bold Highlight */}
            <p className="font-serif text-3xl sm:text-4xl text-slate-900 leading-snug mb-6 font-normal">
              I&apos;m Lakshana A, an AI & Data Science developer who builds{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-accent-from to-accent-to font-semibold">
                production systems that solve real problems.
              </span>
            </p>

            {/* Narrative Story Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm mb-6">
              <p className="text-slate-700 text-base sm:text-[17px] font-sans leading-relaxed">
                I’m a third-year B.Tech AI &amp; Data Science student at Rajalakshmi Institute of Technology, Chennai, and I like building AI applications that actually work. At the{' '}
                <a
                  href="#experience"
                  className="font-semibold text-accent-from hover:text-accent-to underline decoration-accent-from/40 hover:decoration-accent-to underline-offset-4 transition-colors"
                >
                  National Informatics Centre
                </a>
                , Govt. of India, I built backend infrastructure for an AI-driven Oral Cancer Detection application using Python, Flask, REST APIs, PostgreSQL, and ML. Beyond internships, I build practical, real-world tools like{' '}
                <a
                  href="https://hypefilter-ai.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent-from hover:text-accent-to underline decoration-accent-from/40 hover:decoration-accent-to underline-offset-4 transition-colors"
                >
                  HypeFilter AI
                </a>
                {' '}and{' '}
                <a
                  href="https://constellia.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent-from hover:text-accent-to underline decoration-accent-from/40 hover:decoration-accent-to underline-offset-4 transition-colors"
                >
                  Constellia
                </a>
                —combining computer vision, LLMs, and scalable backends. Always open to collaborations and building impactful systems, so let’s connect.
              </p>
            </div>

            {/* Education Badge Line */}
            <div className="font-mono text-xs uppercase tracking-wider text-slate-800 bg-white border border-slate-200 px-4 py-3 rounded-xl mb-6 flex items-center gap-2.5 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-from animate-pulse" />
              <span className="font-semibold">{profile.education}</span>
            </div>

            {/* 2 Animated Stat Counters */}
            <div className="grid grid-cols-2 gap-4">
              {profile.counters.map((c, i) => (
                <CounterItem
                  key={i}
                  target={c.value}
                  label={c.label}
                  suffix={c.suffix}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
