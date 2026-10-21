import React from 'react';
import { SKILLS_MATRIX, INTERNATIONAL_EXPERIENCE } from '../data/portfolioData';

export const SkillsMatrixSection: React.FC = () => {
  return (
    <section
      id="skills"
      data-chapter="stack"
      data-sheet="true"
      className="border-b border-[#1A212B] bg-[#060708]"
    >
      <div
        data-track="true"
        style={{ '--scene': '60svh' } as React.CSSProperties}
      >
        <div
          data-sticky="true"
          className="justify-between py-12 lg:py-10 bg-[#060708]"
        >
          <div data-sticky-scrim="true" aria-hidden="true" />

          <div className="max-w-[100rem] mx-auto w-full px-4 sm:px-6 md:px-10 my-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left 7 Columns: Counter-Parallax Stack Column */}
              <div data-split-col="true" className="lg:col-span-7">
                <div className="eyebrow mb-2 flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 bg-[#00F0FF]" />
                  <span>04 / Technical Stack</span>
                </div>
                <h2 className="font-display text-display-md text-[#F2F6F8] mb-6">
                  Core Technologies.
                </h2>

                <div className="divide-y divide-[#1A212B] border-t border-b border-[#1A212B]">
                  {SKILLS_MATRIX.map((cat) => (
                    <div
                      key={cat.id}
                      data-stack-row="true"
                      className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
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
                  ))}
                </div>
              </div>

              {/* Right 5 Columns: Counter-Parallax Global Record with ClipPath Reveal */}
              <div id="experience" data-split-col="true" className="lg:col-span-5">
                <div className="eyebrow mb-2 flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 bg-[#00F0FF]" />
                  <span>05 / International Experience &amp; Honors</span>
                </div>
                <h2 className="font-display text-display-md text-[#F2F6F8] mb-6">
                  Global Record.
                </h2>

                <div className="space-y-4">
                  {INTERNATIONAL_EXPERIENCE.map((exp) => (
                    <div
                      key={exp.id}
                      data-record-card="true"
                      className="p-6 border border-[#1A212B] bg-[#0C0F14] hover:border-[#00F0FF] transition-colors duration-300"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs text-[#00F0FF]">
                          {exp.flag} {exp.location}
                        </span>
                        <span className="font-mono text-xs text-[#8E9BAE]">{exp.year}</span>
                      </div>
                      <h3 className="font-display text-xl text-[#F2F6F8] mt-2">{exp.title}</h3>
                      <p className="text-xs sm:text-sm text-[#8E9BAE] mt-2 leading-relaxed">
                        {exp.highlights.join(' ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
