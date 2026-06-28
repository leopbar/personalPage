'use client';

import React from 'react';
import { FileText, Quote, ShieldCheck } from 'lucide-react';

export default function FilingsIQMockup() {
  return (
    <div
      className="relative w-full h-full bg-zinc-950 border border-zinc-800/80 rounded-lg overflow-hidden flex flex-col"
      id="filingsiq-mock-container"
    >
      {/* Header bar */}
      <div className="bg-zinc-900/70 px-3 py-2 border-b border-zinc-900 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <FileText className="w-3 h-3 text-sky-400" />
          <span className="text-[10px] font-mono font-semibold text-zinc-300">Apple_10-K_FY2024.pdf</span>
        </div>
        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[8px] font-semibold">
          <ShieldCheck className="w-2.5 h-2.5" />
          <span>Grounded</span>
        </div>
      </div>

      {/* Chat body */}
      <div className="flex-1 p-3 space-y-2.5 overflow-hidden">
        {/* User question */}
        <div className="flex justify-end">
          <div className="bg-sky-500/15 border border-sky-500/20 text-sky-200 text-[10px] font-medium px-2.5 py-1.5 rounded-lg rounded-tr-sm max-w-[80%]">
            What was the gross margin in FY2024?
          </div>
        </div>

        {/* AI answer */}
        <div className="flex justify-start">
          <div className="bg-zinc-900 border border-zinc-800/80 text-zinc-300 text-[10px] leading-relaxed px-2.5 py-1.5 rounded-lg rounded-tl-sm max-w-[88%] space-y-1.5">
            <span>Gross margin was <span className="text-zinc-100 font-semibold">46.2%</span>, up from 44.1% in FY2023.</span>
            <div className="flex items-center gap-1 pt-0.5 border-t border-zinc-800/60 mt-1">
              <Quote className="w-2.5 h-2.5 text-amber-500 flex-shrink-0" />
              <span className="text-[8.5px] font-mono text-amber-500/90 truncate">Source: p.34, Consolidated Statements of Operations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
