import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, Calendar, Building2, Maximize2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { experiences } from '../data/experience';
import { useReducedMotion } from '../hooks/useReducedMotion';
import ImageWithFallback from './ImageWithFallback';

export default function Experience({ onOpenLightbox }) {
  const [currentExpIndex, setCurrentExpIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [photoHovered, setPhotoHovered] = useState(false);
  const [direction, setDirection] = useState(1);
  const reducedMotion = useReducedMotion();

  const currentExp = experiences[currentExpIndex];
  const photos = currentExp?.photos || [];

  useEffect(() => {
    setCurrentPhotoIndex(0);
  }, [currentExpIndex]);

  useEffect(() => {
    if (reducedMotion || photoHovered || photos.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [reducedMotion, photoHovered, photos.length, currentExpIndex]);

  const handleNextExp = () => {
    setDirection(1);
    setCurrentExpIndex((prev) => (prev + 1) % experiences.length);
  };

  const handlePrevExp = () => {
    setDirection(-1);
    setCurrentExpIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
    exit: (direction) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
      transition: { duration: 0.25, ease: 'easeIn' },
    }),
  };

  const currentPhotoSrc = photos[currentPhotoIndex];

  return (
    <section id="experience" className="py-20 md:py-28 relative z-10 bg-white scroll-mt-24">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with exactly one italic accent word */}
        <SectionHeading
          number="02"
          label="Experience"
          subtitle="Real-world engineering internships across government and industry tech teams."
        >
          REAL WORK, REAL <span className="headline-accent">impact.</span>
        </SectionHeading>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Card with clean light surface & crisp border */}
          <div className="relative rounded-3xl bg-slate-50/70 border border-slate-200 shadow-xl p-6 sm:p-8 md:p-10 overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentExp.slug}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
              >
                {/* Left Side (approx 45%): Main Photo in FULL PROPORTION (No cropping) */}
                <div
                  className="lg:col-span-5 flex flex-col"
                  onMouseEnter={() => setPhotoHovered(true)}
                  onMouseLeave={() => setPhotoHovered(false)}
                >
                  {/* Main Display Container - Full Proportion */}
                  <div
                    onClick={() =>
                      onOpenLightbox({
                        image: currentPhotoSrc,
                        title: `${currentExp.organization} (Photo ${currentPhotoIndex + 1})`,
                        caption: currentExp.role,
                      })
                    }
                    className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md flex items-center justify-center cursor-pointer group p-2"
                    title="Click to view full screen"
                  >
                    {/* Uncropped, full proportion image */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentPhotoIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10 w-full h-full flex items-center justify-center"
                      >
                        <ImageWithFallback
                          src={currentPhotoSrc}
                          alt={`${currentExp.organization} - Photo ${currentPhotoIndex + 1}`}
                          className="max-h-full max-w-full object-contain rounded-xl drop-shadow-sm"
                          containerClassName="w-full h-full flex items-center justify-center"
                          aspectRatio="aspect-auto"
                          placeholderText={currentPhotoSrc?.replace('/', '')}
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Expand icon on hover */}
                    <div className="absolute top-3 right-3 z-20 p-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 group-hover:text-slate-950 group-hover:scale-110 transition-all shadow-sm">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    {/* Photo index indicator */}
                    <div className="absolute bottom-3 left-3 z-20 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[11px] font-mono text-slate-800 font-bold shadow-sm">
                      {currentPhotoIndex + 1} / {photos.length}
                    </div>
                  </div>

                  {/* Thumbnail Strip (6 photos per internship) */}
                  {photos.length > 1 && (
                    <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1.5 scrollbar-thin">
                      {photos.map((p, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentPhotoIndex(idx)}
                          className={`relative w-16 h-12 rounded-xl overflow-hidden shrink-0 border transition-all bg-white flex items-center justify-center p-0.5 shadow-sm ${
                            currentPhotoIndex === idx
                              ? 'border-indigo-600 ring-2 ring-indigo-600/30 scale-105'
                              : 'border-slate-200 opacity-60 hover:opacity-100'
                          }`}
                          aria-label={`Show photo ${idx + 1}`}
                        >
                          <ImageWithFallback
                            src={p}
                            alt={`Thumbnail ${idx + 1}`}
                            className="max-h-full max-w-full object-contain"
                            containerClassName="w-full h-full flex items-center justify-center"
                            aspectRatio="aspect-auto"
                            placeholderText={`Photo ${idx + 1}`}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Side: Role, Organization, Scannable Bullets & Certificate CTA */}
                <div className="lg:col-span-7 flex flex-col items-start">
                  {/* Role Badge */}
                  <div className="inline-block px-3 py-1 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-xs uppercase tracking-wider font-bold mb-3">
                    {currentExp.badge}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-slate-900 mb-2">
                    {currentExp.role}
                  </h3>

                  {/* Organization & Dates in Mono */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-slate-600 mb-4">
                    <span className="flex items-center gap-1.5 font-bold text-slate-800">
                      <Building2 className="w-3.5 h-3.5 text-blue-600" />
                      {currentExp.organization}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                      {currentExp.dates}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-700 text-base font-sans leading-relaxed mb-4 font-medium">
                    {currentExp.summary}
                  </p>

                  {/* Scannable Highlights with Bold Key Words */}
                  <ul className="space-y-2 mb-6 w-full">
                    {currentExp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 font-sans">
                        <span className="text-indigo-600 font-bold mt-0.5">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentExp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Certificate Button (Lightbox trigger) */}
                  <button
                    onClick={() =>
                      onOpenLightbox({
                        image: currentExp.certificate,
                        title: currentExp.certificateTitle,
                        caption: `${currentExp.role} at ${currentExp.organization} (${currentExp.dates})`,
                      })
                    }
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-sm hover:shadow group"
                  >
                    <Award className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Edge Navigation Arrows */}
            <button
              onClick={handlePrevExp}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-950 transition-all hover:scale-110 shadow-md"
              aria-label="Previous internship"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextExp}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-950 transition-all hover:scale-110 shadow-md"
              aria-label="Next internship"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel Progress & Indicator */}
          <div className="flex items-center justify-between mt-6 px-2">
            {/* Dots */}
            <div className="flex items-center space-x-2">
              {experiences.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentExpIndex ? 1 : -1);
                    setCurrentExpIndex(idx);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentExpIndex
                      ? 'w-8 bg-gradient-to-r from-accent-from to-accent-to'
                      : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to internship slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Mono Pill: EXPERIENCE 01 / 02 */}
            <div className="px-3 py-1 rounded-full bg-white border border-slate-200 font-mono text-xs text-slate-600 font-bold shadow-sm">
              EXPERIENCE{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-from to-accent-to">
                0{currentExpIndex + 1}
              </span>{' '}
              / 0{experiences.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
