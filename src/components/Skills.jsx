import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
  SiFlask,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPandas,
  SiPytorch,
  SiNetlify,
  SiVercel,
  SiPostman
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import {
  Database,
  Layers,
  Eye,
  Server,
  Radio,
  BarChart3,
  FileSpreadsheet,
  Camera,
  Brain,
  Scan,
  Chrome,
  Cpu,
  GitBranch,
  Terminal,
  Code2
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { skills, skillCategories } from '../data/skills';

const iconMap = {
  SiPython: <SiPython className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
  FaJava: <FaJava className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />,
  SiJavascript: <SiJavascript className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />,
  SiCplusplus: <SiCplusplus className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />,
  SiHtml5: <SiHtml5 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />,
  SiCss: <SiCss className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />,
  SiReact: <SiReact className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />,
  SiTailwindcss: <SiTailwindcss className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500" />,
  SiFlask: <SiFlask className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" />,
  SiNodedotjs: <SiNodedotjs className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />,
  SiExpress: <SiExpress className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" />,
  SiPostgresql: <SiPostgresql className="w-5 h-5 sm:w-6 sm:h-6 text-sky-700" />,
  SiPandas: <SiPandas className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-700" />,
  SiPytorch: <SiPytorch className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />,
  SiNetlify: <SiNetlify className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />,
  SiVercel: <SiVercel className="w-5 h-5 sm:w-6 sm:h-6 text-slate-900" />,
  SiPostman: <SiPostman className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />,
  Database: <Database className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
  Layers: <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />,
  Eye: <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />,
  Server: <Server className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />,
  Radio: <Radio className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />,
  BarChart3: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />,
  FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />,
  Camera: <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />,
  Brain: <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />,
  Scan: <Scan className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />,
  Chrome: <Chrome className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />,
  Cpu: <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
  GitBranch: <GitBranch className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />,
  Terminal: <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800" />,
};

function getSkillIcon(iconName) {
  return iconMap[iconName] || <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />;
}

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState('All');

  const filteredSkills =
    activeGroup === 'All'
      ? skills
      : skills.filter((s) => s.group === activeGroup);

  return (
    <section id="skills" className="py-20 md:py-28 relative z-10 bg-white scroll-mt-24">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with exactly one italic accent word */}
        <SectionHeading
          number="05"
          label="Skills"
          subtitle="Technical capabilities, frameworks, and developer toolchains."
        >
          EVERY <span className="headline-accent">skill</span> A NEW POSSIBILITY.
        </SectionHeading>

        {/* Hairline above filter buttons */}
        <div className="h-[1px] w-full bg-slate-200 mb-6" />

        {/* Filter Buttons Row */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {skillCategories.map((group) => {
            const isActive = activeGroup === group;
            return (
              <button
                key={group}
                onClick={() => setActiveGroup(group)}
                className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 shadow-sm'
                }`}
              >
                {group}
              </button>
            );
          })}
        </div>

        {/* Hairline below filter buttons */}
        <div className="h-[1px] w-full bg-slate-200 mb-12" />

        {/* Skills Grid: 6 per row on desktop, 3 on mobile */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="group p-5 rounded-2xl bg-slate-50/60 border border-slate-200 hover:border-indigo-400 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center justify-center text-center select-none"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                  {getSkillIcon(skill.icon)}
                </div>

                <span className="font-mono text-xs text-slate-900 font-bold group-hover:text-indigo-600 transition-colors">
                  {skill.name}
                </span>

                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-semibold">
                  {skill.group}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
