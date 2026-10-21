import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const EASE = {
  reveal: 'expo.out',
  soft: 'power2.out',
  inOut: 'power2.inOut',
};

function animateCount(el: HTMLElement, duration = 1.1) {
  const raw = (el.dataset.targetValue || el.textContent || '').trim();
  const match = raw.match(/^([+\-]?)(\d+)(.*)$/);
  if (!match) return;
  const [, prefix, digits, suffix] = match;
  const target = Number(digits);
  const padLen = digits.startsWith('0') ? digits.length : 0;
  const state = { n: 0 };

  gsap.to(state, {
    n: target,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      const numStr =
        padLen > 0
          ? String(Math.round(state.n)).padStart(padLen, '0')
          : String(Math.round(state.n));
      el.textContent = `${prefix}${numStr}${suffix}`;
    },
  });
}

function batchReveal(elements: HTMLElement[]) {
  if (!elements.length) return () => {};
  gsap.set(elements, { opacity: 0, y: 28 });
  const triggers = ScrollTrigger.batch(elements, {
    start: 'top 88%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: EASE.reveal,
        stagger: 0.07,
        overwrite: true,
      }),
  });
  return () => {
    triggers.forEach((t) => t.kill());
    gsap.set(elements, { clearProps: 'opacity,transform' });
  };
}

/**
 * UnyoCorp [data-loader] Architectural SVG + Progress Curtain
 */
