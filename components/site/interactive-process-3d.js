'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Search, FileText, Edit3, Code2, ShieldCheck, Rocket, Headphones,
  Sparkles, ArrowRight, ArrowLeft
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    id: '01',
    num: '01',
    title: 'Discover & Plan',
    shortDesc: 'We understand your business, challenges, and goals through deep domain exploration.',
    icon: Search,
    color: '#3b82f6', // Electric Blue
    duration: '2 - 3 Weeks',
    pos: { top: '24%', left: '14%' },
    point: { x: 140, y: 96 }
  },
  {
    id: '02',
    num: '02',
    title: 'Analyze & Strategize',
    shortDesc: 'We research, analyze, and create a tailored architectural strategy and roadmap.',
    icon: FileText, // Exact match from user screenshot (Document / File icon)
    color: '#2563eb', // Cobalt Blue
    duration: '3 - 4 Weeks',
    pos: { top: '43.5%', left: '30.8%' },
    point: { x: 308, y: 174 }
  },
  {
    id: '03',
    num: '03',
    title: 'Design & Prototype',
    shortDesc: 'We craft user-centric designs and interactive prototypes to visualize the solution.',
    icon: Edit3,
    color: '#06b6d4', // Cyan
    duration: '3 - 5 Weeks',
    pos: { top: '36%', left: '54.2%' },
    point: { x: 542, y: 144 }
  },
  {
    id: '04',
    num: '04',
    title: 'Build & Develop',
    shortDesc: 'Our senior experts build robust, scalable, and resilient enterprise solutions.',
    icon: Code2,
    color: '#10b981', // Emerald Green
    duration: '6 - 12 Weeks',
    pos: { top: '49.5%', left: '73.5%' },
    point: { x: 735, y: 198 }
  },
  {
    id: '05',
    num: '05',
    title: 'Test & Assure',
    shortDesc: 'We ensure bulletproof quality and latency performance through rigorous testing.',
    icon: ShieldCheck,
    color: '#f59e0b', // Amber Gold
    duration: '2 - 4 Weeks',
    pos: { top: '68.5%', left: '23%' },
    point: { x: 230, y: 274 }
  },
  {
    id: '06',
    num: '06',
    title: 'Deploy & Launch',
    shortDesc: 'We deploy seamlessly into production and ensure a smooth operational cutover.',
    icon: Rocket,
    color: '#f97316', // Sunset Orange
    duration: '1 - 2 Weeks',
    pos: { top: '68.5%', left: '48.2%' },
    point: { x: 482, y: 274 }
  },
  {
    id: '07',
    num: '07',
    title: 'Deliver & Support',
    shortDesc: 'We deliver measurable value and provide continuous ongoing partner support.',
    icon: Headphones, // Support Headset Icon
    color: '#a855f7', // Neon Purple
    duration: 'Ongoing SLA',
    pos: { top: '71.5%', left: '76.5%' },
    point: { x: 765, y: 286 }
  }
];

