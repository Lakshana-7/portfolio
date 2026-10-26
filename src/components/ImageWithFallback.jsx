import React, { useState, useEffect, useRef } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function ImageWithFallback({
  src,
  alt = '',
  className = '',
  containerClassName = '',
  aspectRatio = 'aspect-[16/10]',
  placeholderText,
  priority = false,
  onClick,
  ...props
}) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(priority);
  const imgRef = useRef(null);

  const cleanSrc = src?.startsWith('/') ? src.slice(1) : src;
  const displayLabel = placeholderText || cleanSrc || 'Image';

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      if (imgRef.current.naturalWidth > 0) {
        setLoaded(true);
      }
    }
  }, [src]);

  if (error || !src) {
    return (
      <div
        onClick={onClick}
        className={`relative flex flex-col items-center justify-center p-6 bg-surface border border-border rounded-xl text-center overflow-hidden group select-none min-w-[200px] ${aspectRatio} ${containerClassName}`}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-raised opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(#7C5CFF_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
        
        <div className="relative z-10 flex flex-col items-center max-w-[90%]">
          <div className="w-10 h-10 rounded-lg bg-surface-raised/80 border border-border flex items-center justify-center mb-2.5 text-muted group-hover:text-accent-from transition-colors">
            <ImageIcon className="w-5 h-5" />
          </div>
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted/80 mb-1">
            Placeholder
          </span>
          <span className="font-mono text-xs text-text/90 break-all bg-bg/60 px-2.5 py-1 rounded border border-border/50 max-w-full">
            {displayLabel}
          </span>
          {alt && (
            <span className="text-[11px] text-muted line-clamp-1 mt-1.5 font-sans">
              {alt}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden ${containerClassName}`}
    >
      {!loaded && !priority && (
        <div className={`absolute inset-0 bg-slate-200/50 animate-pulse pointer-events-none ${aspectRatio}`} />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`${className} transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-90'
        }`}
        {...props}
      />
    </div>
  );
}
