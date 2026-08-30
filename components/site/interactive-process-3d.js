'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Search, LineChart, Edit3, Code2, ShieldCheck, Rocket, Headphones,
  Sparkles, Eye, Maximize2, ArrowRight, ArrowLeft
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    id: '01',
    num: '01',
    title: 'Discover & Plan',
    shortDesc: 'We understand your business, challenges, and goals through deep domain exploration.',
    icon: Search,
    color: '#3b82f6', // Electric Blue
    glowColor: 'rgba(59, 130, 246, 0.6)',
    duration: '2 - 3 Weeks',
    zoomOrigin: '12% 20%',
    scale: 2.1
  },
  {
    id: '02',
    num: '02',
    title: 'Analyze & Strategize',
    shortDesc: 'We research, analyze, and create a tailored architectural strategy and roadmap.',
    icon: LineChart,
    color: '#2563eb', // Cobalt Blue
    glowColor: 'rgba(37, 99, 235, 0.6)',
    duration: '3 - 4 Weeks',
    zoomOrigin: '28% 48%',
    scale: 2.1
  },
  {
    id: '03',
    num: '03',
    title: 'Design & Prototype',
    shortDesc: 'We craft user-centric designs and interactive prototypes to visualize the solution.',
    icon: Edit3,
    color: '#06b6d4', // Cyan
    glowColor: 'rgba(6, 182, 212, 0.6)',
    duration: '3 - 5 Weeks',
    zoomOrigin: '54% 28%',
    scale: 2.1
  },
  {
    id: '04',
    num: '04',
    title: 'Build & Develop',
    shortDesc: 'Our senior experts build robust, scalable, and resilient enterprise solutions.',
    icon: Code2,
    color: '#10b981', // Emerald Green
    glowColor: 'rgba(16, 185, 129, 0.6)',
    duration: '6 - 12 Weeks',
    zoomOrigin: '76% 56%',
    scale: 2.1
  },
  {
    id: '05',
    num: '05',
    title: 'Test & Assure',
    shortDesc: 'We ensure bulletproof quality and latency performance through rigorous testing.',
    icon: ShieldCheck,
    color: '#f59e0b', // Amber Gold
    glowColor: 'rgba(245, 158, 11, 0.6)',
    duration: '2 - 4 Weeks',
    zoomOrigin: '20% 78%',
    scale: 2.1
  },
  {
    id: '06',
    num: '06',
    title: 'Deploy & Launch',
    shortDesc: 'We deploy seamlessly into production and ensure a smooth operational cutover.',
    icon: Rocket,
    color: '#f97316', // Sunset Orange
    glowColor: 'rgba(249, 115, 22, 0.6)',
    duration: '1 - 2 Weeks',
    zoomOrigin: '48% 76%',
    scale: 2.1
  },
  {
    id: '07',
    num: '07',
    title: 'Deliver & Support',
    shortDesc: 'We deliver measurable value and provide continuous ongoing partner support.',
    icon: Headphones,
    color: '#a855f7', // Neon Purple
    glowColor: 'rgba(168, 85, 247, 0.6)',
    duration: 'Ongoing SLA',
    zoomOrigin: '82% 82%',
    scale: 2.1
  }
];

