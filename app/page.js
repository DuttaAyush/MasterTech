'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, ArrowRight, Cloud, Cpu, ShieldCheck, Workflow, Database, Layers,
  BookOpen, Download, CheckCircle, Sparkles
} from 'lucide-react';
import PageShell from '@/components/site/page-shell';

const HERO_IMG =
  'https://images.unsplash.com/photo-1615225164633-69f53b1dfd74?crop=entropy&cs=srgb&fm=jpg&q=85';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Modernization',
    body: 'Migrate mission-critical workloads and re-architect for AWS, Azure, and GCP with audited financial and latency outcomes.',
    tags: ['Cloud Migration', 'FinOps Governance', 'Platform Engineering'],
    tagColor: 'text-[#b45309] bg-[#fffbeb] border-[#fde68a]',
  },
  {
    icon: Cpu,
    title: 'AI & Applied Intelligence',
    body: 'From sovereign foundation model strategy to production LLM retrieval architectures, RAG systems, and compliance in regulated markets.',
    tags: ['LLMOps & RAG', 'Enterprise ML Platforms', 'Sovereign AI'],
    tagColor: 'text-[#047857] bg-[#ecfdf5] border-[#a7f3d0]',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity & Zero Trust',
    body: 'Zero-trust architecture, automated SOC threat detection, and cryptographic identity modernization for high-consequence perimeters.',
    tags: ['Zero Trust Identity', 'IAM Modernization', 'SOC Automation'],
    tagColor: 'text-[#1d4ed8] bg-[#eff6ff] border-[#bfdbfe]',
  },
  {
    icon: Workflow,
    title: 'Digital Transformation',
    body: 'Operating model modernization, agile product engineering, and executive change delivered exclusively by accountable senior partners.',
    tags: ['Product Engineering', 'Agile Architecture', 'Executive Change'],
    tagColor: 'text-[#b45309] bg-[#fffbeb] border-[#fde68a]',
  },
  {
    icon: Database,
    title: 'Data Fabric & Analytics',
    body: 'Modern enterprise lakehouses, real-time streaming pipelines, and standardized semantic layers that make data immediately decision-ready.',
    tags: ['Data Lakehouses', 'Real-Time Streaming', 'Semantic BI'],
    tagColor: 'text-[#047857] bg-[#ecfdf5] border-[#a7f3d0]',
  },
  {
    icon: Layers,
    title: 'Enterprise Architecture',
    body: 'Reference API models, microservices governance, and enterprise integration standards designed to remain resilient for decades.',
    tags: ['EA Governance', 'Microservices APIs', 'Legacy Modernization'],
    tagColor: 'text-[#1d4ed8] bg-[#eff6ff] border-[#bfdbfe]',
  },
];

const industries = [
  { title: 'Banking & Capital Markets', image: 'https://images.unsplash.com/photo-1561233835-f937539b95b9?crop=entropy&cs=srgb&fm=jpg&q=85', href: '/industries', label: 'Financial Infrastructure' },
  { title: 'Cyber AI & Defense Systems', image: 'https://images.unsplash.com/photo-1615225164633-69f53b1dfd74?crop=entropy&cs=srgb&fm=jpg&q=85', href: '/industries', label: 'National Security' },
  { title: 'Cloud & Autonomous Ops', image: 'https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?crop=entropy&cs=srgb&fm=jpg&q=85', href: '/industries', label: 'Autonomous Systems' },
  { title: 'Energy Transition & Grid AI', image: 'https://images.unsplash.com/photo-1601785491008-d1153dfadd57?crop=entropy&cs=srgb&fm=jpg&q=85', href: '/industries', label: 'Grid Resiliency' },
  { title: 'Healthcare Interoperability', image: 'https://images.unsplash.com/photo-1708651949057-34781b3cbdcd?crop=entropy&cs=srgb&fm=jpg&q=85', href: '/industries', label: 'Clinical Fabrics' },
];

