import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';

const COMPACT_PILLARS = [
  {
    num: 'I',
    verb: 'Design.',
    title: 'Front-End Architecture',
    stack: 'React · Next.js · TypeScript · Vite · Tailwind CSS',
  },
  {
    num: 'II',
    verb: 'Engineer.',
    title: 'Back-End & APIs',
    stack: 'Node.js · Express · Hono · Python · RESTful APIs',
  },
  {
    num: 'III',
    verb: 'Scale.',
    title: 'Databases & Cloud',
    stack: 'Supabase · PostgreSQL · Auth · Real-Time Systems',
  },
  {
    num: 'IV',
    verb: 'Automate.',
    title: 'Local AI & UI/UX',
    stack: 'Ollama · Local LLMs · Figma · Prototyping',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      data-chapter="claim"
      data-sheet="true"
      className="border-b border-[#1A212B] bg-[#060708]"
    >
      <div
        data-track="true"
        style={{ '--scene': '75svh' } as React.CSSProperties}
      >
        <div
          data-sticky="true"
          className="justify-between py-12 lg:py-10 bg-[#060708]"
        >
          <div data-sticky-scrim="true" aria-hidden="true" />

          <div className="max-w-[100rem] mx-auto w-full px-4 sm:px-6 md:px-10 my-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left 6 Columns: UnyoCorp Scroll-Scrubbed [data-claim-line] + [data-swap-word] */}
              <div className="lg:col-span-6">
                <div className="eyebrow mb-3 flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 bg-[#00F0FF]" />
                  <span>02 / About &amp; Approach</span>
                </div>

                <h2 className="font-display text-display-lg tracking-tight text-[#F2F6F8]">
                  <span className="claim-line-mask">
                    <span data-claim-line="true" className="block">
                      Web platforms that scale.
                    </span>
                  </span>
                  <span className="claim-line-mask">
                    <span data-claim-line="true" className="block text-[#00F0FF]">
                      Interfaces &amp; AI that perform.
                    </span>
                  </span>
                </h2>

                <p
                  data-fact="true"
                  className="mt-5 text-sm md:text-base text-[#8E9BAE] leading-relaxed max-w-2xl"
                >
                  Tirana-based Full-Stack Web Developer &amp; AI Integration Specialist (ICT @ Don
                  Bosko Tirana) engineering production web apps, modern front-end &amp; back-end
                  architectures, and local Ollama AI workflows. Alumnus of{' '}
                  <span className="text-[#F2F6F8]">HackJunction (Tirana &amp; Finland)</span> and{' '}
                  <span className="text-[#F2F6F8]">CultiVETing (Liguria, Italy)</span>.
                </p>

                {/* UnyoCorp [data-swap] Scroll-Scrubbed Method Verb */}
                <div
                  data-fact="true"
                  className="mt-7 pt-5 border-t border-[#1A212B] flex items-center justify-between"
                >
                  <div data-swap="true" className="overflow-hidden h-12 flex items-center">
                    {COMPACT_PILLARS.map((p) => (
                      <span
                        key={p.verb}
                        data-swap-word="true"
                        className="font-display text-3xl sm:text-4xl font-semibold text-[#00F0FF] block"
                      >
                        {p.verb}
                      </span>
                    ))}
                  </div>
                  <span className="eyebrow">SCROLL-DRIVEN LIFECYCLE</span>
                </div>
              </div>

              {/* Right 6 Columns: 2x2 Phase Grid */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COMPACT_PILLARS.map((p) => (
                  <div
                    key={p.num}
                    data-fact="true"
                    data-phase="true"
                    className="p-5 border border-[#1A212B] bg-[#0C0F14] hover:border-[#00F0FF] transition-colors duration-300 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-display text-xl text-[#00F0FF]">{p.num}</span>
                        <span className="h-1.5 w-1.5 bg-[#00F0FF]" />
                      </div>
                      <h3 className="font-display text-lg text-[#F2F6F8] mt-2">{p.title}</h3>
                    </div>
                    <p className="font-mono text-[11px] text-[#8E9BAE] mt-2.5 leading-relaxed">
                      {p.stack}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* UnyoCorp [data-stat-value] Tabular Numeral Counter Bar */}
            <dl className="mt-10 pt-8 border-t border-[#1A212B] grid grid-cols-2 lg:grid-cols-4 gap-6">
              {PROFILE_DATA.numerals.map((item, idx) => (
                <div key={idx} data-fact="true" className="flex flex-col-reverse">
                  <dt className="mt-1.5 text-xs text-[#8E9BAE] leading-relaxed max-w-[26ch]">
                    {item.label}
                  </dt>
                  <dd
                    data-stat-value="true"
                    data-target-value={item.value}
                    className="numeral text-display-md font-semibold text-[#F2F6F8]"
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
