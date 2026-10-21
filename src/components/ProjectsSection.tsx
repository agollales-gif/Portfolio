import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Globe,
  Sparkles,
  Pause,
  Play,
} from 'lucide-react';

interface ProjectItem {
  index: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  liveUrl: string;
  domain: string;
  tags: string[];
  accent: string;
  previewImage: string;
}

const projects: ProjectItem[] = [
  {
    index: '01',
    title: 'DON BOSKO TIRANA',
    category: 'DIGITAL ECOSYSTEM',
    year: '2025',
    summary: 'Official portal & multilingual digital hub for Don Bosko Center.',
    liveUrl: 'https://www.qendradonbosko.com/',
    domain: 'qendradonbosko.com',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'AI'],
    accent: '#00F0FF',
    previewImage:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=85',
  },
  {
    index: '02',
    title: 'LUKA RENT A CAR',
    category: 'FLEET & BOOKING',
    year: '2024',
    summary: 'Real-time vehicle reservation engine & mobile-first booking flow.',
    liveUrl: 'https://lukarentacar.com',
    domain: 'lukarentacar.com',
    tags: ['Full-Stack', 'Booking Engine', 'SEO'],
    accent: '#00F0FF',
    previewImage:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85',
  },
  {
    index: '03',
    title: 'HANEUL PLATFORM',
    category: 'B2B E-COMMERCE',
    year: '2025',
    summary: 'High-speed B2B Asian food distribution & product catalog.',
    liveUrl: 'https://haneul.blackbear-solutions.com/',
    domain: 'haneul.blackbear-solutions.com',
    tags: ['Next.js', 'TypeScript', 'B2B Catalog'],
    accent: '#38BDF8',
    previewImage:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85',
  },
];

const stackItems = [
  'REACT 19',
  'NEXT.JS',
  'TYPESCRIPT',
  'TAILWIND CSS',
  'NODE.JS',
  'PYTHON',
  'AI / LLM WORKFLOWS',
  'SQL & PRISMA',
  'GSAP MOTION',
  'FIGMA UI/UX',
];

