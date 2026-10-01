import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Play } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'web', label: 'Web & AI' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : activeCategory === 'mobile'
      ? PROJECTS.filter(p => p.category === 'mobile')
      : PROJECTS.filter(p => p.category === 'web' || p.category === 'ai');

  const featuredProject = PROJECTS.find(p => p.featured);
  const secondaryProjects = filteredProjects.filter(p => !p.featured || activeCategory !== 'all');

  return (
    <section id="projects" className="relative py-20 bg-[#060709] border-t border-white/[0.06]">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Projects
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#00f59b] to-[#00d2ff] rounded-full mt-2.5 shadow-[0_0_10px_rgba(0,245,155,0.4)]"></div>
            <p className="text-sm sm:text-base text-slate-400 mt-2 font-light">
              Mobile apps on Google Play and web projects.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.02] border border-white/[0.06] self-start sm:self-auto">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`btn-interactive px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#00f59b] text-black font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project: Face Studio */}
        {featuredProject && activeCategory === 'all' && (
          <div className="glass-panel rounded-3xl p-6 sm:p-8 mb-8 border border-white/[0.1] hover:border-white/20 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs text-[#00f59b] bg-[#00f59b]/10 border border-[#00f59b]/25">
                  <span>Google Play App</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                    {featuredProject.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {featuredProject.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs text-slate-300"
                    >
                      {tech.icon && <img src={tech.icon} alt="" className="w-3.5 h-3.5 object-contain" />}
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>

                {/* Direct Action Link */}
                <div className="pt-2">
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-black bg-[#00f59b] hover:bg-[#00f59b]/90"
                  >
                    <Play size={14} className="fill-black" />
                    <span>View on Google Play</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Preview image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-slate-950 p-1.5 shadow-xl">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl p-6 border border-white/[0.08] hover:border-white/20 flex flex-col justify-between transition-all"
            >
              <div className="space-y-4">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.08] bg-black/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-medium text-white bg-black/80 backdrop-blur-md border border-white/15">
                      {project.badge}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300 flex items-center gap-1"
                    >
                      {tech.icon && <img src={tech.icon} alt="" className="w-3 h-3 object-contain" />}
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 pt-5 border-t border-white/[0.06] mt-5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-interactive flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-medium text-black bg-[#00f59b] hover:bg-[#00f59b]/90"
                  >
                    <span>{project.isStoreApp ? "Google Play" : "Live Demo"}</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-interactive inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10"
                  >
                    <Github size={14} />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
