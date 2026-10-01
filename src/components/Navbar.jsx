import React, { useState, useEffect } from 'react';
import { Download, Github, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_ITEMS = [
  { name: 'About', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ['home', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pt-3 sm:pt-4 pointer-events-none transition-all duration-300">
      <div
        className={`pointer-events-auto w-full max-w-4xl rounded-2xl transition-all duration-300 ${scrolled
            ? 'glass-panel-elevated shadow-[0_12px_40px_rgba(0,0,0,0.6)] py-2 sm:py-2.5 px-3.5 sm:px-6'
            : 'glass-panel py-2.5 sm:py-3 px-3.5 sm:px-6'
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-white hover:text-[#00f59b] transition-colors duration-200 focus:outline-none"
            aria-label="Sumuk Bhat"
          >
            Sumuk Bhat
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 active:scale-95 ${isActive
                      ? 'text-white bg-white/[0.08]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04] hover:-translate-y-0.5'
                    }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="btn-interactive p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06]"
            >
              <Github size={16} />
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interactive flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-black bg-[#00f59b] hover:bg-[#00f59b]/90"
            >
              <Download size={13} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-interactive md:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-white/[0.04] border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-3 pb-2 mt-2 border-t border-white/[0.08] flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors ${isActive
                      ? 'bg-[#00f59b]/15 text-[#00f59b] font-semibold border border-[#00f59b]/25'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                    }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-2 flex items-center gap-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-interactive flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-black bg-[#00f59b] hover:bg-[#00f59b]/90"
              >
                <Download size={14} />
                <span>Resume</span>
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="btn-interactive p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}