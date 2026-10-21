import React, { useState } from 'react';
import { Award, Globe2, Trophy, MapPin } from 'lucide-react';
import { INTERNATIONAL_EXPERIENCE } from '../data/portfolioData';

const EUROPEAN_HUBS = [
  {
    code: 'AL',
    city: 'Tirana, Albania',
    role: 'Home Base · Don Bosko Digital Ecosystem · Bosko Counter-Labs & T.I.K. Pro League',
    coords: '41.3275° N, 19.8187° E',
    year: '2025 — 2026',
    cx: 545,
    cy: 390,
  },
  {
    code: 'IT',
    city: 'Liguria, Italy',
    role: 'CultiVETing Vocational Mobility Program — European Innovation & VET Study Visit',
    coords: '44.4056° N, 8.9463° E',
    year: '2026',
    cx: 415,
    cy: 330,
  },
  {
    code: 'FI',
    city: 'Finland & Tirana',
    role: 'HackJunction Hackathon Alumnus — Rapid Prototyping & European Tech Ecosystem',
    coords: '60.1699° N, 24.9384° E',
    year: '2025',
    cx: 575,
    cy: 135,
  },
];

export const ExperienceSection: React.FC = () => {
  const [activeHub, setActiveHub] = useState<string>('AL');

  const selectedHub = EUROPEAN_HUBS.find((h) => h.code === activeHub) || EUROPEAN_HUBS[0];

  return (
    <section
      id="experience"
      data-chapter="05 / International Record"
      className="border-b border-[#1A222C] bg-[#060708]"
    >
      {/* Part 1: UnyoCorp #reach — Interactive European Hubs & Network Map */}
      <div className="py-24 md:py-32 border-b border-[#1A222C]">
        <div className="max-w-[100rem] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 Columns: Narrative + Hub Selector */}
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4 flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-[#00F0FF]" />
                <span>05 / International Experience, Honors &amp; Leadership</span>
              </div>

              <h2 className="font-display text-display-md text-[#F2F6F8]">
                Engineered in Tirana.{' '}
                <span className="text-[#00F0FF]">
                  Proven across European hackathons &amp; mobility programs.
                </span>
              </h2>

              <p className="mt-6 text-base text-[#94A3B4] leading-relaxed">
                Combining local technical leadership in Albania with international vocational
                mobility in Liguria, Italy and Europe&apos;s premier hackathon ecosystem in Finland.
              </p>

              {/* Interactive Hub Selector List (UnyoCorp #reach style) */}
              <ul className="mt-10 divide-y divide-[#1A222C] border-t border-b border-[#1A222C]">
                {EUROPEAN_HUBS.map((hub) => {
                  const isActive = activeHub === hub.code;
                  return (
                    <li key={hub.code}>
                      <button
                        type="button"
                        onClick={() => setActiveHub(hub.code)}
                        className={`w-full py-4 px-3 text-left flex items-center justify-between gap-4 transition-colors ${
                          isActive ? 'bg-[#00F0FF]/10' : 'hover:bg-[#0A0C0F]'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="font-mono text-xs text-[#00F0FF] w-7">{hub.code}</span>
                          <span className="font-display text-xl text-[#F2F6F8]">{hub.city}</span>
                        </span>
                        <span className="eyebrow-accent">{hub.year}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right 7 Columns: UnyoCorp Architectural Europe Telemetry Map */}
            <div className="lg:col-span-7">
              <div className="relative bg-[#0A0C0F] border border-[#1A222C] p-6 md:p-10 obsidian-grid">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1A222C]">
                  <span className="eyebrow-accent flex items-center gap-2">
                    <Globe2 className="w-3.5 h-3.5" />
                    <span>European Operations &amp; Mobility Corridor</span>
                  </span>
                  <span className="eyebrow">AL · IT · FI</span>
                </div>

                {/* Stylized Europe Vector Network SVG */}
                <svg
                  viewBox="0 0 900 500"
                  className="w-full h-auto select-none"
                  role="img"
                  aria-label="European operations map connecting Tirana Albania, Liguria Italy, and Finland"
                >
                  {/* Coordinate Grid Lines */}
                  <g stroke="#1A222C" strokeWidth="1" strokeDasharray="3 6">
                    <line x1="0" y1="135" x2="900" y2="135" />
                    <line x1="0" y1="330" x2="900" y2="330" />
                    <line x1="0" y1="390" x2="900" y2="390" />
                    <line x1="415" y1="0" x2="415" y2="500" />
                    <line x1="545" y1="0" x2="545" y2="500" />
                    <line x1="575" y1="0" x2="575" y2="500" />
                  </g>

                  {/* Stylized Continental landmass silhouettes */}
                  <g fill="#121720" stroke="#243040" strokeWidth="1.2">
                    {/* Nordic / Finland region */}
                    <path d="M470,60 L615,45 L645,155 L550,185 L485,150 Z" />
                    {/* Western & Central Europe / Italy */}
                    <path d="M290,220 L510,200 L560,295 L465,365 L445,425 L410,360 L325,335 Z" />
                    {/* Balkans / Albania & Greece */}
                    <path d="M515,310 L620,305 L610,435 L535,445 L510,375 Z" />
                  </g>

                  {/* Electric Cyan Connection Arcs from Tirana (545, 390) */}
                  <g fill="none" stroke="#00F0FF" strokeWidth="1.75" strokeDasharray="5 5" opacity="0.75">
                    {/* Tirana -> Liguria Italy */}
                    <path d="M545,390 Q475,335 415,330" />
                    {/* Tirana -> Finland */}
                    <path d="M545,390 Q595,260 575,135" />
                    {/* Liguria -> Finland */}
                    <path d="M415,330 Q475,215 575,135" strokeOpacity="0.35" />
                  </g>

                  {/* Interactive Pins */}
                  {EUROPEAN_HUBS.map((hub) => {
                    const isSelected = activeHub === hub.code;
                    return (
                      <g
                        key={hub.code}
                        className="cursor-pointer"
                        onClick={() => setActiveHub(hub.code)}
                      >
                        <circle
                          cx={hub.cx}
                          cy={hub.cy}
                          r={isSelected ? 22 : 12}
                          fill="#00F0FF"
                          opacity={isSelected ? 0.22 : 0.08}
                        />
                        <circle
                          cx={hub.cx}
                          cy={hub.cy}
                          r={isSelected ? 7 : 5}
                          fill="#00F0FF"
                          stroke="#060708"
                          strokeWidth="2"
                        />
                        <rect
                          x={hub.cx + 12}
                          y={hub.cy - 14}
                          width="135"
                          height="26"
                          fill="#060708"
                          stroke={isSelected ? '#00F0FF' : '#243040'}
                          strokeWidth="1"
                        />
                        <text
                          x={hub.cx + 20}
                          y={hub.cy + 3}
                          fill={isSelected ? '#00F0FF' : '#F2F6F8'}
                          fontFamily="JetBrains Mono, monospace"
                          fontSize="11"
                          letterSpacing="1"
                        >
                          {hub.code} · {hub.city.split(',')[0].toUpperCase()}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Active Hub Readout Footer */}
                <div className="mt-6 pt-5 border-t border-[#1A222C] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="eyebrow-accent flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>
                        {selectedHub.code} // {selectedHub.city} ({selectedHub.coords})
                      </span>
                    </div>
                    <div className="text-sm text-[#F2F6F8] mt-1">{selectedHub.role}</div>
                  </div>
                  <span className="tag tag-accent shrink-0">{selectedHub.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Complete International Experience, Honors & Leadership Cards */}
      <div className="py-20 md:py-28 max-w-[100rem] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {INTERNATIONAL_EXPERIENCE.map((exp, idx) => {
            const icons = [Globe2, Trophy, Award];
            const IconComp = icons[idx % icons.length];
            return (
              <article
                key={exp.id}
                className="border border-[#1A222C] bg-[#0A0C0F] p-8 md:p-10 flex flex-col justify-between hover:border-[#00F0FF] transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#1A222C]">
                    <span className="eyebrow-accent">{exp.tag}</span>
                    <span className="px-2.5 py-1 bg-[#060708] border border-[#1A222C] font-mono text-xs text-[#00F0FF]">
                      {exp.year}
                    </span>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#94A3B4] uppercase tracking-wider">
                      {exp.flag} {exp.location}
                    </span>
                    <IconComp className="w-4 h-4 text-[#00F0FF]" />
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl text-[#F2F6F8] mt-3 group-hover:text-[#00F0FF] transition-colors">
                    {exp.title}
                  </h3>

                  <ul className="mt-6 space-y-3">
                    {exp.highlights.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-sm md:text-base text-[#94A3B4] leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 bg-[#00F0FF] shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1A222C] flex items-center justify-between font-mono text-[11px] text-[#596777]">
                  <span>RECORD // 0{idx + 1}</span>
                  <span className="text-[#00F0FF]">VERIFIED CREDENTIAL</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
