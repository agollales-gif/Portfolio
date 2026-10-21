import React from 'react';
import { ArrowUpRight, Globe } from 'lucide-react';

interface ProjectItem {
  index: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  liveUrl: string;
  domain: string;
  tags: string[];
  accent: string;
  previewImage: string;
}

const projects: ProjectItem[] = [
  {
    index: '01',
    title: 'DON BOSKO TIRANA',
    category: 'DIGITAL ECOSYSTEM',
    year: '2025',
    summary: 'Official portal & multilingual digital hub for Don Bosko Center.',
    liveUrl: 'https://www.qendradonbosko.com/',
    domain: 'qendradonbosko.com',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    accent: '#00F0FF',
    previewImage:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=85',
  },
  {
    index: '02',
    title: 'LUKA RENT A CAR',
    category: 'FLEET & BOOKING',
    year: '2024',
    summary: 'Real-time vehicle reservation engine & mobile-first booking flow.',
    liveUrl: 'https://lukarentacar.com',
    domain: 'lukarentacar.com',
    tags: ['Full-Stack', 'Booking Engine', 'SEO'],
    accent: '#00F0FF',
    previewImage:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85',
  },
  {
    index: '03',
    title: 'HANEUL PLATFORM',
    category: 'B2B E-COMMERCE',
    year: '2025',
    summary: 'High-speed B2B Asian food distribution & product catalog.',
    liveUrl: 'https://haneul.blackbear-solutions.com/',
    domain: 'haneul.blackbear-solutions.com',
    tags: ['Next.js', 'TypeScript', 'B2B Catalog'],
    accent: '#38BDF8',
    previewImage:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85',
  },
];

