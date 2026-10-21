import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { Reveal, MaskedLines, AnimatedNumeral } from './Reveal';

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
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section
      id="about"
      className="relative z-10 py-14 sm:py-18 md:py-24 border-b border-[#1A212B] bg-[#060708]"
    >
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left 6 Columns: UnyoCorp #claim Masked Statement + Interactive [data-swap] Verb */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="eyebrow mb-3 flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 bg-[#00F0FF]" />
                <span>02 / About &amp; Approach</span>
              </div>
            </Reveal>

            <h2 className="font-display text-display-md tracking-tight text-[#F2F6F8]">
              <MaskedLines
                lines={[
                  { text: 'Web platforms that scale.' },
                  { text: 'Interfaces & AI that perform.', accent: true },
                ]}
              />
            </h2>

            <Reveal delayMs={180}>
              <p className="mt-4 text-sm md:text-base text-[#8E9BAE] leading-relaxed max-w-2xl">
                Tirana-based Full-Stack Web Developer &amp; AI Integration Specialist (ICT @ Don
                Bosko Tirana) engineering production web apps, modern front-end &amp; back-end
                architectures, and local Ollama AI workflows. Alumnus of{' '}
                <span className="text-[#F2F6F8]">HackJunction (Tirana &amp; Finland)</span> and{' '}
                <span className="text-[#F2F6F8]">CultiVETing (Liguria, Italy)</span>.
              </p>
            </Reveal>

            {/* UnyoCorp [data-swap] Dynamic Phase Word Display */}
            <Reveal delayMs={260} className="mt-6 pt-5 border-t border-[#1A212B] flex items-baseline justify-between">
              <div className="overflow-hidden h-10 sm:h-12 flex items-center">
                <span
                  key={COMPACT_PILLARS[activePhase].verb}
                  className="font-display text-2xl sm:text-3xl font-semibold text-[#00F0FF] block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  {COMPACT_PILLARS[activePhase].verb}
                </span>
              </div>
              <span className="eyebrow">
                PHASE {COMPACT_PILLARS[activePhase].num} // {COMPACT_PILLARS[activePhase].title}
              </span>
            </Reveal>
          </div>

          {/* Right 6 Columns: Interactive 2x2 Phase Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COMPACT_PILLARS.map((p, idx) => {
              const isCurrent = activePhase === idx;
              return (
                <Reveal key={p.num} delayMs={idx * 80} direction="up">
                  <div
                    onMouseEnter={() => setActivePhase(idx)}
                    onClick={() => setActivePhase(idx)}
                    style={{
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className={`p-5 border cursor-pointer transition-all duration-300 h-full flex flex-col justify-between ${
                      isCurrent
                        ? 'border-[#00F0FF] bg-[#0C0F14]'
                        : 'border-[#1A212B] bg-[#0C0F14]/60 hover:border-[#263140]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-display text-xl text-[#00F0FF]">{p.num}</span>
                        <span
                          className={`h-1.5 w-1.5 transition-colors ${
                            isCurrent ? 'bg-[#00F0FF]' : 'bg-[#263140]'
                          }`}
                        />
                      </div>
                      <h3 className="font-display text-lg text-[#F2F6F8] mt-2">{p.title}</h3>
                    </div>
                    <p className="font-mono text-[11px] text-[#8E9BAE] mt-2.5 leading-relaxed">
                      {p.stack}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* UnyoCorp [data-stat-value] Tabular Numeral Counter Bar */}
        <div className="mt-10 pt-8 border-t border-[#1A212B] grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFILE_DATA.numerals.map((item, idx) => (
            <Reveal key={idx} delayMs={idx * 70} className="flex flex-col-reverse">
              <dt className="mt-1.5 text-xs text-[#8E9BAE] leading-relaxed max-w-[26ch]">
                {item.label}
              </dt>
              <dd className="text-display-md font-semibold text-[#F2F6F8]">
                <AnimatedNumeral value={item.value} />
              </dd>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
