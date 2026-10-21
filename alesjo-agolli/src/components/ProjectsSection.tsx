import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Reveal, SpotlightCard } from './Reveal';

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 border-b border-[#1A222C] bg-[#060708]"
    >
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 md:px-10">
        {/* Compact Header */}
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-6 sm:pb-8 border-b border-[#1A222C]">
          <div>
            <div className="eyebrow mb-2 flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
              <span>03 / Selected Work</span>
            </div>
            <h2 className="font-display text-display-md text-[#F2F6F8]">
              Featured Projects &amp; Platforms.
            </h2>
          </div>
          <span className="eyebrow-accent">03 Production Deployments</span>
        </Reveal>

        {/* Responsive 3-Column Architectural Grid for the 3 Live Projects */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
          {PROJECTS_DATA.map((project, idx) => (
            <Reveal key={project.id} delayMs={idx * 100} direction="up" className="h-full">
              <SpotlightCard className="border border-[#1A222C] bg-[#0A0C0F] p-5 sm:p-6 md:p-7 hover:border-[#00F0FF]/60 transition-all duration-300 hover:-translate-y-1 h-full">
                <div>
                  {/* Top Meta Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#1A222C]">
                    <span className="eyebrow-accent">
                      0{idx + 1} · {project.role}
                    </span>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[#00F0FF] hover:underline inline-flex items-center gap-1"
                      >
                        <span>{project.liveDomain}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}
                  </div>

                  {/* Title & Short Overview */}
                  <h3 className="font-display text-xl sm:text-2xl text-[#F2F6F8] mt-4 group-hover:text-[#00F0FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B4] mt-2 leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Concise Key Deliverables */}
                  <ul className="mt-4 space-y-1.5">
                    {project.deliverables.map((item, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2.5 text-xs text-[#94A3B4]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 bg-[#00F0FF] shrink-0" />
                        <span>
                          {item.label && (
                            <strong className="text-[#F2F6F8] font-medium">
                              {item.label}:{' '}
                            </strong>
                          )}
                          {item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Tags */}
                <div className="mt-5 pt-4 border-t border-[#1A222C] flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tag tag-accent !text-[10px] !py-1 !px-2">
                      {tech}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
