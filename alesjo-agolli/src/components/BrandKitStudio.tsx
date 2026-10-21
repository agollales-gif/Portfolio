import React, { useState } from 'react';
import {
  Copy,
  Check,
  Linkedin,
  Github,
  Share2,
  Mail,
  Palette,
  Download,
  Sliders,
} from 'lucide-react';
import {
  DEFAULT_BRAND_TOKENS,
  BrandKitCustomTokens,
  generateBrandKitAssets,
  PROFILE_DATA,
} from '../data/portfolioData';

export const BrandKitStudio: React.FC = () => {
  const [tokens, setTokens] = useState<BrandKitCustomTokens>(DEFAULT_BRAND_TOKENS);
  const [activeTab, setActiveTab] = useState<
    'linkedin' | 'github' | 'social' | 'email' | 'identity'
  >('linkedin');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [showTokenEditor, setShowTokenEditor] = useState(false);

  const assets = generateBrandKitAssets(tokens);

  const copyText = (key: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const downloadMarkdownFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const tabs = [
    { id: 'linkedin', label: '01 · LinkedIn Copy', icon: Linkedin },
    { id: 'github', label: '02 · GitHub README & Bio', icon: Github },
    { id: 'social', label: '03 · Social Bios (X / IG)', icon: Share2 },
    { id: 'email', label: '04 · Email Signature', icon: Mail },
    { id: 'identity', label: '05 · Portrait & Color Kit', icon: Palette },
  ] as const;

  return (
    <section
      id="brand-kit"
      data-chapter="06 / Digital Brand Kit"
      className="py-24 md:py-32 border-b border-[#1A222C] bg-[#060708]"
    >
      <div className="max-w-[100rem] mx-auto px-6 md:px-10">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#1A222C]">
          <div>
            <div className="eyebrow mb-4 flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-[#00F0FF]" />
              <span>06 / Interactive Digital Brand Kit Studio</span>
            </div>
            <h2 className="font-display text-display-md text-[#F2F6F8]">
              Ready-to-deploy copy, profiles &amp;{' '}
              <span className="text-[#00F0FF]">brand identity assets.</span>
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setShowTokenEditor(!showTokenEditor)}
            className="btn btn-ghost self-start lg:self-auto"
          >
            <Sliders className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>{showTokenEditor ? 'Hide Contact Placeholders' : 'Customize Links & Handle'}</span>
          </button>
        </div>

        {/* Collapsible Live Placeholder Customizer */}
        {showTokenEditor && (
          <div className="mt-6 p-6 border border-[#00F0FF]/40 bg-[#0A0C0F] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <label className="eyebrow block mb-2">Portfolio Domain</label>
              <input
                type="text"
                value={tokens.portfolioUrl}
                onChange={(e) => setTokens({ ...tokens, portfolioUrl: e.target.value })}
                className="w-full bg-[#060708] border border-[#1A222C] focus:border-[#00F0FF] px-3 py-2 text-xs font-mono text-[#F2F6F8] outline-none"
              />
            </div>
            <div>
              <label className="eyebrow block mb-2">Email Address</label>
              <input
                type="text"
                value={tokens.email}
                onChange={(e) => setTokens({ ...tokens, email: e.target.value })}
                className="w-full bg-[#060708] border border-[#1A222C] focus:border-[#00F0FF] px-3 py-2 text-xs font-mono text-[#F2F6F8] outline-none"
              />
            </div>
            <div>
              <label className="eyebrow block mb-2">GitHub Username</label>
              <input
                type="text"
                value={tokens.githubUser}
                onChange={(e) => setTokens({ ...tokens, githubUser: e.target.value })}
                className="w-full bg-[#060708] border border-[#1A222C] focus:border-[#00F0FF] px-3 py-2 text-xs font-mono text-[#F2F6F8] outline-none"
              />
            </div>
            <div>
              <label className="eyebrow block mb-2">LinkedIn Handle</label>
              <input
                type="text"
                value={tokens.linkedinUser}
                onChange={(e) => setTokens({ ...tokens, linkedinUser: e.target.value })}
                className="w-full bg-[#060708] border border-[#1A222C] focus:border-[#00F0FF] px-3 py-2 text-xs font-mono text-[#F2F6F8] outline-none"
              />
            </div>
            <div>
              <label className="eyebrow block mb-2">Phone (+355)</label>
              <input
                type="text"
                value={tokens.phone}
                onChange={(e) => setTokens({ ...tokens, phone: e.target.value })}
                className="w-full bg-[#060708] border border-[#1A222C] focus:border-[#00F0FF] px-3 py-2 text-xs font-mono text-[#F2F6F8] outline-none"
              />
            </div>
          </div>
        )}

        {/* Sharp Architectural Tabs */}
        <div className="mt-8 flex flex-wrap border-b border-[#1A222C]">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-4 font-mono text-xs uppercase tracking-wider inline-flex items-center gap-2.5 border-b-2 transition-colors ${
                  active
                    ? 'border-[#00F0FF] text-[#00F0FF] bg-[#0A0C0F]'
                    : 'border-transparent text-[#94A3B4] hover:text-[#F2F6F8]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Stage */}
        <div className="mt-8">
          {/* TAB 1: LINKEDIN */}
          {activeTab === 'linkedin' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 border border-[#1A222C] bg-[#0A0C0F] p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#1A222C]">
                    <span className="eyebrow-accent">LinkedIn Headline</span>
                    <span className="font-mono text-xs text-[#94A3B4]">
                      {assets.linkedinHeadline.length} / 220 chars
                    </span>
                  </div>
                  <pre className="mt-5 font-mono text-sm text-[#F2F6F8] whitespace-pre-wrap leading-relaxed bg-[#060708] p-5 border border-[#1A222C]">
                    {assets.linkedinHeadline}
                  </pre>
                </div>

                <button
                  type="button"
                  onClick={() => copyText('linkedin-headline', assets.linkedinHeadline)}
                  className="btn btn-primary mt-6 w-full"
                >
                  {copiedKey === 'linkedin-headline' ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied Headline</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy LinkedIn Headline</span>
                    </>
                  )}
                </button>
              </div>

              <div className="lg:col-span-7 border border-[#1A222C] bg-[#0A0C0F] p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#1A222C]">
                    <span className="eyebrow-accent">LinkedIn &quot;About&quot; Section</span>
                    <button
                      type="button"
                      onClick={() => copyText('linkedin-about', assets.linkedinAbout)}
                      className="px-3 py-1.5 border border-[#1A222C] hover:border-[#00F0FF] font-mono text-xs text-[#00F0FF] inline-flex items-center gap-2"
                    >
                      {copiedKey === 'linkedin-about' ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy About Text</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="mt-5 font-sans text-sm text-[#F2F6F8] whitespace-pre-wrap leading-relaxed bg-[#060708] p-6 border border-[#1A222C] max-h-[26rem] overflow-y-auto">
                    {assets.linkedinAbout}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: GITHUB */}
          {activeTab === 'github' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 border border-[#1A222C] bg-[#0A0C0F] p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="eyebrow-accent pb-4 border-b border-[#1A222C]">
                    GitHub Short Bio
                  </div>
                  <pre className="mt-5 font-mono text-sm text-[#F2F6F8] whitespace-pre-wrap leading-relaxed bg-[#060708] p-5 border border-[#1A222C]">
                    {assets.githubShortBio}
                  </pre>
                </div>
                <button
                  type="button"
                  onClick={() => copyText('gh-bio', assets.githubShortBio)}
                  className="btn btn-primary mt-6 w-full"
                >
                  {copiedKey === 'gh-bio' ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied Short Bio</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy GitHub Bio</span>
                    </>
                  )}
                </button>
              </div>

              <div className="lg:col-span-8 border border-[#1A222C] bg-[#0A0C0F] p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#1A222C]">
                  <span className="eyebrow-accent">GitHub Profile README.md</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => downloadMarkdownFile('README.md', assets.githubReadme)}
                      className="px-3 py-1.5 border border-[#1A222C] hover:border-[#00F0FF] font-mono text-xs text-[#F2F6F8] inline-flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5 text-[#00F0FF]" />
                      <span>Download README.md</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => copyText('gh-readme', assets.githubReadme)}
                      className="px-3 py-1.5 bg-[#00F0FF] text-[#060708] font-mono text-xs font-semibold inline-flex items-center gap-1.5"
                    >
                      {copiedKey === 'gh-readme' ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Markdown</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <pre className="mt-5 font-mono text-xs sm:text-sm text-[#F2F6F8] whitespace-pre-wrap leading-relaxed bg-[#060708] p-6 border border-[#1A222C] overflow-x-auto">
                  {assets.githubReadme}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 3: SOCIAL BIOS */}
          {activeTab === 'social' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-[#1A222C] bg-[#0A0C0F] p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="eyebrow-accent pb-4 border-b border-[#1A222C]">
                    Option 1 · Direct &amp; Professional (X / Instagram / Threads)
                  </div>
                  <pre className="mt-5 font-mono text-sm text-[#F2F6F8] whitespace-pre-wrap leading-relaxed bg-[#060708] p-5 border border-[#1A222C]">
                    {assets.socialBioOption1}
                  </pre>
                </div>
                <button
                  type="button"
                  onClick={() => copyText('social-1', assets.socialBioOption1)}
                  className="btn btn-primary mt-6 w-full"
                >
                  {copiedKey === 'social-1' ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied Option 1</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Option 1</span>
                    </>
                  )}
                </button>
              </div>

              <div className="border border-[#1A222C] bg-[#0A0C0F] p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="eyebrow-accent pb-4 border-b border-[#1A222C]">
                    Option 2 · Short &amp; Minimalist
                  </div>
                  <pre className="mt-5 font-mono text-sm text-[#F2F6F8] whitespace-pre-wrap leading-relaxed bg-[#060708] p-5 border border-[#1A222C]">
                    {assets.socialBioOption2}
                  </pre>
                </div>
                <button
                  type="button"
                  onClick={() => copyText('social-2', assets.socialBioOption2)}
                  className="btn btn-ghost mt-6 w-full"
                >
                  {copiedKey === 'social-2' ? (
                    <>
                      <Check className="w-4 h-4 text-[#00F0FF]" />
                      <span>Copied Option 2</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#00F0FF]" />
                      <span>Copy Option 2</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: EMAIL SIGNATURE */}
          {activeTab === 'email' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="border border-[#1A222C] bg-[#0A0C0F] p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="eyebrow-accent pb-4 border-b border-[#1A222C]">
                    Plain-Text Professional Email Signature
                  </div>
                  <pre className="mt-5 font-mono text-sm text-[#F2F6F8] whitespace-pre-wrap leading-relaxed bg-[#060708] p-6 border border-[#1A222C]">
                    {assets.emailSignature}
                  </pre>
                </div>
                <button
                  type="button"
                  onClick={() => copyText('email-sig', assets.emailSignature)}
                  className="btn btn-primary mt-6 w-full"
                >
                  {copiedKey === 'email-sig' ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied Email Signature</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email Signature</span>
                    </>
                  )}
                </button>
              </div>

              {/* Visual Card Preview with Alesjo's Portrait */}
              <div className="border border-[#1A222C] bg-[#0A0C0F] p-6 md:p-8 flex flex-col justify-between">
                <div className="eyebrow-accent pb-4 border-b border-[#1A222C]">
                  Rendered Executive Signature Preview
                </div>

                <div className="my-6 p-6 bg-[#060708] border-l-4 border-[#00F0FF] flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <img
                    src="/alesjo-portrait.jpg"
                    alt="Alesjo Agolli"
                    className="w-20 h-24 object-cover object-[center_20%] border border-[#1A222C] shrink-0"
                  />
                  <div className="space-y-1.5 font-sans text-sm">
                    <div className="font-display text-xl text-[#F2F6F8] font-semibold">
                      Alesjo Agolli
                    </div>
                    <div className="font-mono text-xs text-[#00F0FF]">
                      Full-Stack Web Developer &amp; System Administrator
                    </div>
                    <div className="text-xs text-[#94A3B4] pt-1">
                      📍 Tirana, Albania · 🌐 {tokens.portfolioUrl}
                    </div>
                    <div className="text-xs text-[#94A3B4]">
                      💻 github.com/{tokens.githubUser} | 🔗 linkedin.com/in/{tokens.linkedinUser}
                    </div>
                    <div className="text-xs text-[#F2F6F8]">
                      ✉️ {tokens.email} | 📞 +355 {tokens.phone}
                    </div>
                  </div>
                </div>

                <div className="text-xs font-mono text-[#94A3B4]">
                  Styled in Obsidian Black (#060708) &amp; Electric Cyan (#00F0FF).
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: PORTRAIT & COLOR IDENTITY KIT */}
          {activeTab === 'identity' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 border border-[#1A222C] bg-[#0A0C0F] p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="eyebrow-accent pb-4 border-b border-[#1A222C]">
                    Official Portrait Asset
                  </div>
                  <div className="mt-5 relative border border-[#1A222C] bg-[#060708] overflow-hidden aspect-[4/5] max-h-96 mx-auto">
                    <img
                      src="/alesjo-portrait.jpg"
                      alt="Alesjo Agolli Official Portrait"
                      className="w-full h-full object-cover object-[center_22%]"
                    />
                  </div>
                </div>
                <a
                  href="/alesjo-portrait.jpg"
                  download="Alesjo-Agolli-Portrait.jpg"
                  className="btn btn-primary mt-6 w-full"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Official Portrait (.JPG)</span>
                </a>
              </div>

              <div className="lg:col-span-7 border border-[#1A222C] bg-[#0A0C0F] p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="eyebrow-accent pb-4 border-b border-[#1A222C]">
                    Brand Color System — Ciani Elektrik &amp; E Zeza e Obsidianit
                  </div>
                  <div className="mt-6 space-y-6">
                    {PROFILE_DATA.colorPhilosophy.map((c) => (
                      <div
                        key={c.id}
                        className="p-5 border border-[#1A222C] bg-[#060708] flex flex-col sm:flex-row gap-5 items-start"
                      >
                        <div
                          className="w-16 h-16 border border-[#273342] shrink-0"
                          style={{ backgroundColor: c.hex }}
                        />
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="font-display text-xl text-[#F2F6F8]">
                              {c.nameAl} ({c.nameEn})
                            </span>
                            <span className="tag tag-accent">{c.hex}</span>
                          </div>
                          <p className="text-sm text-[#F2F6F8] leading-relaxed">
                            {c.descriptionAl}
                          </p>
                          <p className="text-xs text-[#94A3B4] leading-relaxed">
                            {c.descriptionEn}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
