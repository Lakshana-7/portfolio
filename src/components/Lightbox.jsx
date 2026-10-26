import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function Lightbox({
  isOpen,
  onClose,
  items = [],
  currentIndex = 0,
  setCurrentIndex,
  onNext,
  onPrev,
}) {
  const currentItem = items[currentIndex];

  const handleNext = useCallback(() => {
    if (onNext) onNext();
    else if (setCurrentIndex) {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }
  }, [items.length, onNext, setCurrentIndex]);

  const handlePrev = useCallback(() => {
    if (onPrev) onPrev();
    else if (setCurrentIndex) {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  }, [items.length, onPrev, setCurrentIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentItem) return null;

  const imageSrc = typeof currentItem === 'string' ? currentItem : currentItem.image || currentItem.src;
  const caption = currentItem.caption || currentItem.description || currentItem.title || '';
  const title = currentItem.title || '';
  const verifyUrl = currentItem.verifyUrl;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#090A12]/95 backdrop-blur-md p-4 sm:p-6 md:p-8"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-surface-raised/80 hover:bg-surface border border-border text-muted hover:text-text transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation Arrows (if multiple items) */}
        {items.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-surface-raised/80 hover:bg-surface border border-border text-muted hover:text-text transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-surface-raised/80 hover:bg-surface border border-border text-muted hover:text-text transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Main Content Modal */}
        <motion.div
          key={currentIndex}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border/80 bg-[#0A0C16] max-h-[78vh] max-w-[90vw] flex items-center justify-center shadow-2xl p-2">
            <ImageWithFallback
              src={imageSrc}
              alt={title || caption || 'Preview'}
              className="max-h-[75vh] max-w-[88vw] object-contain rounded-lg"
              aspectRatio="aspect-auto"
              priority
            />
          </div>

          {/* Caption & Metadata Bar */}
          {(title || caption || verifyUrl || items.length > 1) && (
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between w-full max-w-3xl px-4 py-3 rounded-xl bg-surface/90 border border-border backdrop-blur-sm gap-3">
              <div className="text-center sm:text-left">
                {title && (
                  <h4 className="font-heading font-bold text-lg uppercase text-text">
                    {title}
                  </h4>
                )}
                {caption && (
                  <p className="text-xs sm:text-sm text-muted font-sans mt-0.5 line-clamp-2">
                    {caption}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-4 shrink-0">
                {verifyUrl && (
                  <a
                    href={verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-raised hover:bg-accent-from/20 border border-border text-xs font-mono text-text transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5 text-accent-from" />
                  </a>
                )}
                {items.length > 1 && (
                  <span className="font-mono text-xs text-muted">
                    {currentIndex + 1} / {items.length}
                  </span>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
