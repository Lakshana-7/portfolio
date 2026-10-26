import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/projects';
import ImageWithFallback from './ImageWithFallback';

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative z-10 bg-[#07080E] text-white overflow-hidden scroll-mt-24 shadow-2xl">
      {/* Subtle cosmic background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-indigo-900/20 via-blue-900/10 to-purple-900/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with high-contrast pure white text on dark background */}
        <SectionHeading
          number="03"
          label="Projects"
          dark={true}
          subtitle="Interactive systems across web, computer vision, AI prompts, and IoT embedded engineering."
        >
          IDEAS I TURNED INTO <span className="headline-accent">products.</span>
        </SectionHeading>

        {/* 2x2 Grid of 4 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col"
            >
              <div className="group relative flex flex-col rounded-2xl md:rounded-3xl bg-[#121422] border border-white/10 overflow-hidden transition-all duration-300 hover:border-indigo-400/60 hover:shadow-[0_0_35px_rgba(99,102,241,0.25)] hover:-translate-y-1 h-full shadow-xl">
                {/* Cover Image Container (16:10) - Single Clean Screenshot Display */}
                <Link
                  to={`/projects/${project.slug}`}
                  className="relative w-full aspect-[16/10] overflow-hidden bg-[#0A0C16] flex items-center justify-center cursor-pointer block border-b border-white/5"
                >
                  {/* Subtle ambient glow behind project cover */}
                  {project.cover && (
                    <div
                      className="absolute inset-0 bg-cover bg-center blur-2xl opacity-25 scale-125 pointer-events-none"
                      style={{ backgroundImage: `url(${project.cover})` }}
                    />
                  )}

                  <ImageWithFallback
                    src={project.cover}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain relative z-10 transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-md"
                    containerClassName="w-full h-full flex items-center justify-center p-2.5"
                    aspectRatio="aspect-auto"
                    placeholderText={project.cover?.replace('/', '')}
                  />

                  {/* Corner Tag if present */}
                  {project.cornerTag && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-amber-400 tracking-wider uppercase font-semibold z-20">
                      {project.cornerTag}
                    </div>
                  )}

                  {/* Direct Glowing LIVE DEMO Pill on Top Right of Cover */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 z-30 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-accent-from to-accent-to text-white font-mono text-[11px] uppercase tracking-wider font-semibold shadow-[0_0_15px_rgba(99,102,241,0.5)] hover:shadow-[0_0_25px_rgba(99,102,241,0.8)] hover:scale-105 transition-all"
                      title="Launch Live Working App"
                    >
                      <Sparkles className="w-3 h-3 text-white animate-pulse" />
                      <span>Live Demo ↗</span>
                    </a>
                  )}
                </Link>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-[#121422]">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs uppercase text-slate-400 tracking-wider">
                        0{idx + 1} / 0{projects.length}
                      </span>
                      <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {project.status}
                      </span>
                    </div>

                    <Link to={`/projects/${project.slug}`}>
                      <h3 className="font-heading font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-blue-400 transition-all mb-2">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-slate-300 text-sm font-sans line-clamp-2 leading-relaxed mb-6 font-normal">
                      {project.summary}
                    </p>

                    {/* Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300 group-hover:text-white transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Prominent Action Bar with Live Demo & Case Study */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-accent-from to-accent-to text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-md shadow-accent-from/30 hover:shadow-lg hover:shadow-accent-from/50 hover:scale-105 active:scale-95 transition-all"
                      >
                        <span>Launch Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-slate-400">Internal Evaluation</span>
                    )}

                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-accent-from" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
