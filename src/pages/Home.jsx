import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Lightbox from '../components/Lightbox';

export default function Home({ onActiveSectionChange }) {
  // Shared Lightbox State
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    items: [],
    currentIndex: 0,
  });

  const openLightboxSingle = ({ image, title, caption, verifyUrl }) => {
    setLightboxState({
      isOpen: true,
      items: [{ image, title, caption, verifyUrl }],
      currentIndex: 0,
    });
  };

  const openLightboxList = ({ items, initialIndex = 0 }) => {
    setLightboxState({
      isOpen: true,
      items,
      currentIndex: initialIndex,
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <main id="main-content" tabIndex="-1" className="relative z-10 focus:outline-none">
      {/* Hero */}
      <Hero />

      {/* 01 About */}
      <About onOpenLightbox={openLightboxSingle} />

      {/* 02 Experience */}
      <Experience onOpenLightbox={openLightboxSingle} />

      {/* 03 Projects */}
      <Projects />

      {/* 04 Certificates */}
      <Certificates onOpenLightbox={openLightboxSingle} />

      {/* 05 Skills */}
      <Skills />

      {/* 06 Gallery */}
      <Gallery onOpenLightbox={openLightboxList} />

      {/* 07 Contact */}
      <Contact />

      {/* Shared Lightbox */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        onClose={closeLightbox}
        items={lightboxState.items}
        currentIndex={lightboxState.currentIndex}
        setCurrentIndex={(newIndex) =>
          setLightboxState((prev) => ({
            ...prev,
            currentIndex:
              typeof newIndex === 'function'
                ? newIndex(prev.currentIndex)
                : newIndex,
          }))
        }
      />
    </main>
  );
}
