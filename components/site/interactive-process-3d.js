'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
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
    color: '#0066ff', // Deep Electric Blue
    glowColor: 'rgba(0, 102, 255, 0.95)',
    duration: '2 - 3 Weeks',
    pos: { top: '15.5%', left: '10%' },
    point: { x: 100, y: 62 }
  },
  {
    id: '02',
    num: '02',
    title: 'Analyze & Strategize',
    shortDesc: 'We research, analyze, and create a tailored architectural strategy and roadmap.',
    icon: FileText,
    color: '#1e56d8', // Cobalt Blue
    glowColor: 'rgba(30, 86, 216, 0.95)',
    duration: '3 - 4 Weeks',
    pos: { top: '45.5%', left: '28.5%' },
    point: { x: 285, y: 182 }
  },
  {
    id: '03',
    num: '03',
    title: 'Design & Prototype',
    shortDesc: 'We craft user-centric designs and interactive prototypes to visualize the solution.',
    icon: Edit3,
    color: '#00b4d8', // Bright Cyan
    glowColor: 'rgba(0, 180, 216, 0.95)',
    duration: '3 - 5 Weeks',
    pos: { top: '36.8%', left: '54.2%' },
    point: { x: 542, y: 147 }
  },
  {
    id: '04',
    num: '04',
    title: 'Build & Develop',
    shortDesc: 'Our senior experts build robust, scalable, and resilient enterprise solutions.',
    icon: Code2,
    color: '#10b981', // Emerald Green
    glowColor: 'rgba(16, 185, 129, 0.95)',
    duration: '6 - 12 Weeks',
    pos: { top: '53.2%', left: '76%' },
    point: { x: 760, y: 213 }
  },
  {
    id: '05',
    num: '05',
    title: 'Test & Assure',
    shortDesc: 'We ensure bulletproof quality and latency performance through rigorous testing.',
    icon: ShieldCheck,
    color: '#f59e0b', // Golden Amber
    glowColor: 'rgba(245, 158, 11, 0.95)',
    duration: '2 - 4 Weeks',
    pos: { top: '75.2%', left: '19.5%' },
    point: { x: 195, y: 301 }
  },
  {
    id: '06',
    num: '06',
    title: 'Deploy & Launch',
    shortDesc: 'We deploy seamlessly into production and ensure a smooth operational cutover.',
    icon: Rocket,
    color: '#f97316', // Sunset Orange
    glowColor: 'rgba(249, 115, 22, 0.95)',
    duration: '1 - 2 Weeks',
    pos: { top: '75.6%', left: '47.4%' },
    point: { x: 474, y: 302 }
  },
  {
    id: '07',
    num: '07',
    title: 'Deliver & Support',
    shortDesc: 'We deliver measurable value and provide continuous ongoing partner support.',
    icon: Headphones,
    color: '#9333ea', // Royal Neon Purple
    glowColor: 'rgba(147, 51, 234, 0.95)',
    duration: 'Ongoing SLA',
    pos: { top: '80.2%', left: '78.8%' },
    point: { x: 788, y: 321 }
  }
];

// 6 Rainbow Segment Paths (with 5->6 looping from left of 5 underneath around to 6)
const SEGMENT_PATHS = [
  { id: 'seg-1-2', fromStep: 0, d: 'M 100 62 C 180 50, 200 160, 285 182', strokeGrad: 'url(#grad-1-2)' },
  { id: 'seg-2-3', fromStep: 1, d: 'M 285 182 C 360 220, 460 95, 542 147', strokeGrad: 'url(#grad-2-3)' },
  { id: 'seg-3-4', fromStep: 2, d: 'M 542 147 C 610 120, 690 140, 760 213', strokeGrad: 'url(#grad-3-4)' },
  { id: 'seg-4-5', fromStep: 3, d: 'M 760 213 C 620 280, 360 260, 195 301', strokeGrad: 'url(#grad-4-5)' },
  { id: 'seg-5-6', fromStep: 4, d: 'M 195 301 C 110 335, 130 375, 270 375 C 380 375, 430 340, 474 302', strokeGrad: 'url(#grad-5-6)' },
  { id: 'seg-6-7', fromStep: 5, d: 'M 474 302 C 550 245, 670 340, 788 321', strokeGrad: 'url(#grad-6-7)' }
];