const stackItems = [
  'REACT 19',
  'NEXT.JS',
  'TYPESCRIPT',
  'TAILWIND CSS',
  'NODE.JS',
  'PYTHON',
  'AI / LLM WORKFLOWS',
  'SQL & PRISMA',
  'GSAP MOTION',
  'FIGMA UI/UX',
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="main"
      data-chapter="work"
      data-sheet=""
      style={{ '--scene': '260svh' } as React.CSSProperties}
      className="relative bg-[#060708]"
    >
      <div data-track="">
        <div
          data-sticky=""
          className="relative h-screen flex flex-col justify-between pt-[72px] bg-[#060708] border-t border-white/[0.12] overflow-hidden"
        >
          {/* Top Bar of MAIN: Chapter Label + Scene Pills + Live Progress Bar */}
          <div className="relative max-w-[1600px] w-full mx-auto px-5 sm:px-10 lg:px-14 py-3.5 border-b border-white/[0.08] flex items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.22em] uppercase text-[#00F0FF]">
              <span className="w-2 h-2 bg-[#00F0FF]" />
              <span className="text-[#F4F5F7] font-semibold">02 / MAIN</span>
              <span className="hidden sm:inline text-[#8E95A2]">— SELECTED WORKS</span>
            </div>

            {/* Scene Indicator Pills */}
            <div className="hidden md:flex items-center gap-2">
              {projects.map((p, idx) => (
                <div
                  key={p.index}
                  data-scene-pill=""
                  data-active={idx === 0 ? 'true' : undefined}
                  className="px-3 py-1 font-mono text-[10px] tracking-[0.16em] uppercase border border-white/[0.08] text-[#8E95A2] data-[active=true]:border-[#00F0FF] data-[active=true]:text-[#060708] data-[active=true]:bg-[#00F0FF] transition-colors duration-200"
                >
                  {p.index} {p.title.split(' ')[0]}
                </div>
              ))}
            </div>

            {/* Active Scene Counter */}
            <div className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase">
              <span data-scene-current="" className="text-[#00F0FF] font-bold">
                01
              </span>
              <span className="text-white/25">/</span>
              <span className="text-[#8E95A2]">03</span>
            </div>

            {/* Scroll-scrubbed progress bar across MAIN */}
            <div
              data-work-bar=""
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00F0FF] origin-left scale-x-0"
            />
          </div>

          {/* Center Full-Stage Scene Wipe Container ([data-scenes]) */}
          <div className="relative flex-1 min-h-0 max-w-[1600px] w-full mx-auto px-5 sm:px-10 lg:px-14 py-4 sm:py-6 flex flex-col">
            <div data-scenes="" className="relative flex-1 min-h-0">
              {projects.map((project, idx) => (
                <article
                  key={project.index}
                  data-scene={idx}
                  className="bg-[#0B0D10] border border-white/[0.12] overflow-hidden flex flex-col justify-between p-5 sm:p-8 lg:p-12 shadow-[0_-24px_60px_rgba(0,0,0,0.85)]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center h-full my-auto">
                    {/* Left 5 Columns: Minimal Project Identity */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="font-display font-extrabold text-3xl sm:text-5xl text-[#00F0FF] leading-none">
                            {project.index}
                          </span>
                          <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 bg-[#13161B] text-[#F4F5F7] border border-white/[0.1]">
                            {project.category} · {project.year}
                          </span>
                        </div>

                        <h3 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#F4F5F7] tracking-[-0.035em] leading-[0.94] uppercase">
                          <span className="block overflow-hidden pb-1">
                            <span data-scene-line="" className="block">
                              {project.title}
                            </span>
                          </span>
                        </h3>

                        <p
                          data-scene-meta=""
                          className="text-xs sm:text-sm text-[#8E95A2] leading-relaxed max-w-sm"
                        >
                          {project.summary}
                        </p>
                      </div>

                      <div data-scene-meta="" className="space-y-4 pt-3 border-t border-white/[0.08]">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.14em] bg-[#13161B] text-[#8E95A2] border border-white/[0.08]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#F4F5F7] text-[#060708] font-mono text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#00F0FF] transition-colors"
                          >
                            <span>LIVE SITE</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                          <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] text-[#8E95A2]">
                            <Globe className="w-3.5 h-3.5 text-[#00F0FF]" />
                            {project.domain}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right 7 Columns: Counter-Parallax Visual Preview */}
                    <div className="lg:col-span-7 h-full flex items-center">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block w-full aspect-[16/9] sm:aspect-[16/9.5] bg-[#060708] border border-white/[0.12] overflow-hidden"
                      >
                        {/* Browser Chrome Header */}
                        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3.5 py-2 bg-[#060708]/90 backdrop-blur-md border-b border-white/[0.08]">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-white/20" />
                            <span className="w-2 h-2 rounded-full bg-white/20" />
                            <span className="w-2 h-2 rounded-full bg-[#00F0FF]/80" />
                          </div>
                          <span className="font-mono text-[10px] tracking-[0.14em] text-[#8E95A2]">
                            {project.domain}
                          </span>
                          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#00F0FF]">
                            LIVE ↗
                          </span>
                        </div>

                        {/* Counter-Parallax Media Inner */}
                        <div data-split-media-inner="" className="w-full h-full">
                          <img
                            src={project.previewImage}
                            alt={project.title}
                            className="w-full h-full object-cover object-center brightness-[0.82] contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#060708] via-[#060708]/20 to-transparent" />
                        </div>

                        {/* Bottom Overlay Caption */}
                        <div className="absolute bottom-3 left-4 right-4 z-20 flex items-end justify-between">
                          <span className="font-display font-extrabold text-lg sm:text-2xl text-[#F4F5F7] tracking-tight uppercase">
                            {project.title}
                          </span>
                          <span className="w-9 h-9 bg-[#F4F5F7] text-[#060708] flex items-center justify-center group-hover:bg-[#00F0FF] transition-colors">
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Scene Scrim for Under-Curtain Darkening */}
                  <div
                    data-scene-scrim=""
                    aria-hidden="true"
                    className="absolute inset-0 z-30 bg-[#040506] opacity-0 pointer-events-none"
                  />
                </article>
              ))}
            </div>
          </div>

          {/* Bottom Velocity-Reactive Stack Ticker */}
          <div className="w-full border-t border-white/[0.08] py-3 bg-[#090B0E] overflow-hidden shrink-0">
            <div data-marquee-track="" className="flex w-max will-change-transform">
              {[...stackItems, ...stackItems, ...stackItems].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 px-6">
                  <span className="w-1.5 h-1.5 bg-[#00F0FF]" />
                  <span className="font-display font-bold text-xs tracking-[0.18em] uppercase text-[#8E95A2] whitespace-nowrap">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div data-sticky-scrim="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
