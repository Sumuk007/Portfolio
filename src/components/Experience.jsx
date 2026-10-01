import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Building2 } from 'lucide-react';
import { EXPERIENCE_LOG, ACADEMIC_CREDENTIALS } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="relative py-14 sm:py-20 bg-[#060709] border-t border-white/[0.06]">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Experience & Education
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#00f59b] to-[#00d2ff] rounded-full mt-2.5 shadow-[0_0_10px_rgba(0,245,155,0.4)]"></div>
            <p className="text-sm sm:text-base text-slate-400 mt-2 font-light">
              My previous internships and academic background.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.02] border border-white/[0.06] self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('experience')}
              className={`btn-interactive flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'experience'
                  ? 'bg-[#00f59b] text-black font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase size={13} />
              <span>Work</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`btn-interactive flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'education'
                  ? 'bg-[#00f59b] text-black font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap size={14} />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Work Experience */}
        {activeTab === 'experience' && (
          <div className="space-y-4 sm:space-y-6">
            {EXPERIENCE_LOG.map((item) => {
              const hasDetails = Boolean(
                item.description || 
                (item.highlights && item.highlights.length > 0) || 
                (item.technologies && item.technologies.length > 0)
              );

              return (
                <div 
                  key={item.id} 
                  className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/[0.08] hover:border-white/15 transition-all space-y-3.5 sm:space-y-4"
                >
                  <div className={`flex flex-col sm:flex-row sm:items-start justify-between gap-2 ${hasDetails ? 'border-b border-white/[0.06] pb-3' : ''}`}>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-bold text-white">{item.role}</h3>
                        {item.type && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#00f59b]/10 text-[#00f59b] border border-[#00f59b]/25">
                            {item.type}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#00f59b] font-medium mt-0.5">
                        <Building2 size={14} />
                        <span>{item.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 text-xs font-normal">{item.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {item.description && (
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="space-y-1.5">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-light">
                          <span className="text-[#00f59b] mt-1 text-base leading-none">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Education */}
        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {ACADEMIC_CREDENTIALS.map((edu) => (
              <div
                key={edu.id}
                className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/[0.08] hover:border-white/15 transition-all space-y-3.5 sm:space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#00f59b]">
                      <GraduationCap size={18} />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-black bg-[#00f59b]">
                      {edu.score}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white">{edu.degree}</h3>
                    <p className="text-sm text-slate-300 mt-0.5">{edu.institution}</p>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                      <MapPin size={11} />
                      <span>{edu.location} • {edu.period}</span>
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 font-light pt-2 border-t border-white/[0.06]">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
