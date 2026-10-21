import React from 'react';
import { SKILLS_MATRIX, INTERNATIONAL_EXPERIENCE } from '../data/portfolioData';
import { Reveal, MaskedLines } from './Reveal';

export const SkillsMatrixSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-14 sm:py-18 md:py-24 border-b border-[#1A212B] bg-[#060708]"
    >
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left 7 Columns: Compact Technical Stack with UnyoCorp State-Flipping Tags */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="eyebrow mb-2 flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 bg-[#00F0FF]" />
                <span>04 / Technical Stack</span>
              </div>
            </Reveal>
            <h2 className="font-display text-display-md text-[#F2F6F8] mb-6">
              <MaskedLines lines={[{ text: 'Core Technologies.' }]} />
            </h2>

            <div className="divide-y divide-[#1A212B] border-t border-b border-[#1A212B]">
              {SKILLS_MATRIX.map((cat, idx) => (
                <Reveal key={cat.id} delayMs={idx * 65} direction="up">
                  <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="font-display text-base text-[#F2F6F8] sm:w-52 shrink-0">
                      {cat.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5 flex-1">
                      {cat.skills.map((s) => (
                        <span key={s.name} className="tag">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right 5 Columns: International Experience & Honors */}
          <div id="experience" className="lg:col-span-5">
            <Reveal>
              <div className="eyebrow mb-2 flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 bg-[#00F0FF]" />
                <span>05 / International Experience &amp; Honors</span>
              </div>
            </Reveal>
            <h2 className="font-display text-display-md text-[#F2F6F8] mb-6">
              <MaskedLines lines={[{ text: 'Global Record.' }]} />
            </h2>

            <div className="space-y-3">
              {INTERNATIONAL_EXPERIENCE.map((exp, idx) => (
                <Reveal key={exp.id} delayMs={idx * 90} direction="up">
                  <div className="p-5 border border-[#1A212B] bg-[#0C0F14] hover:border-[#00F0FF] transition-colors duration-300">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs text-[#00F0FF]">
                        {exp.flag} {exp.location}
                      </span>
                      <span className="font-mono text-xs text-[#8E9BAE]">{exp.year}</span>
                    </div>
                    <h3 className="font-display text-xl text-[#F2F6F8] mt-1.5">{exp.title}</h3>
                    <p className="text-xs sm:text-sm text-[#8E9BAE] mt-1.5 leading-relaxed">
                      {exp.highlights.join(' ')}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
