import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenCvModal: () => void;
}

const CHAPTERS = [
  { id: 'top', num: '01', label: 'Hero', navLabel: null },
  { id: 'about', num: '02', label: 'About', navLabel: 'About' },
  { id: 'projects', num: '03', label: 'Work', navLabel: 'Work' },
  { id: 'skills', num: '04', label: 'Stack & Record', navLabel: 'Stack' },
  { id: 'contact', num: '05', label: 'Contact', navLabel: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(CHAPTERS[0]);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      setScrollProgress(progress);

      const viewportMid = scrollTop + window.innerHeight * 0.35;
      let current = CHAPTERS[0];
      for (const ch of CHAPTERS) {
        const el = document.getElementById(ch.id);
        if (el && el.offsetTop <= viewportMid) {
          current = ch;
        }
      }
      setActiveChapter(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top 3px Electric Cyan Scroll Progress Bar */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none"
      >
        <div
          className="h-full bg-[#00F0FF] shadow-[0_0_14px_#00F0FF] origin-left transition-transform duration-75"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      {/* Floating Island Header */}
      <header className="fixed top-3 md:top-4 inset-x-0 z-40 px-3 md:px-6 pointer-events-none">
        <div className="max-w-[100rem] mx-auto flex items-center justify-between gap-2">
          {/* Left Island */}
          <a
            href="#top"
            aria-label="Alesjo Agolli — home"
            className="island pointer-events-auto h-11 px-4 inline-flex items-center gap-3 text-[#F2F6F8] hover:border-[#00F0FF]/60 transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <rect width="64" height="64" fill="#060708" />
              <rect x="2" y="2" width="60" height="60" stroke="#00F0FF" strokeWidth="3" strokeOpacity="0.45" />
              <path
                d="M11 47L22 17H28.5L39.5 47H33.5L31.2 40H19.8L17.5 47H11ZM21.4 34.8H29.6L25.5 22.5L21.4 34.8Z"
                fill="#F2F6F8"
              />
              <path
                d="M26.5 47L37.5 17H44L55 47H49L46.7 40H35.3L33 47H26.5ZM36.9 34.8H45.1L41 22.5L36.9 34.8Z"
                fill="#00F0FF"
              />
            </svg>
            <span className="font-display font-semibold tracking-tight text-sm md:text-base">
              Alesjo Agolli
            </span>
          </a>

          {/* Right Island */}
          <div className="island pointer-events-auto h-11 pl-4 pr-1.5 inline-flex items-center gap-4">
            <nav aria-label="Primary" className="hidden md:flex items-center gap-5">
              {CHAPTERS.filter((c) => c.navLabel).map((item) => {
                const isActive = activeChapter.id === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-[11px] font-mono uppercase tracking-[0.14em] transition-colors ${
                      isActive ? 'text-[#00F0FF]' : 'text-[#94A3B4] hover:text-[#F2F6F8]'
                    }`}
                  >
                    {item.navLabel}
                  </a>
                );
              })}
            </nav>

            <span className="hidden lg:inline-block h-3.5 w-px bg-[#1B222C]" aria-hidden="true" />

            <button
              onClick={onOpenCvModal}
              className="hidden sm:inline-flex items-center gap-1.5 h-8 px-2.5 border border-[#1B222C] hover:border-[#00F0FF] text-[10px] font-mono uppercase tracking-[0.14em] text-[#F2F6F8] hover:text-[#00F0FF] transition-colors"
            >
              <FileText className="w-3 h-3 text-[#00F0FF]" />
              <span>CV</span>
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex btn btn-primary !py-1.5 !px-3 !text-[10px] h-8"
            >
              <span>Contact</span>
              <ArrowRight className="w-3 h-3 btn-icon" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open menu"
              className="md:hidden h-8 w-8 inline-flex items-center justify-center text-[#F2F6F8] hover:text-[#00F0FF]"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pointer-events-auto mt-2 max-w-[100rem] mx-auto island p-5">
            <div className="flex flex-col gap-2">
              {CHAPTERS.filter((c) => c.navLabel).map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-xl py-1.5 border-b border-[#1B222C] flex items-center justify-between text-[#F2F6F8] hover:text-[#00F0FF]"
                >
                  <span>{item.navLabel}</span>
                  <span className="eyebrow-accent">{item.num}</span>
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenCvModal();
                }}
                className="font-display text-xl py-1.5 text-left text-[#00F0FF]"
              >
                Download CV
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
