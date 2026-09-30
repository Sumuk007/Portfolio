import React from 'react';
import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050608] border-t border-white/[0.08] text-slate-400 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-white">
              {PERSONAL_INFO.name}
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Full-stack & mobile developer based in India.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors"
            >
              <Github size={16} />
            </a>

            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin size={16} />
            </a>

            <a
              href={PERSONAL_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors"
            >
              <Instagram size={16} />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email"
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors"
            >
              <Mail size={16} />
            </a>

            <button
              onClick={scrollToTop}
              className="ml-2 flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-xs text-slate-400 hover:text-white transition-colors"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-white/[0.04] text-[11px] text-slate-500">
          &copy; {new Date().getFullYear()} Sumuk Bhat. Built with React and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}