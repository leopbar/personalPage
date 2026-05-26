'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  DollarSign, 
  TrendingUp, 
  AlertTriangle, 
  Compass, 
  ListOrdered, 
  Layers, 
  Sliders, 
  Search, 
  HelpCircle, 
  PieChart 
} from 'lucide-react';

export default function CronographMockup() {
  return (
    <div 
      className="w-full h-full bg-zinc-950 text-[10px] text-zinc-400 font-sans border border-zinc-800/80 rounded-lg overflow-hidden flex"
      id="cronograph-mock-container"
    >
      {/* Sidebar Mockup */}
      <div className="w-1/4 bg-zinc-900/50 border-r border-zinc-800/60 p-2 flex flex-col justify-between" id="cron-sidebar">
        <div>
          <div className="flex items-center gap-1.5 mb-4 pl-1">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-[6px] text-white font-bold">c</span>
            </div>
            <span className="font-semibold text-zinc-200 tracking-tight text-[9px]">cronograph</span>
          </div>

          <div className="space-y-1" id="cron-nav-links">
            <div className="flex items-center gap-2 px-1.5 py-1 bg-zinc-800/60 text-blue-400 rounded-md cursor-pointer">
              <Compass className="w-3 h-3" />
              <span className="font-medium text-[8px]">Overview</span>
            </div>
            <div className="flex items-center gap-2 px-1.5 py-1 hover:bg-zinc-800/30 text-zinc-400 rounded-md cursor-pointer transition-colors">
              <ListOrdered className="w-3 h-3" />
              <span className="text-[8px]">Transactions</span>
            </div>
            <div className="flex items-center gap-2 px-1.5 py-1 hover:bg-zinc-800/30 text-zinc-400 rounded-md cursor-pointer transition-colors">
              <Sliders className="w-3 h-3" />
              <span className="text-[8px]">Rules</span>
            </div>
            <div className="flex items-center gap-2 px-1.5 py-1 hover:bg-zinc-800/30 text-zinc-400 rounded-md cursor-pointer transition-colors">
              <AlertTriangle className="w-3 h-3 text-amber-500/80" />
              <span className="text-[8px]">Anomalies</span>
            </div>
            <div className="flex items-center gap-2 px-1.5 py-1 hover:bg-zinc-800/30 text-zinc-400 rounded-md cursor-pointer transition-colors">
              <Layers className="w-3 h-3" />
              <span className="text-[8px]">Audit logs</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 p-1 pt-2 border-t border-zinc-800/40">
          <div className="w-4 h-4 rounded-full bg-zinc-700 flex items-center justify-center font-mono text-[8px] text-white font-semibold">
            GB
          </div>
          <div className="truncate">
            <div className="font-medium text-[7px] text-zinc-300 leading-none">Gabriel B.</div>
            <span className="text-[6px] text-zinc-500">Admin</span>
          </div>
        </div>
      </div>

      {/* Main Panel Mockup */}
      <div className="flex-1 p-2.5 flex flex-col justify-between" id="cron-main-panel">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-zinc-100 text-[11px]">Overview</span>
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded-md text-[8px]">
            <Search className="w-2.5 h-2.5 text-zinc-500" />
            <span className="text-zinc-600">Search transactions...</span>
          </div>
        </div>

        {/* Top stats widgets */}
        <div className="grid grid-cols-2 gap-2 mb-2" id="cron-stats-grid">
          {/* Spend Widget */}
          <div className="bg-zinc-900/60 border border-zinc-800/50 rounded-md p-1.5 flex flex-col justify-between">
            <span className="text-[7px] text-zinc-500 uppercase tracking-wider font-semibold">Total Volume</span>
            <div className="flex items-baseline justify-between mt-1">
              <span className="font-semibold text-[11px] text-zinc-100">R$ 8.42M</span>
              <span className="text-[7px] text-emerald-400 flex items-center font-medium leading-none">
                <TrendingUp className="w-2 h-2 mr-0.5" /> +14.2%
              </span>
            </div>
            <div className="h-4 w-full mt-1.5" id="mini-spend-sparkline">
              <svg viewBox="0 0 100 20" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="blue-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 15 Q 15 8, 30 14 T 60 7 T 80 12 T 100 4 L 100 20 L 0 20 Z"
                  fill="url(#blue-grad)"
                />
                <path
                  d="M 0 15 Q 15 8, 30 14 T 60 7 T 80 12 T 100 4"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="1"
                />
                <circle cx="100" cy="4" r="1.5" fill="#60a5fa" />
              </svg>
            </div>
          </div>

          {/* Anomalies widget */}
          <div className="bg-zinc-900/60 border border-zinc-800/50 rounded-md p-1.5 flex flex-col justify-between">
            <span className="text-[7px] text-zinc-500 uppercase tracking-wider font-semibold">Anomalies Detected</span>
            <div className="flex items-baseline justify-between mt-1">
              <span className="font-semibold text-[11px] text-zinc-100">12,647</span>
              <span className="text-[7px] text-amber-500 font-medium bg-amber-500/10 px-1 rounded-sm leading-none">
                Pending
              </span>
            </div>
            <div className="flex items-center gap-1 mt-1 text-[7px] text-zinc-500">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>Real-time ML trigger active</span>
            </div>
          </div>
        </div>

        {/* Large Chart Widget (Daily Activity) */}
        <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-lg p-2 flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[7px] mb-1">
            <span className="text-zinc-400 font-medium">Daily Volume (R$)</span>
            <span className="text-zinc-500">Last 30 Days</span>
          </div>

          <div className="flex-1 w-full relative min-h-[35px]" id="chronograph-wave-svg">
            {/* Standard coordinate lines */}
            <div className="absolute top-0 bottom-0 left-0 right-0 grid grid-rows-3 pointer-events-none opacity-20">
              <div className="border-b border-zinc-600 border-dashed" />
              <div className="border-b border-zinc-600 border-dashed" />
            </div>
            <svg viewBox="0 0 200 45" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="wave-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 35 C 20 40, 35 20, 50 25 C 75 32, 90 12, 110 30 C 130 45, 150 15, 170 18 C 185 20, 195 5, 200 10 L 200 45 L 0 45 Z"
                fill="url(#wave-grad)"
              />
              <path
                d="M 0 35 C 20 40, 35 20, 50 25 C 75 32, 90 12, 110 30 C 130 45, 150 15, 170 18 C 185 20, 195 5, 200 10"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.2"
              />
              {/* Data Node dots */}
              <circle cx="50" cy="25" r="1.5" fill="#34d399" />
              <circle cx="110" cy="30" r="1.5" fill="#34d399" />
              <circle cx="170" cy="18" r="1.5" fill="#34d399" />
              <circle cx="200" cy="10" r="1.5" fill="#a7f3d0" className="animate-ping" />
              <circle cx="200" cy="10" r="1.5" fill="#34d399" />
            </svg>
          </div>

          <div className="flex justify-between text-[6px] text-zinc-600 mt-1 font-mono">
            <span>MAY 01</span>
            <span>MAY 10</span>
            <span>MAY 20</span>
            <span>MAY 26</span>
          </div>
        </div>
      </div>
    </div>
  );
}
