import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Reveal, MaskedLines } from './Reveal';

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-14 sm:py-18 md:py-24 border-b border-[#1A212B] bg-[#060708]"
    >
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-8 border-b border-[#1A212B]">
          <div>
            <Reveal>
              <div className="eyebrow mb-2 flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 bg-[#00F0FF]" />
                <span>03 / Selected Work</span>
              </div>
            </Reveal>
            <h2 className="font-display text-display-md text-[#F2F6F8]">
              <MaskedLines lines={[{ text: 'Featured Projects & Platforms.' }]} />
            </h2>
          </div>
          <Reveal delayMs={120}>
            <span className="eyebrow-accent">03 Production Deployments</span>
          </Reveal>
        </div>

        {/* UnyoCorp [data-stack] Sticky Stacking Architectural Cards */}
        <div className="unyo-stack mt-8 space-y-6">
          {PROJECTS_DATA.map((project, idx) => (
            <article
              key={project.id}
              style={{ '--card-index': idx } as React.CSSProperties}
              className="unyo-stack-card border border-[#1A212B] hover:border-[#00F0FF]/60 bg-[#0C0F14] grid grid-cols-1 lg:grid-cols-12 shadow-[0_-18px_40px_rgba(0,0,0,0.75)]"
            >
              {/* Left 7 Columns: Editorial Overview & Deliverables */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1A212B] bg-[#060708]">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#1A212B]">
                    <span className="eyebrow-accent">
                      0{idx + 1} / 03 · {project.role}
                    </span>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[#F2F6F8] hover:text-[#00F0FF] inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>{project.liveDomain}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-[#F2F6F8] mt-5">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#8E9BAE] mt-2.5 leading-relaxed max-w-2xl">
                    {project.overview}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {project.deliverables.map((item, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#8E9BAE]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 bg-[#00F0FF] shrink-0" />
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

                <div className="mt-6 pt-4 border-t border-[#1A212B] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary !py-2.5 !px-4 !text-xs"
                    >
                      <span>Visit Live</span>
                      <ArrowUpRight className="w-3.5 h-3.5 btn-icon" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right 5 Columns: System Architecture Layers */}
              <div className="lg:col-span-5 p-6 sm:p-8 bg-[#0C0F14] flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 border-b border-[#1A212B]">
                  <span className="eyebrow">Architecture Layers</span>
                  <span className="eyebrow-accent">{project.index}</span>
                </div>

                <div className="my-4 space-y-2.5">
                  {project.architectureNodes.map((node, nIdx) => (
                    <div
                      key={node.layer}
                      className="p-3.5 border border-[#1A212B] bg-[#060708] hover:border-[#00F0FF]/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#00F0FF]">
                          0{nIdx + 1} · {node.layer}
                        </span>
                        <span className="h-1.5 w-1.5 bg-[#00F0FF]" />
                      </div>
                      <div className="font-display text-base text-[#F2F6F8] mt-1">
                        {node.component}
                      </div>
                      <div className="text-xs text-[#8E9BAE] mt-0.5">{node.detail}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#1A212B] flex items-center justify-between font-mono text-[11px] text-[#525E6F]">
                  <span>{project.status}</span>
                  <span className="text-[#00F0FF]">LIVE</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
