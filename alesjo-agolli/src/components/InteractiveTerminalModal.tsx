import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, CornerDownLeft, Sparkles } from 'lucide-react';
import {
  PROFILE_DATA,
  PROJECTS_DATA,
  SKILLS_MATRIX,
  INTERNATIONAL_EXPERIENCE,
} from '../data/portfolioData';

interface InteractiveTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBrandKit: () => void;
  onOpenCv: () => void;
}

interface HistoryLine {
  id: number;
  command?: string;
  output: React.ReactNode;
}

export const InteractiveTerminalModal: React.FC<InteractiveTerminalModalProps> = ({
  isOpen,
  onClose,
  onOpenBrandKit,
  onOpenCv,
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryLine[]>([
    {
      id: 1,
      output: (
        <div className="space-y-1 text-slate-300">
          <div className="text-cyan-400 font-semibold">
            ALESJO_AGOLLI_OS v2026.4 // NODE: TIRANA_AL (41.3275° N, 19.8187° E)
          </div>
          <div className="text-xs text-slate-400">
            Type <span className="text-emerald-400">help</span> or click any quick command below to inspect systems, projects, skills, or brand kit.
          </div>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let response: React.ReactNode;

    switch (cmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-xs">
            <div className="text-cyan-300 font-semibold">AVAILABLE SYSTEM COMMANDS:</div>
            <div><span className="text-emerald-400 w-24 inline-block">whoami</span> — Display Alesjo Agolli full profile &amp; bio</div>
            <div><span className="text-emerald-400 w-24 inline-block">projects</span> — List all 4 featured engineering projects</div>
            <div><span className="text-emerald-400 w-24 inline-block">skills</span> — Inspect the 5-domain Technical Skills Matrix</div>
            <div><span className="text-emerald-400 w-24 inline-block">infra</span> — Inspect Windows Server 2022, AD DS, Nginx &amp; Ollama stack</div>
            <div><span className="text-emerald-400 w-24 inline-block">honors</span> — List international mobility &amp; hackathon credentials</div>
            <div><span className="text-emerald-400 w-24 inline-block">brandkit</span> — Open Digital Brand Kit Studio</div>
            <div><span className="text-emerald-400 w-24 inline-block">cv</span> — Open Executive CV preview &amp; download</div>
            <div><span className="text-emerald-400 w-24 inline-block">clear</span> — Clear terminal output</div>
          </div>
        );
        break;

      case 'whoami':
      case 'about':
        response = (
          <div className="space-y-2 text-xs text-slate-200">
            <div className="text-cyan-400 font-bold">
              {PROFILE_DATA.name} — {PROFILE_DATA.location}
            </div>
            <div className="text-indigo-300">
              Roles: {PROFILE_DATA.roles.join(' | ')}
            </div>
            <p className="text-slate-300 leading-relaxed">{PROFILE_DATA.about.intro}</p>
            <p className="text-slate-400">{PROFILE_DATA.about.closing}</p>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-2.5 text-xs">
            {PROJECTS_DATA.map((p) => (
              <div key={p.id} className="border-l-2 border-cyan-500/60 pl-3 py-0.5">
                <div className="text-white font-semibold">
                  [{p.index}] {p.title} — <span className="text-cyan-400">{p.role}</span>
                </div>
                <div className="text-slate-400">{p.overview}</div>
                <div className="text-emerald-400">
                  Stack: {p.techStack.join(' • ')}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="space-y-1.5 text-xs">
            {SKILLS_MATRIX.map((cat) => (
              <div key={cat.id}>
                <span className="text-cyan-400 font-semibold">{cat.category}:</span>{' '}
                <span className="text-slate-300">
                  {cat.skills.map((s) => s.name).join(', ')}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case 'infra':
        response = (
          <div className="space-y-1 text-xs text-slate-300">
            <div className="text-emerald-400 font-semibold">
              [SYSADMIN &amp; LOCAL AI TELEMETRY]
            </div>
            <div>• Hypervisors: VMware &amp; VirtualBox Enterprise Lab</div>
            <div>• Domain Controller: Windows Server 2022 (AD DS, DNS, DHCP, GPO)</div>
            <div>• Edge Security: Nginx Reverse Proxy &amp; Load Balancing</div>
            <div>• Local AI Runtime: Ollama (Serving &ldquo;Bosko AI&rdquo; Virtual Assistant on-premise)</div>
          </div>
        );
        break;

      case 'honors':
      case 'experience':
        response = (
          <div className="space-y-2 text-xs">
            {INTERNATIONAL_EXPERIENCE.map((exp) => (
              <div key={exp.id}>
                <span className="text-cyan-400 font-semibold">
                  {exp.title} ({exp.year})
                </span>{' '}
                — <span className="text-white">{exp.location} {exp.flag}</span>
                <div className="text-slate-400">{exp.highlights.join(' ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'brandkit':
        onClose();
        onOpenBrandKit();
        return;

      case 'cv':
        onClose();
        onOpenCv();
        return;

      default:
        response = (
          <div className="text-xs text-rose-400">
            Command not recognized: &ldquo;{rawCmd}&rdquo;. Type <span className="text-emerald-400">help</span> for available commands.
          </div>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Date.now(),
        command: rawCmd,
        output: response,
      },
    ]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 no-print">
      <div className="w-full max-w-3xl rounded-2xl bg-[#050811] border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden">
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-[#0a101f] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-cyan-300 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>alesjo@tia-node-01: ~ (Precision Architect Shell)</span>
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Command Chips */}
        <div className="px-4 py-2 bg-[#070c18] border-b border-slate-800/80 flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-mono text-slate-400 mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            QUICK EXEC:
          </span>
          {['help', 'whoami', 'projects', 'skills', 'infra', 'honors', 'brandkit', 'cv', 'clear'].map(
            (cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2 py-0.5 rounded bg-slate-900 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/40 text-[11px] font-mono text-cyan-300 transition-all"
              >
                {cmd}
              </button>
            )
          )}
        </div>

        {/* Terminal Output Window */}
        <div className="p-4 h-80 sm:h-96 overflow-y-auto font-mono space-y-4">
          {history.map((item) => (
            <div key={item.id} className="space-y-1.5">
              {item.command && (
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-emerald-400">alesjo@tia-node-01:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
              )}
              <div className="pl-2">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Prompt */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            executeCommand(input);
          }}
          className="px-4 py-3 bg-[#090e1c] border-t border-slate-800 flex items-center gap-2"
        >
          <span className="font-mono text-xs text-emerald-400 shrink-0">
            alesjo@tia-node-01:~$
          </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command (help, whoami, projects, skills, infra)..."
            autoFocus
            className="flex-1 bg-transparent font-mono text-xs text-white focus:outline-none placeholder:text-slate-600"
          />
          <button
            type="submit"
            className="px-2.5 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-1"
          >
            <span>Run</span>
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </form>
      </div>
    </div>
  );
};
