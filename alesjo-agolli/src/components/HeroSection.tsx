import React from 'react';
import { ArrowDownRight, ArrowUpRight, Phone } from 'lucide-react';

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
      id="home"
      data-chapter="arrival"
      data-sheet=""
      style={{ '--scene': '85svh' } as React.CSSProperties}
      className="relative bg-[#060708]"
    >
      <div data-track="">
        <div
          data-sticky=""
          className="relative min-h-screen flex flex-col justify-between pt-[72px] bg-[#060708] bg-grid-pattern overflow-hidden"
        >
          {/* Top Architectural Meta Strip */}
          <div className="w-full border-b border-white/[0.08] relative">
            <div
              data-rule=""
              className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 py-3 flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.2em] uppercase text-[#8E95A2]"
            >
              <div data-meta="" className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-[#00F0FF]" />
                <span className="text-[#F4F5F7] font-semibold">01 / HOME</span>
              </div>
              <div data-meta="" className="hidden sm:flex items-center gap-6">
                <span>TIRANA, AL</span>
                <span className="text-white/20">/</span>
                <a href="tel:+355676770825" className="text-[#00F0FF] hover:underline">
                  +355 67 677 0825
                </a>
              </div>
              <div data-meta="" className="flex items-center gap-2 text-[#00F0FF]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
                <span>AVAILABLE</span>
              </div>
            </div>
          </div>

          {/* Center Grid */}
          <div className="max-w-[1600px] w-full mx-auto px-5 sm:px-10 lg:px-14 py-6 lg:py-10 my-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative">
              {/* Vertical Structural Rule */}
              <div
                data-vrule=""
                className="hidden lg:block absolute left-[65%] top-0 bottom-0 w-px bg-white/[0.08] pointer-events-none"
              />

              {/* Left 8 Columns: Giant Display Typography + Single Sentence */}
              <div className="lg:col-span-8 space-y-6 lg:pr-8">
                <div data-headline-wrap="" className="space-y-1">
                  <h1 className="font-display font-extrabold text-[clamp(3rem,8.2vw,7.75rem)] leading-[0.88] tracking-[-0.045em] text-[#F4F5F7] uppercase">
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
                        className="block text-[clamp(1.25rem,3vw,2.75rem)] leading-[1.02] tracking-[-0.03em] text-[#8E95A2] will-change-transform"
                      >
                        FULL-STACK WEB &amp; AI ENGINEER
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
                    Building fast, high-craft web ecosystems &amp; intelligent digital products.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <a
                      href="#main"
                      onClick={(e) => scrollTo(e, '#main')}
                      className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#F4F5F7] text-[#060708] font-mono text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#00F0FF] transition-colors duration-300"
                    >
                      <span>02 / MAIN</span>
                      <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                    </a>

                    <button
                      onClick={onOpenCV}
                      className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#0D0F12] text-[#F4F5F7] font-mono text-xs uppercase tracking-[0.16em] border border-white/[0.14] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors cursor-pointer"
                    >
                      <span>CV</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#00F0FF]" />
                    </button>
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
                    <span>FIG. 01 — PORTRAIT</span>
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
                        AA / 26
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Scroll Progress Strip */}
          <div className="w-full border-t border-white/[0.08] bg-[#060708]/90 relative">
            <div
              data-home-bar=""
              className="absolute top-0 left-0 right-0 h-[2px] bg-[#00F0FF] origin-left scale-x-0"
            />
            <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 py-3.5 flex items-center justify-between text-[10px] font-mono tracking-[0.2em] uppercase text-[#8E95A2]">
              <span>01 / 03 — HOME</span>
              <a
                href="#main"
                onClick={(e) => scrollTo(e, '#main')}
                className="flex items-center gap-2 text-[#00F0FF] hover:text-[#F4F5F7] transition-colors"
              >
                <span>SCROLL TO 02 / MAIN</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div data-sticky-scrim="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
