import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Code,
  Calendar,
  Layers,
  Activity,
  User,
  ShieldAlert,
  Clock,
  Eye,
  Sparkles,
  Orbit,
  Compass,
  Music,
  Cpu,
  AlertTriangle,
  MapPin,
  Scan,
  CheckCircle,
  FileText,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { projects } from '../data/projects';
import ImageWithFallback from '../components/ImageWithFallback';
import Lightbox from '../components/Lightbox';

const iconMap = {
  ShieldAlert,
  Clock,
  Layers,
  Eye,
  Sparkles,
  Orbit,
  Compass,
  Music,
  Cpu,
  Activity,
  AlertTriangle,
  MapPin,
  Scan,
  CheckCircle,
  FileText,
  Smartphone
};

export default function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Scroll to top on page mount or slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Lightbox state for screenshots
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-heading font-bold text-5xl uppercase mb-4">Project Not Found</h1>
        <p className="text-muted font-sans mb-8">The project you are looking for does not exist or has moved.</p>
        <Link
          to="/#projects"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-from to-accent-to text-white font-mono text-xs uppercase tracking-wider"
        >
          ← Return to Projects
        </Link>
      </div>
    );
  }

  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const screenshots = project.screenshots || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.4 }}
      className="pt-28 pb-20 relative z-10"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar: Back Link & Counter */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/60">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted hover:text-text transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-accent-from" />
            <span>All Projects</span>
          </Link>

          <span className="font-mono text-xs text-muted uppercase tracking-widest">
            PROJECT 0{currentIndex + 1} / 0{projects.length}
          </span>
        </div>

        {/* Header: Title, Tagline, Tags & Action Buttons */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {project.cornerTag && (
              <span className="px-3 py-1 rounded-full bg-highlight/10 border border-highlight/25 text-highlight font-mono text-xs uppercase tracking-wider font-semibold">
                {project.cornerTag}
              </span>
            )}
            <span className="px-3 py-1 rounded-full bg-surface border border-border text-available font-mono text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-available" />
              {project.status}
            </span>
          </div>

          <h1 className="font-heading font-extrabold uppercase tracking-tight text-5xl sm:text-6xl md:text-7xl text-text leading-[0.95] mb-4">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-muted max-w-3xl mb-6">
            {project.tagline || project.summary}
          </p>

          {/* Action Buttons: Prominent Live Demo & View Code */}
          <div className="flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-accent-from to-accent-to text-white font-mono text-xs uppercase tracking-wider font-bold shadow-[0_0_30px_rgba(124,92,255,0.5)] hover:shadow-[0_0_45px_rgba(124,92,255,0.8)] hover:scale-105 active:scale-95 transition-all group"
              >
                <Sparkles className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
                <span>Launch Live Working Demo</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-surface hover:bg-surface-raised border border-border hover:border-accent-from/50 text-text font-mono text-xs uppercase tracking-wider font-medium transition-all hover:scale-105 active:scale-95"
              >
                {/* Plain code icon used here - strictly not GitHub */}
                <Code className="w-4 h-4 text-accent-from" />
                <span>View Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Live Demo Banner if liveUrl exists */}
        {project.liveUrl && (
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-accent-from/15 via-surface to-accent-to/15 border border-accent-from/40 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-available animate-pulse" />
              <div>
                <h4 className="font-heading font-bold text-lg uppercase text-white tracking-wide">
                  Live Application Available Online
                </h4>
                <p className="text-xs text-muted font-sans">
                  You can interact with the live deployed build directly in your browser.
                </p>
              </div>
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-from to-accent-to text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-md shadow-accent-from/30 hover:scale-105 transition-all shrink-0"
            >
              <span>Open Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Wide Cover Image with gentle rounded frame - Full Proportion */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden bg-[#0d0f1c] border border-border shadow-2xl mb-12 flex items-center justify-center">
          {project.cover && (
            <div
              className="absolute inset-0 bg-cover bg-center blur-2xl opacity-20 scale-125 pointer-events-none"
              style={{ backgroundImage: `url(${project.cover})` }}
            />
          )}
          <ImageWithFallback
            src={project.cover}
            alt={project.title}
            className="max-h-full max-w-full object-contain relative z-10"
            containerClassName="w-full h-full flex items-center justify-center"
            aspectRatio="aspect-auto"
            placeholderText={project.cover?.replace('/', '')}
            priority
          />
        </div>

        {/* Info Strip: 4 Mono Cells */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200 mb-16 shadow-sm">
          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5 font-bold">
              <User className="w-3.5 h-3.5 text-accent-from" /> Role
            </span>
            <span className="font-sans text-sm font-bold text-slate-900">
              {project.role}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5 font-bold">
              <Calendar className="w-3.5 h-3.5 text-accent-to" /> Timeline
            </span>
            <span className="font-sans text-sm font-bold text-slate-900">
              {project.timeline}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5 font-bold">
              <Layers className="w-3.5 h-3.5 text-indigo-600" /> Core Stack
            </span>
            <span className="font-sans text-sm font-bold text-slate-900 truncate">
              {project.stack?.slice(0, 3).join(', ')}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1.5 font-bold">
              <Activity className="w-3.5 h-3.5 text-emerald-600" /> Status
            </span>
            <span className="font-sans text-sm font-bold text-emerald-600">
              {project.status}
            </span>
          </div>
        </div>

        {/* Section 1: Overview & The Problem */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h3 className="font-heading font-extrabold text-2xl uppercase tracking-tight text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-from" />
              Project Overview
            </h3>
            <p className="text-slate-600 text-base sm:text-lg font-sans leading-relaxed font-medium">
              {project.overview}
            </p>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h3 className="font-heading font-extrabold text-2xl uppercase tracking-tight text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              The Problem It Solves
            </h3>
            <p className="text-slate-600 text-base sm:text-lg font-sans leading-relaxed font-medium">
              {project.problem}
            </p>
          </div>
        </div>

        {/* Section 2: Key Features Grid */}
        <div className="mb-16">
          <h3 className="font-heading font-extrabold text-2xl uppercase tracking-tight text-slate-900 mb-6">
            Key Architecture & Features
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.features?.map((feat, i) => {
              const IconComp = iconMap[feat.icon] || Layers;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 transition-all flex flex-col shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-accent-from mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-xl uppercase tracking-tight text-slate-900 mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed font-medium">
                    {feat.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: How It Works / Flow Diagram */}
        {project.flow && (
          <div className="p-8 rounded-2xl md:rounded-3xl bg-surface border border-border mb-16">
            <h3 className="font-heading font-bold text-2xl uppercase tracking-tight text-text mb-6">
              How It Works & System Flow
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {project.flow.map((step, idx) => (
                <div
                  key={idx}
                  className="relative p-5 rounded-xl bg-surface-raised border border-border flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-accent-from mb-2 block">
                      STAGE 0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-text/90 font-sans leading-relaxed">
                      {step}
                    </p>
                  </div>
                  {idx < project.flow.length - 1 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-muted font-mono text-xs">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: Tech Stack Chips */}
        {project.techStack && (
          <div className="mb-16">
            <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-text mb-4">
              Technologies & Standards
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-surface border border-border font-mono text-xs text-text/90"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Section 5: Screenshots Gallery */}
        {screenshots.length > 0 && (
          <div className="mb-16">
            <h3 className="font-heading font-bold text-2xl uppercase tracking-tight text-text mb-6">
              Screenshots & Interface
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {screenshots.map((shot, sIdx) => (
                <div
                  key={sIdx}
                  onClick={() => {
                    setLightboxIndex(sIdx);
                    setLightboxOpen(true);
                  }}
                  className="group relative aspect-[16/10] rounded-xl overflow-hidden bg-[#0d0f1c] border border-border cursor-pointer hover:border-accent-from transition-all flex items-center justify-center"
                >
                  <ImageWithFallback
                    src={shot}
                    alt={`${project.title} Screenshot ${sIdx + 1}`}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    containerClassName="w-full h-full flex items-center justify-center"
                    placeholderText={shot.replace('/', '')}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white pointer-events-none">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 6: Outcome & Learnings */}
        {project.outcome && (
          <div className="p-8 rounded-2xl bg-gradient-to-br from-surface to-surface-raised border border-border mb-20">
            <h3 className="font-heading font-bold text-2xl uppercase tracking-tight text-text mb-3">
              Outcomes & Engineering Learnings
            </h3>
            <p className="text-muted text-base sm:text-lg font-sans leading-relaxed">
              {project.outcome}
            </p>
          </div>
        )}

        {/* Bottom Navigation: Prev & Next Project Cards */}
        <div className="pt-10 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            to={`/projects/${prevProject.slug}`}
            className="p-6 rounded-2xl bg-surface border border-border hover:border-accent-from/50 transition-all group flex flex-col items-start"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-muted mb-2 flex items-center gap-1.5">
              <ChevronLeft className="w-3.5 h-3.5 text-accent-from" /> Previous Project
            </span>
            <span className="font-heading font-bold text-2xl uppercase text-text group-hover:text-accent-from transition-colors">
              {prevProject.title}
            </span>
          </Link>

          <Link
            to={`/projects/${nextProject.slug}`}
            className="p-6 rounded-2xl bg-surface border border-border hover:border-accent-from/50 transition-all group flex flex-col items-end text-right"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-muted mb-2 flex items-center gap-1.5">
              Next Project <ChevronRight className="w-3.5 h-3.5 text-accent-to" />
            </span>
            <span className="font-heading font-bold text-2xl uppercase text-text group-hover:text-accent-to transition-colors">
              {nextProject.title}
            </span>
          </Link>
        </div>
      </div>

      {/* Screenshot Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={screenshots.map((s, idx) => ({
          image: s,
          title: `${project.title} - Screenshot ${idx + 1}`,
          caption: project.summary,
        }))}
        currentIndex={lightboxIndex}
        setCurrentIndex={setLightboxIndex}
      />
    </motion.div>
  );
}
