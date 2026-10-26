import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, ArrowUp, Download, MapPin } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { profile } from '../data/profile';

const navLinks = [
  { id: 'about', label: '01 About' },
  { id: 'experience', label: '02 Experience' },
  { id: 'projects', label: '03 Projects' },
  { id: 'certificates', label: '04 Certificates' },
  { id: 'skills', label: '05 Skills' },
  { id: 'gallery', label: '06 Gallery' },
  { id: 'contact', label: '07 Contact' },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNavClick = (id) => {
    if (isHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t border-slate-200 z-10 pt-16 pb-12">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-200">
          {/* Left Column: Monogram, Name, Tagline, Location */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-from to-accent-to flex items-center justify-center font-heading font-extrabold text-white text-lg shadow-md">
                LA
              </div>
              <span className="font-heading font-extrabold text-2xl uppercase tracking-tight text-slate-900">
                {profile.name}
              </span>
            </div>

            <p className="font-mono text-xs uppercase tracking-wider text-accent-from font-bold mb-2">
              AI & DATA SCIENCE · BACKEND DEVELOPER
            </p>

            <p className="text-slate-600 text-sm font-sans mb-4 max-w-sm font-medium">
              Building AI-powered and full-stack products, shipped with intent.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-600 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Middle Column: "NAVIGATE" in two columns */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-900 font-bold mb-4">
              NAVIGATE
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left font-mono text-xs text-slate-600 hover:text-accent-from transition-colors flex items-center gap-1.5 font-semibold"
                >
                  <span className="text-slate-300">-</span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: "CONNECT" */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="font-mono text-xs uppercase tracking-widest text-slate-900 font-bold mb-4">
              CONNECT
            </h4>
            <div className="flex flex-col space-y-3 font-mono text-xs">
              <a
                href={`mailto:${profile.email}`}
                className="text-slate-600 hover:text-slate-950 transition-colors flex items-center gap-2.5 font-semibold"
              >
                <Mail className="w-4 h-4 text-accent-from" />
                <span>Email</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-950 transition-colors flex items-center gap-2.5 font-semibold"
              >
                <FaLinkedinIn className="w-4 h-4 text-blue-600" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub icon allowed in Contact and Footer */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-950 transition-colors flex items-center gap-2.5 font-semibold"
              >
                <FaGithub className="w-4 h-4 text-slate-900" />
                <span>GitHub</span>
              </a>

              <a
                href={profile.resumePath}
                download="Lakshana_A_Resume.pdf"
                className="text-slate-600 hover:text-accent-from transition-colors flex items-center gap-2.5 font-semibold"
              >
                <Download className="w-4 h-4 text-amber-500" />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Back to Top button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            © 2026 {profile.name}. Built with intent.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group cursor-pointer font-bold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-accent-from" />
          </button>
        </div>
      </div>
    </footer>
  );
}