const work = [
  {
    kicker: 'Global Tier-1 Bank · 24 Month Program',
    title: 'Core banking architecture modernization across 14 sovereign European markets.',
    metric: '€1.9B',
    metricLabel: 'annual infrastructure run-cost reduction',
    href: '/our-work',
  },
  {
    kicker: 'Fortune 100 Insurer · 18 Month Program',
    title: 'Enterprise LLM claims validation platform for commercial underwriting.',
    metric: '38%',
    metricLabel: 'faster claim resolution throughput',
    href: '/our-work',
  },
  {
    kicker: 'National Health System · 220 Hospitals',
    title: 'Clinical patient data fabric and diagnostic record interoperability network.',
    metric: '11.4M',
    metricLabel: 'patient records unified securely',
    href: '/our-work',
  },
];

const insights = [
  {
    tag: 'Technical Whitepaper · PDF Download',
    title: 'Regulatory-Grade AI & Sovereign LLM Deployments in Global Banking',
    read: '48 Page Architecture Blueprint',
    href: '/reports',
  },
  {
    tag: 'Editorial Point of View',
    title: 'The Next Enterprise AI Stack: What CIOs Must Architect for in 2026',
    read: '12 min read · Dr. Aris Thorne',
    href: '/blogs',
  },
  {
    tag: 'Field Research Briefing',
    title: 'Why Autonomous Platform Teams Outperform Legacy PMO Models at Scale',
    read: '7 min read · Transformation Series',
    href: '/blogs',
  },
];

