import React from 'react';
import { SKILLS_MATRIX, INTERNATIONAL_EXPERIENCE } from '../data/portfolioData';
import { Reveal, SpotlightCard } from './Reveal';

export const SkillsMatrixSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-20 border-b border-[#1A222C] bg-[#060708]"
    >
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left 7 Columns: Compact 5-Row Technical Skills Matrix */}
          <div className="lg:col-span-7">
            <Reveal direction="left">
              <div className="eyebrow mb-2 flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
                <span>04 / Technical Stack</span>
              </div>
              <h2 className="font-display text-display-md text-[#F2F6F8] mb-5 sm:mb-6">
                Core Technologies.
              </h2>
            </Reveal>

            <div className="divide-y divide-[#1A222C] border-t border-b border-[#1A222C]">
              {SKILLS_MATRIX.map((cat, idx) => (
                <Reveal key={cat.id} delayMs={idx * 70} direction="up">
                  <div className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 group">
                    <div className="font-display text-base text-[#F2F6F8] sm:w-52 shrink-0 group-hover:text-[#00F0FF] transition-colors">
                      {cat.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5 flex-1">
                      {cat.skills.map((s) => (
                        <span
                          key={s.name}
                          className="px-2.5 py-1 border border-[#1A222C] bg-[#0A0C0F] font-mono text-[11px] text-[#94A3B4] hover:border-[#00F0FF] hover:text-[#00F0FF] hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(0,240,255,0.2)] transition-all duration-200 cursor-default"
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right 5 Columns: Compact International Record & Honors */}
          <div id="experience" className="lg:col-span-5">
            <Reveal direction="right">
              <div className="eyebrow mb-2 flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
                <span>05 / International Experience &amp; Honors</span>
              </div>
              <h2 className="font-display text-display-md text-[#F2F6F8] mb-5 sm:mb-6">
                Global Record.
              </h2>
            </Reveal>

            <div className="space-y-3">
              {INTERNATIONAL_EXPERIENCE.map((exp, idx) => (
                <Reveal key={exp.id} delayMs={idx * 100} direction="right">
                  <SpotlightCard className="p-4 sm:p-5 border border-[#1A222C] bg-[#0A0C0F] hover:border-[#00F0FF]/60 transition-all duration-300 hover:-translate-y-1">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[11px] text-[#00F0FF]">
                          {exp.flag} {exp.location}
                        </span>
                        <span className="font-mono text-[11px] text-[#94A3B4]">{exp.year}</span>
                      </div>
                      <h3 className="font-display text-lg text-[#F2F6F8] mt-1 group-hover:text-[#00F0FF] transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-xs text-[#94A3B4] mt-1 leading-relaxed">
                        {exp.highlights.join(' ')}
                      </p>
                    </div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
