'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Pause, Play, Quote, Award } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'Apex Capital Markets',
    avatar: '/images/optimized/avatar_1.webp',
    metric: '€1.9B Saved',
    metricDesc: 'annual infrastructure run-cost',
    quote:
      'MIMAG Technologies transformed our legacy core banking architecture across 14 European markets. Their senior partner-only model delivered auditable results where legacy consultancies failed.',
    rating: 5,
    sector: 'Banking & Financial Tech',
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'SVP of Infrastructure & Security',
    company: 'Horizon Health Systems',
    avatar: '/images/optimized/avatar_2.webp',
    metric: '11.4M Records',
    metricDesc: 'patient data fabric unified',
    quote:
      'The clinical patient data fabric built by MIMAG unified millions of hospital records with zero-trust security. Their deep engineering fluency saved us over 18 months of development time.',
    rating: 5,
    sector: 'Healthcare & Clinical Data',
  },
  {
    id: 3,
    name: 'Julian Sterling',
    role: 'Chief Information Officer',
    company: 'Aegis Defense & Aerospace',
    avatar: '/images/optimized/avatar_3.webp',
    metric: '38% Acceleration',
    metricDesc: 'faster claims resolution throughput',
    quote:
      'Deploying sovereign LLM retrieval architectures in highly regulated perimeters required extreme rigor. MIMAG was the only partner capable of delivering zero-latency compliance.',
    rating: 5,
    sector: 'Cybersecurity & Defense',
  },
  {
    id: 4,
    name: 'Sarah Lin',
    role: 'Global VP of Grid Technology',
    company: 'Vanguard Power & Energy',
    avatar: '/images/optimized/avatar_4.webp',
    metric: '99.999% SLA',
    metricDesc: 'zero-downtime grid migration',
    quote:
      'Their 100% vendor-agnostic posture gave our board total confidence. They modernized our real-time streaming data layer seamlessly without a single micro-outage.',
    rating: 5,
    sector: 'Energy & Autonomous Ops',
  },
];

export default function RotatingTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Helper to determine offset relative to active card (-1, 0, 1, etc.)
  const getOffset = (index) => {
    const total = testimonials.length;
    let diff = index - activeIndex;
    if (diff < -1) diff += total;
    if (diff > 1) diff -= total;
    return diff;
  };

  return (
    <section className="relative bg-[#f4f5f7] text-[#1c1a18] py-14 border-b border-[#e1e4e8] font-sans overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#86bc25]/15 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-[#3b82f6]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-l-4 border-[#86bc25] pl-5">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#5e8817] block mb-1">
              Client Endorsements & Proven Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#1c1a18] tracking-tight">
              Trusted by C-Suite Leaders in <span className="font-semibold text-black">High-Consequence Sectors</span>
            </h2>
          </div>

          <div className="mt-3 md:mt-0 flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="h-9 w-9 rounded-full bg-white border border-[#d8dce2] flex items-center justify-center text-black hover:border-[#86bc25] hover:bg-[#86bc25] hover:text-black transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="h-9 w-9 rounded-full bg-white border border-[#d8dce2] flex items-center justify-center text-black hover:border-[#86bc25] hover:bg-[#86bc25] hover:text-black transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 3D Rotating Wheel Container */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative min-h-[320px] md:min-h-[290px] flex items-center justify-center perspective-[1200px] py-4"
        >
          {testimonials.map((item, idx) => {
            const offset = getOffset(idx);
            const isActive = offset === 0;
            const isLeft = offset === -1 || (offset === testimonials.length - 1 && testimonials.length > 2);
            const isRight = offset === 1 || (offset === -(testimonials.length - 1) && testimonials.length > 2);

            // Hide cards that are further away
            if (!isActive && !isLeft && !isRight) return null;

            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={{
                  scale: isActive ? 1 : 0.8,
                  rotateY: isActive ? 0 : isLeft ? 22 : -22,
                  x: isActive ? '0%' : isLeft ? '-48%' : '48%',
                  z: isActive ? 0 : -120,
                  opacity: isActive ? 1 : 0.4,
                }}
                whileHover={{
                  scale: 1.08,
                  rotateY: 0,
                  x: isActive ? '0%' : isLeft ? '-32%' : '32%',
                  z: 140,
                  y: -14,
                  opacity: 1,
                  transition: { type: 'spring', stiffness: 350, damping: 22 },
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveIndex(idx)}
                className={`absolute w-full max-w-2xl cursor-pointer rounded-xl border p-5 md:p-6 transition-colors duration-300 ${
                  isActive
                    ? 'bg-white border-[#86bc25] shadow-[0_20px_50px_rgba(134,188,37,0.12)] z-30'
                    : 'bg-[#ebecef] border-[#d4d8de] z-10 hover:z-40 hover:bg-white hover:border-[#86bc25] hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Card Top: Sector Tag & Metric Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-[#f0eae1] pb-3">
                  <div className="flex items-center gap-2">
                    <Quote className="h-5 w-5 text-[#86bc25]" />
                    <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#7a7267]">
                      {item.sector}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 bg-[#f4f7ed] border border-[#d6e8b8] px-3 py-1 rounded-full">
                    <Award className="h-3.5 w-3.5 text-[#5e8817]" />
                    <span className="text-[12px] font-bold text-[#294205]">{item.metric}</span>
                    <span className="text-[10.5px] font-medium text-[#556938] hidden sm:inline">• {item.metricDesc}</span>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-[14.5px] md:text-[15.5px] font-light italic leading-relaxed text-[#1c1a18] mb-5">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Client Profile */}
                <div className="flex items-center justify-between pt-3 border-t border-[#f0eae1]">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-[#86bc25] shadow-sm">
                      <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-[14.5px] font-bold text-[#1c1a18] tracking-tight">{item.name}</h4>
                      <p className="text-[12px] text-[#6b645b] font-medium">
                        {item.role} · <span className="text-[#5e8817] font-semibold">{item.company}</span>
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-[#999999] uppercase tracking-wider hidden sm:block">
                    Audited Partner Case
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-7 bg-[#86bc25]' : 'w-2 bg-[#cbd2db] hover:bg-[#999999]'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
