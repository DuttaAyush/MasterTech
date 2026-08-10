'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronDown, CheckCircle } from 'lucide-react';
import PageShell from '@/components/site/page-shell';
import { SERVICES } from '@/lib/services-data';

export default function WhatWeDoPage() {
  const [showAll, setShowAll] = useState(false);

  // Show 4 services initially, or all 7 when expanded
  const visibleServices = showAll ? SERVICES : SERVICES.slice(0, 4);

  return (
    <PageShell>
      {/* Editorial Top Hero Banner */}
      <section className="relative bg-[#080d1a] text-white font-sans overflow-hidden border-b border-[#1c3969]">
        <div className="relative h-[320px] md:h-[400px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="What We Do - Mimang Technologies"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/40 to-transparent" />
          
          <div className="absolute top-8 left-6 md:left-12 z-10 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
            <Link href="/" className="hover:underline text-white/70">Home</Link>
            <span>&gt;</span>
            <span className="text-[#86bc25]">What We Do</span>
          </div>

          <div className="absolute bottom-8 left-6 md:left-12 z-10 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
              Our <span className="font-semibold text-[#86bc25]">Capabilities & Services</span>
            </h1>
            <div className="mt-3 border-l-4 border-[#86bc25] pl-4 py-1">
              <p className="text-lg md:text-2xl font-light italic text-[#cbe395] leading-relaxed">
                &ldquo;Engineering high-consequence enterprise platforms with zero compromise and senior practitioner delivery.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Unified Beige Content Area */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-20 font-sans border-b border-[#e3ded4]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 space-y-16">
          
          {/* Practice Overview Statement */}
          <div className="bg-white border border-[#e5dccf] rounded-xl p-8 md:p-10 shadow-sm">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-2">
              Capabilities Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#1c1a18] tracking-tight mb-3">
              Seven Practice Areas. <span className="font-bold">One Accountable Partner.</span>
            </h2>
            <p className="text-[15.5px] text-[#5c5449] font-normal leading-relaxed max-w-4xl">
              Our practice capabilities cover the full enterprise technology stack—from board-level architectural strategy to hands-on SRE deployment, sovereign AI pipelines, and zero-trust perimeter defense.
            </p>
          </div>

          {/* Services Grid */}
          <div>
            <div className="flex items-center justify-between border-b border-[#e5dccf] pb-4 mb-8">
              <span className="text-[12px] font-extrabold text-[#784813] uppercase tracking-wider">
                Showing {visibleServices.length} of {SERVICES.length} Practices
              </span>
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 text-[13px] font-bold text-[#1c1a18] bg-white border border-[#e5dccf] px-4 py-2 rounded-lg hover:border-[#86bc25] hover:text-[#5e8817] transition-all shadow-sm"
              >
                <span>{showAll ? 'Show Featured Practices (4)' : `View All Services (${SERVICES.length})`}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-8">
              {visibleServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.slug}
                    className="hover-mimag-border bg-white border border-[#e5dccf] rounded-xl p-4 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <span className="text-[9px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#784813] bg-[#f4ece1] px-2 sm:px-3 py-0.5 sm:py-1 rounded truncate max-w-[80%]">
                          {service.tag}
                        </span>
                        <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-[#1c1a18] text-[#86bc25] shrink-0">
                          <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                      </div>

                      <h3 className="text-[14px] sm:text-[22px] font-bold text-[#1c1a18] mb-2 sm:mb-3 tracking-tight line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-[12px] sm:text-[14px] text-[#5c5449] leading-relaxed font-normal mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                        {service.summary}
                      </p>

                      <div className="border-t border-[#f2ece2] pt-3 sm:pt-4 mb-4 sm:mb-6 hidden sm:block">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#784813] block mb-3">
                          Core Capabilities
                        </span>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {service.capabilities.slice(0, 4).map((cap, i) => (
                            <li key={i} className="text-[12.5px] text-[#4a4338] font-medium flex items-center gap-2">
                              <CheckCircle className="h-3.5 w-3.5 text-[#86bc25] shrink-0" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-3 sm:pt-4 border-t border-[#f2ece2] flex items-center justify-between">
                      <div className="flex items-center gap-2 sm:gap-4">
                        {service.metrics.slice(0, 1).map((m, idx) => (
                          <div key={idx} className="text-left">
                            <span className="block text-xs sm:text-sm font-extrabold text-[#1c1a18]">{m.value}</span>
                            <span className="text-[9px] sm:text-[10px] text-[#784813] font-bold uppercase truncate max-w-[65px] sm:max-w-none">{m.label}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`/what-we-do/${service.slug}`}
                        className="inline-flex items-center gap-1 text-[11px] sm:text-[13px] font-bold text-[#1c1a18] hover:text-[#5e8817] transition-colors shrink-0"
                      >
                        <span>Explore</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-[#86bc25]" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Expand Toggle Bar */}
            {!showAll && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center gap-2 bg-[#1c1a18] text-white text-[14px] font-bold px-8 py-4 rounded-lg shadow-md hover:bg-[#86bc25] hover:text-black transition-all"
                >
                  <span>View All {SERVICES.length} Capabilities</span>
                  <ChevronDown className="h-4.5 w-4.5" />
                </button>
              </div>
            )}
          </div>

          {/* Consultation Intake Card */}
          <div className="hover-mimag-border bg-white border border-[#e5dccf] rounded-xl p-8 md:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#784813] block mb-1">
                Direct Advisory Intake
              </span>
              <h3 className="text-2xl font-light text-[#1c1a18] tracking-tight">
                Evaluate your architectural roadmap with <span className="font-bold">Mimang</span>
              </h3>
              <p className="text-[14px] text-[#6b6255] mt-1 font-normal max-w-2xl">
                Connect directly with a senior practice partner to evaluate your cloud modernization, AI deployment, or architectural challenges under mutual NDA.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1c1a18] text-white text-[14px] font-bold px-7 py-3.5 rounded shadow hover:bg-[#86bc25] hover:text-black transition-all shrink-0"
            >
              <span>Schedule a consultation</span>
              <ArrowUpRight className="h-4.5 w-4.5" />
            </Link>
          </div>

        </div>
      </section>
    </PageShell>
  );
}
