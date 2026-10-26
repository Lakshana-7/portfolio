import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ArrowUpRight,
  Copy,
  Check
} from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { profile } from '../data/profile';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative z-10 bg-slate-50/70 border-t border-slate-100 scroll-mt-24">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with exactly one italic accent word */}
        <SectionHeading
          number="07"
          label="LET'S BUILD SOMETHING TOGETHER"
          subtitle="Actively exploring internships and full-time opportunities in AI, data systems, and backend development."
        >
          GET IN <span className="headline-accent">touch.</span>
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: "Open to opportunities" Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-accent-from mb-6 shadow-sm">
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="font-serif italic text-3xl sm:text-4xl text-slate-900 mb-4 font-normal">
                {profile.openOpportunitiesTitle}
              </h3>

              <p className="text-slate-600 font-sans text-base leading-relaxed mb-6 font-medium">
                {profile.openOpportunitiesText}
              </p>

              <div className="flex items-center gap-2.5 font-mono text-xs text-slate-800 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-xl w-fit font-bold shadow-sm">
                <MapPin className="w-4 h-4 text-accent-from" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Filled Accent Button: Start a conversation */}
            <div className="pt-8 mt-8 border-t border-slate-100">
              <a
                href={`mailto:${profile.email}?subject=Opportunity%20Discussion%20-%20Lakshana%20A`}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-accent-from to-accent-to text-white font-mono text-xs uppercase tracking-wider font-bold shadow-md shadow-accent-from/30 hover:shadow-lg hover:shadow-accent-from/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: 2x2 Grid of Contact Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Card 1: Email (with Copy Toast button) */}
            <div className="relative group p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-accent-from group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5 font-mono text-[11px] font-bold"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <span className="font-mono text-xs uppercase tracking-wider text-slate-500 block mb-1 font-semibold">
                  Email
                </span>

                <a
                  href={`mailto:${profile.email}`}
                  className="font-sans font-bold text-slate-900 text-base hover:text-accent-from transition-colors break-all"
                >
                  {profile.email}
                </a>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-slate-500 group-hover:text-slate-900 font-mono text-[11px] font-bold">
                <span>Write an email</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Card 2: LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform mb-4">
                  <FaLinkedinIn className="w-5 h-5" />
                </div>

                <span className="font-mono text-xs uppercase tracking-wider text-slate-500 block mb-1 font-semibold">
                  LinkedIn
                </span>

                <span className="font-sans font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors break-all">
                  {profile.linkedinHandle}
                </span>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-slate-500 group-hover:text-slate-900 font-mono text-[11px] font-bold">
                <span>View profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Card 3: GitHub (Allowed here in Contact and Footer) */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform mb-4">
                  <FaGithub className="w-5 h-5" />
                </div>

                <span className="font-mono text-xs uppercase tracking-wider text-slate-500 block mb-1 font-semibold">
                  GitHub
                </span>

                <span className="font-sans font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors break-all">
                  {profile.githubHandle}
                </span>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-slate-500 group-hover:text-slate-900 font-mono text-[11px] font-bold">
                <span>Browse repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Card 4: Phone & WhatsApp */}
            <div className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[10px] uppercase font-bold tracking-wider">
                    Direct
                  </span>
                </div>

                <span className="font-mono text-xs uppercase tracking-wider text-slate-500 block mb-1 font-semibold">
                  Phone & WhatsApp
                </span>

                <a
                  href="tel:+917305909555"
                  className="font-sans font-bold text-slate-900 text-lg hover:text-amber-600 transition-colors block"
                >
                  +91 73059 09555
                </a>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <a
                  href="tel:+917305909555"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 font-mono text-[11px] font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Tap to call</span>
                </a>
                <a
                  href="https://wa.me/917305909555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-mono text-[11px] font-bold transition-colors"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Copy Toast */}
      <div
        aria-live="polite"
        className="fixed bottom-6 left-6 z-50 pointer-events-none"
      >
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="px-4 py-2.5 rounded-xl bg-slate-900 text-white shadow-2xl backdrop-blur-md flex items-center gap-2 font-mono text-xs font-semibold"
            >
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Email copied to clipboard!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
