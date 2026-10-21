import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenCvModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCvModal }) => {
  const marqueeItems = [...PROFILE_DATA.marqueeRecord, ...PROFILE_DATA.marqueeRecord];

  return (
    <section
      id="top"
      data-chapter="arrival"
      data-sheet="true"
      className="border-b border-[#1A212B] bg-[#060708]"
    >
      <div
        data-track="true"
        style={{ '--scene': '0svh' } as React.CSSProperties}
      >
        <div
          data-sticky="true"
          className="bleed relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#060708]"
        >
          <div data-sticky-scrim="true" aria-hidden="true" />

          {/* Desktop Right-Side 42% Full-Height Portrait Column */}
          <div className="hidden lg:block lg:absolute lg:top-0 lg:right-0 lg:bottom-12 lg:w-[42%] lg:border-l border-[#1A212B] overflow-hidden">
            <figure
              data-hero-portrait="true"
              className="w-full h-full relative overflow-hidden bg-[#0C0F14] select-none"
            >
              <img
                src="/alesjo-portrait.jpg"
                alt="Alesjo Agolli"
                className="w-full h-full object-cover object-[center_65%] contrast-[1.05] brightness-[0.96] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.035]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(6,7,8,0.55) 0%, rgba(6,7,8,0) 30%), linear-gradient(180deg, rgba(6,7,8,0.15) 0%, rgba(6,7,8,0) 55%, rgba(6,7,8,0.88) 100%)',
                }}
              />

              <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between px-6 py-3.5 border-t border-[#1A212B] bg-[#060708]/85 backdrop-blur-md">
                <span className="eyebrow text-[#F2F6F8] flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-[#00F0FF]" />
                  <span>Alesjo Agolli — Tirana, AL</span>
                </span>
                <span className="eyebrow-accent">01 / 03</span>
              </figcaption>
            </figure>
          </div>

          {/* Main Left Editorial Column + Framed Mobile/Tablet Portrait */}
          <div className="relative z-10 flex-1 flex flex-col justify-between pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-8">
            <div className="max-w-[100rem] mx-auto w-full px-4 sm:px-6 md:px-10 my-auto">
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                <span className="inline-block h-1.5 w-1.5 bg-[#00F0FF]" />
                <span className="eyebrow text-[#F2F6F8]">
                  Full-Stack Web Developer · AI Integration Specialist · UI/UX
                </span>
              </div>

              {/* UnyoCorp [data-hero-line] Display Typography */}
              <h1 className="font-display text-display-xl tracking-tight text-[#F2F6F8] max-w-[13ch] select-none">
                <span className="claim-line-mask">
                  <span data-hero-line="true" className="block">
                    Platforms.
                  </span>
                </span>
                <span className="claim-line-mask">
                  <span data-hero-line="true" className="block">
                    Products.
                  </span>
                </span>
                <span className="claim-line-mask">
                  <span data-hero-line="true" className="block text-[#00F0FF]">
                    Local AI.
                  </span>
                </span>
              </h1>

              {/* Concise Headline & Responsive CTAs */}
              <div className="mt-5 sm:mt-6 max-w-xl space-y-5">
                <p
                  data-hero-sub="true"
                  className="text-sm sm:text-base md:text-lg text-[#8E9BAE] leading-relaxed"
                >
                  Crafting scalable web platforms, modern full-stack applications, and automated
                  local LLM workflows from Tirana, Albania.
                </p>

                <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                  <a
                    href="#projects"
                    data-hero-cta="true"
                    className="btn btn-primary w-full sm:w-auto"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4 btn-icon" />
                  </a>
                  <div className="grid grid-cols-2 sm:flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      data-hero-cta="true"
                      onClick={onOpenCvModal}
                      className="btn btn-ghost w-full sm:w-auto"
                    >
                      <Download className="w-3.5 h-3.5 text-[#00F0FF]" />
                      <span>CV</span>
                    </button>
                    <a
                      href="#contact"
                      data-hero-cta="true"
                      className="btn btn-ghost w-full sm:w-auto"
                    >
                      <span>Contact</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile & Tablet Architectural Portrait Frame */}
              <div className="lg:hidden mt-7">
                <figure
                  data-hero-portrait="true"
                  className="relative w-full max-w-[24rem] sm:max-w-[27rem] mx-auto aspect-[4/4.3] border border-[#1A212B] bg-[#0C0F14] overflow-hidden"
                >
                  <img
                    src="/alesjo-portrait.jpg"
                    alt="Alesjo Agolli"
                    className="w-full h-full object-cover object-[center_82%] contrast-[1.05] brightness-[0.97]"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(6,7,8,0.06) 0%, rgba(6,7,8,0) 55%, rgba(6,7,8,0.88) 100%)',
                    }}
                  />

                  <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between px-4 py-2.5 border-t border-[#1A212B] bg-[#060708]/88 backdrop-blur-md">
                    <span className="eyebrow text-[#F2F6F8] flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-[#00F0FF]" />
                      <span>Alesjo Agolli — Tirana, AL</span>
                    </span>
                    <span className="eyebrow-accent">01 / 03</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          {/* UnyoCorp Velocity-Reactive Marquee Bar */}
          <div className="relative z-10 border-t border-[#1A212B] bg-[#060708] h-12 flex items-center">
            <div className="max-w-[100rem] mx-auto w-full px-4 sm:px-6 md:px-10 flex items-center gap-4 sm:gap-6 overflow-hidden">
              <span className="eyebrow-accent shrink-0">On record</span>
              <span className="h-3.5 w-px bg-[#1A212B] shrink-0" aria-hidden="true" />
              <div className="marks-viewport relative flex-1">
                <div
                  data-marks-track="true"
                  className="marks-track flex items-center gap-8 sm:gap-10 whitespace-nowrap w-max"
                >
                  {marqueeItems.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <span className="font-display text-xs sm:text-sm md:text-base text-[#8E9BAE] hover:text-[#F2F6F8] transition-colors">
                        {item}
                      </span>
                      <span className="text-[#00F0FF] font-mono text-xs">·</span>
                    </React.Fragment>
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
