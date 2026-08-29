'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, ShieldCheck, Cpu, Database, CheckCircle } from 'lucide-react';
import PageShell from '@/components/site/page-shell';

const visionPillars = [
  {
    icon: Cpu,
    title: 'Sovereign AI Retrieval Fabrics',
    desc: 'Deploying domain-specific LLM intelligence perimeters on isolated cloud hardware without data leak risks.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Trust Perimeter Defense',
    desc: 'Securing global identities, dynamic microservices, and hybrid workloads against modern nation-state vectors.',
  },
  {
    icon: Database,
    title: 'Autonomous Data Engineering',
    desc: 'Consolidating multi-cloud data lakes into single real-time semantic layers accessible across corporate pods.',
  },
];

export default function OurVisionPage() {
  return (
    <PageShell>
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#080d1a] text-white font-sans overflow-hidden border-b border-[#1c3969]">
        <div className="relative h-[340px] md:h-[420px] w-full overflow-hidden">
          <Image
            src="/images/optimized/cloud_modernization.webp"
            alt="Our Vision"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/40 to-transparent" />
          
          <div className="absolute top-8 left-6 md:left-12 z-10 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
            <Link href="/who-we-are" className="hover:underline text-white/70">Who we are</Link>
            <span>&gt;</span>
            <span className="text-[#86bc25]">Our Vision</span>
          </div>

          <div className="absolute bottom-10 left-6 md:left-12 z-10 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
              Our <span className="font-semibold text-[#86bc25]">Vision</span>
            </h1>
            <div className="mt-3 border-l-4 border-[#86bc25] pl-4 py-1">
              <p className="text-lg md:text-2xl font-light italic text-[#cbe395] leading-relaxed">
                &ldquo;Architecting sovereign, zero-trust, and AI-optimized enterprise technology fabrics for 2030 and beyond.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-20 font-sans border-b border-[#e3ded4]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 space-y-20">
          
          {/* Main Vision Card */}
          <div className="grid lg:grid-cols-12 gap-10 items-center bg-white border border-[#e5dccf] rounded-xl p-8 md:p-12 shadow-sm">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider bg-[#f4ece1] text-[#784813] px-3 py-1 rounded">
                <Sparkles className="h-3.5 w-3.5 text-[#5e8817]" /> 2030 Strategic Horizon
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-[#1c1a18] tracking-tight">
                Empowering Sovereign, Resilient, & <span className="font-bold">AI-Driven Enterprises</span>
              </h2>
              <p className="text-[15px] text-[#554e44] font-normal leading-relaxed">
                We envision a future where enterprise technology systems are inherently sovereign, zero-trust by default, and continuously optimized by sovereign artificial intelligence. We build software architectures that outlast market cycles and protect enterprise value.
              </p>

              <div className="pt-4 grid sm:grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-[#faf7f2] rounded border border-[#e5dccf]">
                  <span className="block text-2xl font-extrabold text-[#1c1a18]">100%</span>
                  <span className="text-[11px] font-bold text-[#784813] uppercase tracking-wider">Sovereign Control</span>
                </div>
                <div className="p-3 bg-[#faf7f2] rounded border border-[#e5dccf]">
                  <span className="block text-2xl font-extrabold text-[#5e8817]">Zero</span>
                  <span className="text-[11px] font-bold text-[#784813] uppercase tracking-wider">Trust Perimeter</span>
                </div>
                <div className="p-3 bg-[#faf7f2] rounded border border-[#e5dccf]">
                  <span className="block text-2xl font-extrabold text-[#1c1a18]">Audited</span>
                  <span className="text-[11px] font-bold text-[#784813] uppercase tracking-wider">ROI SLAs</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[300px] md:h-[360px] rounded-xl overflow-hidden bg-[#1c1a18]">
              <Image
                src="/images/optimized/cloud_autonomous.webp"
                alt="MIMAG Vision"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a18]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] font-bold text-[#86bc25] uppercase tracking-wider block mb-1">Executive Commitment</span>
                <p className="text-[13.5px] text-white font-medium italic">
                  &ldquo;Building software systems that protect, scale, and transform enterprise value.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Pillars Grid */}
          <div>
            <div className="mb-10 border-l-4 border-[#86bc25] pl-5">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-1">
                Technological Pillars
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#1c1a18] tracking-tight">
                Architecting the <span className="font-bold text-black">Next Decade of IT</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visionPillars.map((p, idx) => (
                <div
                  key={idx}
                  className="hover-mimag-border bg-white border border-[#e5dccf] rounded-xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f4ece1] text-[#784813] mb-5">
                      <p.icon className="h-5.5 w-5.5" />
                    </div>
                    <h3 className="text-[18px] font-bold text-[#1c1a18] mb-2 tracking-tight">{p.title}</h3>
                    <p className="text-[13.5px] text-[#6b6255] font-normal leading-relaxed">{p.desc}</p>
                  </div>
                  
                  <div className="pt-4 mt-6 border-t border-[#f2ece2] flex items-center justify-between text-[11.5px] font-bold text-[#5e8817]">
                    <span>Vision Pillar 0{idx + 1}</span>
                    <CheckCircle className="h-3.5 w-3.5 text-[#86bc25]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Intake Card */}
          <div className="hover-mimag-border bg-white border border-[#e5dccf] rounded-xl p-8 md:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#784813] block mb-1">
                Strategic Advisory Intake
              </span>
              <h3 className="text-2xl font-light text-[#1c1a18] tracking-tight">
                Turn vision into <span className="font-bold text-[#5e8817]">production software</span>
              </h3>
              <p className="text-[14px] text-[#6b6255] mt-1 font-normal max-w-2xl">
                Read our field perspectives or request an architectural review of your enterprise stack.
              </p>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 bg-[#1c1a18] text-white text-[14px] font-bold px-7 py-3.5 rounded shadow hover:bg-[#86bc25] hover:text-black transition-all shrink-0"
            >
              <span>Read perspectives</span>
              <ArrowUpRight className="h-4.5 w-4.5" />
            </Link>
          </div>

        </div>
      </section>
    </PageShell>
  );
}
