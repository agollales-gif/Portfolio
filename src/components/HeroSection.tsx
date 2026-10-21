import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { Reveal } from './Reveal';

interface HeroSectionProps {
  onOpenCvModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCvModal }) => {
  const marqueeItems = [...PROFILE_DATA.marqueeRecord, ...PROFILE_DATA.marqueeRecord];

  return (
    <section
      id="top"
      className="relative min-h-[100svh] lg:min-h-[90svh] flex flex-col justify-between overflow-hidden border-b border-[#1A222C] bg-[#060708] obsidian-grid"
    >
      {/* Animated Floating Electric Cyan Ambient Glow Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -left-28 w-72 sm:w-96 h-72 sm:h-96 rounded-full opacity-20 blur-[110px] animate-orb"
        style={{ background: 'radial-gradient(circle, #00F0FF 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 left-1/3 w-64 h-64 rounded-full opacity-10 blur-[100px] animate-orb"
        style={{
          background: 'radial-gradient(circle, #00F0FF 0%, transparent 70%)',
          animationDelay: '3s',
        }}
      />

      {/* Right-Side Portrait Column (Responsive on Mobile, Tablet & Desktop) */}
      <div className="relative lg:absolute lg:top-0 lg:right-0 lg:bottom-12 lg:w-[42%] h-[46svh] sm:h-[54svh] md:h-[60svh] lg:h-auto order-2 lg:order-none border-t lg:border-t-0 lg:border-l border-[#1A222C] overflow-hidden group">
        <figure className="w-full h-full relative overflow-hidden bg-[#050709] select-none">
          <img
            src="/alesjo-portrait.jpg"
            alt="Alesjo Agolli"
            className="w-full h-full object-cover object-[center_18%] contrast-[1.05] brightness-[0.95] animate-portrait-zoom group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
          />

          {/* Subtle Animated Electric Cyan Telemetry Scanline */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-[#00F0FF]/10 to-transparent animate-scanline"
          />

          {/* Obsidian Edge Vignette Blend */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(6,7,8,0.68) 0%, rgba(6,7,8,0) 35%), linear-gradient(180deg, rgba(6,7,8,0.18) 0%, rgba(6,7,8,0) 45%, rgba(6,7,8,0.88) 100%)',
            }}
          />

          <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between px-4 sm:px-6 py-3 border-t border-[#1A222C]/80 bg-[#060708]/80 backdrop-blur-md">
            <span className="eyebrow text-[#F2F6F8] flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#00F0FF] animate-ping" />
              <span>Alesjo Agolli — Tirana, AL</span>
            </span>
            <span className="eyebrow-accent">01 / 03</span>
          </figcaption>
        </figure>
      </div>

      {/* Main Left Editorial Column */}
      <div className="relative z-10 flex-1 flex flex-col justify-between pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-8 order-1 lg:order-none">
        <div className="max-w-[100rem] mx-auto w-full px-4 sm:px-6 md:px-10 my-auto">
          <Reveal delayMs={40}>
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="inline-block h-2 w-2 bg-[#00F0FF] shadow-[0_0_12px_#00F0FF] animate-pulse" />
              <span className="eyebrow text-[#F2F6F8]">
                Full-Stack Web Developer · AI Integration Specialist · UI/UX
              </span>
            </div>
          </Reveal>

          {/* UnyoCorp Giant Stacked Display Typography with Staggered Clip-Mask Reveal */}
          <h1 className="font-display text-display-xl tracking-tight text-[#F2F6F8] max-w-[13ch] select-none">
            <span className="block overflow-hidden pb-1">
              <span className="animate-hero-word-1">Platforms.</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="animate-hero-word-2">Products.</span>
            </span>
            <span className="block overflow-hidden pb-1 text-[#00F0FF]">
              <span className="animate-hero-word-3">Local AI.</span>
            </span>
          </h1>

          {/* Concise Headline & Responsive CTAs */}
          <Reveal delayMs={380} className="mt-5 sm:mt-6 max-w-xl space-y-5">
            <p className="text-sm sm:text-base md:text-lg text-[#94A3B4] leading-relaxed border-l-2 border-[#00F0FF] pl-3.5 sm:pl-4">
              Crafting scalable web platforms, modern full-stack applications, and automated local
              LLM workflows from Tirana, Albania.
            </p>

            <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
              <a href="#projects" className="btn btn-primary w-full sm:w-auto !py-3 !px-5">
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 btn-icon" />
              </a>
              <div className="grid grid-cols-2 sm:flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onOpenCvModal}
                  className="btn btn-ghost w-full sm:w-auto !py-3 !px-4"
                >
                  <Download className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span>CV</span>
                </button>
                <a href="#contact" className="btn btn-ghost w-full sm:w-auto !py-3 !px-4">
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Compact Responsive Marquee Bar */}
      <div className="relative z-10 border-t border-[#1A222C] bg-[#060708]/95 h-11 sm:h-12 flex items-center order-3 lg:order-none">
        <div className="max-w-[100rem] mx-auto w-full px-4 sm:px-6 md:px-10 flex items-center gap-4 sm:gap-6 overflow-hidden">
          <span className="eyebrow-accent shrink-0">On record</span>
          <span className="h-3.5 w-px bg-[#1A222C] shrink-0" aria-hidden="true" />
          <div className="relative flex-1 overflow-hidden">
            <div className="flex items-center gap-8 sm:gap-10 whitespace-nowrap animate-marquee marquee-track">
              {marqueeItems.map((item, idx) => (
                <React.Fragment key={idx}>
                  <span className="font-display text-xs sm:text-sm md:text-base text-[#94A3B4] hover:text-[#00F0FF] transition-colors">
                    {item}
                  </span>
                  <span className="text-[#00F0FF] font-mono text-xs">·</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
