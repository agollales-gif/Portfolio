import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  threshold?: number;
}

/**
 * UnyoCorp --ease-out-expo (cubic-bezier(0.16, 1, 0.3, 1)) Scroll Reveal
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  direction = 'up',
  threshold = 0.14,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -36px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const hiddenTransform =
    direction === 'up'
      ? 'translate-y-7 opacity-0'
      : direction === 'left'
      ? '-translate-x-6 opacity-0'
      : direction === 'right'
      ? 'translate-x-6 opacity-0'
      : 'scale-[0.97] opacity-0';

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delayMs}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all duration-[820ms] will-change-transform ${
        visible ? 'translate-y-0 translate-x-0 scale-100 opacity-100' : hiddenTransform
      } ${className}`}
    >
      {children}
    </div>
  );
};

/**
 * UnyoCorp .claim-line-mask Line-by-Line Editorial Text Reveal
 */
interface MaskedLinesProps {
  lines: {
    text: React.ReactNode;
    accent?: boolean;
  }[];
  className?: string;
  baseDelayMs?: number;
  staggerMs?: number;
}

export const MaskedLines: React.FC<MaskedLinesProps> = ({
  lines,
  className = '',
  baseDelayMs = 60,
  staggerMs = 110,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="claim-line-mask">
          <span
            style={{
              transitionDelay: `${baseDelayMs + i * staggerMs}ms`,
            }}
            className={`claim-line-inner ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-[108%] opacity-0'
            } ${line.accent ? 'text-[#00F0FF]' : ''}`}
          >
            {line.text}
          </span>
        </span>
      ))}
    </div>
  );
};

/**
 * UnyoCorp [data-stat-value] Tabular Numeral Counter
 */
interface AnimatedNumeralProps {
  value: string;
  className?: string;
}

export const AnimatedNumeral: React.FC<AnimatedNumeralProps> = ({ value, className = '' }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [displayVal, setDisplayVal] = useState<string>(value);
  const [started, setStarted] = useState(false);

  const numericMatch = value.match(/^(\d+)(.*)$/);
  const targetNum = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = numericMatch ? numericMatch[2] : '';
  const padLen = numericMatch && numericMatch[1].startsWith('0') ? numericMatch[1].length : 0;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || !numericMatch) return;

    const duration = 1100;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(eased * targetNum);
      const formatted =
        padLen > 0 ? String(current).padStart(padLen, '0') + suffix : String(current) + suffix;
      setDisplayVal(formatted);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [started, targetNum, padLen, suffix]);

  return (
    <span ref={ref} className={`numeral ${className}`}>
      {displayVal}
    </span>
  );
};

/**
 * UnyoCorp [data-loader] Initial Architectural Curtain
 */
export const PageLoader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [lifted, setLifted] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 560;

    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => setLifted(true), 80);
        setTimeout(() => setHidden(true), 820);
      }
    };

    requestAnimationFrame(step);
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
      }}
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-[#060708] p-6 md:p-10 text-[#F2F6F8] transition-transform duration-[700ms] pointer-events-none ${
        lifted ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex items-center justify-between text-xs font-mono tracking-widest uppercase text-[#8E9BAE]">
        <span>Alesjo Agolli</span>
        <span className="text-[#00F0FF]">Tirana, AL</span>
      </div>

      <div className="my-auto">
        <p className="font-display text-display-lg font-semibold tracking-tight">
          Alesjo Agolli<span className="text-[#00F0FF]">.</span>
        </p>
      </div>

      <div>
        <div className="flex items-baseline justify-between font-mono text-xs text-[#8E9BAE] mb-2">
          <span>LOADING PORTFOLIO</span>
          <span className="text-[#00F0FF] tabular-nums">
            {String(progress).padStart(3, '0')}%
          </span>
        </div>
        <div className="h-[2px] w-full bg-[#1A212B] overflow-hidden">
          <div
            className="h-full bg-[#00F0FF] origin-left transition-transform duration-75"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>
      </div>
    </div>
  );
};
