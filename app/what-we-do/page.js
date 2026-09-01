'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
import PageShell from '@/components/site/page-shell';
import { SERVICES } from '@/lib/services-data';
import RenderIcon from '@/components/site/icon-map';

export default function WhatWeDoPage() {
  return (
    <PageShell>
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#080d1a] text-white font-sans overflow-hidden border-b border-[#1c3969]">
        <div className="relative h-[340px] md:h-[420px] w-full overflow-hidden">
          <Image
            src="/images/optimized/cloud_modernization.webp"
            alt="What We Do - MIMAG Technologies"
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

          <div className="absolute bottom-16 md:bottom-20 left-6 md:left-12 z-10 max-w-4xl">
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

      {/* 2. MAIN CONTENT AREA */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-20 font-sans border-b border-[#e3ded4]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 space-y-16">
          
          {/* Practice Overview Statement */}
          <div className="bg-white border border-[#e5dccf] rounded-xl p-8 md:p-10 shadow-sm">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-2">
              Capabilities Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#1c1a18] tracking-tight mb-3">
              Core Engineering Practices. <span className="font-bold">One Accountable Partner.</span>
            </h2>
            <p className="text-[15.5px] text-[#5c5449] font-normal leading-relaxed max-w-4xl">
              Our practice capabilities cover the full enterprise technology stack—from website and mobile application development to custom enterprise software, ERP automation, digital marketing, and autonomous AI agents.
            </p>
          </div>

          {/* 3-COLUMN SERVICES GRID */}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-7">
              {SERVICES.map((service) => {
                return (
                  <div
                    key={service.slug}
                    className="hover-mimag-border group flex flex-col justify-between bg-white border border-[#e5dccf] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div>
                      {/* Service Stock Image Header */}
                      <div className="relative h-[110px] sm:h-[160px] w-full overflow-hidden bg-[#1c1a18]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 50vw, 33vw"
                          className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a18]/90 via-[#1c1a18]/40 to-transparent" />
                        <span className="absolute top-2.5 left-2.5 bg-[#faf7f2] text-black px-2 py-0.5 rounded text-[8.5px] sm:text-[9.5px] font-extrabold uppercase tracking-wider shadow hidden sm:inline-block">
                          {service.tag}
                        </span>
                        <div className="absolute bottom-2.5 right-2.5 flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-[#1c1a18]/90 border border-white/20 text-[#86bc25] shadow-lg shrink-0">
                          <RenderIcon name={service.icon} className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" />
                        </div>
                      </div>

                      <div className="p-3.5 sm:p-6">
                        <h3 className="text-[14px] sm:text-[21px] font-bold text-[#1c1a18] mb-1.5 sm:mb-2 tracking-tight group-hover:text-[#5e8817] transition-colors leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-[11.5px] sm:text-[13.5px] text-[#5c5449] leading-relaxed font-normal mb-3 sm:mb-5 line-clamp-3">
                          {service.summary}
                        </p>

                        <div className="border-t border-[#f2ece2] pt-2 sm:pt-3 mb-2 hidden sm:block">
                          <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#784813] block mb-2.5">
                            Core Capabilities & Deliverables
                          </span>
                          <ul className="space-y-2">
                            {service.capabilities.slice(0, 3).map((cap, i) => (
                              <li key={i} className="text-[12.5px] text-[#4a4338] font-medium flex items-center gap-2">
                                <CheckCircle className="h-3.5 w-3.5 text-[#86bc25] shrink-0" />
                                <span className="truncate">{cap}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="px-3.5 sm:px-6 py-2.5 sm:py-4 border-t border-[#f2ece2] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                      <div className="hidden sm:flex items-center gap-3">
                        {service.metrics.slice(0, 1).map((m, idx) => (
                          <div key={idx} className="text-left">
                            <span className="block text-sm font-extrabold text-[#1c1a18]">{m.value}</span>
                            <span className="text-[10px] text-[#784813] font-bold uppercase truncate">{m.label}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`/what-we-do/${service.slug}`}
                        className="group/btn inline-flex items-center justify-center gap-1.5 text-[11.5px] sm:text-[12.5px] font-bold text-black bg-[#86bc25] hover:bg-[#97d031] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm hover:shadow-lg transition-all duration-200 w-full sm:w-auto"
                      >
                        <span>Explore</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-black group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Consultation Intake Card */}
          <div className="hover-mimag-border bg-white border border-[#e5dccf] rounded-xl p-8 md:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#784813] block mb-1">
                Direct Advisory Intake
              </span>
              <h3 className="text-2xl font-light text-[#1c1a18] tracking-tight">
                Evaluate your architectural roadmap with <span className="font-bold">MIMAG</span>
              </h3>
              <p className="text-[14px] text-[#6b6255] mt-1 font-normal max-w-2xl">
                Connect directly with a senior practice partner to evaluate your software architecture, web/mobile development, ERP, or AI deployment under mutual NDA.
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
