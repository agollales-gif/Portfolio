import React, { useState, useEffect } from 'react';
import { ArrowRight, Copy, Check, FileText } from 'lucide-react';
import { DEFAULT_BRAND_TOKENS, PROFILE_DATA } from '../data/portfolioData';
import { Reveal, MaskedLines } from './Reveal';

interface ContactFooterProps {
  onOpenCvModal: () => void;
}

const FOCUS_OPTIONS = ['Web Platform', 'Full-Stack App', 'Local AI / Ollama', 'Role / Inquiry'];

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenCvModal }) => {
  const [selectedFocus, setSelectedFocus] = useState<string>(FOCUS_OPTIONS[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brief, setBrief] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [tiranaTime, setTiranaTime] = useState<string>('--:--');

  useEffect(() => {
    const updateClock = () => {
      try {
        const fmt = new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Europe/Tirane',
        });
        setTiranaTime(fmt.format(new Date()));
      } catch {
        setTiranaTime('CET');
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 15000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEFAULT_BRAND_TOKENS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${DEFAULT_BRAND_TOKENS.email}?subject=${encodeURIComponent(
      `[${selectedFocus}] Inquiry from ${name}`
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${brief}`)}`;
  };

  return (
    <>
      {/* UnyoCorp #start Contact Section */}
      <section
        id="contact"
        className="py-14 sm:py-18 md:py-24 border-b border-[#1A212B] bg-[#060708]"
      >
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left 5 Columns */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="eyebrow mb-2 flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 bg-[#00F0FF]" />
                  <span>06 / Contact</span>
                </div>
              </Reveal>
              <h2 className="font-display text-display-md text-[#F2F6F8]">
                <MaskedLines
                  lines={[{ text: "Let's build" }, { text: 'together.', accent: true }]}
                />
              </h2>
              <Reveal delayMs={140}>
                <p className="mt-3 text-sm text-[#8E9BAE] max-w-md leading-relaxed">
                  Available for full-stack web development, UI/UX engineering, and local AI
                  integrations.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn btn-ghost !py-2.5 !px-3.5 !text-xs"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#00F0FF]" />
                        <span>Copied Email</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#00F0FF]" />
                        <span>{DEFAULT_BRAND_TOKENS.email}</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={onOpenCvModal}
                    className="btn btn-ghost !py-2.5 !px-3.5 !text-xs"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#00F0FF]" />
                    <span>Executive CV</span>
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Right 7 Columns: UnyoCorp Tag-Qualifier Form */}
            <Reveal delayMs={160} className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="bg-[#0C0F14] border border-[#1A212B] p-6 sm:p-8 space-y-5"
              >
                <div className="flex flex-wrap gap-1.5">
                  {FOCUS_OPTIONS.map((opt) => {
                    const active = selectedFocus === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedFocus(opt)}
                        className={`tag ${
                          active
                            ? '!bg-[#00F0FF] !text-[#060708] !border-[#00F0FF]'
                            : ''
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-[#1A212B] focus:border-[#00F0FF] outline-none py-2.5 text-sm text-[#F2F6F8] placeholder:text-[#525E6F] transition-colors"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-[#1A212B] focus:border-[#00F0FF] outline-none py-2.5 text-sm text-[#F2F6F8] placeholder:text-[#525E6F] transition-colors"
                  />
                </div>

                <input
                  type="text"
                  required
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  placeholder="Short project or role summary..."
                  className="w-full bg-transparent border-b border-[#1A212B] focus:border-[#00F0FF] outline-none py-2.5 text-sm text-[#F2F6F8] placeholder:text-[#525E6F] transition-colors"
                />

                <div className="flex items-center justify-end pt-1">
                  <button
                    type="submit"
                    className="btn btn-primary w-full sm:w-auto"
                  >
                    <span>Send Brief</span>
                    <ArrowRight className="w-4 h-4 btn-icon" />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ultra-Minimal Responsive Single-Bar Footer */}
      <footer className="bg-[#060708] py-4 sm:py-5">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-[#8E9BAE]">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 bg-[#00F0FF]" />
            <span className="text-[#F2F6F8] font-display font-semibold">Alesjo Agolli</span>
            <span>· {PROFILE_DATA.location}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <a
              href={`https://github.com/${DEFAULT_BRAND_TOKENS.githubUser}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00F0FF] transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={`https://www.linkedin.com/in/${DEFAULT_BRAND_TOKENS.linkedinUser}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00F0FF] transition-colors"
            >
              LinkedIn ↗
            </a>
            <button
              type="button"
              onClick={onOpenCvModal}
              className="text-[#00F0FF] hover:underline"
            >
              CV
            </button>
            <span className="text-[#525E6F]">TIA {tiranaTime}</span>
          </div>
        </div>
      </footer>
    </>
  );
};
