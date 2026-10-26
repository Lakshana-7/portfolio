import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { certificates, certificateCategories } from '../data/certificates';
import ImageWithFallback from './ImageWithFallback';

export default function Certificates({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? certificates
      : certificates.filter((c) => {
          if (activeCategory === 'Courses') return c.category === 'Courses' || c.category === 'Course';
          if (activeCategory === 'Internships') return c.category === 'Internships' || c.category === 'Internship';
          return c.category === activeCategory;
        });

  return (
    <section id="certificates" className="py-20 md:py-28 relative z-10 bg-slate-50/70 border-t border-slate-100 scroll-mt-24">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with exactly one italic accent word */}
        <SectionHeading
          number="04"
          label="Certificates"
          subtitle="Verified credentials, technical internships, and engineering coursework."
        >
          PROOF OF <span className="headline-accent">progress.</span>
        </SectionHeading>

        {/* Small Filter Row Above Grid */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
          {certificateCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-accent-from to-accent-to text-white shadow-md shadow-accent-from/25'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 shadow-sm'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 3 Columns Desktop, 2 Tablet, 1 Mobile */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filtered.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() =>
                  onOpenLightbox({
                    image: cert.image,
                    title: cert.title,
                    caption: `${cert.issuer}${cert.detail ? ` · ${cert.detail}` : ''}${cert.description ? ` · ${cert.description}` : ''}`,
                    verifyUrl: cert.verifyUrl,
                  })
                }
                className="group cursor-pointer rounded-2xl bg-white border border-slate-200 hover:border-indigo-500/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col overflow-hidden shadow-sm"
              >
                {/* 4:3 Certificate Display - Full Proportion, Never Cropped */}
                <div className="relative w-full aspect-[4/3] bg-slate-50 overflow-hidden flex items-center justify-center p-3">
                  <ImageWithFallback
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500 drop-shadow-sm rounded"
                    containerClassName="w-full h-full flex items-center justify-center"
                    aspectRatio="aspect-auto"
                    placeholderText={cert.image?.replace('/', '')}
                  />

                  {/* Category Pill on top right */}
                  <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono uppercase tracking-wider text-slate-700 font-bold shadow-sm">
                    {cert.category}
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors mb-1.5">
                      {cert.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-slate-600 mb-2 font-medium">
                      {cert.issuer}
                    </p>

                    {/* Score / Detail line */}
                    {(cert.detail || cert.score) && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-[11px] font-bold mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {cert.detail || `Score: ${cert.score}`}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                      {cert.date}
                    </span>

                    {cert.verifyUrl ? (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1 font-bold transition-colors"
                      >
                        View Credential <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
