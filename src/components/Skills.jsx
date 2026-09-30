import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-[#060709] border-t border-white/[0.06]">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Tech Stack
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#00f59b] to-[#00d2ff] rounded-full mt-2.5 shadow-[0_0_10px_rgba(0,245,155,0.4)]"></div>
          <p className="text-sm sm:text-base text-slate-400 mt-2 font-light">
            Languages, frameworks, and databases I work with regularly.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl p-6 border border-white/[0.08] hover:border-white/15 transition-all space-y-4"
            >
              <h3 className="text-base font-semibold text-white">
                {cat.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-200"
                  >
                    {skill.icon && (
                      <img src={skill.icon} alt="" className="w-3.5 h-3.5 object-contain" />
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