export default function InteractiveProcess3D() {
  const [activeStep, setActiveStep] = useState(0);
  const currentData = PROCESS_STEPS[activeStep];
  const containerRef = useRef(null);

  // Scroll Progress Tracking across the Pinned Viewport Container
  // Offset start 20% / end 80% locks the step transition while the header sits under navbar
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 30%', 'end 85%']
  });

  // Synchronize Active Checkpoint State as User Scrolls Through Pinned Section
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const calculatedStep = Math.min(6, Math.max(0, Math.floor(latest * 7.1)));
    if (calculatedStep !== activeStep) {
      setActiveStep(calculatedStep);
    }
  });

  return (
    /* STICKY CONTAINER WRAPPER: Extra top padding (pt-16 sm:pt-24) gives generous breathing space from section above */
    <div ref={containerRef} className="relative h-[340vh] bg-[#faf7f2] font-sans border-b border-[#e5dccf] pt-14 sm:pt-20">
      
      {/* Sticky Viewport Container - Locks in view right when 'From Idea to Impact' header aligns under navbar */}
      <div className="sticky -top-7 sm:-top-9 min-h-[92vh] flex flex-col justify-start pt-4 sm:pt-6 pb-8 px-4 sm:px-6 lg:px-10 overflow-hidden">
        
        {/* Outer Background Ambient Glows */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#86bc25]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="mx-auto max-w-[1500px] relative z-10 w-full">
          
          {/* Outer Section Header with Extra Breathing Room */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 border-b border-[#e6dfd5] pb-4 pt-2">
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
                    className="flex h-8 w-8 items-center justify-center rounded-full font-extrabold text-white text-[13px] shadow-lg"
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
                  <span className="font-extrabold text-[12px] font-mono" style={{ color: currentData.color }}>
                    {activeStep + 1} / 7
                  </span>
                </div>
              </div>

              {/* PROCESS BLUEPRINT STAGE WITH PERFECT 3/4TH CONCENTRIC CIRCLE NODES */}
              <div className="relative w-full h-[390px] sm:h-[460px] md:h-[510px] rounded-xl overflow-hidden bg-[#050c1a] border border-[#1b3663]">
                
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

                {/* 6 RAINBOW FLOWING DOTTED SVG LINE SEGMENTS */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  viewBox="0 0 1000 400"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="grad-1-2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0066ff" />
                      <stop offset="100%" stopColor="#1e56d8" />
                    </linearGradient>
                    <linearGradient id="grad-2-3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1e56d8" />
                      <stop offset="100%" stopColor="#00b4d8" />
                    </linearGradient>
                    <linearGradient id="grad-3-4" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00b4d8" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                    <linearGradient id="grad-4-5" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                    <linearGradient id="grad-5-6" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                    <linearGradient id="grad-6-7" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#9333ea" />
                    </linearGradient>
                  </defs>

                  {/* Base Dotted Track Guides */}
                  {SEGMENT_PATHS.map((seg) => (
                    <path
                      key={`base-${seg.id}`}
                      d={seg.d}
                      fill="none"
                      stroke="#1e3c70"
                      strokeWidth="3.5"
                      strokeOpacity="0.4"
                      strokeDasharray="6 6"
                    />
                  ))}

                  {/* 6 Rainbow Flowing Dotted Animated Line Segments (SHOW ONLY UP TO CURRENT ACTIVE STEP) */}
                  {SEGMENT_PATHS.map((seg, idx) => {
                    const isAvailableSegment = activeStep > seg.fromStep;
                    
                    if (!isAvailableSegment) return null;

                    const isLatestSegment = activeStep === seg.fromStep + 1;

                    return (
                      <motion.path
                        key={`anim-${seg.id}`}
                        d={seg.d}
                        fill="none"
                        stroke={seg.strokeGrad}
                        strokeWidth={isLatestSegment ? '6' : '4.5'}
                        strokeLinecap="round"
                        strokeDasharray="12 10"
                        initial={{ strokeDashoffset: 0, opacity: 0 }}
                        animate={{
                          strokeDashoffset: [0, -176],
                          opacity: isLatestSegment ? 1 : 0.8
                        }}
                        transition={{
                          strokeDashoffset: { repeat: Infinity, duration: 1.8, ease: 'linear' },
                          opacity: { duration: 0.3 }
                        }}
                        className={isLatestSegment ? 'drop-shadow-[0_0_16px_rgba(255,255,255,0.95)]' : ''}
                      />
                    );
                  })}
                </svg>

                {/* OVERLAY LAYER: PROPORTIONATE 3/4TH CONCENTRIC CIRCLE NODES (w-15 h-15 sm:w-18 sm:h-18, ICONS w-7.5 h-7.5 sm:w-9 sm:h-9) */}
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
                          animate={{ scale: isActive ? 1.12 : 1.0 }}
                          className={`mb-2 px-3 py-0.5 rounded-full text-[11.5px] sm:text-[12.5px] font-extrabold whitespace-nowrap shadow-2xl border transition-all duration-300 ${
                            isActive
                              ? 'bg-white text-black border-white shadow-[0_0_22px_rgba(255,255,255,1)]'
                              : 'bg-[#06142e]/95 text-white border-[#1e3c70] backdrop-blur-md'
                          }`}
                        >
                          <span className="mr-1.5" style={{ color: s.color }}>●</span>
                          {s.num} {s.title}
                        </motion.div>

                        {/* PROPORTIONATE CONCENTRIC CIRCLE CONTAINER */}
                        <div className="relative flex items-center justify-center pointer-events-auto">

                          {/* OUTER CONCENTRIC CIRCLE (Padded Outer Ring - 100% Perfect Concentric Circle) */}
                          <div
                            className="p-2 sm:p-2.5 rounded-full border-2 aspect-square flex items-center justify-center shrink-0 transition-all duration-300 pointer-events-none"
                            style={{
                              borderColor: s.color,
                              boxShadow: isActive ? `0 0 35px ${s.glowColor}, inset 0 0 15px ${s.glowColor}` : `0 0 18px ${s.glowColor}`
                            }}
                          >
                            {/* INNER CONCENTRIC CIRCLE (3/4TH SOLID NODE BUTTON: w-15 h-15 sm:w-18 sm:h-18) */}
                            <button
                              type="button"
                              onClick={() => setActiveStep(idx)}
                              className={`w-15 h-15 sm:w-18 sm:h-18 aspect-square rounded-full flex items-center justify-center shrink-0 shadow-2xl transition-all duration-300 pointer-events-auto ${
                                isActive ? 'border-white z-30 scale-105' : 'border-white/90 hover:scale-105 z-20'
                              }`}
                              style={{
                                backgroundColor: s.color, // 100% SOLID FILL COLOR!
                                borderColor: '#ffffff',
                                boxShadow: `0 0 30px ${s.glowColor}`
                              }}
                            >
                              {/* PROPORTIONATE UPRIGHT ICON (w-7.5 h-7.5 sm:w-9 sm:h-9) */}
                              <Icon
                                className="h-7.5 w-7.5 sm:h-9 sm:w-9 text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] transform-none"
                                style={{ transform: 'none' }}
                              />
                            </button>
                          </div>

                          {/* Radar Glow Ring on Active Circle */}
                          {isActive && (
                            <motion.div
                              animate={{ scale: [1, 1.45, 1], opacity: [0.85, 0.15, 0.85] }}
                              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                              className="absolute inset-[-6px] rounded-full border-2 aspect-square pointer-events-none -z-10"
                              style={{ borderColor: s.color, boxShadow: `0 0 40px ${s.glowColor}` }}
                            />
                          )}
                        </div>

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
                            : 'bg-[#0a1833] text-[#c0d2eb] border-[#1a3461] hover:text-white hover:border-[#86bc25]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="text-[10.5px] font-extrabold px-1.5 py-0.5 rounded-full text-white shadow"
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
      </div>
    </div>
  );
}
