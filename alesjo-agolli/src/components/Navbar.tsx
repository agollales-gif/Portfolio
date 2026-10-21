import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCV }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState<'#home' | '#main' | '#closed'>('#home');

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      setScrolled(y > 24);
      if (y < vh * 1.4) {
        setActivePage('#home');
      } else if (y < vh * 4.5) {
        setActivePage('#main');
      } else {
        setActivePage('#closed');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: Array<{ index: string; label: string; href: '#home' | '#main' | '#closed' }> = [
    { index: '01', label: 'HOME', href: '#home' },
    { index: '02', label: 'MAIN', href: '#main' },
    { index: '03', label: 'CLOSED', href: '#closed' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector<HTMLElement>(href);
    if (target) {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060708]/90 backdrop-blur-md border-b border-white/[0.08]'
          : 'bg-transparent border-b border-white/[0.06]'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 h-[72px] flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3.5 group"
        >
          <div className="w-8 h-8 bg-[#0D0F12] border border-white/[0.15] flex items-center justify-center group-hover:border-[#00F0FF] transition-colors duration-300">
            <svg viewBox="0 0 64 64" className="w-5 h-5">
              <path
                d="M11 48 L22 16 L33 48 M15 38 H29"
                fill="none"
                stroke="#F4F5F7"
                strokeWidth="4.5"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
              <path
                d="M31 48 L42 16 L53 48 M35 38 H49"
                fill="none"
                stroke="#00F0FF"
                strokeWidth="4.5"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-display font-extrabold text-sm tracking-[-0.02em] text-[#F4F5F7] uppercase">
              ALESJO AGOLLI
            </span>
            <span className="hidden sm:inline-block text-white/20">/</span>
            <span className="hidden sm:inline-block font-mono text-[10px] text-[#8E95A2] tracking-[0.2em] uppercase">
              PORTFOLIO
            </span>
          </div>
        </a>

        {/* 3-Page Navigation (01 HOME · 02 MAIN · 03 CLOSED) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activePage === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`group flex items-baseline gap-1.5 text-xs font-medium transition-colors tracking-[0.14em] uppercase ${
                  isActive ? 'text-[#00F0FF]' : 'text-[#8E95A2] hover:text-[#F4F5F7]'
                }`}
              >
                <span
                  className={`font-mono text-[10px] transition-colors ${
                    isActive ? 'text-[#00F0FF]' : 'text-[#525866] group-hover:text-[#00F0FF]'
                  }`}
                >
                  {link.index}
                </span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+355676770825"
            className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 text-[11px] font-mono tracking-[0.1em] text-[#8E95A2] hover:text-[#00F0FF] border border-white/[0.1] hover:border-[#00F0FF]/40 transition-colors"
          >
            <Phone className="w-3 h-3 text-[#00F0FF]" />
            +355 67 677 0825
          </a>

          <button
            onClick={onOpenCV}
            className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.16em] text-[#F4F5F7] border border-white/[0.12] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#00F0FF]" />
            CV
          </button>

          <a
            href="#closed"
            onClick={(e) => handleNavClick(e, '#closed')}
            className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-mono font-semibold uppercase tracking-[0.16em] bg-[#F4F5F7] text-[#060708] hover:bg-[#00F0FF] transition-colors"
          >
            CONTACT
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#8E95A2] hover:text-[#F4F5F7] border border-white/[0.1]"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#060708] border-b border-white/[0.12] px-5 pt-4 pb-6 space-y-4">
          <div className="flex flex-col divide-y divide-white/[0.06]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between py-3.5 text-sm font-display font-bold uppercase tracking-wider text-[#F4F5F7] hover:text-[#00F0FF]"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-[#00F0FF]">{link.index}</span>
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="tel:+355676770825"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono tracking-[0.14em] text-[#00F0FF] border border-[#00F0FF]/40"
            >
              <Phone className="w-3.5 h-3.5" />
              +355 67 677 0825
            </a>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono uppercase tracking-[0.14em] text-[#F4F5F7] border border-white/[0.15]"
              >
                <FileText className="w-3.5 h-3.5 text-[#00F0FF]" />
                CV
              </button>
              <a
                href="#closed"
                onClick={(e) => handleNavClick(e, '#closed')}
                className="flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono font-semibold uppercase tracking-[0.14em] bg-[#00F0FF] text-[#060708]"
              >
                CONTACT
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
