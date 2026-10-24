import React from 'react';
import { ArrowDownRight, ArrowUpRight, Phone, FileText } from 'lucide-react';

interface HeroSectionProps {
  onOpenCV: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCV }) => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const el = document.querySelector<HTMLElement>(selector);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      data-chapter="arrival"
      className="relative min-h-screen flex flex-col justify-between bg-[#060708] bg-grid-pattern overflow-hidden"
    >
      {/* Frameless Top Status Bar (No Menu Bar, No Home/Main/Closed Labels) */}
      <div className="w-full border-b border-white/[0.08] relative z-20">
        <div
          data-rule=""
          className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 py-4 flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.2em] uppercase text-[#8E95A2]"
        >
          <div data-meta="" className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#0D0F12] border border-white/[0.15] flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-4 h-4">
                <path
                  d="M11 48 L22 16 L33 48 M15 38 H29"
                  fill="none"
                  stroke="#F4F5F7"
                  strokeWidth="4.5"
                  strokeLinecap="square"
                />
                <path
                  d="M31 48 L42 16 L53 48 M35 38 H49"
                  fill="none"
                  stroke="#00F0FF"
                  strokeWidth="4.5"
                  strokeLinecap="square"
                />
              </svg>
            </div>
            <span className="text-[#F4F5F7] font-semibold tracking-[0.18em]">ALESJO AGOLLI</span>
          </div>

          <div data-meta="" className="hidden sm:flex items-center gap-6">
            <span>TIRANA, AL</span>
            <span className="text-white/20">/</span>
            <a href="tel:+355676770825" className="text-[#00F0FF] hover:underline">
              +355 67 677 0825
            </a>
          </div>

          <div data-meta="" className="flex items-center gap-3">
            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#0D0F12] text-[#F4F5F7] border border-white/[0.14] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors cursor-pointer"
            >
              <FileText className="w-3 h-3 text-[#00F0FF]" />
              <span>CV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Center Grid */}
      <div
        data-hero-inner=""
        className="max-w-[1600px] w-full mx-auto px-5 sm:px-10 lg:px-14 py-8 lg:py-12 my-auto will-change-transform"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative">
          {/* Vertical Structural Rule */}
          <div
            data-vrule=""
            className="hidden lg:block absolute left-[65%] top-0 bottom-0 w-px bg-white/[0.08] pointer-events-none"
          />

          {/* Left 8 Columns: Giant Display Typography */}
          <div className="lg:col-span-8 space-y-6 lg:pr-8">
            <div className="space-y-1">
              <h1 className="font-display font-extrabold text-[clamp(3rem,8.4vw,8rem)] leading-[0.88] tracking-[-0.045em] text-[#F4F5F7] uppercase">
                <span className="block overflow-hidden pb-1">
                  <span data-line="" data-line-1="" className="block will-change-transform">
                    ALESJO
                  </span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span data-line="" data-line-2="" className="block text-[#00F0FF] will-change-transform">
                    AGOLLI<span className="text-[#F4F5F7]">.</span>
                  </span>
                </span>
                <span className="block overflow-hidden pt-1">
                  <span
                    data-line=""
                    data-line-3=""
                    className="block text-[clamp(1.2rem,2.8vw,2.6rem)] leading-[1.04] tracking-[-0.03em] text-[#8E95A2] will-change-transform"
                  >
                    FULL-STACK WEB DEVELOPER
                  </span>
                </span>
              </h1>
            </div>

            {/* Minimal 1-sentence bio + CTA row */}
            <div
              data-meta=""
              className="pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-5"
            >
              <p className="text-sm sm:text-base text-[#8E95A2] max-w-md leading-relaxed">
                Building modern web platforms, responsive interfaces &amp; scalable digital systems.
              </p>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="#projects"
                  onClick={(e) => scrollTo(e, '#projects')}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#F4F5F7] text-[#060708] font-mono text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#00F0FF] transition-colors duration-300"
                >
                  <span>SELECTED WORKS</span>
                  <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => scrollTo(e, '#contact')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#0D0F12] text-[#F4F5F7] font-mono text-xs uppercase tracking-[0.16em] border border-white/[0.14] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors"
                >
                  <span>CONTACT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#00F0FF]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right 4 Columns: Clean Portrait Frame */}
          <div className="lg:col-span-4 max-w-[340px] sm:max-w-[380px] lg:max-w-none mx-auto w-full">
            <div
              data-frame=""
              className="relative bg-[#0D0F12] border border-white/[0.12] p-2 group will-change-transform"
            >
              <div className="flex items-center justify-between px-2 py-1.5 border-b border-white/[0.08] mb-2 font-mono text-[10px] tracking-[0.16em] uppercase text-[#8E95A2]">
                <span>PORTRAIT</span>
                <span className="text-[#00F0FF]">TIRANA, AL</span>
              </div>

              <div className="relative aspect-[4/4.2] w-full overflow-hidden bg-[#13161B]">
                <img
                  data-portrait=""
                  src="/alesjo-portrait.jpg"
                  alt="Alesjo Agolli"
                  className="w-full h-full object-cover object-[center_82%] contrast-[1.05] brightness-[0.97] will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060708]/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#00F0FF]">
                      DIRECT LINE
                    </div>
                    <a
                      href="tel:+355676770825"
                      className="inline-flex items-center gap-1.5 font-display font-bold text-xs text-[#F4F5F7] hover:text-[#00F0FF] transition-colors"
                    >
                      <Phone className="w-3 h-3 text-[#00F0FF]" />
                      +355 67 677 0825
                    </a>
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.18em] uppercase px-2 py-0.5 bg-[#060708]/85 border border-white/15 text-[#F4F5F7]">
                    AA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Cue */}
      <div className="w-full border-t border-white/[0.08] bg-[#060708]/90">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 py-3.5 flex items-center justify-between text-[10px] font-mono tracking-[0.2em] uppercase text-[#8E95A2]">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            AVAILABLE FOR NEW PROJECTS
          </span>
          <a
            href="#projects"
            onClick={(e) => scrollTo(e, '#projects')}
            className="flex items-center gap-2 text-[#00F0FF] hover:text-[#F4F5F7] transition-colors"
          >
            <span>SCROLL</span>
            <ArrowDownRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
