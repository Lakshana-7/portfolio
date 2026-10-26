import React from 'react';

export default function SectionHeading({
  number,
  label,
  children,
  subtitle,
  className = '',
  align = 'left',
  dark = false,
}) {
  return (
    <div className={`mb-12 md:mb-16 ${className} ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {/* Top divider & mono label */}
      <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[2px] w-8 bg-gradient-to-r from-accent-from to-accent-to rounded-full" />
        <span className={`font-mono text-xs uppercase tracking-widest ${dark ? 'text-slate-400' : 'text-slate-500 font-semibold'}`}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-from to-accent-to font-bold mr-1.5">
            {number}
          </span>
          {label}
        </span>
      </div>

      {/* Main Headline with Barlow Condensed and Instrument Serif accent */}
      <h2 className={`font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-[1.05] ${dark ? 'text-white' : 'text-slate-900'}`}>
        {children}
      </h2>

      {subtitle && (
        <p className={`mt-3 text-base md:text-lg max-w-2xl font-sans leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
