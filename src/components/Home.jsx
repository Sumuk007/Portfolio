import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Linkedin, 
  Mail 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Home() {
  return (
    <section 
      id="home" 
      className="relative min-h-[100dvh] pt-24 pb-16 md:pt-28 md:pb-20 flex flex-col justify-center overflow-hidden bg-[#060709]"
    >
      {/* Subtle Background Mesh */}
      <div className="absolute inset-0 bg-grid-mesh opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-tr from-[#00f59b]/10 via-[#00d2ff]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Text & Bio */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Hi, I'm <span className="text-white">Sumuk Bhat</span>.
              <span className="block text-slate-400 text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2">
                Full-stack & mobile developer.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl">
              I build web apps using <strong className="text-white font-medium">React</strong> and <strong className="text-white font-medium">FastAPI</strong>, and mobile applications with <strong className="text-white font-medium">Flutter</strong>. I have 2 apps published on Google Play and experience working on full-stack web and enterprise software projects.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-black bg-[#00f59b] hover:bg-[#00f59b]/90"
              >
                <span>View Projects</span>
                <ArrowRight size={15} />
              </a>

              {/* Socials */}
              <div className="flex items-center gap-1.5 pl-1">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="btn-interactive p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06]"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Email"
                  className="btn-interactive p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06]"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Transparent Enclosure & Large Avatar */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="flex flex-col items-center text-center">
              <div className="relative group">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt="Sumuk Bhat"
                  className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-3xl object-cover border border-white/10 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="eager"
                />
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-4 flex items-center justify-center gap-1.5 font-light">
                <MapPin size={14} className="text-[#00f59b] shrink-0" />
                <span>Udupi / Bengaluru, India</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
