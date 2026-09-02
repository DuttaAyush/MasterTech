'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Search, FileText, Edit3, Code2, ShieldCheck, Rocket, Headphones,
  Sparkles
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

  // Continuous Zero-Delay Sequential Path Drawing Animation Loop: 01 -> 02 -> 03 -> 04 -> 05 -> 06 -> 07 -> Reset Loop
  useEffect(() => {
    let timeoutId;
    const runNextStep = (step) => {
      const nextStep = step >= 6 ? 0 : step + 1;
      const delay = 800; // 800ms per segment, zero extra pause at step 7
      timeoutId = setTimeout(() => {
        setActiveStep(nextStep);
        runNextStep(nextStep);
      }, delay);
    };

    runNextStep(0);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    /* STANDARD SECTION WITH RESTORED ROUNDED CONTAINER & BOUNDS */
    <section className="bg-[#faf7f2] text-[#1c1a18] py-12 sm:py-20 border-b border-[#e5dccf] font-sans relative overflow-hidden">
      
      {/* Outer Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#86bc25]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-[1500px] relative z-10 w-full px-4 sm:px-6 lg:px-10">
        
        {/* Outer Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 border-b border-[#e6dfd5] pb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#784813] mb-1">
              <Sparkles className="h-3.5 w-3.5 text-[#86bc25]" />
              Execution Methodology Blueprint
            </div>
            <h2 className="text-2xl sm:text-4xl font-light text-[#1c1a18] tracking-tight">
              From Idea to <span className="font-semibold text-black">Impact</span>
            </h2>
          </div>

          <div className="mt-2 sm:mt-3 md:mt-0 text-[12px] sm:text-[13px] font-medium text-[#6b6255]">
            Interactive 7-Phase Strategic Delivery Lifecycle
          </div>
        </div>

        {/* RESTORED SAPPHIRE BLUE CARD CONTAINER (ROUNDED-2XL WITH BORDER #1e3e75) */}
        <div className="w-full relative">
          <div className="relative w-full rounded-2xl border-2 border-[#1e3e75] bg-[#071329] p-3 sm:p-5 shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl text-white">
            
            {/* MOBILE VIEW BLUEPRINT DISPLAY (sm:hidden) - Uses PROCESS_MOBILE.png */}
            <div className="block sm:hidden w-full relative rounded-xl overflow-hidden bg-[#050c1a] border border-[#1b3663] p-2">
              <Image
                src="/images/PROCESS_MOBILE.png"
                alt="Execution Methodology Process Flow Blueprint Mobile"
                width={900}
                height={1400}
                priority
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

            {/* DESKTOP VIEW BLUEPRINT STAGE (hidden sm:block) - Uses PROCESS.png + Interactive Overlays */}
            <div className="hidden sm:block relative w-full h-[460px] md:h-[510px] rounded-xl overflow-hidden bg-[#050c1a] border border-[#1b3663]">
              
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

              {/* PROGRESSIVE SEQUENTIAL SVG LINE DRAWING ANIMATION (DOT TO DOT) */}
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

                  {/* 6 PROGRESSIVE REVEAL SVG MASKS FOR TRUE DOTTED LINES */}
                  {SEGMENT_PATHS.map((seg) => (
                    <mask key={`mask-${seg.id}`} id={`mask-${seg.id}`}>
                      <motion.path
                        key={`mask-path-${seg.id}-${activeStep > seg.fromStep ? 'past' : activeStep === seg.fromStep ? 'active' : 'idle'}`}
                        d={seg.d}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="30"
                        strokeLinecap="round"
                        initial={{ pathLength: activeStep > seg.fromStep ? 1 : 0 }}
                        animate={{ pathLength: activeStep >= seg.fromStep ? 1 : 0 }}
                        transition={{
                          pathLength: { duration: activeStep === seg.fromStep ? 0.8 : 0, ease: 'linear' }
                        }}
                      />
                    </mask>
                  ))}
                </defs>



                {/* 6 SEQUENTIAL DOTTED PATHS (TRUE ROUND DOTTED BEAD LINES PROGRESSIVELY REVEALED) */}
                {SEGMENT_PATHS.map((seg) => {
                  const isPastSegment = activeStep > seg.fromStep;
                  const isCurrentDrawingSegment = activeStep === seg.fromStep;
                  const isVisible = isPastSegment || isCurrentDrawingSegment;

                  if (!isVisible) return null;

                  return (
                    <g key={`group-${seg.id}`}>
                      {/* Crisp Round Dotted Line (strokeDasharray 2 12, strokeLinecap round, NO BLUR SHADOW) */}
                      <path
                        d={seg.d}
                        fill="none"
                        stroke={seg.strokeGrad}
                        strokeWidth={isCurrentDrawingSegment ? '4.5' : '3.5'}
                        strokeLinecap="round"
                        strokeDasharray="2 12"
                        mask={`url(#mask-${seg.id})`}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* OVERLAY LAYER: DOT NODES APPEARING / ACTIVATING 1-BY-1 AS LINE REACHES THEM */}
              <div className="absolute inset-0 pointer-events-none z-20">
                {PROCESS_STEPS.map((s, idx) => {
                  const Icon = s.icon;
                  const isReached = idx <= activeStep;
                  const isCurrentTarget = idx === activeStep;

                  return (
                    <div
                      key={s.id}
                      style={{ top: s.pos.top, left: s.pos.left }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex flex-col items-center"
                    >
                      {/* Step Title Badge Above Circle (Appears when Dot is Reached) */}
                      <motion.div
                        initial={false}
                        animate={{
                          scale: isCurrentTarget ? 1.12 : 1.0,
                          opacity: isReached ? 1 : 0.4
                        }}
                        transition={{ duration: 0.3 }}
                        className={`mb-2 px-3 py-0.5 rounded-full text-[11.5px] sm:text-[12.5px] font-extrabold whitespace-nowrap shadow-2xl border transition-all duration-300 ${
                          isCurrentTarget
                            ? 'bg-white text-black border-white shadow-[0_0_22px_rgba(255,255,255,1)]'
                            : isReached
                            ? 'bg-[#06142e]/95 text-white border-[#1e3c70] backdrop-blur-md'
                            : 'bg-[#040c1c]/70 text-zinc-400 border-[#152a4f]'
                        }`}
                      >
                        <span className="mr-1.5" style={{ color: s.color }}>●</span>
                        {s.num} {s.title}
                      </motion.div>

                      {/* PROPORTIONATE CONCENTRIC CIRCLE CONTAINER */}
                      <div className="relative flex items-center justify-center pointer-events-auto">

                        {/* OUTER CONCENTRIC CIRCLE */}
                        <div
                          className="p-2 sm:p-2.5 rounded-full border-2 aspect-square flex items-center justify-center shrink-0 transition-all duration-300 pointer-events-none"
                          style={{
                            borderColor: isReached ? s.color : '#1e3c70',
                            boxShadow: isCurrentTarget
                              ? `0 0 35px ${s.glowColor}, inset 0 0 15px ${s.glowColor}`
                              : isReached
                              ? `0 0 18px ${s.glowColor}`
                              : 'none',
                            opacity: isReached ? 1 : 0.45
                          }}
                        >
                          {/* INNER CONCENTRIC CIRCLE BUTTON */}
                          <button
                            type="button"
                            onClick={() => setActiveStep(idx)}
                            className={`w-15 h-15 sm:w-18 sm:h-18 aspect-square rounded-full flex items-center justify-center shrink-0 shadow-2xl transition-all duration-300 pointer-events-auto ${
                              isCurrentTarget ? 'border-white z-30 scale-105' : 'border-white/90 hover:scale-105 z-20'
                            }`}
                            style={{
                              backgroundColor: isReached ? s.color : '#0d1f3d',
                              borderColor: isReached ? '#ffffff' : '#1e3c70',
                              boxShadow: isReached ? `0 0 30px ${s.glowColor}` : 'none'
                            }}
                          >
                            <Icon
                              className={`h-7.5 w-7.5 sm:h-9 sm:w-9 transition-colors ${
                                isReached ? 'text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]' : 'text-zinc-500'
                              }`}
                              style={{ transform: 'none' }}
                            />
                          </button>
                        </div>

                        {/* Radar Glow Ring on Current Target Circle */}
                        {isCurrentTarget && (
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

          </div>
        </div>
      </div>
    </section>
  );
}
