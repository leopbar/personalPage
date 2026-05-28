'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Globe,
  Briefcase,
  GraduationCap,
  Code,
  Database,
  Cpu,
  Tv,
  Cloud,
  Layers,
  Sparkles,
  Check,
  Copy,
  TrendingUp,
  MessageSquare,
  Bot,
  MailPlus,
  Coins,
  Zap,
  ArrowUpRight,
  X
} from 'lucide-react';

// Custom sub-components
import Constellation from '../components/Constellation';
import CronographMockup from '../components/CronographMockup';
import InvoiceReaderMockup from '../components/InvoiceReaderMockup';

export default function PortfolioPage() {
  // Header active navigation states
  const [activeSection, setActiveSection] = useState('projects');

  // Demo access info box state
  const [demoAccessProject, setDemoAccessProject] = useState<string | null>(null);

  // Copy email notification state
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('lbarretti@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Helper for scroll tracking to light up navbar correctly
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      const projectsEl = document.getElementById('projects-section');
      const aboutEl = document.getElementById('about-section');
      const techEl = document.getElementById('tech-section');
      const otherEl = document.getElementById('other-section');

      if (projectsEl && scrollPos >= projectsEl.offsetTop && scrollPos < aboutEl!.offsetTop) {
        setActiveSection('projects');
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop && scrollPos < techEl!.offsetTop) {
        setActiveSection('about');
      } else if (techEl && scrollPos >= techEl.offsetTop && scrollPos < otherEl!.offsetTop) {
        setActiveSection('tech');
      } else if (otherEl && scrollPos >= otherEl.offsetTop) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] selection:bg-sky-500/30 selection:text-sky-300 overflow-x-hidden" id="portfolio-root">
      {/* Dynamic Background subtle grid or particle light glow */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-[#030712] to-transparent pointer-events-none" />

      {/* STICKY NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#030712]/85 backdrop-blur-md border-b border-zinc-900/60 transition-all" id="portfolio-navbar">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-extrabold tracking-tight text-white hover:text-sky-400 transition-colors text-base">
              Leonardo Barretti
            </span>
          </motion.div>

          {/* Nav Items */}
          <nav className="flex items-center gap-1 md:gap-4" id="nav-links-container">
            <button 
              onClick={() => scrollToSection('projects-section')}
              className={`relative px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${activeSection === 'projects' ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              Projects
              {activeSection === 'projects' && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-500" />
              )}
            </button>
            <button 
              onClick={() => scrollToSection('about-section')}
              className={`relative px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${activeSection === 'about' ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              About
              {activeSection === 'about' && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-500" />
              )}
            </button>
            <button 
              onClick={() => scrollToSection('tech-section')}
              className={`relative px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${activeSection === 'tech' ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              Tech Stack
              {activeSection === 'tech' && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-500" />
              )}
            </button>
            <button 
              onClick={() => scrollToSection('footer-section')}
              className={`relative px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${activeSection === 'contact' ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              Contact
              {activeSection === 'contact' && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-500" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* CORE WRAPPER CONTROLLER */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-24" id="main-portfolio-content">
        
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center" id="hero-section">
          {/* Hero text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
            id="hero-bio-block"
          >
            <div>
              <span className="text-[10px] text-sky-400 font-extrabold tracking-[0.2em] uppercase block mb-1">
                AI / LLM Engineer
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none mb-2">
                Leonardo Barretti
              </h1>
              <p className="text-base md:text-lg font-medium text-sky-400/95">
                AI / LLM Engineer — Production LLM Systems
              </p>
            </div>

            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
              I design and build production-grade AI systems — multi-agent pipelines, RAG, and self-correcting workflows with real observability and cost control. 20+ years as a Business Systems Analyst before transitioning into applied AI.
            </p>

            <div className="flex flex-wrap items-center gap-3" id="hero-action-buttons">
              <a 
                href="https://github.com/leopbar" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg text-xs font-semibold tracking-tight transition-all active:scale-95"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              <a 
                href="https://www.linkedin.com/in/leonardo-barretti" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg text-xs font-semibold tracking-tight transition-all active:scale-95"
              >
                <Linkedin className="w-4 h-4 text-sky-500" />
                LinkedIn
              </a>

              <button 
                onClick={handleCopyEmail}
                className="relative flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-lg text-xs font-semibold tracking-tight transition-all active:scale-95"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                {copiedEmail ? (
                  <span className="text-emerald-400 font-medium">Copied!</span>
                ) : (
                  <span>Email Me</span>
                )}
              </button>
            </div>
          </motion.div>

          {/* Hero visual terminal card representing core tracks */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 bg-[#080d1a] border border-[#152243]/70 rounded-xl overflow-hidden shadow-xl"
            id="hero-skills-card"
          >
            {/* Terminal bar */}
            <div className="bg-zinc-900/60 px-4 py-3 border-b border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-1.5" id="terminal-lights">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[9px] font-semibold">
                <span className="animate-pulse">●</span>
                <span>Online</span>
              </div>
            </div>

            {/* Container content */}
            <div className="p-5 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              {/* Bullets lists */}
              <div className="sm:col-span-7 space-y-3.5" id="hero-bullets">
                <div className="flex items-center gap-2 text-zinc-300 group hover:translate-x-1 transition-transform">
                  <span className="text-emerald-500 font-mono font-bold">{`>`}</span>
                  <span className="text-xs font-semibold font-mono tracking-tight text-zinc-200">Multi-Agent Systems</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 group hover:translate-x-1 transition-transform">
                  <span className="text-emerald-500 font-mono font-bold">{`>`}</span>
                  <span className="text-xs font-semibold font-mono tracking-tight text-zinc-200">RAG & Vector Search</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 group hover:translate-x-1 transition-transform">
                  <span className="text-emerald-500 font-mono font-bold">{`>`}</span>
                  <span className="text-xs font-semibold font-mono tracking-tight text-zinc-200">Production LLM Systems</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300 group hover:translate-x-1 transition-transform">
                  <span className="text-emerald-500 font-mono font-bold">{`>`}</span>
                  <span className="text-xs font-semibold font-mono tracking-tight text-zinc-200">Finance & Trading Tech</span>
                </div>
              </div>

              {/* Constellation Canvas Preview nodes right inside hero */}
              <div className="sm:col-span-5 h-[135px] relative" id="constellation-frame">
                <Constellation />
              </div>
            </div>
          </motion.div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section className="space-y-6" id="projects-section">
          {/* Section heading */}
          <div className="flex items-center justify-between border-b border-zinc-900 pb-3" id="projects-header">
            <h2 className="text-lg font-bold text-zinc-100 tracking-tight uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              Featured Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8" id="featured-projects-grid">
            
            {/* Card 1: Cronograph */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
              className="bg-[#080d1a] border border-[#152243]/70 rounded-xl overflow-hidden hover:border-[#223568] hover:shadow-xl hover:shadow-blue-950/10 transition-all p-4 grid grid-cols-1 md:grid-cols-12 gap-5"
              id="cronograph-project-card"
            >
              {/* Graphic Mockup side */}
              <div className="md:col-span-5 h-[160px] md:h-auto min-h-[150px]" id="cron-mockup-wrapper">
                <CronographMockup />
              </div>

              {/* Information text details */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-4" id="cron-details">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-zinc-100 font-bold text-base tracking-tight hover:text-sky-400 transition-colors cursor-pointer">
                      Cronograph
                    </h3>
                    <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider">
                      Self-Hosted Live
                    </span>
                  </div>
                  
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Production platform that extracts high-resolution market data from Binance and runs statistical window analysis to support weekly Bitcoin options strike selection. Sub-50ms aggregation over hundreds of thousands of OHLCV candles.
                  </p>
                </div>

                {/* Tags lists */}
                <div className="flex flex-wrap gap-1.5" id="cron-tags">
                  {['Python', 'FastAPI', 'Polars', 'PostgreSQL', 'TimescaleDB', 'Docker'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/80 text-zinc-300 rounded text-[11px] font-medium font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons row */}
                <div className="flex items-center justify-between pt-1 flex-wrap gap-2" id="cron-actions">
                  <div className="flex items-center gap-3">
                    <a
                      href="https://cronograph.lbai.dev"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-[10px] text-sky-400 hover:text-sky-300 font-semibold transition-colors"
                    >
                      Live App <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                    <a
                      href="https://github.com/leopbar"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-[10px] text-zinc-500 hover:text-zinc-300 font-semibold transition-colors"
                    >
                      GitHub <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>

                  <button
                    onClick={() => setDemoAccessProject('Cronograph')}
                    className="flex items-center gap-1.5 px-3 py-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 rounded-md text-[10px] font-bold tracking-tight transition-colors active:scale-95"
                    id="request-cron-access-btn"
                  >
                    <Mail className="w-3 h-3 text-sky-400" />
                    Request Access
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Card 2: InvoiceReader */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#080d1a] border border-[#152243]/70 rounded-xl overflow-hidden hover:border-[#223568] hover:shadow-xl hover:shadow-cyan-950/10 transition-all p-4 grid grid-cols-1 md:grid-cols-12 gap-5"
              id="invoicereader-project-card"
            >
              {/* Graphic OCR Document Mockup side */}
              <div className="md:col-span-5 h-[160px] md:h-auto min-h-[150px]" id="invoice-mockup-wrapper">
                <InvoiceReaderMockup />
              </div>

              {/* Information text details */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-4" id="invoice-details">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-zinc-100 font-bold text-base tracking-tight hover:text-sky-400 transition-colors cursor-pointer">
                      InvoiceReader
                    </h3>
                    <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider">
                      Self-Hosted Live
                    </span>
                  </div>

                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Stateful extraction pipeline in LangGraph that validates every LLM output against a strict Pydantic schema. Multi-LLM fallback with cost-aware model routing, field-level retries, and real-time SSE progress.
                  </p>
                </div>

                {/* Tags lists */}
                <div className="flex flex-wrap gap-1.5" id="invoice-tags">
                  {['Python', 'LangGraph', 'Pydantic', 'Gemini', 'OpenAI', 'Supabase'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/80 text-zinc-300 rounded text-[11px] font-medium font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons row */}
                <div className="flex items-center justify-between pt-1 flex-wrap gap-2" id="invoice-actions">
                  <div className="flex items-center gap-3">
                    <a
                      href="https://invoice.lbai.dev"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-[10px] text-sky-400 hover:text-sky-300 font-semibold transition-colors"
                    >
                      Live App <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                    <a
                      href="https://github.com/leopbar"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-[10px] text-zinc-500 hover:text-zinc-300 font-semibold transition-colors"
                    >
                      GitHub <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>

                  <button
                    onClick={() => setDemoAccessProject('InvoiceReader')}
                    className="flex items-center gap-1.5 px-3 py-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 rounded-md text-[10px] font-bold tracking-tight transition-colors active:scale-95"
                    id="request-invoice-access-btn"
                  >
                    <Mail className="w-3 h-3 text-sky-400" />
                    Request Access
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Card 3: AuditChain */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#080d1a] border border-[#152243]/70 rounded-xl overflow-hidden hover:border-[#223568] hover:shadow-xl hover:shadow-purple-950/10 transition-all p-4 flex flex-col justify-between space-y-4"
              id="auditchain-project-card"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-zinc-100 font-bold text-base tracking-tight hover:text-sky-400 transition-colors cursor-pointer">
                    AuditChain
                  </h3>
                  <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider">
                    Self-Hosted Live
                  </span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  100% recall and 50% precision on a curated 7-case eval set (Bausch Health/Valeant, WorldCom, Luckin Coffee + 4 clean controls). Calibrated to prioritize fraud detection over false-positive minimization — the right tradeoff for forensic auditing.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {['Python', 'LangGraph', 'PostgreSQL', 'pgvector', 'OpenAI', 'Docker'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/80 text-zinc-300 rounded text-[11px] font-medium font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <a
                    href="https://audit.lbai.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-[10px] text-sky-400 hover:text-sky-300 font-semibold transition-colors"
                  >
                    Live App <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a
                    href="https://github.com/leopbar"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-[10px] text-zinc-500 hover:text-zinc-300 font-semibold transition-colors"
                  >
                    GitHub <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                <button
                  onClick={() => setDemoAccessProject('AuditChain')}
                  className="flex items-center gap-1.5 px-3 py-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 rounded-md text-[10px] font-bold tracking-tight transition-colors active:scale-95"
                >
                  <Mail className="w-3 h-3 text-sky-400" />
                  Request Access
                </button>
              </div>
            </motion.div>

            {/* Card 4: bitPredict */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#080d1a] border border-[#152243]/70 rounded-xl overflow-hidden hover:border-[#223568] hover:shadow-xl hover:shadow-amber-950/10 transition-all p-4 flex flex-col justify-between space-y-4"
              id="bitpredict-project-card"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-zinc-100 font-bold text-base tracking-tight hover:text-sky-400 transition-colors cursor-pointer">
                    bitPredict
                  </h3>
                  <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider">
                    Self-Hosted Live
                  </span>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Multi-timeframe Bitcoin forecasting powered by Kronos, a 102M-parameter foundation model (HuggingFace). 30 stochastic simulations per candle with calibrated uncertainty bands and a portfolio backtest engine reporting Sharpe, drawdown, and win rate.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {['Python', 'PyTorch', 'FastAPI', 'Celery', 'TimescaleDB', 'Docker'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/80 text-zinc-300 rounded text-[11px] font-medium font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <a
                    href="https://bitpredict.lbai.dev"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-[10px] text-sky-400 hover:text-sky-300 font-semibold transition-colors"
                  >
                    Live App <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a
                    href="https://github.com/leopbar"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-[10px] text-zinc-500 hover:text-zinc-300 font-semibold transition-colors"
                  >
                    GitHub <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                <button
                  onClick={() => setDemoAccessProject('bitPredict')}
                  className="flex items-center gap-1.5 px-3 py-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 rounded-md text-[10px] font-bold tracking-tight transition-colors active:scale-95"
                >
                  <Mail className="w-3 h-3 text-sky-400" />
                  Request Access
                </button>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section className="space-y-6" id="about-section">
          <div className="border-b border-zinc-900 pb-3" id="about-header">
            <h2 className="text-lg font-bold text-zinc-100 tracking-tight uppercase flex items-center gap-2">
              <span className="text-emerald-500 font-mono">1.</span>
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Extended text description */}
            <div className="md:col-span-8 space-y-4 text-zinc-400 text-sm leading-relaxed" id="about-left-col">
              <p>
                I&apos;m an AI Engineer with an unusual background: 20+ years as a Business Systems Analyst in Brazilian enterprises — XP Investimentos, Petrobras, Accenture — followed by a deliberate transition into applied AI.
              </p>
              <p>
                That long detour through requirements gathering, stakeholder communication and project delivery shapes how I build today: I&apos;m wary of LLM hallucinations in numeric outputs (so I designed deterministic risk scoring in AuditChain), I instrument systems to know exactly what each agent costs and how long it takes (custom observability across all 4 portfolio projects), and I test changes against curated eval sets instead of vibes.
              </p>
              <p>
                I care about reliability, cost per inference, and being honest about what&apos;s measured versus what&apos;s assumed.
              </p>
              <p className="font-semibold text-zinc-300 text-xs p-3 bg-zinc-950/40 border border-zinc-900 rounded-lg inline-block">
                Open to opportunities in AI Engineering.
              </p>
            </div>

            {/* Quick list specs meta cards */}
            <div className="md:col-span-4 bg-zinc-950/40 border border-zinc-900 p-5 rounded-xl space-y-4 font-sans text-xs" id="about-right-col">
              <div className="flex items-center gap-3 py-1">
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-300">
                  <Globe className="w-3.5 h-3.5 text-zinc-400" />
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 block uppercase font-bold tracking-wider leading-none mb-0.5">Location</span>
                  <span className="text-zinc-200 font-semibold">Brazil · Relocation OK</span>
                </div>
              </div>

              <div className="flex items-center gap-3 py-1">
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-300">
                  <Briefcase className="w-3.5 h-3.5 text-sky-400" />
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 block uppercase font-bold tracking-wider leading-none mb-0.5">Specialization</span>
                  <span className="text-zinc-200 font-semibold">AI / LLM Engineering</span>
                </div>
              </div>

              <div className="flex items-center gap-3 py-1">
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-300">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 block uppercase font-bold tracking-wider leading-none mb-0.5">Education</span>
                  <span className="text-zinc-200 font-semibold">MBA Project Mgmt (FGV) + B.Sc. IT</span>
                </div>
              </div>

              <div className="flex items-center gap-3 py-1">
                <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-300">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="truncate">
                  <span className="text-[9px] text-zinc-500 block uppercase font-bold tracking-wider leading-none mb-0.5">Direct Channel</span>
                  <span className="text-zinc-200 font-semibold font-mono select-all hover:text-emerald-400 cursor-pointer" onClick={handleCopyEmail}>
                    lbarretti@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK SECTION */}
        <section className="space-y-6" id="tech-section">
          <div className="border-b border-zinc-900 pb-3" id="tech-header">
            <h2 className="text-lg font-bold text-zinc-100 tracking-tight uppercase flex items-center gap-2">
              <span className="text-sky-400 font-mono">2.</span>
              Tech Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="tech-categories-grid">

            {/* Languages */}
            <div className="bg-zinc-950/40 border border-zinc-900/80 p-4 rounded-xl flex flex-col justify-between hover:border-zinc-800 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-zinc-300">
                <Code className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-xs tracking-tight">Languages & APIs</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Python', 'SQL', 'TypeScript', 'REST APIs', 'SSE', 'async/await'].map((item) => (
                  <span key={item} className="px-2 py-0.5 bg-zinc-900 border border-zinc-800/50 text-zinc-300 rounded text-[11px] font-mono leading-none">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-zinc-950/40 border border-zinc-900/80 p-4 rounded-xl flex flex-col justify-between hover:border-zinc-800 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-zinc-300">
                <Database className="w-4 h-4 text-amber-500" />
                <span className="font-bold text-xs tracking-tight">Backend & Data</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['FastAPI', 'PostgreSQL', 'TimescaleDB', 'Celery', 'Redis', 'Pydantic'].map((item) => (
                  <span key={item} className="px-2 py-0.5 bg-zinc-900 border border-zinc-800/50 text-zinc-300 rounded text-[11px] font-mono leading-none">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* AI / LLM */}
            <div className="bg-zinc-950/40 border border-zinc-900/80 p-4 rounded-xl flex flex-col justify-between hover:border-zinc-800 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-zinc-300">
                <Cpu className="w-4 h-4 text-pink-500" />
                <span className="font-bold text-xs tracking-tight">AI / LLM</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['LangGraph', 'LangChain', 'RAG', 'Multi-Agent', 'OpenAI', 'Anthropic'].map((item) => (
                  <span key={item} className="px-2 py-0.5 bg-zinc-900 border border-zinc-800/50 text-zinc-300 rounded text-[11px] font-mono leading-none">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Machine Learning */}
            <div className="bg-zinc-950/40 border border-zinc-900/80 p-4 rounded-xl flex flex-col justify-between hover:border-zinc-800 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-zinc-300">
                <Layers className="w-4 h-4 text-purple-400" />
                <span className="font-bold text-xs tracking-tight">Machine Learning</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['PyTorch', 'HuggingFace', 'pgvector', 'LLM Eval', 'NLP', 'Prompt Eng.'].map((item) => (
                  <span key={item} className="px-2 py-0.5 bg-zinc-900 border border-zinc-800/50 text-zinc-300 rounded text-[11px] font-mono leading-none">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & Infra */}
            <div className="bg-zinc-950/40 border border-zinc-900/80 p-4 rounded-xl flex flex-col justify-between hover:border-zinc-800 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-zinc-300">
                <Cloud className="w-4 h-4 text-blue-500" />
                <span className="font-bold text-xs tracking-tight">Cloud & Infra</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['GCP Vertex AI', 'Docker', 'CI/CD', 'Nginx', 'VPS', 'GitHub Actions'].map((item) => (
                  <span key={item} className="px-2 py-0.5 bg-zinc-900 border border-zinc-800/50 text-zinc-300 rounded text-[11px] font-mono leading-none">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Practices */}
            <div className="bg-zinc-950/40 border border-zinc-900/80 p-4 rounded-xl flex flex-col justify-between hover:border-zinc-800 transition-colors">
              <div className="flex items-center gap-2 mb-3 text-zinc-300">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span className="font-bold text-xs tracking-tight">Practices</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['System Design', 'pytest', 'Observability', 'Cost Opt.', 'Agile', 'Documentation'].map((item) => (
                  <span key={item} className="px-2 py-0.5 bg-zinc-900 border border-zinc-800/50 text-zinc-300 rounded text-[11px] font-mono leading-none">
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* OTHER PROJECTS LISTING SECTION */}
        <section className="space-y-6" id="other-section">
          <div className="border-b border-zinc-900 pb-3" id="other-header">
            <h2 className="text-lg font-bold text-zinc-100 tracking-tight uppercase flex items-center gap-2">
              Other Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" id="other-projects-grid">

            {/* Card 1: RAG Systems */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-zinc-950/30 border border-zinc-900/60 hover:border-zinc-800 rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-100 text-[11px] tracking-tight">RAG Systems</h4>
                  <p className="text-zinc-400 text-[11px] leading-relaxed mt-1">
                    Retrieval-augmented generation pipelines with pgvector, citations, and streaming responses.
                  </p>
                </div>
              </div>
              <div className="mt-3 pt-2.5 border-t border-zinc-900/60 space-y-1.5">
                <div className="text-zinc-500 font-mono text-[11px] leading-none">
                  LangChain • pgvector • OpenAI
                </div>
                <span className="text-amber-500/70 text-[9px] font-medium italic">Coming soon</span>
              </div>
            </motion.div>

            {/* Card 2: Doc Processing */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="bg-zinc-950/30 border border-zinc-900/60 hover:border-zinc-800 rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <MailPlus className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-100 text-[11px] tracking-tight">Doc Pipelines</h4>
                  <p className="text-zinc-400 text-[11px] leading-relaxed mt-1">
                    Document-processing pipelines with LLM extraction, classification, and structured output.
                  </p>
                </div>
              </div>
              <div className="mt-3 pt-2.5 border-t border-zinc-900/60 space-y-1.5">
                <div className="text-zinc-500 font-mono text-[11px] leading-none">
                  FastAPI • Pydantic • Gemini
                </div>
                <span className="text-amber-500/70 text-[9px] font-medium italic">Coming soon</span>
              </div>
            </motion.div>

            {/* Card 3: Workflow Automation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-zinc-950/30 border border-zinc-900/60 hover:border-zinc-800 rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-100 text-[11px] tracking-tight">Workflow Automation</h4>
                  <p className="text-zinc-400 text-[11px] leading-relaxed mt-1">
                    AI-driven workflow automation for international clients — requirements to deployed products.
                  </p>
                </div>
              </div>
              <div className="mt-3 pt-2.5 border-t border-zinc-900/60 space-y-1.5">
                <div className="text-zinc-500 font-mono text-[11px] leading-none">
                  Python • LangGraph • Docker
                </div>
                <span className="text-amber-500/70 text-[9px] font-medium italic">Coming soon</span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* BOTTOM GENERAL CONTACT INVITATION BANNER */}
        <section className="bg-zinc-950/60 border border-zinc-900 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden" id="footer-section">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-start gap-4" id="banner-text-block">
            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-sky-400 flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            
            <div className="space-y-1">
              <h3 className="font-bold text-zinc-100 text-sm md:text-base tracking-tight leading-none">
                Let&apos;s build something impactful.
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed max-w-md">
                I&apos;m open to AI Engineering opportunities and love working on meaningful problems — multi-agent systems, RAG, and production LLM pipelines.
              </p>
            </div>
          </div>

          {/* Social CTAs on right side */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto" id="banner-action-buttons">
            <button 
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800/80 rounded-lg text-xs font-semibold tracking-tight transition-all active:scale-95"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium font-mono">Copied Email Address</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-mono">lbarretti@gmail.com</span>
                </>
              )}
            </button>

            <a 
              href="https://www.linkedin.com/in/leonardo-barretti" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-900/10 hover:bg-blue-900/20 text-sky-400 border border-blue-900/30 hover:border-blue-900/50 rounded-lg text-xs font-semibold tracking-tight transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a 
              href="https://github.com/leopbar" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 rounded-lg text-xs font-semibold tracking-tight transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </section>

      </main>

      {/* LOWER FOOTER DETAILS */}
      <footer className="max-w-6xl mx-auto px-6 pb-12 border-t border-zinc-950 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-600 font-sans gap-3" id="main-footer">
        <div>
          <span>© 2026 Leonardo Barretti. All rights reserved.</span>
        </div>
        <div>
          <span>Built with Next.js & Tailwind CSS</span>
        </div>
      </footer>

      {/* DEMO ACCESS INFO MODAL */}
      <AnimatePresence>
        {demoAccessProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDemoAccessProject(null)}
              className="absolute inset-0 bg-[#02040a]/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl z-10"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400" />
              <div className="p-6">
                <button
                  onClick={() => setDemoAccessProject(null)}
                  className="absolute top-4 right-4 p-1 text-zinc-500 hover:text-zinc-200 transition-colors rounded-lg hover:bg-zinc-800"
                >
                  <X className="w-4 h-4" />
                </button>
                <h3 className="text-base font-bold text-zinc-100 mb-2">{demoAccessProject}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                  To test this system, request a <span className="text-sky-400 font-semibold">Demo Access</span> by sending an email with your name and use case.
                </p>
                <a
                  href={`mailto:lbarretti@gmail.com?subject=${demoAccessProject} - Demo Access Request`}
                  onClick={() => setDemoAccessProject(null)}
                  className="flex items-center justify-center gap-2 w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-xs transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  lbarretti@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
