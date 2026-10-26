import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StarField from './components/StarField';
import CursorGlow from './components/CursorGlow';
import ScrollProgressBar from './components/ScrollProgressBar';
import BackToTop from './components/BackToTop';
import ConstellationIntro from './components/ConstellationIntro';
import { useActiveSection } from './hooks/useActiveSection';

// Code-split pages for performance as requested in Section 11
const Home = lazy(() => import('./pages/Home'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

const sectionIds = [
  'about',
  'experience',
  'projects',
  'certificates',
  'skills',
  'gallery',
  'contact'
];

export default function App() {
  const activeSection = useActiveSection(sectionIds, 150);
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-bg text-text selection:bg-[#7C5CFF]/30 selection:text-white">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-from focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      {/* Constellation Intro Animation (once per session) */}
      <ConstellationIntro />

      {/* Top 2px Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Subtle StarField Background Canvas */}
      <StarField />

      {/* Interactive Cursor Glow (desktop only) */}
      <CursorGlow />

      {/* Fixed Navbar with 7 links + LinkedIn + Resume Button */}
      <Navbar activeSection={activeSection} />

      {/* Main Routes */}
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-accent-from border-t-transparent animate-spin" />
          </div>
        }
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
