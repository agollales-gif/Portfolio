import React from 'react';
import {
  X,
  Printer,
  Download,
  MapPin,
  ShieldCheck,
  ExternalLink,
  Mail,
  Phone,
  Github,
  Linkedin,
} from 'lucide-react';
import {
  PROFILE_DATA,
  PROJECTS_DATA,
  SKILLS_MATRIX,
  INTERNATIONAL_EXPERIENCE,
  DEFAULT_BRAND_TOKENS,
} from '../data/portfolioData';

interface CvPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvPreviewModal: React.FC<CvPreviewModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOpenPrintableA4 = () => {
    const win = window.open('/Alesjo-Agolli-CV.html', '_blank');
    if (win) {
      win.focus();
    }
  };

  const handleDownloadMarkdownCv = () => {
    const cvMarkdown = `# ALESJO AGOLLI
Location: Tirana, Albania
Core Roles: Full-Stack Web Developer | UI/UX & Frontend Engineer
Phone: +355 67 677 0825
Email: ${DEFAULT_BRAND_TOKENS.email}
GitHub: https://github.com/${DEFAULT_BRAND_TOKENS.githubUser}
LinkedIn: https://www.linkedin.com/in/${DEFAULT_BRAND_TOKENS.linkedinUser}/

## EXECUTIVE SUMMARY
${PROFILE_DATA.about.intro}

${PROFILE_DATA.about.toolkitIntro}
${PROFILE_DATA.about.lifecyclePillars.map((p) => `- ${p.description}`).join('\n')}

${PROFILE_DATA.about.closing}

## FEATURED PROJECTS & EXPERIENCE
${PROJECTS_DATA.map(
  (p) => `### ${p.title}${p.liveUrl ? ` (${p.liveUrl})` : ''}
- **Role:** ${p.role}
- **Tech Stack:** ${p.techStack.join(', ')}
- **Overview:** ${p.overview}
- **Key Deliverables:**
${p.deliverables
  .map((d) => `  - ${d.label ? `**${d.label}:** ` : ''}${d.description}`)
  .join('\n')}`
).join('\n\n')}

## TECHNICAL SKILLS MATRIX
${SKILLS_MATRIX.map(
  (s) => `- **${s.category}:** ${s.skills.map((k) => k.name).join(', ')}`
).join('\n')}

## INTERNATIONAL EXPERIENCE, HONORS & LEADERSHIP
${INTERNATIONAL_EXPERIENCE.map(
  (e) => `### ${e.title} (${e.year}) — ${e.location}
${e.highlights.map((h) => `- ${h}`).join('\n')}`
).join('\n\n')}

## EDUCATION
- **Don Bosko Technical High School — Tirana, Albania**
  Information & Communication Technology (ICT)
`;

    const blob = new Blob([cvMarkdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Alesjo-Agolli-CV.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#060708] border border-[#00F0FF]/60 shadow-2xl p-5 sm:p-8 md:p-10">
        {/* Top Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1A222C] pb-4 mb-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#00F0FF]" />
            <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-widest">
              CURRICULUM VITAE // ALESJO AGOLLI
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleOpenPrintableA4}
              className="btn btn-primary !py-2 !px-4 !text-xs"
            >
              <Printer className="w-4 h-4" />
              <span>Open A4 Print / Save PDF</span>
            </button>
            <button
              onClick={handleDownloadMarkdownCv}
              className="btn btn-ghost !py-2 !px-3.5 !text-xs"
            >
              <Download className="w-4 h-4 text-[#00F0FF]" />
              <span>Download .MD</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-[#0A0C0F] hover:border-[#00F0FF] border border-[#1A222C] text-[#94A3B4] hover:text-white"
              aria-label="Close CV Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interactive CV Sheet */}
        <div className="space-y-6 text-[#F2F6F8]">
          {/* Header */}
          <div className="border-b border-[#1A222C] pb-5 flex flex-col sm:flex-row sm:items-center gap-5">
            <img
              src="/alesjo-portrait.jpg"
              alt={PROFILE_DATA.name}
              className="w-20 h-24 object-cover object-[center_20%] border border-[#00F0FF]/60 shrink-0"
            />
            <div className="flex-1">
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#F2F6F8]">
                {PROFILE_DATA.name}
              </h1>
              <p className="font-mono text-xs sm:text-sm text-[#00F0FF] mt-1">
                {PROFILE_DATA.roles.join(' · ')}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-[#94A3B4] mt-3">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#00F0FF]" />
                  {PROFILE_DATA.location}
                </span>
                <a
                  href="tel:+355676770825"
                  className="inline-flex items-center gap-1 hover:text-[#00F0FF]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00F0FF]" />
                  +355 67 677 0825
                </a>
                <a
                  href={`mailto:${DEFAULT_BRAND_TOKENS.email}`}
                  className="inline-flex items-center gap-1 hover:text-[#00F0FF]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00F0FF]" />
                  {DEFAULT_BRAND_TOKENS.email}
                </a>
                <a
                  href={`https://github.com/${DEFAULT_BRAND_TOKENS.githubUser}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#00F0FF]"
                >
                  <Github className="w-3.5 h-3.5 text-[#00F0FF]" />
                  github.com/{DEFAULT_BRAND_TOKENS.githubUser}
                </a>
                <a
                  href={`https://www.linkedin.com/in/${DEFAULT_BRAND_TOKENS.linkedinUser}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#00F0FF]"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#00F0FF]" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="eyebrow-accent">01 / Executive Summary</h2>
            <p className="text-xs sm:text-sm leading-relaxed text-[#94A3B4]">
              {PROFILE_DATA.about.intro} {PROFILE_DATA.about.closing}
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="eyebrow-accent">02 / Featured Projects &amp; Deployments</h2>
            <div className="grid grid-cols-1 gap-3">
              {PROJECTS_DATA.map((project) => (
                <div
                  key={project.id}
                  className="p-4 bg-[#0A0C0F] border border-[#1A222C]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-display font-semibold text-base text-[#F2F6F8]">
                        {project.title}
                      </h3>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] text-[#00F0FF] hover:underline inline-flex items-center gap-1"
                        >
                          <span>{project.liveDomain}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <span className="text-xs font-mono text-[#00F0FF]">{project.role}</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#94A3B4] mt-1">
                    Stack: {project.techStack.join(' · ')}
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-[#94A3B4]">
                    {project.deliverables.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 bg-[#00F0FF] shrink-0" />
                        <span>
                          {d.label ? (
                            <strong className="text-[#F2F6F8]">{d.label}: </strong>
                          ) : null}
                          {d.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="space-y-2">
            <h2 className="eyebrow-accent">03 / Technical Skills Matrix</h2>
            <div className="grid grid-cols-1 gap-1.5 text-xs">
              {SKILLS_MATRIX.map((cat) => (
                <div key={cat.id} className="leading-relaxed">
                  <strong className="text-[#F2F6F8]">{cat.category}:</strong>{' '}
                  <span className="text-[#94A3B4]">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* International Experience */}
          <div className="space-y-2">
            <h2 className="eyebrow-accent">
              04 / International Experience, Honors &amp; Education
            </h2>
            <div className="space-y-2 text-xs">
              {INTERNATIONAL_EXPERIENCE.map((item) => (
                <div key={item.id}>
                  <span className="font-semibold text-[#F2F6F8]">
                    {item.title} ({item.year}) — {item.location}:
                  </span>{' '}
                  <span className="text-[#94A3B4]">{item.highlights.join(' ')}</span>
                </div>
              ))}
              <div>
                <span className="font-semibold text-[#F2F6F8]">
                  Don Bosko Technical High School — Tirana, Albania:
                </span>{' '}
                <span className="text-[#94A3B4]">
                  Information &amp; Communication Technology (ICT)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
