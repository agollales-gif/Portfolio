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
   1. UNYOCORP PRELOADER CURTAIN ([data-loader])
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
        <span>01 HOME · 02 MAIN · 03 CLOSED</span>
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
          LOADING EXPERIENCE
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
   2. UNYOCORP MASTER LENIS + GSAP SCROLLTRIGGER ENGINE
   ============================================================================ */
export const UnyoJourneyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // 1. Initialize Lenis smooth scrolling synced with GSAP ScrollTrigger (exact UnyoCorp setup)
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
         A. PAGE 01 (HOME) — PRELOADER + SCROLL-SCRUBBED PARALLAX
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
        const homeBar = arrival.querySelector<HTMLElement>('[data-home-bar]');

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

        // Scroll-scrubbed timeline while scrolling through Page 01 (HOME)
        const track = arrival.querySelector<HTMLElement>('[data-track]') || arrival;
        const headWrap = arrival.querySelector<HTMLElement>('[data-headline-wrap]');
        const line1 = arrival.querySelector<HTMLElement>('[data-line-1]');
        const line2 = arrival.querySelector<HTMLElement>('[data-line-2]');
        const line3 = arrival.querySelector<HTMLElement>('[data-line-3]');

        const scrubTl = gsap.timeline({
          scrollTrigger: {
            trigger: track,
            start: 'top top',
            end: 'bottom 200%',
            scrub: 0.25,
          },
        });

        if (line1) scrubTl.to(line1, { xPercent: -8, yPercent: -25, ease: 'none' }, 0);
        if (line2) scrubTl.to(line2, { xPercent: 8, yPercent: -20, ease: 'none' }, 0);
        if (line3) scrubTl.to(line3, { yPercent: -30, opacity: 0.25, ease: 'none' }, 0);
        if (headWrap) scrubTl.to(headWrap, { opacity: 0.35, ease: 'none' }, 0);
        if (portrait) scrubTl.to(portrait, { scale: 1.15, yPercent: -8, ease: 'none' }, 0);
        if (frame) scrubTl.to(frame, { yPercent: -6, ease: 'none' }, 0);
        if (homeBar) scrubTl.fromTo(homeBar, { scaleX: 0 }, { scaleX: 1, ease: 'none' }, 0);
      }

      /* ----------------------------------------------------------------------
         B. PAGE 02 (MAIN) — VERTICAL FULL-SCREEN SCENE WIPES (01 -> 02 -> 03)
         ---------------------------------------------------------------------- */
      if (work) {
        const scenes = Array.from(work.querySelectorAll<HTMLElement>('[data-scene]'));
        const countEl = work.querySelector<HTMLElement>('[data-scene-current]');
        const workBar = work.querySelector<HTMLElement>('[data-work-bar]');
        const pills = Array.from(work.querySelectorAll<HTMLElement>('[data-scene-pill]'));
        const track = work.querySelector<HTMLElement>('[data-track]') || work;

        if (scenes.length > 1) {
          scenes.forEach((scene, idx) => {
            gsap.set(scene, {
              zIndex: idx + 1,
              yPercent: idx === 0 ? 0 : 100,
              scale: 1,
              transformOrigin: '50% 0%',
            });
            const scrim = scene.querySelector<HTMLElement>('[data-scene-scrim]');
            if (scrim) gsap.set(scrim, { opacity: 0 });
          });

          const totalTransitions = scenes.length - 1;
          const setActiveScene = (index: number) => {
            if (countEl) {
              countEl.textContent = String(index + 1).padStart(2, '0');
            }
            pills.forEach((pill, i) => {
              if (i === index) {
                pill.dataset.active = 'true';
              } else {
                delete pill.dataset.active;
              }
            });
          };
          setActiveScene(0);

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: track,
              start: 'top top',
              end: 'bottom 200%',
              scrub: 0.3,
              onUpdate: (self) => {
                const idx = Math.min(
                  scenes.length - 1,
                  Math.max(0, Math.round(self.progress * totalTransitions))
                );
                setActiveScene(idx);
                if (workBar) {
                  gsap.set(workBar, { scaleX: self.progress });
                }
              },
            },
          });

          for (let i = 0; i < totalTransitions; i++) {
            const currentScene = scenes[i];
            const nextScene = scenes[i + 1];
            const currentScrim = currentScene.querySelector<HTMLElement>('[data-scene-scrim]');
            const currentMedia = currentScene.querySelector<HTMLElement>('[data-split-media-inner]');
            const nextMedia = nextScene.querySelector<HTMLElement>('[data-split-media-inner]');
            const nextLines = nextScene.querySelectorAll<HTMLElement>('[data-scene-line]');
            const nextMeta = nextScene.querySelectorAll<HTMLElement>('[data-scene-meta]');
            const pos = i;

            if (nextLines.length) gsap.set(nextLines, { yPercent: 108 });
            if (nextMeta.length) gsap.set(nextMeta, { opacity: 0, y: 18 });
            if (nextMedia) gsap.set(nextMedia, { yPercent: -18, scale: 1.16 });

            // Next scene wipes up from bottom (yPercent: 100 -> 0) over current scene
            tl.fromTo(
              nextScene,
              { yPercent: 100 },
              { yPercent: 0, duration: 1, ease: 'power2.inOut' },
              pos
            );

            // Current scene scales down & darkens underneath
            tl.to(
              currentScene,
              { scale: 0.92, yPercent: -4, duration: 1, ease: 'power2.inOut' },
              pos
            );

            if (currentScrim) {
              tl.to(currentScrim, { opacity: 0.65, duration: 1, ease: 'none' }, pos);
            }
            if (currentMedia) {
              tl.to(currentMedia, { yPercent: 10, scale: 1.06, duration: 1, ease: 'none' }, pos);
            }
            if (nextMedia) {
              tl.to(nextMedia, { yPercent: 0, scale: 1, duration: 1, ease: 'power2.out' }, pos);
            }
            if (nextLines.length) {
              tl.to(
                nextLines,
                { yPercent: 0, duration: 0.6, stagger: 0.05, ease: 'power3.out' },
                pos + 0.32
              );
            }
            if (nextMeta.length) {
              tl.to(
                nextMeta,
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' },
                pos + 0.42
              );
            }
          }
        }

        // Velocity-reactive stack ticker at bottom of MAIN
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
         C. PAGE 03 (CLOSED / FOOTER) — CURTAIN REVEAL ANIMATION
         ---------------------------------------------------------------------- */
      if (close) {
        const closeLines = close.querySelectorAll<HTMLElement>('[data-close-line]');
        const closeCards = close.querySelectorAll<HTMLElement>('[data-close-card]');
        if (closeLines.length) gsap.set(closeLines, { yPercent: 105 });
        if (closeCards.length) gsap.set(closeCards, { opacity: 0, y: 24 });

        ScrollTrigger.create({
          trigger: close,
          start: 'top 65%',
          onEnter: () => {
            gsap.to(closeLines, {
              yPercent: 0,
              duration: 0.85,
              stagger: 0.08,
              ease: 'expo.out',
              overwrite: true,
            });
            gsap.to(closeCards, {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.07,
              delay: 0.15,
              ease: 'power3.out',
              overwrite: true,
            });
          },
        });
      }

      /* ----------------------------------------------------------------------
         D. MASTER SHEET-OVER-SHEET CURTAIN TRANSITIONS
         When next sheet slides up over current sticky sheet, current sheet
         scales down (0.92), shifts up (-3%), and scrim darkens (0.6).
         ---------------------------------------------------------------------- */
      const sheets = Array.from(root.querySelectorAll<HTMLElement>('[data-sheet]'));
      for (let i = 0; i < sheets.length - 1; i++) {
        const currentSheet = sheets[i];
        const nextSheet = sheets[i + 1];
        const sticky = currentSheet.querySelector<HTMLElement>('[data-sticky]');
        const scrim = currentSheet.querySelector<HTMLElement>('[data-sticky-scrim]');
        const nextTrack = nextSheet.querySelector<HTMLElement>('[data-track]') || nextSheet;

        if (sticky) {
          const sheetTl = gsap.timeline({
            scrollTrigger: {
              trigger: nextTrack,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            },
          });

          sheetTl.to(
            sticky,
            {
              scale: 0.92,
              yPercent: -3,
              ease: 'none',
            },
            0
          );

          if (scrim) {
            sheetTl.to(scrim, { opacity: 0.65, ease: 'none' }, 0);
          }
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

/* ============================================================================
   3. UTILITY REVEAL HELPERS
   ============================================================================ */
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  threshold?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, className = '' }) => {
  return <div className={className}>{children}</div>;
};

export const SpotlightCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}> = ({ children, className = '' }) => {
  return <div className={`relative overflow-hidden ${className}`}>{children}</div>;
};

export const AnimatedCounter: React.FC<{
  value: string;
  className?: string;
}> = ({ value, className = '' }) => {
  return <span className={className}>{value}</span>;
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
