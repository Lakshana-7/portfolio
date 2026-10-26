import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { galleryItems } from '../data/gallery';
import { useReducedMotion } from '../hooks/useReducedMotion';
import ImageWithFallback from './ImageWithFallback';

export default function Gallery({ onOpenLightbox }) {
  const reducedMotion = useReducedMotion();
  const [hoveredRow, setHoveredRow] = useState(null);

  // Split photos into odd and even
  const topRowItems = galleryItems.filter((_, idx) => idx % 2 === 0);
  const bottomRowItems = galleryItems.filter((_, idx) => idx % 2 !== 0);

  // Duplicate for seamless infinite loop
  const topRowDuplicated = [...topRowItems, ...topRowItems];
  const bottomRowDuplicated = [...bottomRowItems, ...bottomRowItems];

  return (
    <section id="gallery" className="py-24 md:py-32 relative bg-[#07080E] text-white z-10 overflow-hidden shadow-2xl scroll-mt-24">
      {/* Subtle radial cosmic glow inside the darkroom gallery */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-900/20 via-blue-900/10 to-purple-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 mb-14 relative z-10">
        {/* Section Heading in Dark Mode */}
        <SectionHeading
          number="06"
          label="Gallery Exhibition"
          subtitle="A cinematic visual archive from hackathons, alumni leadership sessions, and university speaking events."
          dark={true}
        >
          MOMENTS THAT <span className="headline-accent">shaped</span> ME.
        </SectionHeading>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-slate-300">
          <Sparkles className="w-3.5 h-3.5 text-accent-from animate-pulse" />
          <span>Interactive Exhibition · Hover to pause · Click to enlarge</span>
        </div>
      </div>

      {/* Marquee Wrapper with left and right gradient masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right gradient masks for smooth edge fade into dark background */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#07080E] to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#07080E] to-transparent z-20" />

        {/* Row 1: Moves Left */}
        <div
          className={`flex mb-6 sm:mb-8 ${
            reducedMotion ? 'overflow-x-auto py-2' : ''
          }`}
          onMouseEnter={() => setHoveredRow(1)}
          onMouseLeave={() => setHoveredRow(null)}
        >
          <div
            className={`flex items-center gap-5 sm:gap-7 ${
              !reducedMotion ? 'animate-marquee-left' : ''
            }`}
            style={{
              animationPlayState: hoveredRow === 1 ? 'paused' : 'running',
              animationDuration: '48s',
            }}
          >
            {topRowDuplicated.map((item, index) => {
              const originalIndex = galleryItems.findIndex((g) => g.id === item.id);
              return (
                <div
                  key={`top-${item.id}-${index}`}
                  onClick={() =>
                    onOpenLightbox({
                      items: galleryItems,
                      initialIndex: originalIndex >= 0 ? originalIndex : 0,
                    })
                  }
                  className="group relative shrink-0 h-[240px] sm:h-[310px] w-auto rounded-2xl overflow-hidden bg-[#121422] border border-white/15 cursor-pointer shadow-2xl hover:border-indigo-400 transition-all duration-300 hover:scale-[1.03] flex items-center justify-center p-2.5"
                  title="Click to view full photo"
                >
                  {/* Subtle ambient backdrop blur */}
                  {item.image && (
                    <div
                      className="absolute inset-0 bg-cover bg-center blur-2xl opacity-20 scale-125 pointer-events-none"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  )}

                  {/* Image in 100% full proportion - NEVER cropped */}
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="h-full w-auto max-h-[220px] sm:max-h-[290px] object-contain rounded-xl relative z-10 drop-shadow-xl"
                    containerClassName="h-full w-auto flex items-center justify-center"
                    aspectRatio="aspect-auto"
                    placeholderText={item.image?.replace('/', '')}
                  />

                  {/* Non-intrusive Glass Label that DOES NOT block the photo */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3.5 py-2 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 flex items-center justify-between z-20 pointer-events-none">
                    <div className="flex flex-col truncate mr-2">
                      <span className="font-heading font-bold text-xs uppercase text-white tracking-wide truncate">
                        {item.title}
                      </span>
                      <span className="text-[10px] text-slate-300 font-sans truncate">
                        {item.caption}
                      </span>
                    </div>
                    <Maximize2 className="w-3.5 h-3.5 text-accent-from shrink-0" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Moves Right */}
        <div
          className={`flex ${reducedMotion ? 'overflow-x-auto py-2' : ''}`}
          onMouseEnter={() => setHoveredRow(2)}
          onMouseLeave={() => setHoveredRow(null)}
        >
          <div
            className={`flex items-center gap-5 sm:gap-7 ${
              !reducedMotion ? 'animate-marquee-right' : ''
            }`}
            style={{
              animationPlayState: hoveredRow === 2 ? 'paused' : 'running',
              animationDuration: '48s',
            }}
          >
            {bottomRowDuplicated.map((item, index) => {
              const originalIndex = galleryItems.findIndex((g) => g.id === item.id);
              return (
                <div
                  key={`bottom-${item.id}-${index}`}
                  onClick={() =>
                    onOpenLightbox({
                      items: galleryItems,
                      initialIndex: originalIndex >= 0 ? originalIndex : 0,
                    })
                  }
                  className="group relative shrink-0 h-[240px] sm:h-[310px] w-auto rounded-2xl overflow-hidden bg-[#121422] border border-white/15 cursor-pointer shadow-2xl hover:border-indigo-400 transition-all duration-300 hover:scale-[1.03] flex items-center justify-center p-2.5"
                  title="Click to view full photo"
                >
                  {/* Subtle ambient backdrop blur */}
                  {item.image && (
                    <div
                      className="absolute inset-0 bg-cover bg-center blur-2xl opacity-20 scale-125 pointer-events-none"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  )}

                  {/* Image in 100% full proportion - NEVER cropped */}
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="h-full w-auto max-h-[220px] sm:max-h-[290px] object-contain rounded-xl relative z-10 drop-shadow-xl"
                    containerClassName="h-full w-auto flex items-center justify-center"
                    aspectRatio="aspect-auto"
                    placeholderText={item.image?.replace('/', '')}
                  />

                  {/* Non-intrusive Glass Label that DOES NOT block the photo */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3.5 py-2 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 flex items-center justify-between z-20 pointer-events-none">
                    <div className="flex flex-col truncate mr-2">
                      <span className="font-heading font-bold text-xs uppercase text-white tracking-wide truncate">
                        {item.title}
                      </span>
                      <span className="text-[10px] text-slate-300 font-sans truncate">
                        {item.caption}
                      </span>
                    </div>
                    <Maximize2 className="w-3.5 h-3.5 text-accent-from shrink-0" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