export const ProjectsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const warpBoostRef = useRef(0);
  const touchStartX = useRef<number | null>(null);

  const triggerWarp = useCallback(() => {
    warpBoostRef.current = 18;
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      const normalized = (index + projects.length) % projects.length;
      setActiveIndex(normalized);
      triggerWarp();
    },
    [triggerWarp]
  );

  const nextSlide = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  // Auto-slideshow timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
      warpBoostRef.current = 16;
    }, 5200);
    return () => window.clearInterval(timer);
  }, [isAutoPlaying]);

  // Keyboard Left/Right navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [nextSlide, prevSlide]);

  // 3D Galaxy Starfield & Warp Canvas Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    // Trigger subtle warp on scroll
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const dy = Math.abs(window.scrollY - lastScrollY);
      lastScrollY = window.scrollY;
      warpBoostRef.current = Math.min(22, warpBoostRef.current + dy * 0.12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const STAR_COUNT = 260;
    const colors = ['#00F0FF', '#F4F5F7', '#38BDF8', '#7DD3FC'];
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: (Math.random() - 0.5) * 1800,
      y: (Math.random() - 0.5) * 1200,
      z: Math.random() * 1400 + 50,
      pz: 0,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 1.8 + 0.6,
    }));
    stars.forEach((s) => (s.pz = s.z));

    let angle = 0;

    const render = () => {
      ctx.fillStyle = 'rgba(6, 7, 8, 0.32)';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Radial galaxy nebula glow
      const grad = ctx.createRadialGradient(cx, cy, 20, cx, cy, Math.max(width, height) * 0.55);
      grad.addColorStop(0, 'rgba(0, 240, 255, 0.08)');
      grad.addColorStop(0.45, 'rgba(56, 189, 248, 0.03)');
      grad.addColorStop(1, 'rgba(6, 7, 8, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      const speed = 2.4 + warpBoostRef.current;
      warpBoostRef.current *= 0.92;
      angle += 0.0018;

      const cosA = Math.cos(angle * 0.15);
      const sinA = Math.sin(angle * 0.15);

      for (let i = 0; i < STAR_COUNT; i++) {
        const s = stars[i];
        s.pz = s.z;
        s.z -= speed;

        if (s.z <= 20) {
          s.x = (Math.random() - 0.5) * 1800;
          s.y = (Math.random() - 0.5) * 1200;
          s.z = 1400;
          s.pz = 1400;
        }

        // Subtle galaxy swirl rotation
        const rx = s.x * cosA - s.y * sinA;
        const ry = s.x * sinA + s.y * cosA;

        const sx = cx + (rx / s.z) * 420;
        const sy = cy + (ry / s.z) * 420;
        const px = cx + (rx / (s.pz + speed * 1.6)) * 420;
        const py = cy + (ry / (s.pz + speed * 1.6)) * 420;

        const alpha = Math.min(1, (1400 - s.z) / 900);
        const radius = Math.max(0.5, (1 - s.z / 1400) * 2.5 * s.size);

        ctx.beginPath();
        ctx.strokeStyle = s.color;
        ctx.globalAlpha = alpha * 0.85;
        ctx.lineWidth = radius;
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = s.color;
        ctx.globalAlpha = alpha;
        ctx.arc(sx, sy, radius * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Compute relative 3D orbital offset (-1 = left orbit, 0 = center active, +1 = right orbit)
  const getRelativeOffset = (idx: number) => {
    const diff = idx - activeIndex;
    if (diff === 0) return 0;
    if (diff === 1 || diff === -(projects.length - 1)) return 1;
    return -1;
  };

  return (
    <section
      id="projects"
      data-chapter="work"
      className="relative min-h-screen flex flex-col justify-between bg-[#060708] border-t border-white/[0.12] overflow-hidden select-none"
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (dx < -45) nextSlide();
        if (dx > 45) prevSlide();
        touchStartX.current = null;
      }}
    >
      {/* 1. Interactive 3D Galaxy Starfield & Warp Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Orbital Rings SVG Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-35">
        <div className="w-[760px] h-[760px] sm:w-[1050px] sm:h-[1050px] rounded-full border border-[#00F0FF]/20 animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[520px] h-[520px] sm:w-[760px] sm:h-[760px] rounded-full border border-dashed border-white/15 animate-[spin_45s_linear_infinite_reverse]" />
      </div>

      {/* 2. Top Bar: Clean Selected Works + Orbital Controls */}
      <div
        data-galaxy-header=""
        className="relative z-20 max-w-[1600px] w-full mx-auto px-5 sm:px-10 lg:px-14 py-5 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-[#00F0FF]" />
          <span className="font-display font-extrabold text-sm sm:text-base tracking-[0.14em] uppercase text-[#F4F5F7]">
            SELECTED WORKS
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] tracking-[0.2em] uppercase text-[#00F0FF] px-2.5 py-0.5 bg-[#00F0FF]/10 border border-[#00F0FF]/30">
            GALAXY SHOWCASE
          </span>
        </div>

        {/* Project Selector Pills */}
        <div className="flex items-center gap-2">
          {projects.map((p, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={p.index}
                onClick={() => goToSlide(idx)}
                className={`px-3 sm:px-4 py-1.5 font-mono text-[10px] tracking-[0.16em] uppercase border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#00F0FF] text-[#060708] border-[#00F0FF] font-bold shadow-[0_0_20px_rgba(0,240,255,0.45)]'
                    : 'bg-[#0D0F12]/80 text-[#8E95A2] border-white/[0.12] hover:border-[#00F0FF]/50 hover:text-[#F4F5F7]'
                }`}
              >
                {p.index} <span className="hidden md:inline">{p.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Prev / Play-Pause / Next Orbital Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous Project"
            className="w-9 h-9 bg-[#0D0F12]/90 border border-white/[0.15] hover:border-[#00F0FF] text-[#F4F5F7] hover:text-[#00F0FF] flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsAutoPlaying((p) => !p)}
            aria-label="Toggle Autoplay"
            className="w-9 h-9 bg-[#0D0F12]/90 border border-white/[0.15] hover:border-[#00F0FF] text-[#00F0FF] flex items-center justify-center transition-colors cursor-pointer"
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Project"
            className="w-9 h-9 bg-[#0D0F12]/90 border border-white/[0.15] hover:border-[#00F0FF] text-[#F4F5F7] hover:text-[#00F0FF] flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3. Center 3D Galaxy Orbital Carousel Stage */}
      <div
        data-galaxy-stage=""
        className="relative z-10 flex-1 flex items-center justify-center max-w-[1600px] w-full mx-auto px-5 sm:px-10 lg:px-14 py-8 sm:py-12 galaxy-perspective"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="relative w-full max-w-[1040px] min-h-[470px] sm:min-h-[500px] flex items-center justify-center">
          {projects.map((project, idx) => {
            const offset = getRelativeOffset(idx);
            const isCenter = offset === 0;

            // 3D Orbital Transform depending on position (-1 left, 0 center, +1 right)
            const transformStyle: React.CSSProperties = isCenter
              ? {
                  transform: 'translate3d(0%, 0px, 0px) rotateY(0deg) scale(1)',
                  opacity: 1,
                  zIndex: 30,
                }
              : offset === -1
              ? {
                  transform: 'translate3d(-52%, 0px, -280px) rotateY(30deg) scale(0.76)',
                  opacity: 0.38,
                  zIndex: 10,
                }
              : {
                  transform: 'translate3d(52%, 0px, -280px) rotateY(-30deg) scale(0.76)',
                  opacity: 0.38,
                  zIndex: 10,
                };

            return (
              <article
                key={project.index}
                onClick={() => {
                  if (!isCenter) goToSlide(idx);
                }}
                style={{
                  ...transformStyle,
                  transition: 'all 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className={`w-full bg-[#0A0D12]/95 backdrop-blur-xl border ${
                  isCenter
                    ? 'border-[#00F0FF]/60 shadow-[0_0_70px_rgba(0,240,255,0.16)] cursor-default'
                    : 'border-white/[0.12] hover:opacity-65 cursor-pointer hidden sm:block'
                } ${!isCenter ? 'absolute inset-0' : 'relative'} p-6 sm:p-8 lg:p-10 overflow-hidden`}
              >
                {/* Top Glowing Orbital Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500 ${
                    isCenter
                      ? 'bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-100'
                      : 'opacity-0'
                  }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-9 items-center">
                  {/* Left 5 Columns: Minimal Project Identity */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="font-display font-extrabold text-4xl sm:text-5xl text-[#00F0FF] leading-none">
                          {project.index}
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 bg-[#13161B] text-[#F4F5F7] border border-white/[0.12]">
                          {project.category} · {project.year}
                        </span>
                      </div>

                      <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-[#F4F5F7] tracking-[-0.03em] leading-[0.95] uppercase">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#8E95A2] leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.14em] bg-[#13161B] text-[#00F0FF] border border-[#00F0FF]/25"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#00F0FF] text-[#060708] font-mono text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#F4F5F7] transition-colors shadow-[0_0_24px_rgba(0,240,255,0.35)]"
                        >
                          <span>LIVE SITE</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                        <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] text-[#8E95A2]">
                          <Globe className="w-3.5 h-3.5 text-[#00F0FF]" />
                          {project.domain}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right 7 Columns: Visual Showcase Frame */}
                  <div className="lg:col-span-7">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group relative block w-full aspect-[16/9.5] bg-[#060708] border border-white/[0.15] overflow-hidden"
                    >
                      {/* Browser Chrome Header */}
                      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3.5 py-2 bg-[#060708]/90 backdrop-blur-md border-b border-white/[0.08]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                          <span className="w-2 h-2 rounded-full bg-white/20" />
                          <span className="w-2 h-2 rounded-full bg-[#00F0FF]" />
                        </div>
                        <span className="font-mono text-[10px] tracking-[0.14em] text-[#8E95A2]">
                          {project.domain}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#00F0FF]">
                          OPEN ↗
                        </span>
                      </div>

                      <img
                        src={project.previewImage}
                        alt={project.title}
                        className="w-full h-full object-cover object-center brightness-[0.86] contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060708] via-transparent to-transparent" />

                      <div className="absolute bottom-3 left-4 right-4 z-20 flex items-end justify-between">
                        <span className="font-display font-extrabold text-lg sm:text-xl text-[#F4F5F7] tracking-tight uppercase">
                          {project.title}
                        </span>
                        <span className="w-9 h-9 bg-[#00F0FF] text-[#060708] flex items-center justify-center group-hover:bg-[#F4F5F7] transition-colors">
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* 4. Bottom Velocity-Reactive Stack Ticker */}
      <div className="relative z-20 w-full border-t border-white/[0.08] py-3.5 bg-[#060708]/90 backdrop-blur-md overflow-hidden">
        <div data-marquee-track="" className="flex w-max will-change-transform">
          {[...stackItems, ...stackItems, ...stackItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 px-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              <span className="font-display font-bold text-xs tracking-[0.18em] uppercase text-[#8E95A2] whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
