import React from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  Github,
  Linkedin,
  FileText,
  ArrowUpRight,
  ArrowUp,
} from 'lucide-react';

interface ContactFooterProps {
  onOpenCV: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenCV }) => {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="closed"
      data-chapter="close"
      data-sheet=""
      className="relative z-20 min-h-screen flex flex-col justify-between pt-[72px] bg-[#060708] border-t border-white/[0.14] overflow-hidden shadow-[0_-32px_80px_rgba(0,0,0,0.9)]"
    >
      {/* Top Status Bar */}
      <div className="w-full border-b border-white/[0.08]">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 py-3.5 flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.2em] uppercase text-[#8E95A2]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[#00F0FF]" />
            <span className="text-[#F4F5F7] font-semibold">03 / CLOSED</span>
          </div>
          <div className="hidden sm:block">TIRANA, ALBANIA · UTC+1</div>
          <div className="flex items-center gap-2 text-[#00F0FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            <span>OPEN FOR PROJECTS</span>
          </div>
        </div>
      </div>

      {/* Main Closing Content */}
      <div className="max-w-[1600px] w-full mx-auto px-5 sm:px-10 lg:px-14 py-10 lg:py-14 my-auto space-y-10">
        {/* Giant Closing Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2 className="font-display font-extrabold text-[clamp(2.75rem,7.2vw,6.75rem)] text-[#F4F5F7] tracking-[-0.045em] leading-[0.88] uppercase">
            <span className="block overflow-hidden pb-1">
              <span data-close-line="" className="block">
                LET&apos;S BUILD
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span data-close-line="" className="block text-[#00F0FF]">
                TOGETHER<span className="text-[#F4F5F7]">.</span>
              </span>
            </span>
          </h2>

          <button
            onClick={onOpenCV}
            className="self-start lg:self-end inline-flex items-center gap-3 px-6 py-4 bg-[#F4F5F7] text-[#060708] font-mono text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#00F0FF] transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>OPEN EXECUTIVE CV</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Clean Architectural Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.1] border border-white/[0.1]">
          {/* 1. Direct Phone */}
          <a
            data-close-card=""
            href="tel:+355676770825"
            className="group bg-[#0A0C0F] hover:bg-[#10141A] p-6 sm:p-7 flex flex-col justify-between gap-6 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#00F0FF]">
                01 / PHONE
              </span>
              <Phone className="w-4 h-4 text-[#8E95A2] group-hover:text-[#00F0FF] transition-colors" />
            </div>
            <div>
              <div className="font-display font-extrabold text-xl sm:text-2xl text-[#F4F5F7] group-hover:text-[#00F0FF] transition-colors">
                +355 67 677 0825
              </div>
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#8E95A2] mt-1">
                DIRECT CALL
              </div>
            </div>
          </a>

          {/* 2. WhatsApp Direct */}
          <a
            data-close-card=""
            href="https://wa.me/355676770825"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0A0C0F] hover:bg-[#10141A] p-6 sm:p-7 flex flex-col justify-between gap-6 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#00F0FF]">
                02 / WHATSAPP
              </span>
              <MessageCircle className="w-4 h-4 text-[#8E95A2] group-hover:text-[#00F0FF] transition-colors" />
            </div>
            <div>
              <div className="font-display font-extrabold text-xl sm:text-2xl text-[#F4F5F7] group-hover:text-[#00F0FF] transition-colors">
                +355 67 677 0825
              </div>
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#8E95A2] mt-1">
                MESSAGE ON WHATSAPP ↗
              </div>
            </div>
          </a>

          {/* 3. Email */}
          <a
            data-close-card=""
            href="mailto:agollales@gmail.com"
            className="group bg-[#0A0C0F] hover:bg-[#10141A] p-6 sm:p-7 flex flex-col justify-between gap-6 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#00F0FF]">
                03 / EMAIL
              </span>
              <Mail className="w-4 h-4 text-[#8E95A2] group-hover:text-[#00F0FF] transition-colors" />
            </div>
            <div>
              <div className="font-display font-extrabold text-lg sm:text-xl text-[#F4F5F7] group-hover:text-[#00F0FF] transition-colors break-all">
                agollales@gmail.com
              </div>
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#8E95A2] mt-1">
                SEND INQUIRY ↗
              </div>
            </div>
          </a>

          {/* 4. GitHub & LinkedIn */}
          <div
            data-close-card=""
            className="bg-[#0A0C0F] p-6 sm:p-7 flex flex-col justify-between gap-6"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#00F0FF]">
                04 / SOCIALS
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#8E95A2]" />
            </div>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://github.com/agollales-gif"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between font-display font-bold text-sm uppercase tracking-wider text-[#F4F5F7] hover:text-[#00F0FF] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-[#00F0FF]" />
                  GITHUB
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/alesjo-agolli-a82223361/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between font-display font-bold text-sm uppercase tracking-wider text-[#F4F5F7] hover:text-[#00F0FF] transition-colors pt-2 border-t border-white/[0.08]"
              >
                <span className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-[#00F0FF]" />
                  LINKEDIN
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Colophon */}
      <div className="w-full border-t border-white/[0.08] bg-[#040506]">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 py-4 flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.18em] uppercase text-[#8E95A2]">
          <span>© {new Date().getFullYear()} ALESJO AGOLLI</span>
          <span className="hidden sm:inline">01 HOME · 02 MAIN · 03 CLOSED</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-[#00F0FF] hover:text-[#F4F5F7] transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
