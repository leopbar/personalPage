'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, CheckCircle, X, ShieldAlert, Sparkles, Loader2 } from 'lucide-react';

interface RequestAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
}

export default function RequestAccessModal({ isOpen, onClose, projectName }: RequestAccessModalProps) {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    setTimeout(() => {
      // Save request in localStorage to maintain stateful persistence
      const payload = {
        email,
        company,
        project: projectName,
        timestamp: new Date().toISOString(),
      };
      
      try {
        const key = `request-access-${projectName.toLowerCase()}`;
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        existing.push(payload);
        localStorage.setItem(key, JSON.stringify(existing));
        setStatus('success');
      } catch (err) {
        setStatus('error');
      }
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#02040a]/80 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl z-10"
            id="request-access-dialog"
          >
            {/* Header decor */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400" />

            <div className="p-6">
              {/* Reset Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 text-zinc-500 hover:text-zinc-200 transition-colors rounded-lg hover:bg-zinc-800"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {status !== 'success' ? (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-sky-400" />
                    <span className="text-[10px] text-sky-400 font-mono tracking-wider uppercase font-semibold">Request System Access</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-zinc-100 tracking-tight mb-2">
                    {projectName} Early Beta
                  </h3>
                  
                  <p className="text-zinc-400 text-xs mb-5 leading-relaxed">
                    Leonardo Barretti&apos;s products are currently in private beta. Submit your request below to explore capabilities and secure sandboxed API credentials.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] text-zinc-400 uppercase tracking-widest font-mono font-bold mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 w-4 h-4 text-zinc-500" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          className="w-full pl-10 pr-4 py-2 bg-zinc-950 border border-zinc-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-lg text-xs text-zinc-100 outline-none transition-all placeholder:text-zinc-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] text-zinc-400 uppercase tracking-widest font-mono font-bold mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Acme Fintech Inc."
                        className="w-full px-4 py-2 bg-zinc-950 border border-zinc-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-lg text-xs text-zinc-100 outline-none transition-all placeholder:text-zinc-600"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-blue-600 to-sky-500 text-zinc-100 rounded-lg font-semibold text-xs hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Processing Request...
                          </>
                        ) : (
                          'Request Sandboxed Sandbox Sandbox Access'
                        )}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-6" id="access-request-success">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-zinc-100 tracking-tight mb-2">
                    Request Received Successfully!
                  </h3>
                  
                  <p className="text-zinc-400 text-xs leading-relaxed max-w-sm mx-auto mb-6">
                    Thank you! We have logged your request for <span className="text-zinc-200 font-semibold">{projectName}</span>. 
                    Leonardo will follow up at <span className="text-emerald-400 font-mono font-semibold">{email}</span> if a developer sandbox slot opens up!
                  </p>

                  <button
                    onClick={onClose}
                    className="px-6 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-md text-xs transition-colors"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
