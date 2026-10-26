import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { profile } from '../data/profile';

const navItems = [
  { id: 'about', number: '01', label: 'About' },
  { id: 'experience', number: '02', label: 'Experience' },
  { id: 'projects', number: '03', label: 'Projects' },
  { id: 'certificates', number: '04', label: 'Certificates' },
  { id: 'skills', number: '05', label: 'Skills' },
  { id: 'gallery', number: '06', label: 'Gallery' },
  { id: 'contact', number: '07', label: 'Contact' },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);

    if (isHome) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const scrollToTop = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-white/90 backdrop-blur-md border-b border-gray-200/80 shadow-sm shadow-slate-900/5'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Top Left: Monogram */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-from/50 rounded-lg"
            aria-label="Lakshana - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center font-heading font-extrabold text-lg tracking-tight group-hover:border-accent-from/50 transition-colors shadow-sm">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent-from to-accent-to">
                L
              </span>
            </div>
            <span className="hidden sm:inline font-mono text-xs uppercase tracking-wider text-slate-600 group-hover:text-slate-900 font-semibold transition-colors">
              Lakshana
            </span>
          </button>

          {/* Center: Desktop Rounded Pill with 7 links + LinkedIn */}
          <nav className="hidden lg:flex items-center bg-white/95 border border-gray-200/90 rounded-full px-4 py-1.5 backdrop-blur-md shadow-md shadow-slate-900/5">
            <ul className="flex items-center space-x-1 sm:space-x-2">
              {navItems.map((item) => {
                const isActive = isHome && activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`relative px-3 py-1.5 font-mono text-xs tracking-wider transition-colors rounded-full uppercase flex items-center gap-1.5 ${
                        isActive
                          ? 'text-slate-900 font-bold'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      <span
                        className={`text-[10px] ${
                          isActive
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-accent-from to-accent-to font-bold'
                            : 'text-slate-400'
                        }`}
                      >
                        {item.number}
                      </span>
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-accent-from to-accent-to rounded-full" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Thin Divider inside the pill */}
            <div className="h-4 w-[1px] bg-gray-200 mx-2" />

            {/* LinkedIn Icon only - strictly NO GitHub here */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-500 hover:text-accent-to transition-colors hover:bg-slate-100"
              aria-label="Lakshana A LinkedIn Profile"
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Top Right: Glowing Resume Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={profile.resumePath}
              download="Lakshana_A_Resume.pdf"
              className="relative group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-from to-accent-to text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-md shadow-accent-from/30 hover:shadow-lg hover:shadow-accent-from/50 transition-all hover:scale-105 active:scale-95"
              aria-label="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white border border-gray-200 text-slate-700 hover:text-slate-900 transition-colors shadow-sm"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-white/98 backdrop-blur-xl flex flex-col justify-between p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center font-heading font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-br from-accent-from to-accent-to shadow-sm">
                LA
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-slate-700 font-bold">
                Lakshana A
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-100 border border-gray-200 text-slate-700 hover:text-slate-900"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="my-auto py-8">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="w-full text-left py-2 font-heading font-bold text-3xl uppercase tracking-tight text-slate-900 hover:text-accent-from transition-colors flex items-center justify-between border-b border-gray-100"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-accent-from font-semibold">
                        {item.number}
                      </span>
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-slate-400">→</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-slate-700 hover:text-accent-to font-semibold"
            >
              <FaLinkedinIn className="w-4 h-4 text-accent-to" />
              <span>LinkedIn</span>
            </a>

            <a
              href={profile.resumePath}
              download="Lakshana_A_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-from to-accent-to text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
