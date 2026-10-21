import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  threshold?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  direction = 'up',
  threshold = 0.12,
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
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const hiddenTransform =
    direction === 'up'
      ? 'translate-y-8 opacity-0 blur-[2px]'
      : direction === 'left'
      ? '-translate-x-8 opacity-0 blur-[2px]'
      : direction === 'right'
      ? 'translate-x-8 opacity-0 blur-[2px]'
      : 'scale-[0.95] opacity-0 blur-[2px]';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
        visible ? 'translate-y-0 translate-x-0 scale-100 opacity-100 blur-0' : hiddenTransform
      } ${className}`}
    >
      {children}
    </div>
  );
};

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden group ${className}`}
    >
      {/* Dynamic Electric Cyan Mouse-Tracking Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgba(0, 240, 255, 0.13), transparent 65%)`,
        }}
      />

      {/* Animated Top Laser Border Sweep on Hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent group-hover:w-full transition-all duration-700 ease-out z-20"
      />

      {/* Animated Corner Brackets */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#00F0FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#00F0FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
      />

      <div className="relative z-10 h-full flex flex-col justify-between">{children}</div>
    </div>
  );
};
