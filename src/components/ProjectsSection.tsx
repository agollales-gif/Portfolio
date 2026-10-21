import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      data-chapter="work"
      data-sheet="true"
      className="border-b border-[#1A212B] bg-[#060708]"
    >
      <div
        data-track="true"
        style={{ '--scene': '160svh' } as React.CSSProperties}
      >
        <div
          data-sticky="true"
          className="justify-between py-10 lg:py-8 bg-[#060708]"
        >
          <div data-sticky-scrim="true" aria-hidden="true" />

          {/* Top Bar inside Sticky Work Stage (Exact UnyoCorp #work header) */}
          <div className="max-w-[100rem] mx-auto w-full px-4 sm:px-6 md:px-10 pb-5 border-b border-[#1A212B] flex flex-wrap items-end justify-between gap-4 shrink-0">
            <div>
              <div className="eyebrow mb-1.5 flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 bg-[#00F0FF]" />
                <span>03 / Selected Work</span>
              </div>
              <h2 className="font-display text-display-md text-[#F2F6F8]">
                Featured Projects &amp; Platforms.
              </h2>
            </div>

            {/* Live Scene Counter & Index Pills */}
            <div className="flex items-center gap-4">
              <div className="font-mono text-xs text-[#8E9BAE]">
                SCENE{' '}
                <span data-scene-count="true" className="text-[#00F0FF] font-semibold">
                  01
                </span>{' '}
                / 03
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                {PROJECTS_DATA.map((p, i) => (
                  <span
                    key={p.id}
                    data-scene-link="true"
                    aria-current={i === 0 ? 'true' : undefined}
                    className="px-2.5 py-1 border border-[#1A212B] aria-[current=true]:border-[#00F0FF] aria-[current=true]:bg-[#00F0FF] aria-[current=true]:text-[#060708] font-mono text-[11px] text-[#8E9BAE] transition-colors"
                  >
                    0{i + 1}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* UnyoCorp [data-scenes] Scroll-Scrubbed Full-Stage Wipe Container */}
          <div
            data-scenes="true"
            className="max-w-[100rem] mx-auto w-full px-4 sm:px-6 md:px-10 my-4 flex-1"
          >
            {PROJECTS_DATA.map((project, idx) => (
              <article
                key={project.id}
                data-scene="true"
                data-current={idx === 0 ? 'true' : undefined}
                className="border border-[#1A212B] bg-[#0C0F14] grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-[0_-24px_60px_rgba(0,0,0,0.85)]"
              >
                {/* Left 7 Columns: [data-scene-media] Architecture Stage */}
                <div className="lg:col-span-7 bg-[#0C0F14] p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1A212B] overflow-hidden">
                  <div
                    data-scene-media="true"
                    className="h-full flex flex-col justify-between gap-6"
                  >
                    <div className="flex items-center justify-between pb-4 border-b border-[#1A212B]">
                      <span className="eyebrow-accent">{project.status}</span>
                      <span className="eyebrow">{project.index}</span>
                    </div>

                    <div className="grid grid-cols-1 gap-3 my-auto">
                      {project.architectureNodes.map((node, nIdx) => (
                        <div
                          key={node.layer}
                          className="p-4 border border-[#1A212B] bg-[#060708] hover:border-[#00F0FF] transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-[#00F0FF]">
                              LAYER 0{nIdx + 1} // {node.layer}
                            </span>
                            <span className="h-1.5 w-1.5 bg-[#00F0FF]" />
                          </div>
                          <div className="font-display text-lg text-[#F2F6F8] mt-1">
                            {node.component}
                          </div>
                          <div className="text-xs text-[#8E9BAE] mt-0.5">{node.detail}</div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-[#1A212B] flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right 5 Columns: [data-scene-copy] Staggered Case Study Copy */}
                <div
                  data-scene-copy="true"
                  className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-[#060708] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#1A212B]">
                    <span className="eyebrow-accent">
                      0{idx + 1} / 03 · {project.category}
                    </span>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-[#00F0FF] hover:underline inline-flex items-center gap-1"
                      >
                        <span>{project.liveDomain}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <div className="my-auto py-4">
                    <div className="font-mono text-xs text-[#00F0FF] mb-2">{project.role}</div>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#F2F6F8]">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#8E9BAE] mt-3 leading-relaxed">
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

                  <div className="pt-4 border-t border-[#1A212B] flex items-center justify-between">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary !py-2.5 !px-4 !text-xs"
                      >
                        <span>Visit {project.liveDomain}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 btn-icon" />
                      </a>
                    ) : (
                      <a href="#contact" className="btn btn-ghost !py-2.5 !px-4 !text-xs">
                        <span>Inquire</span>
                      </a>
                    )}
                    <span className="font-mono text-xs text-[#525E6F]">0{idx + 1} / 03</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