export default function HomePage() {
  return (
    <PageShell>
      {/* 1. TOP SECTION: EXECUTIVE BLACK HERO WITH 3D ORBITAL SPHERE */}
      <section className="relative bg-[#000000] text-white overflow-hidden font-sans border-b border-[#1a1a1a]">
        <div className="absolute inset-0 -z-10">
          <Image src={HERO_IMG} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/90 to-[#000000]/70" />
        </div>

        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 pt-16 lg:pt-24 pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Executive Copy & Actions */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#86bc25]"
              >
                <span className="h-2 w-2 rounded-full bg-[#86bc25] animate-pulse" />
                Executive Technology Advisory & Architecture
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mt-6 text-[36px] sm:text-[46px] lg:text-[52px] font-light leading-[1.08] tracking-[-0.02em] text-white text-balance"
              >
                Intelligence That Shapes <br />
                <strong className="font-semibold text-[#86bc25]">Better Enterprise Decisions.</strong>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-5 text-[15.5px] md:text-[17px] font-light leading-relaxed text-[#a3a3a3] max-w-2xl"
              >
                We connect cloud modernization, applied AI, and zero-trust cybersecurity directly to audited revenue and latency outcomes. Built for demanding C-suite leaders where the cost of a wrong architectural move is too high to guess.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-sm bg-[#86bc25] px-6 py-3.5 text-[14px] font-semibold text-black transition-all hover:bg-[#97d031]"
                >
                  <span>Talk to senior partners</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/what-we-do"
                  className="inline-flex items-center gap-2 rounded-sm border border-[#333333] bg-[#141414] px-6 py-3.5 text-[14px] font-medium text-white transition-all hover:border-[#86bc25]"
                >
                  <span>Explore capabilities</span>
                  <ArrowRight className="h-4 w-4 text-[#86bc25]" />
                </Link>
              </motion.div>

              {/* INTELVIST TRUST DIVIDER BAR */}
              <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#262626] pt-7">
                <div>
                  <span className="block text-[15px] font-semibold text-white tracking-tight">Revenue-Linked</span>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-[#86bc25]">EVERY ENGAGEMENT</span>
                </div>
                <div className="sm:border-l sm:border-[#262626] sm:pl-6">
                  <span className="block text-[15px] font-semibold text-white tracking-tight">C-Suite Ready</span>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-[#86bc25]">DELIVERABLE STANDARD</span>
                </div>
                <div className="sm:border-l sm:border-[#262626] sm:pl-6">
                  <span className="block text-[15px] font-semibold text-white tracking-tight">Senior-Practitioners</span>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-[#86bc25]">OUR ONLY MODE</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Glowing Orbital Sphere */}
            <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative min-h-[380px]">
              <div className="relative w-80 h-80 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-[#86bc25]/30 shadow-[0_0_45px_rgba(134,188,37,0.15)]"
                />
                <motion.div
                  animate={{ rotate: -360, scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                  className="absolute w-64 h-64 rounded-full border border-zinc-700/80 p-4 flex items-center justify-center"
                >
                  <div className="w-full h-full rounded-full border border-dotted border-[#86bc25]/50" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.04, 1], rotate: [0, 90, 0] }}
                  transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
                  className="relative w-44 h-44 rounded-full bg-gradient-to-tr from-[#000000] via-[#141d0b] to-[#86bc25] p-[2px] shadow-2xl shadow-[#86bc25]/40"
                >
                  <div className="w-full h-full rounded-full bg-[#05070a] flex flex-col items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(134,188,37,0.25),transparent_70%)]" />
                    <div className="grid grid-cols-4 gap-2 opacity-30">
                      {[...Array(16)].map((_, idx) => (
                        <div key={idx} className="w-1.5 h-1.5 rounded-full bg-[#86bc25]" />
                      ))}
                    </div>
                    <span className="mt-3 text-[10px] font-mono tracking-[0.2em] text-[#86bc25] font-semibold uppercase relative z-10">MIMAG AI</span>
                    <span className="text-[9px] font-mono tracking-wider text-zinc-400 relative z-10">CORE v2.6</span>
                  </div>
                </motion.div>
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 12, ease: 'linear' }} className="absolute inset-2 z-20 pointer-events-none">
                  <div className="w-3 h-3 rounded-full bg-[#86bc25] shadow-[0_0_12px_#86bc25] -top-1 left-1/2 -translate-x-1/2 absolute" />
                </motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 16, ease: 'linear' }} className="absolute inset-10 z-20 pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white] -bottom-1 left-1/4 absolute" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIAL TEST: MIMAG LOGO GRADIENT FIRST SEPARATOR LINE */}
      <div className="w-full h-[4px] bg-gradient-to-r from-[#ef4444] via-[#ec4899] to-[#a855f7] relative z-20 shadow-[0_2px_20px_rgba(236,72,153,0.35)]" />

      {/* 2. SECOND STAGE: REDUCING GREEN GRADIENT SECTION (DOMAIN MARQUEE & FLUENCY) */}
      <section className="relative bg-gradient-to-b from-[#0e1b07] via-[#162a0a] to-[#0e1a07] text-white py-16 lg:py-20 font-sans overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[#86bc25]/10 blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-l-4 border-[#86bc25] pl-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#86bc25] block mb-1">Domain Fluency & Vertical Reference Models</span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                Get The Full View Of <span className="font-semibold text-[#86bc25]">Industry Intelligence</span>
              </h2>
            </div>
            <p className="text-[14px] text-zinc-300 max-w-sm mt-2 md:mt-0 font-light">
              Comprehensive reference architectures and sovereign cloud benchmarks across high-consequence critical infrastructures.
            </p>
          </div>

          {/* Luxury Forest Green Marquee Card Grid with Minimalist Mimang Hover Boundary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {industries.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="hover-mimag-border group relative h-[250px] rounded overflow-hidden border border-[#2b4b12] bg-[#0a1405] transition-all duration-300 hover:shadow-xl hover:border-transparent"
              >
                <Image src={item.image} alt={item.title} fill sizes="20vw" className="object-cover opacity-60 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1405] via-[#0a1405]/60 to-transparent" />
                <div className="absolute top-3 left-3 bg-[#86bc25] text-black px-2.5 py-0.5 rounded text-[9.5px] font-extrabold uppercase tracking-wider shadow">
                  {item.label}
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col justify-end">
                  <h3 className="text-[16px] font-medium text-white leading-snug tracking-tight group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#aedc5b] group-hover:text-white transition-colors">
                    Explore domain <ArrowRight className="h-3 w-3 text-[#86bc25]" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SHARP GEOMETRIC CREAM TRANSITION */}
      <div className="relative z-20 bg-[#faf7f2] h-6 w-full shadow-inner border-t border-[#e3ded4]" />

      {/* 3. THIRD STAGE: CURATED WARM ALABASTER CREAM THEME (CAPABILITIES & OUTCOMES) */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-20 border-b border-[#e3ded4] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-baseline justify-between mb-12 border-b border-[#e6dfd5] pb-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85531b] block">Transformation Capabilities</span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-light tracking-tight text-[#1c1a18]">
                Six Senior-Led Practices. <span className="font-semibold">One Accountable Team.</span>
              </h2>
            </div>
            <Link href="/what-we-do" className="mt-4 lg:mt-0 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#5e8817] hover:underline">
              <span>View All Capabilities</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Elevated Cream Theme Grid with Minimalist Mimang Logo Hover Boundary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s) => (
              <div
                key={s.title}
                className="hover-mimag-border group flex flex-col justify-between rounded-lg border border-[#e8dfcf] bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-xl hover:border-transparent hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#1c1a18] text-[#86bc25] font-bold group-hover:bg-[#86bc25] group-hover:text-black transition-colors">
                      <s.icon className="h-5.5 w-5.5" />
                    </div>
                    <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#7a736a]">PRACTICE 0{services.indexOf(s) + 1}</span>
                  </div>
                  <h3 className="text-[20px] font-bold text-[#1c1a18] tracking-tight group-hover:text-[#5e8817] transition-colors mb-2.5">
                    {s.title}
                  </h3>
                  <p className="text-[14px] text-[#5c564e] font-normal leading-relaxed mb-6">
                    {s.body}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#f2ece1]">
                  {s.tags.map((t) => (
                    <span key={t} className={`text-[11px] font-semibold tracking-wide border rounded px-2.5 py-0.5 ${s.tagColor}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WARM CREAM THEME AUDITED OUTCOMES */}
      <section className="bg-[#f3ede3] text-[#1c1a18] py-20 border-b border-[#e3cfb3] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-l-4 border-[#86bc25] pl-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#784813]">Selected Audited Outcomes</span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#1c1a18] tracking-tight">
                Transformation Results We Are <span className="font-semibold">Measured Against</span>
              </h2>
            </div>
            <Link href="/our-work" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#5e8817] hover:underline mt-2 md:mt-0">
              <span>View Audited Case Studies</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {work.map((w, i) => (
              <Link
                key={i}
                href={w.href}
                className="hover-mimag-border group block bg-white border border-[#e4d7c5] rounded-lg p-8 shadow-sm hover:border-transparent hover:shadow-lg transition-all duration-200"
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8e8477] block mb-3">
                  {w.kicker}
                </span>
                <div className="flex items-baseline justify-between border-b border-[#f0e8dc] pb-4 mb-4">
                  <span className="text-4xl lg:text-5xl font-black text-[#1c1a18] group-hover:text-[#5e8817] transition-colors">
                    {w.metric}
                  </span>
                  <span className="text-[11px] font-bold uppercase text-right max-w-[140px] text-[#6b6257]">
                    {w.metricLabel}
                  </span>
                </div>
                <p className="text-[15.5px] font-semibold text-[#2d2924] leading-snug group-hover:text-black">
                  {w.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOURTH STAGE: DEEP SAPPHIRE-BLUE ARCHITECTURE (RESEARCH & FIRM MODEL) */}
      <section className="relative bg-gradient-to-r from-[#0a162b] via-[#0e2140] to-[#0a162b] text-white py-24 border-b border-[#1c3a6b] font-sans overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#2270d1]/10 blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#1c3969]">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#63a3ff] flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#86bc25]" />
                Intelligence & Editorial Research
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight mt-1">
                Architectural Whitepapers & <span className="font-semibold text-white">Pragmatic Editorials</span>
              </h2>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="/blogs" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#c7dbff] hover:text-white transition-colors">
                <BookOpen className="h-4 w-4 text-[#86bc25]" />
                <span>Browse All Blogs</span>
              </Link>
              <Link href="/reports" className="inline-flex items-center gap-1.5 text-[13.5px] font-bold bg-[#14305c] border border-[#2b569e] text-white px-5 py-2.5 rounded shadow hover:bg-[#86bc25] hover:text-black hover:border-[#86bc25] transition-all">
                <Download className="h-4 w-4 text-[#86bc25] group-hover:text-black" />
                <span>Download Whitepapers</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-24">
            {insights.map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className="hover-mimag-border group flex flex-col justify-between bg-[#0b1a33]/90 border border-[#1e3c70] rounded-lg p-7 hover:bg-[#11264a] hover:border-transparent hover:shadow-xl hover:shadow-blue-950/50 transition-all duration-200"
              >
                <div>
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider bg-[#183563] text-[#aedc5b] px-3 py-1 rounded border border-[#264c8c] mb-4">
                    {p.tag}
                  </span>
                  <h4 className="text-[19px] font-semibold text-white leading-snug group-hover:text-white transition-colors mb-6">
                    {p.title}
                  </h4>
                </div>
                <div className="pt-4 border-t border-[#1d396b] flex items-center justify-between text-[13px] text-[#b3cae3] font-normal">
                  <span>{p.read}</span>
                  <span className="inline-flex items-center gap-1 text-white font-bold group-hover:text-[#86bc25] transition-colors">
                    <span>{p.href === '/reports' ? 'Get PDF' : 'Read essay'}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* WHY MIMAG FIRM MODEL (Inside sapphire blue architecture) */}
          <div className="grid lg:grid-cols-12 gap-12 items-center pt-8 border-t border-[#1a3869]/80">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#86bc25]">Why MIMAG Technologies</span>
              <h2 className="text-3xl font-light text-white tracking-tight mt-1 mb-4">
                A Consulting Model <span className="font-semibold text-white">Engineered for Results</span>
              </h2>
              <p className="text-[15px] text-[#c0d4ec] font-light leading-relaxed mb-6">
                Independent. Senior by design. Totally outcome accountable. We were founded to replace expensive, layered pyramids of legacy consultancy with small, high-density practitioner pods that ship real cloud architectures.
              </p>
              <Link href="/who-we-are" className="inline-flex items-center gap-2 font-bold text-[#86bc25] text-[14.5px] hover:underline">
                <span>Meet the senior partners</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {[
                { t: 'Senior Practitioners Only', d: 'Every program is directed and staffed by partners who personally architect at scale. Zero junior training ground pass-throughs.' },
                { t: 'Fiercely Independent Counsel', d: 'We remain 100% vendor agnostic. Our structural guidance optimizes solely for corporate resilience and cost efficiency.' },
                { t: 'Audited Outcome Accountable', d: 'Our delivery milestones and governance cadences are explicitly bound to the audited technical and financial outcomes we agree upon.' },
                { t: 'From Boardroom to Production', d: 'One cohesive team taking full ownership through architectural advisory, systems engineering, compliance sign-off, and production scale.' }
              ].map((p, idx) => (
                <div key={idx} className="hover-mimag-border bg-[#0b172e] p-6 border border-[#1e3b6e] rounded-lg shadow-md hover:border-transparent transition-all">
                  <div className="flex items-center gap-2.5 mb-2">
                    <CheckCircle className="h-5 w-5 text-[#86bc25] shrink-0" />
                    <h4 className="text-[17px] font-bold text-white">{p.t}</h4>
                  </div>
                  <p className="text-[13.5px] text-[#a1bcdc] font-light leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL STAGE: TRANSITION BACK TO BLACK THEME FOR CLOSING CTA */}
      <section className="relative bg-[#000000] text-white py-20 lg:py-28 font-sans border-t-4 border-[#86bc25]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 text-center max-w-3xl">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#86bc25]">
            <span className="h-2 w-2 rounded-full bg-[#86bc25]" />
            Initiate an Advisory Dialogue
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-light tracking-[-0.02em] text-white text-balance">
            Bring us your <strong className="font-semibold">most complex</strong> technology challenge.
          </h2>
          <p className="mt-5 text-[16px] text-[#999999] font-light leading-relaxed max-w-xl mx-auto">
            Whether evaluating sovereign cloud migration, architecting auditable LLM systems, or securing a board-level infrastructure decision, our practice partners respond directly within 24 hours.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-sm bg-[#86bc25] px-8 py-4 text-[14.5px] font-semibold text-black transition-all hover:bg-[#97d031] inline-flex items-center gap-2 shadow-lg shadow-[#86bc25]/20"
            >
              <span>Schedule Confidential Dialogue</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 text-[13px] text-zinc-400">
            Direct Partner Email: <a href="mailto:partners@mimag.tech" className="text-[#86bc25] underline">partners@mimag.tech</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
