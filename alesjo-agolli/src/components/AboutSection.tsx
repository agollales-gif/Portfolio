import React from 'react';
import { Reveal, SpotlightCard } from './Reveal';

const COMPACT_PILLARS = [
  {
    num: 'I',
    title: 'Front-End Architecture',
    stack: 'React · Next.js · TypeScript · Vite · Tailwind CSS',
  },
  {
    num: 'II',
    title: 'Back-End & APIs',
    stack: 'Node.js · Express · Hono · Python · RESTful APIs',
  },
  {
    num: 'III',
    title: 'Databases & Cloud',
    stack: 'Supabase · PostgreSQL · Auth · Real-Time Systems',
  },
  {
    num: 'IV',
    title: 'Local AI & UI/UX',
    stack: 'Ollama · Local LLMs · Figma · Prototyping',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 border-b border-[#1A222C] bg-[#060708]">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left 6 Columns: Concise Claim & Bio */}
          <Reveal direction="left" className="lg:col-span-6">
            <div className="eyebrow mb-3 flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]" />
              <span>02 / About &amp; Approach</span>
            </div>

            <h2 className="font-display text-display-md tracking-tight text-[#F2F6F8]">
              Web platforms that scale.{' '}
              <span className="text-[#00F0FF]">Interfaces &amp; AI that perform.</span>
            </h2>

            <p className="mt-4 text-sm md:text-base text-[#94A3B4] leading-relaxed max-w-2xl">
              Tirana-based Full-Stack Web Developer &amp; AI Integration Specialist (ICT @ Don
              Bosko Tirana) engineering production web apps, modern front-end &amp; back-end
              architectures, and local Ollama AI workflows. Alumnus of{' '}
              <span className="text-[#F2F6F8]">HackJunction (Tirana &amp; Finland)</span> and{' '}
              <span className="text-[#F2F6F8]">CultiVETing (Liguria, Italy)</span>.
            </p>
          </Reveal>

          {/* Right 6 Columns: Staggered Spotlight 2x2 Lifecycle Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COMPACT_PILLARS.map((p, idx) => (
              <Reveal key={p.num} delayMs={idx * 90} direction="up">
                <SpotlightCard className="p-4 sm:p-5 border border-[#1A222C] bg-[#0A0C0F] hover:border-[#00F0FF]/60 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xl text-[#00F0FF]">{p.num}</span>
                      <span className="h-1.5 w-1.5 bg-[#00F0FF] group-hover:scale-150 transition-transform" />
                    </div>
                    <h3 className="font-display text-lg text-[#F2F6F8] mt-1.5 group-hover:text-[#00F0FF] transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <p className="font-mono text-[11px] text-[#94A3B4] mt-2 leading-relaxed">
                    {p.stack}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