export default function InteractiveProcess3D() {
  const [activeStep, setActiveStep] = useState(0);
  const [isOverview, setIsOverview] = useState(false);
  const imageStageRef = useRef(null);
  const activeStepRef = useRef(0);
  const isCooldownRef = useRef(false);

  // Keep ref synchronized
  useEffect(() => {
    activeStepRef.current = activeStep;
  }, [activeStep]);

  // Non-passive wheel event listener for lag-free step cycling & instant boundary release
  useEffect(() => {
    const el = imageStageRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (isOverview) return;

      const current = activeStepRef.current;

      if (e.deltaY > 0) {
        // Scrolling DOWN over the image
        if (current < PROCESS_STEPS.length - 1) {
          // Inside 01 to 06: Intercept & step forward cleanly
          e.preventDefault();
          e.stopPropagation();

          if (!isCooldownRef.current) {
            isCooldownRef.current = true;
            setActiveStep((prev) => {
              const next = Math.min(PROCESS_STEPS.length - 1, prev + 1);
              activeStepRef.current = next;
              return next;
            });
            setTimeout(() => {
              isCooldownRef.current = false;
            }, 120);
          }
        }
        // At Step 7 (current === 6): Do NOT call preventDefault! Allows immediate natural scroll down!
      } else if (e.deltaY < 0) {
        // Scrolling UP over the image
        if (current > 0) {
          // Inside 02 to 07: Intercept & step backward cleanly
          e.preventDefault();
          e.stopPropagation();

          if (!isCooldownRef.current) {
            isCooldownRef.current = true;
            setActiveStep((prev) => {
              const next = Math.max(0, prev - 1);
              activeStepRef.current = next;
              return next;
            });
            setTimeout(() => {
              isCooldownRef.current = false;
            }, 120);
          }
        }
        // At Step 1 (current === 0): Do NOT call preventDefault! Allows immediate natural scroll up!
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [isOverview]);

  const currentData = PROCESS_STEPS[activeStep];

  return (
    <section className="relative bg-gradient-to-b from-[#080d1a] via-[#0b172c] to-[#080d1a] text-white font-sans border-b border-[#1c3969] py-16 lg:py-20 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#86bc25]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 border-b border-[#1e3c70] pb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#63a3ff] mb-1">
              <Sparkles className="h-3.5 w-3.5 text-[#86bc25]" />
              Execution Methodology Blueprint
            </div>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              From Idea to <span className="font-semibold text-[#86bc25]">Impact</span>
            </h2>
          </div>

          {/* Controls & Mode Switcher */}
          <div className="flex items-center gap-3 mt-3 md:mt-0">
            <span className="text-[12px] text-zinc-400 font-medium hidden sm:inline">
              Hover image & scroll to cycle steps 01 – 07
            </span>
            <button
              type="button"
              onClick={() => setIsOverview(!isOverview)}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border text-[12px] font-bold transition-all shadow-md ${
                isOverview
                  ? 'bg-[#86bc25] text-black border-[#86bc25]'
                  : 'bg-[#0c1c38] text-white border-[#1e3c70] hover:border-white'
              }`}
            >
              {isOverview ? <Maximize2 className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5 text-[#86bc25]" />}
              <span>{isOverview ? 'Resume Stage Zoom' : 'Full Overview'}</span>
            </button>
          </div>
        </div>

        {/* FULL WIDTH IMAGE STAGE (NO SIDE CARD) */}
        <div
          ref={imageStageRef}
          className="w-full relative cursor-ns-resize"
        >
          <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#1e3e75] bg-[#071329] p-3 sm:p-5 shadow-[0_25px_80px_rgba(0,0,0,0.8)] backdrop-blur-xl">
            
            {/* Overlay Header Bar inside Image Box */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-[#1b3a6b] mb-3 bg-[#061329]/90 rounded-lg text-[12px]">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-md font-extrabold text-black text-[12px]"
                  style={{ backgroundColor: currentData.color }}
                >
                  {currentData.num}
                </div>
                <div>
                  <span className="font-extrabold text-white text-[14px]">
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

            {/* Dynamic Deep Zoom Image Stage (Full Width Container) */}
            <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full rounded-xl overflow-hidden bg-[#050c1a] border border-[#1b3663]">
              <motion.div
                animate={{
                  scale: isOverview ? 1.0 : currentData.scale,
                  transformOrigin: isOverview ? 'center center' : currentData.zoomOrigin
                }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="w-full h-full relative"
              >
                <Image
                  src="/images/PROCESS.png"
                  alt="From Idea to Impact Process Flow Blueprint"
                  fill
                  priority
                  className="object-contain p-1"
                />
              </motion.div>

              {/* Pulsing Target Ring at Zoom Focus */}
              {!isOverview && (
                <motion.div
                  key={activeStep}
                  initial={{ scale: 1.4, opacity: 0.9 }}
                  animate={{ scale: 1.0, opacity: 0.25 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 pointer-events-none border-2 border-[#86bc25] rounded-xl shadow-[inset_0_0_60px_rgba(134,188,37,0.35)]"
                />
              )}
            </div>

            {/* Full-Width Stepper Navigation Bar (01 to 07) */}
            <div className="mt-3 pt-2.5 border-t border-[#1b3a6b] flex items-center justify-between gap-2">
              <div className="flex-1 flex items-center gap-2 overflow-x-auto no-scrollbar">
                {PROCESS_STEPS.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => {
                        setIsOverview(false);
                        setActiveStep(idx);
                      }}
                      className={`flex-1 min-w-[120px] sm:min-w-[150px] py-2 px-3 rounded-lg text-left transition-all border ${
                        isActive
                          ? 'bg-white text-black border-white shadow-lg font-bold'
                          : 'bg-[#0a1833] text-zinc-300 border-[#1a3461] hover:text-white hover:border-[#86bc25]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[10.5px] font-extrabold px-1.5 py-0.5 rounded text-black"
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

              <div className="hidden sm:flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => {
                    setIsOverview(false);
                    setActiveStep((prev) => Math.max(0, prev - 1));
                  }}
                  className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-[#1e3c70] bg-[#0c1c38] text-white hover:border-[#86bc25] disabled:opacity-40 disabled:pointer-events-none transition-all shadow"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  disabled={activeStep === PROCESS_STEPS.length - 1}
                  onClick={() => {
                    setIsOverview(false);
                    setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1));
                  }}
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