export default function InteractiveProcess3D() {
  const [activeStep, setActiveStep] = useState(0);
  const currentData = PROCESS_STEPS[activeStep];

  return (
    <section className="relative bg-[#faf7f2] text-[#1c1a18] font-sans border-b border-[#e5dccf] py-14 lg:py-18 overflow-hidden">
      
      {/* Outer Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#86bc25]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 relative z-10 w-full">
        
        {/* Outer Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 border-b border-[#e6dfd5] pb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#784813] mb-1">
              <Sparkles className="h-3.5 w-3.5 text-[#86bc25]" />
              Execution Methodology Blueprint
            </div>
            <h2 className="text-2xl sm:text-4xl font-light text-[#1c1a18] tracking-tight">
              From Idea to <span className="font-semibold text-black">Impact</span>
            </h2>
          </div>

          <div className="mt-3 md:mt-0 text-[13px] font-medium text-[#6b6255]">
            Interactive 7-Phase Strategic Delivery Lifecycle
          </div>
        </div>

        {/* SAPPHIRE BLUE CARD CONTAINER */}
        <div className="w-full relative">
          <div className="relative w-full rounded-2xl border-2 border-[#1e3e75] bg-[#071329] p-3 sm:p-5 shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl text-white">
            
            {/* Active Step Top Info Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 border border-[#1b3a6b] mb-3.5 bg-[#061329]/90 rounded-xl text-[12px]">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full font-extrabold text-black text-[13px] shadow"
                  style={{ backgroundColor: currentData.color }}
                >
                  {currentData.num}
                </div>
                <div>
                  <span className="font-extrabold text-white text-[15px]">
                    {currentData.title}
                  </span>
                  <span className="text-zinc-400 text-[12px] hidden sm:inline ml-2 font-normal">
                    — {currentData.shortDesc}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-white bg-[#14305c] border border-[#234985] px-3 py-1 rounded-full shadow">
                  {currentData.duration}
                </span>
                <span className="text-[#86bc25] font-extrabold text-[12px] font-mono">
                  {activeStep + 1} / 7
                </span>
              </div>
            </div>

            {/* FULLY STRETCHED PROCESS STAGE WITH ANIMATED MOVING SVG LINES & LARGE CIRCULAR NODES */}
            <div className="relative w-full h-[420px] sm:h-[500px] md:h-[560px] rounded-xl overflow-hidden bg-[#050c1a] border border-[#1b3663]">
              
              {/* Background Stretched Blueprint Image */}
              <div className="w-full h-full relative">
                <Image
                  src="/images/PROCESS.png"
                  alt="From Idea to Impact Process Flow Blueprint"
                  fill
                  priority
                  className="object-fill w-full h-full"
                />
              </div>

              {/* MOVING & GLOWING ANIMATED SVG CONNECTING LINES (Tracing 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 1000 400"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="glowingLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                    <stop offset="35%" stopColor="#86bc25" stopOpacity="1" />
                    <stop offset="70%" stopColor="#f59e0b" stopOpacity="1" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* Base Curved Track Line */}
                <path
                  d="M 140 96 Q 220 135, 308 174 Q 425 159, 542 144 Q 638 171, 735 198 Q 480 236, 230 274 L 482 274 L 765 286"
                  fill="none"
                  stroke="#1e3c70"
                  strokeWidth="3"
                  strokeOpacity="0.5"
                  strokeDasharray="6 6"
                />

                {/* Animated Moving Glowing Line */}
                <motion.path
                  d="M 140 96 Q 220 135, 308 174 Q 425 159, 542 144 Q 638 171, 735 198 Q 480 236, 230 274 L 482 274 L 765 286"
                  fill="none"
                  stroke="url(#glowingLineGrad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="20 20"
                  animate={{ strokeDashoffset: [0, -160] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
                />
              </svg>

              {/* OVERLAY LAYER: 7 LARGE CIRCULAR INTERACTIVE STEP NODES */}
              <div className="absolute inset-0 pointer-events-none z-20">
                {PROCESS_STEPS.map((s, idx) => {
                  const Icon = s.icon;
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={s.id}
                      style={{ top: s.pos.top, left: s.pos.left }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex flex-col items-center"
                    >
                      {/* Step Title Badge Above Circle */}
                      <motion.div
                        initial={false}
                        animate={{ scale: isActive ? 1.1 : 1.0 }}
                        className={`mb-1 px-2.5 py-0.5 rounded-full text-[10.5px] sm:text-[11.5px] font-extrabold whitespace-nowrap shadow-xl border transition-all duration-300 ${
                          isActive
                            ? 'bg-[#86bc25] text-black border-[#86bc25] shadow-[0_0_15px_#86bc25]'
                            : 'bg-[#06142e]/95 text-white border-[#1e3c70] backdrop-blur-md'
                        }`}
                      >
                        {s.num} {s.title}
                      </motion.div>

                      {/* Large Glowing Circular Node Button */}
                      <button
                        type="button"
                        onClick={() => setActiveStep(idx)}
                        className={`relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 transition-all duration-300 shadow-2xl ${
                          isActive
                            ? 'bg-[#86bc25] text-black border-white shadow-[0_0_35px_rgba(134,188,37,1)] scale-110 z-30 ring-4 ring-[#86bc25]/40'
                            : 'bg-[#071733]/90 text-white border-[#244b88] hover:border-[#86bc25] hover:scale-110 z-20'
                        }`}
                      >
                        <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${isActive ? 'text-black' : 'text-white'}`} />

                        {/* Radar Glow Ring on Active Circle */}
                        {isActive && (
                          <motion.div
                            animate={{ scale: [1, 1.45, 1], opacity: [0.8, 0.1, 0.8] }}
                            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                            className="absolute inset-0 rounded-full border-2 border-[#86bc25] pointer-events-none -z-10 shadow-[0_0_25px_#86bc25]"
                          />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* BOTTOM 7-STEP BUTTON NAVIGATION BAR */}
            <div className="mt-3.5 pt-3 border-t border-[#1b3a6b] flex items-center justify-between gap-2">
              <div className="flex-1 flex items-center gap-2 overflow-x-auto no-scrollbar">
                {PROCESS_STEPS.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`flex-1 min-w-[120px] sm:min-w-[150px] py-2 px-3 rounded-lg text-left transition-all border ${
                        isActive
                          ? 'bg-white text-black border-white shadow-lg font-bold'
                          : 'bg-[#0a1833] text-zinc-300 border-[#1a3461] hover:text-white hover:border-[#86bc25]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[10.5px] font-extrabold px-1.5 py-0.5 rounded-full text-black"
                          style={{ backgroundColor: step.color }}
                        >
                          {step.num}
                        </span>
                        <span className="text-[12px] truncate">{step.title}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Previous / Next Controls */}
              <div className="hidden sm:flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-[#1e3c70] bg-[#0c1c38] text-white hover:border-[#86bc25] disabled:opacity-40 disabled:pointer-events-none transition-all shadow"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  disabled={activeStep === PROCESS_STEPS.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  className="inline-flex items-center gap-1.5 bg-[#86bc25] text-black font-extrabold text-[12px] px-4 py-2 rounded-lg hover:bg-[#97d031] disabled:opacity-40 disabled:pointer-events-none transition-all shadow-md shrink-0"
                >
                  <span>Next Step</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
