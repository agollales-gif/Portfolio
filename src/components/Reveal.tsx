import React, { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/* ============================================================================
   1. ARCHITECTURAL PRELOADER CURTAIN ([data-loader])
   ============================================================================ */
export const PageLoader: React.FC = () => {
  return (
    <div
      data-loader=""
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#060708] px-6 py-8 sm:px-10 lg:px-16 text-[#F4F5F7] select-none pointer-events-none"
    >
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-[10px] tracking-[0.22em] uppercase text-[#8E95A2]">
        <span className="flex items-center gap-2.5">
          <span className="w-2 h-2 bg-[#00F0FF]" />
          ALESJO AGOLLI
        </span>
        <span>TIRANA, AL</span>
      </div>

      <div className="my-auto flex flex-col items-start gap-6">
        <svg
          viewBox="0 0 120 64"
          className="w-24 sm:w-28 h-auto overflow-visible"
          fill="none"
        >
          <path
            data-loader-stroke=""
            d="M8 56 L30 8 L52 56 M16 38 H44 M64 56 L86 8 L108 56 M72 38 H100"
            stroke="#00F0FF"
            strokeWidth="4"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
        <div
          data-loader-word=""
          className="font-display font-extrabold text-[clamp(2rem,5vw,4.5rem)] leading-[0.9] tracking-[-0.04em] uppercase text-[#F4F5F7]"
        >
          ALESJO AGOLLI<span className="text-[#00F0FF]">.</span>
        </div>
      </div>

      <div className="flex items-end justify-between border-t border-white/[0.08] pt-4">
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#8E95A2]">
          INITIALIZING
        </span>
        <span
          data-loader-num=""
          className="font-display font-extrabold text-3xl sm:text-5xl leading-none tracking-[-0.04em] text-[#00F0FF] tabular-nums"
        >
          000
        </span>
      </div>
    </div>
  );
};

/* ============================================================================
   2. MASTER LENIS + GSAP SCROLLTRIGGER ENGINE
   ============================================================================ */
export const UnyoJourneyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
    window.__lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const tickerFn = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const arrival = root.querySelector<HTMLElement>('[data-chapter="arrival"]');
      const work = root.querySelector<HTMLElement>('[data-chapter="work"]');
      const close = root.querySelector<HTMLElement>('[data-chapter="close"]');

      /* ----------------------------------------------------------------------
         A. SECTION 1 — PRELOADER + SCROLL-SCRUBBED PARALLAX
         ---------------------------------------------------------------------- */
      if (arrival) {
        const loader = document.querySelector<HTMLElement>('[data-loader]');
        const stroke = loader?.querySelector<SVGPathElement>('[data-loader-stroke]');
        const word = loader?.querySelector<HTMLElement>('[data-loader-word]');
        const num = loader?.querySelector<HTMLElement>('[data-loader-num]');

        const lines = arrival.querySelectorAll<HTMLElement>('[data-line]');
        const rules = arrival.querySelectorAll<HTMLElement>('[data-rule]');
        const vrules = arrival.querySelectorAll<HTMLElement>('[data-vrule]');
        const meta = arrival.querySelectorAll<HTMLElement>('[data-meta]');
        const portrait = arrival.querySelector<HTMLElement>('[data-portrait]');
        const frame = arrival.querySelector<HTMLElement>('[data-frame]');

        gsap.set(lines, { yPercent: 110 });
        gsap.set(rules, { scaleX: 0, transformOrigin: 'left center' });
        gsap.set(vrules, { scaleY: 0, transformOrigin: 'top center' });
        gsap.set(meta, { opacity: 0, y: 12 });
        if (portrait) gsap.set(portrait, { scale: 1.12, opacity: 0 });
        if (frame) gsap.set(frame, { clipPath: 'inset(12% 0% 12% 0%)' });

        const counter = { v: 0 };
        const introTl = gsap.timeline({
          defaults: { ease: 'power3.out' },
          onComplete: () => {
            document.documentElement.dataset.loaded = 'true';
            ScrollTrigger.refresh();
          },
        });

        if (loader && document.documentElement.dataset.loaded !== 'true') {
          if (stroke) {
            gsap.set(stroke, { strokeDasharray: 320, strokeDashoffset: 320 });
            introTl.to(stroke, { strokeDashoffset: 0, duration: 0.65, ease: 'power2.inOut' }, 0);
          }
          if (word) {
            gsap.set(word, { opacity: 0, y: 10 });
            introTl.to(word, { opacity: 1, y: 0, duration: 0.4 }, 0.15);
          }
          if (num) {
            introTl.to(
              counter,
              {
                v: 100,
                duration: 0.7,
                ease: 'power2.out',
                onUpdate: () => {
                  num.textContent = String(Math.round(counter.v)).padStart(3, '0');
                },
              },
              0
            );
          }
          introTl.to(loader, { yPercent: -100, duration: 0.7, ease: 'expo.inOut' }, 0.72);
        }

        const startAt = loader && document.documentElement.dataset.loaded !== 'true' ? 0.85 : 0.05;
        introTl
          .to(rules, { scaleX: 1, duration: 0.7, stagger: 0.06, ease: 'expo.out' }, startAt)
          .to(vrules, { scaleY: 1, duration: 0.8, ease: 'expo.out' }, startAt + 0.05)
          .to(lines, { yPercent: 0, duration: 0.85, stagger: 0.07, ease: 'expo.out' }, startAt + 0.08);

        if (frame) {
          introTl.to(frame, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'expo.out' }, startAt + 0.1);
        }
        if (portrait) {
          introTl.to(portrait, { scale: 1, opacity: 1, duration: 1.0, ease: 'expo.out' }, startAt + 0.1);
        }
        introTl.to(meta, { opacity: 1, y: 0, duration: 0.5, stagger: 0.05 }, startAt + 0.3);

        // Scroll-scrubbed exit effect as user scrolls from Section 1 into Section 2
        const line1 = arrival.querySelector<HTMLElement>('[data-line-1]');
        const line2 = arrival.querySelector<HTMLElement>('[data-line-2]');
        const line3 = arrival.querySelector<HTMLElement>('[data-line-3]');
        const inner = arrival.querySelector<HTMLElement>('[data-hero-inner]');

        const scrubTl = gsap.timeline({
          scrollTrigger: {
            trigger: arrival,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.3,
          },
        });

        if (line1) scrubTl.to(line1, { xPercent: -7, yPercent: -18, ease: 'none' }, 0);
        if (line2) scrubTl.to(line2, { xPercent: 7, yPercent: -15, ease: 'none' }, 0);
        if (line3) scrubTl.to(line3, { yPercent: -22, opacity: 0.25, ease: 'none' }, 0);
        if (portrait) scrubTl.to(portrait, { scale: 1.14, yPercent: -8, ease: 'none' }, 0);
        if (inner) scrubTl.to(inner, { scale: 0.94, opacity: 0.35, yPercent: 8, ease: 'none' }, 0);
      }

      /* ----------------------------------------------------------------------
         B. SECTION 2 — 3D GALAXY PROJECT SLIDESHOW SCROLL ENTRANCE & TICKER
         ---------------------------------------------------------------------- */
      if (work) {
        const stage = work.querySelector<HTMLElement>('[data-galaxy-stage]');
        const header = work.querySelector<HTMLElement>('[data-galaxy-header]');

        if (header) {
          gsap.fromTo(
            header,
            { opacity: 0, y: 36 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: work,
                start: 'top 78%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        if (stage) {
          gsap.fromTo(
            stage,
            { opacity: 0, scale: 0.88, y: 60, rotateX: 12 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              rotateX: 0,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: work,
                start: 'top 85%',
                end: 'top 20%',
                scrub: 0.35,
              },
            }
          );
        }

        // Velocity-reactive stack ticker
        const marqueeTrack = work.querySelector<HTMLElement>('[data-marquee-track]');
        if (marqueeTrack) {
          let xPercent = 0;
          let direction = -1;
          const tick = () => {
            const st = ScrollTrigger.getAll()[0];
            const vel = st ? Math.min(Math.abs(st.getVelocity()) / 700, 5) : 0;
            xPercent += 0.045 * (1 + vel) * direction;
            if (xPercent <= -50) xPercent += 50;
            if (xPercent > 0) xPercent -= 50;
            gsap.set(marqueeTrack, { xPercent });
          };
          gsap.ticker.add(tick);
          const dirTrigger = ScrollTrigger.create({
            onUpdate: (self) => {
              if (self.direction !== 0) direction = -self.direction;
            },
          });
          cleanups.push(() => {
            gsap.ticker.remove(tick);
            dirTrigger.kill();
          });
        }
      }

      /* ----------------------------------------------------------------------
         C. SECTION 3 — CLOSING CONTACT SCROLL REVEAL
         ---------------------------------------------------------------------- */
      if (close) {
        const closeLines = close.querySelectorAll<HTMLElement>('[data-close-line]');
        const closeCards = close.querySelectorAll<HTMLElement>('[data-close-card]');

        if (closeLines.length) {
          gsap.fromTo(
            closeLines,
            { yPercent: 105 },
            {
              yPercent: 0,
              duration: 0.9,
              stagger: 0.08,
              ease: 'expo.out',
              scrollTrigger: {
                trigger: close,
                start: 'top 78%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        if (closeCards.length) {
          gsap.fromTo(
            closeCards,
            { opacity: 0, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.08,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: close,
                start: 'top 70%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      }
    }, root);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('load', onLoad);
      cleanups.forEach((fn) => fn());
      ctx.revert();
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return (
    <div ref={rootRef} data-journey="">
      {children}
    </div>
  );
};

export const ScrollProgressBar: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!barRef.current) return;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      barRef.current.style.width = `${pct}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent pointer-events-none">
      <div
        ref={barRef}
        className="h-full bg-[#00F0FF] transition-[width] duration-75 ease-out"
        style={{ width: '0%' }}
      />
    </div>
  );
};