export const PageLoader: React.FC = () => {
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;

    const fill = loader.querySelector<HTMLElement>('[data-loader-fill]');
    const count = loader.querySelector<HTMLElement>('[data-loader-count]');
    const stroke = loader.querySelector<SVGPathElement>('[data-loader-stroke]');
    const fillPath = loader.querySelector<SVGPathElement>('[data-loader-fill-path]');
    const inner = loader.querySelector<HTMLElement>('[data-loader-inner]');

    const counterState = { n: 0 };
    const tl = gsap.timeline({
      defaults: { ease: EASE.reveal },
      onComplete: () => {
        document.documentElement.dataset.loaded = 'true';
        window.dispatchEvent(new Event('journey:ready'));
      },
    });

    if (stroke) {
      const length = 320;
      gsap.set(stroke, { strokeDasharray: length, strokeDashoffset: length });
      tl.to(stroke, { strokeDashoffset: 0, duration: 0.85, ease: EASE.inOut }, 0);
    }

    if (fillPath) {
      tl.fromTo(fillPath, { opacity: 0 }, { opacity: 1, duration: 0.55, ease: EASE.soft }, 0.45);
    }

    if (fill) {
      tl.fromTo(
        fill,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.85, ease: 'power2.out' },
        0.05
      );
    }

    tl.to(
      counterState,
      {
        n: 100,
        duration: 0.85,
        ease: 'power2.out',
        onUpdate: () => {
          if (count) {
            count.textContent = String(Math.round(counterState.n)).padStart(3, '0');
          }
        },
      },
      0.05
    );

    if (inner) {
      tl.to(inner, { yPercent: -24, autoAlpha: 0, duration: 0.48, ease: EASE.inOut }, 0.92);
    }

    tl.to(
      loader,
      {
        yPercent: -100,
        duration: 0.78,
        ease: EASE.inOut,
        onComplete: () => {
          loader.style.display = 'none';
        },
      },
      1.02
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      data-loader="true"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[70] flex flex-col bg-[#060708] text-[#F2F6F8]"
    >
      <div
        data-loader-inner="true"
        className="flex flex-1 flex-col items-center justify-center gap-8"
      >
        <svg viewBox="0 0 64 64" className="h-20 w-20" aria-hidden="true">
          <rect
            x="2"
            y="2"
            width="60"
            height="60"
            fill="none"
            stroke="#1A212B"
            strokeWidth="1.5"
          />
          <path
            data-loader-stroke="true"
            d="M2 2 H62 V62 H2 Z"
            fill="none"
            stroke="#00F0FF"
            strokeWidth="2"
          />
          <g data-loader-fill-path="true" opacity="0">
            <path
              d="M11 47L22 17H28.5L39.5 47H33.5L31.2 40H19.8L17.5 47H11ZM21.4 34.8H29.6L25.5 22.5L21.4 34.8Z"
              fill="#F2F6F8"
            />
            <path
              d="M26.5 47L37.5 17H44L55 47H49L46.7 40H35.3L33 47H26.5ZM36.9 34.8H45.1L41 22.5L36.9 34.8Z"
              fill="#00F0FF"
            />
          </g>
        </svg>

        <div className="flex w-60 flex-col gap-3">
          <span className="relative block h-[2px] w-full bg-[#1A212B] overflow-hidden">
            <span
              data-loader-fill="true"
              className="absolute inset-0 origin-left scale-x-0 bg-[#00F0FF]"
            />
          </span>
          <span className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-widest text-[#8E9BAE]">
            <span>Alesjo Agolli</span>
            <span data-loader-count="true" className="text-[#00F0FF] tabular-nums">
              000
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

/**
 * UnyoCorp Master Scroll-Driven Journey Engine (Exact port of unyo-page.js)
 */
export const UnyoJourneyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scopeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = scopeRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
        mobile: '(max-width: 1023.98px) and (prefers-reduced-motion: no-preference)',
      },
      (context) => {
        const isDesktop = !!context.conditions?.desktop;
        const cleanups: (() => void)[] = [];
        const chapters = gsap.utils.toArray<HTMLElement>('[data-chapter]', root);

        chapters.forEach((chapter, idx) => {
          const name = chapter.dataset.chapter;
          const priority = 100 - idx;
          const track = chapter.querySelector<HTMLElement>(':scope > [data-track]');
          const sticky = track?.querySelector<HTMLElement>(':scope > [data-sticky]') || null;
          const nextChapter = chapters[idx + 1];

          // 1. ARRIVAL (Hero Section)
          if (name === 'arrival') {
            const heroLines = gsap.utils.toArray<HTMLElement>('[data-hero-line]', chapter);
            const heroSub = chapter.querySelector<HTMLElement>('[data-hero-sub]');
            const heroCtas = gsap.utils.toArray<HTMLElement>('[data-hero-cta]', chapter);
            const heroPortraits = gsap.utils.toArray<HTMLElement>('[data-hero-portrait]', chapter);
            const marksTrack = chapter.querySelector<HTMLElement>('[data-marks-track]');

            const introTl = gsap.timeline({
              paused: document.documentElement.dataset.loaded !== 'true',
              defaults: { ease: EASE.reveal },
            });

            if (heroPortraits.length) {
              introTl.fromTo(
                heroPortraits,
                { clipPath: 'inset(100% 0 0 0)' },
                { clipPath: 'inset(0% 0 0 0)', duration: 1.3, ease: EASE.inOut },
                0
              );
            }

            heroLines.forEach((line, lIdx) => {
              introTl.from(line, { yPercent: 110, duration: 1.1 }, 0.18 + 0.09 * lIdx);
            });

            if (heroSub) {
              introTl.from(heroSub, { autoAlpha: 0, y: 18, duration: 0.8 }, 0.65);
            }

            if (heroCtas.length) {
              introTl.from(
                heroCtas,
                { autoAlpha: 0, y: 14, duration: 0.7, stagger: 0.08 },
                0.75
              );
            }

            const playIntro = () => introTl.play();
            window.addEventListener('journey:ready', playIntro, { once: true });
            const fallbackTimer = window.setTimeout(playIntro, 1800);

            // Velocity-reactive marquee (exact UnyoCorp logic)
            let marqueeTween: gsap.core.Tween | null = null;
            let velTrigger: ScrollTrigger | null = null;
            if (marksTrack) {
              marqueeTween = gsap.to(marksTrack, {
                xPercent: -50,
                ease: 'none',
                duration: 24,
                repeat: -1,
              });
              velTrigger = ScrollTrigger.create({
                start: 0,
                end: 'max',
                refreshPriority: priority,
                onUpdate: (self) => {
                  if (!marqueeTween) return;
                  const boost = 1 + Math.min(6, Math.abs(self.getVelocity()) / 260);
                  marqueeTween.timeScale(Math.max(marqueeTween.timeScale(), boost));
                  gsap.to(marqueeTween, {
                    timeScale: 1,
                    duration: 1.4,
                    ease: 'power2.out',
                    overwrite: 'auto',
                  });
                },
              });
            }

            cleanups.push(() => {
              window.removeEventListener('journey:ready', playIntro);
              window.clearTimeout(fallbackTimer);
              introTl.kill();
              marqueeTween?.kill();
              velTrigger?.kill();
            });
          }

          // 2. CLAIM & METHOD (About Section — Scroll-Scrubbed Lines, Numerals & Phase Swap)
          if (name === 'claim') {
            const claimLines = gsap.utils.toArray<HTMLElement>('[data-claim-line]', chapter);
            const facts = gsap.utils.toArray<HTMLElement>('[data-fact]', chapter);
            const stats = gsap.utils.toArray<HTMLElement>('[data-stat-value]', chapter);
            const swapWords = gsap.utils.toArray<HTMLElement>('[data-swap-word]', chapter);
            const phaseCards = gsap.utils.toArray<HTMLElement>('[data-phase]', chapter);

            let counted = false;
            const triggerCount = () => {
              if (!counted) {
                counted = true;
                stats.forEach((s) => animateCount(s));
              }
            };

            if (isDesktop && track) {
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: track,
                  start: 'top top',
                  end: 'bottom 200%',
                  scrub: 0.3,
                  refreshPriority: priority,
                },
                defaults: { ease: 'none' },
              });

              if (claimLines.length) {
                tl.fromTo(
                  claimLines,
                  { yPercent: 75, opacity: 0 },
                  {
                    immediateRender: true,
                    yPercent: 0,
                    opacity: 1,
                    stagger: 0.08,
                    duration: 0.35,
                    ease: EASE.soft,
                  },
                  0
                );
              }

              if (facts.length) {
                tl.fromTo(
                  facts,
                  { y: 44, opacity: 0 },
                  {
                    immediateRender: true,
                    y: 0,
                    opacity: 1,
                    stagger: 0.05,
                    duration: 0.25,
                    ease: EASE.soft,
                  },
                  0.18
                );
              }

              tl.add(triggerCount, 0.22);

              // Scroll-scrubbed phase word swap (Design -> Engineer -> Scale -> Automate)
              const count = Math.min(swapWords.length, phaseCards.length);
              if (count >= 2) {
                gsap.set(swapWords.slice(1), { yPercent: 100, autoAlpha: 0 });
                const step = 0.65 / count;
                for (let e = 1; e < count; e++) {
                  const t = 0.3 + e * step;
                  tl.to(
                    swapWords[e - 1],
                    { yPercent: -100, autoAlpha: 0, duration: step * 0.45, ease: EASE.soft },
                    t
                  ).fromTo(
                    swapWords[e],
                    { yPercent: 100, autoAlpha: 0 },
                    {
                      immediateRender: false,
                      yPercent: 0,
                      autoAlpha: 1,
                      duration: step * 0.45,
                      ease: EASE.soft,
                    },
                    t
                  );
                }
              }

              cleanups.push(() => {
                tl.scrollTrigger?.kill();
                tl.kill();
              });
            } else {
              const st = ScrollTrigger.create({
                trigger: chapter,
                start: 'top 75%',
                once: true,
                onEnter: triggerCount,
              });
              cleanups.push(() => st.kill());
            }
          }

          // 3. WORK (Selected Projects — Exact UnyoCorp Scroll-Scrubbed Scene Wipes!)
          if (name === 'work') {
            const scenes = gsap.utils.toArray<HTMLElement>('[data-scene]', chapter);
            const sceneLinks = gsap.utils.toArray<HTMLElement>('[data-scene-link]', chapter);
            const sceneCount = chapter.querySelector<HTMLElement>('[data-scene-count]');
            const total = scenes.length;

            if (isDesktop && track && total > 1) {
              chapter.dataset.scenesLive = 'true';
              const medias = scenes.map((s) => s.querySelector<HTMLElement>('[data-scene-media]'));
              const copies = scenes.map((s) =>
                gsap.utils.toArray<HTMLElement>('[data-scene-copy] > *', s)
              );

              const setActiveScene = (idxNum: number) => {
                scenes.forEach((s, r) => s.toggleAttribute('data-current', r === idxNum));
                sceneLinks.forEach((l, r) => {
                  if (r === idxNum) l.setAttribute('aria-current', 'true');
                  else l.removeAttribute('aria-current');
                });
                if (sceneCount) {
                  sceneCount.textContent = String(idxNum + 1).padStart(2, '0');
                }
              };

              const segments = total - 1;
              const segLen = 1 / segments;

              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: track,
                  start: 'top top',
                  end: 'bottom 200%',
                  scrub: 0.3,
                  refreshPriority: priority,
                  onUpdate: (self) => {
                    const activeIdx = Math.min(total - 1, Math.round(self.progress * segments));
                    setActiveScene(activeIdx);
                  },
                },
                defaults: { ease: 'none' },
              });

              for (let e = 1; e < total; e++) {
                const startAt = (e - 1) * segLen + 0.18 * segLen;
                const dur = 0.72 * segLen;

                // Wipe Scene e up from yPercent: 100 -> 0 over Scene e-1
                tl.fromTo(
                  scenes[e],
                  { yPercent: 100 },
                  { immediateRender: true, yPercent: 0, duration: dur },
                  startAt
                );

                // Inner media counter-parallax
                if (medias[e]) {
                  tl.fromTo(
                    medias[e],
                    { yPercent: -12 },
                    { immediateRender: true, yPercent: 0, duration: dur },
                    startAt
                  );
                }
                if (medias[e - 1]) {
                  tl.to(medias[e - 1], { yPercent: -8, duration: dur }, startAt);
                }

                // Stagger copy items of incoming scene
                if (copies[e].length) {
                  tl.fromTo(
                    copies[e],
                    { y: 36, opacity: 0 },
                    {
                      immediateRender: true,
                      y: 0,
                      opacity: 1,
                      stagger: 0.03,
                      duration: 0.5 * dur,
                      ease: EASE.soft,
                    },
                    startAt + 0.42 * dur
                  );
                }
              }

              setActiveScene(0);

              cleanups.push(() => {
                tl.scrollTrigger?.kill();
                tl.kill();
                delete chapter.dataset.scenesLive;
                gsap.set([...scenes, ...medias, ...copies.flat()].filter(Boolean), {
                  clearProps: 'transform,opacity',
                });
              });
            }
          }

          // 4. STACK & RECORD (Counter-Parallax & ClipPath Reveal)
          if (name === 'stack') {
            const splitCols = gsap.utils.toArray<HTMLElement>('[data-split-col]', chapter);
            const recordCards = gsap.utils.toArray<HTMLElement>('[data-record-card]', chapter);
            const stackRows = gsap.utils.toArray<HTMLElement>('[data-stack-row]', chapter);

            if (isDesktop && track) {
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: track,
                  start: 'top top',
                  end: 'bottom 200%',
                  scrub: 0.3,
                  refreshPriority: priority,
                },
                defaults: { ease: 'none' },
              });

              splitCols.forEach((col, cIdx) => {
                const dir = cIdx % 2 === 0 ? 1 : -1;
                tl.fromTo(
                  col,
                  { yPercent: 5 * dir },
                  { immediateRender: true, yPercent: -5 * dir, duration: 0.8 },
                  0
                );
              });

              if (stackRows.length) {
                tl.fromTo(
                  stackRows,
                  { opacity: 0, x: -20 },
                  {
                    immediateRender: true,
                    opacity: 1,
                    x: 0,
                    stagger: 0.04,
                    duration: 0.25,
                    ease: EASE.soft,
                  },
                  0.05
                );
              }

              if (recordCards.length) {
                tl.fromTo(
                  recordCards,
                  { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
                  {
                    immediateRender: true,
                    clipPath: 'inset(0 0% 0 0)',
                    opacity: 1,
                    stagger: 0.12,
                    duration: 0.38,
                    ease: EASE.inOut,
                  },
                  0.15
                );
              }

              cleanups.push(() => {
                tl.scrollTrigger?.kill();
                tl.kill();
              });
            }
          }

          // 5. MASTER SHEET CURTAIN SCALE & SCRIM (Exact UnyoCorp [data-sticky] transition)
          if (isDesktop && track && sticky && nextChapter) {
            const nextTrigger =
              nextChapter.querySelector<HTMLElement>(':scope > [data-track]') || nextChapter;
            const scrim = sticky.querySelector<HTMLElement>(':scope > [data-sticky-scrim]');

            const curtainTl = gsap.timeline({
              defaults: { ease: 'none' },
              scrollTrigger: {
                trigger: nextTrigger,
                start: 'top bottom',
                end: 'top top',
                scrub: true,
                refreshPriority: priority,
                onToggle: (self) => {
                  sticky.style.willChange = self.isActive ? 'transform' : '';
                },
              },
            });

            curtainTl.to(sticky, { scale: 0.96 }, 0);
            if (scrim) {
              curtainTl.to(scrim, { opacity: 0.42 }, 0);
            }

            cleanups.push(() => {
              curtainTl.scrollTrigger?.kill();
              curtainTl.kill();
              gsap.set(sticky, { clearProps: 'transform,willChange' });
              if (scrim) gsap.set(scrim, { clearProps: 'opacity' });
            });
          }
        });

        // Batch reveal any [data-reveal] elements (mobile & non-scrubbed sections)
        const revealEls = gsap.utils.toArray<HTMLElement>('[data-reveal]', root);
        cleanups.push(batchReveal(revealEls));

        return () => {
          cleanups.forEach((fn) => fn());
        };
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <div ref={scopeRef} data-journey="true">
      {children}
    </div>
  );
};
