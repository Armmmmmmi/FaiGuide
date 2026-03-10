import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function CodeBlock({ code, language = 'bash' }: { code: string, language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 my-6">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#050505]">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5 mr-4">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-red-500/80 transition-colors"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-yellow-500/80 transition-colors"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-green-500/80 transition-colors"></div>
          </div>
          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="text-zinc-500 hover:text-white transition-colors flex items-center space-x-1.5"
          aria-label="Copy code"
        >
          {copied ? <Check size={14} className="text-white" /> : <Copy size={14} />}
        </button>
      </div>
      <div className="p-5 overflow-x-auto">
        <pre className="text-[13px] leading-relaxed font-mono text-zinc-300 whitespace-pre-wrap break-all md:break-normal">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
