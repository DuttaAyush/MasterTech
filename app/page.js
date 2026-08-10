'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, ArrowRight, Cloud, Cpu, ShieldCheck, Workflow, Database, Layers,
  BookOpen, Download, CheckCircle, Sparkles, Mail, Phone, MapPin, Clock,
  Building2, Users, Award, Zap, Lock, Target
} from 'lucide-react';
import { toast } from 'sonner';
import PageShell from '@/components/site/page-shell';
import InteractiveGlobe from '@/components/site/interactive-globe';
import RotatingTestimonials from '@/components/site/rotating-testimonials';

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

const originalIndustries = [
  { title: 'Banking & Capital Markets', image: 'https://images.unsplash.com/photo-1561233835-f937539b95b9?crop=entropy&cs=srgb&fm=jpg&q=85', href: '/industries/bfsi', label: 'Financial Infrastructure' },
  { title: 'Cyber AI & Defense Systems', image: 'https://images.unsplash.com/photo-1615225164633-69f53b1dfd74?crop=entropy&cs=srgb&fm=jpg&q=85', href: '/industries/cybersecurity-defense', label: 'National Security' },
  { title: 'Cloud & Autonomous Ops', image: 'https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?crop=entropy&cs=srgb&fm=jpg&q=85', href: '/industries/cloud-infrastructure', label: 'Autonomous Systems' },
  { title: 'Energy Transition & Grid AI', image: 'https://images.unsplash.com/photo-1601785491008-d1153dfadd57?crop=entropy&cs=srgb&fm=jpg&q=85', href: '/industries/energy-smart-grid', label: 'Grid Resiliency' },
  { title: 'Healthcare Interoperability', image: 'https://images.unsplash.com/photo-1708651949057-34781b3cbdcd?crop=entropy&cs=srgb&fm=jpg&q=85', href: '/industries/healthcare-life-sciences', label: 'Clinical Fabrics' },
  { title: 'Logistics & Supply Chain AI', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=srgb&fm=jpg&q=85', href: '/industries/logistics-supply-chain', label: 'Global Supply Chain' },
];

const work = [
  {
    kicker: 'Global Tier-1 Bank · 24 Month Program',
    title: 'Core banking architecture modernization across 14 sovereign European markets.',
    metric: '€1.9B',
    metricLabel: 'annual run-cost reduction',
    href: '/our-work',
  },
  {
    kicker: 'Fortune 100 Insurer · 18 Month Program',
    title: 'Enterprise LLM claims validation platform for commercial underwriting.',
    metric: '38%',
    metricLabel: 'faster claim resolution',
    href: '/our-work',
  },
  {
    kicker: 'National Health System · 220 Hospitals',
    title: 'Clinical patient data fabric and diagnostic record interoperability network.',
    metric: '11.4M',
    metricLabel: 'patient records unified',
    href: '/our-work',
  },
  {
    kicker: 'Logistics Operator · 500+ Hubs',
    title: 'Autonomous AI dispatch and supply chain route optimization telemetry.',
    metric: '99.9%',
    metricLabel: 'on-time dispatch accuracy',
    href: '/our-work',
  },
];

const insights = [
  {
    tag: 'Technical Whitepaper · PDF',
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
  {
    tag: 'Architecture Standard · PDF',
    title: 'Zero-Trust Microservices & Cryptographic API Perimeters at Hyperscale',
    read: '32 Page Engineering Standard',
    href: '/reports',
  },
];

const industriesData = [
  {
    title: 'Banking & Capital Markets',
    image: 'https://images.unsplash.com/photo-1561233835-f937539b95b9?crop=entropy&cs=srgb&fm=jpg&q=85',
    href: '/industries/bfsi',
    label: 'Financial Infrastructure',
    description: 'Core banking modernization, real-time ledger orchestration, and audited financial latency optimization across global jurisdictions.',
    stats: '€1.9B Infra Savings Delivered',
  },
  {
    title: 'Cyber AI & Defense Systems',
    image: 'https://images.unsplash.com/photo-1615225164633-69f53b1dfd74?crop=entropy&cs=srgb&fm=jpg&q=85',
    href: '/industries/cybersecurity-defense',
    label: 'National Security',
    description: 'Zero-trust perimeter security, sovereign LLM air-gapped deployments, and automated SOC threat analysis for critical defense networks.',
    stats: 'Zero-Trust Audited',
  },
  {
    title: 'Cloud & Autonomous Ops',
    image: 'https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?crop=entropy&cs=srgb&fm=jpg&q=85',
    href: '/industries/cloud-infrastructure',
    label: 'Autonomous Systems',
    description: 'Self-healing platform engineering, multi-cloud FinOps governance, and automated Kubernetes control planes for mission-critical apps.',
    stats: '99.999% Operational Uptime',
  },
  {
    title: 'Energy Transition & Grid AI',
    image: 'https://images.unsplash.com/photo-1601785491008-d1153dfadd57?crop=entropy&cs=srgb&fm=jpg&q=85',
    href: '/industries/energy-smart-grid',
    label: 'Grid Resiliency',
    description: 'Real-time telemetry streaming, smart-grid load forecasting ML models, and regulatory compliance for power & utility providers.',
    stats: 'Sub-10ms Streaming Latency',
  },
  {
    title: 'Healthcare Interoperability',
    image: 'https://images.unsplash.com/photo-1708651949057-34781b3cbdcd?crop=entropy&cs=srgb&fm=jpg&q=85',
    href: '/industries/healthcare-life-sciences',
    label: 'Clinical Fabrics',
    description: 'FHIR diagnostic record interoperability, secure patient data fabrics, and HIPAA-compliant clinical predictive analytics.',
    stats: '11.4M Unified Patient Records',
  },
  {
    title: 'Retail & Digital Supply Chain',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=srgb&fm=jpg&q=85',
    href: '/industries/retail-commerce',
    label: 'Omnichannel Logistics',
    description: 'AI-driven demand forecasting, real-time inventory tracking, and high-throughput transaction processing for enterprise retail.',
    stats: '3x Inventory Velocity',
  },
];

const whyChooseUsData = [
  {
    icon: Users,
    title: 'Senior Practitioners Only',
    desc: 'Every engagement is architected and executed exclusively by senior practice partners. Zero junior pass-throughs or layered consultancy bloat.',
    highlight: '100% Senior Directed',
  },
  {
    icon: Lock,
    title: 'Fiercely Independent Counsel',
    desc: 'We remain completely vendor-neutral across AWS, Azure, and GCP. Our architectural guidance prioritizes sole corporate resilience and cost efficiency.',
    highlight: 'Zero Vendor Lock-in',
  },
  {
    icon: Target,
    title: 'Audited Financial SLAs',
    desc: 'Our delivery milestones are directly tied to audited revenue, infrastructure cost reductions, and verifiable latency metrics agreed upon upfront.',
    highlight: 'Revenue-Linked Metrics',
  },
  {
    icon: ShieldCheck,
    title: 'Strategy Through Code',
    desc: 'One accountable pod taking full ownership from board-level architectural strategy to hands-on deployment and compliance sign-off.',
    highlight: 'End-to-End Ownership',
  },
];

export default function HomePage() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: 'Cloud Modernization',
    message: '',
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please complete all required fields (*).');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      toast.success('Thank you. A senior practice partner will contact you within 24 hours.');
      setForm({
        name: '',
        email: '',
        company: '',
        role: '',
        interest: 'Cloud Modernization',
        message: '',
      });
    } catch {
      toast.error('Something went wrong. Please email partners@mimag.tech directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const capabilityOptions = [
    'Cloud Modernization',
    'AI & Applied Intelligence',
    'Cybersecurity & Zero Trust',
    'Digital Transformation',
    'Data Fabric & Analytics',
    'Enterprise Architecture',
    'Executive Advisory Inquiry',
  ];

  return (
    <PageShell>
      {/* 1. TOP SECTION: EXECUTIVE BLACK HERO WITH 3D ORBITAL SPHERE */}
      <section className="relative bg-[#000000] text-white overflow-hidden font-sans border-b border-[#1a1a1a]">
        <div className="absolute inset-0 -z-10">
          <Image src={HERO_IMG} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/90 to-[#000000]/70" />
        </div>

        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 pt-16 lg:pt-14 pb-12 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Executive Copy & Actions */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A00] via-[#D4AF37] to-[#FFF5C2]"
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
                <strong className="font-semibold text-white">Better Enterprise Decisions.</strong>
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
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 rounded-sm px-6 py-3.5 text-[14px] font-semibold text-[#ffffff] transition-all hover:opacity-90 shadow-lg"
                  style={{
                    backgroundImage: "url('/images/metallic_bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <span>Talk to senior partners</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link
                  href="/what-we-do"
                  className="inline-flex items-center gap-2 rounded-sm border border-[#333333] bg-[#141414] px-6 py-3.5 text-[14px] font-medium text-white transition-all hover:border-[#86bc25]"
                >
                  <span>Explore capabilities</span>
                  <ArrowRight className="h-4 w-4 text-[#86bc25]" />
                </Link>
              </motion.div>

              {/* EXECUTIVE TRUST BAR (HIDDEN ON MOBILE FOR CLEAN VIEW) */}
              <div className="hidden md:grid mt-14 grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#262626] pt-7">
                <div>
                  <span className="block text-[15px] font-semibold text-white tracking-tight">Revenue-Linked</span>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A00] via-[#D4AF37] to-[#FFF5C2]">EVERY ENGAGEMENT</span>
                </div>
                <div className="sm:border-l sm:border-[#262626] sm:pl-6">
                  <span className="block text-[15px] font-semibold text-white tracking-tight">C-Suite Ready</span>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A00] via-[#D4AF37] to-[#FFF5C2]">DELIVERABLE STANDARD</span>
                </div>
                <div className="sm:border-l sm:border-[#262626] sm:pl-6">
                  <span className="block text-[15px] font-semibold text-white tracking-tight">Senior-Practitioners</span>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A00] via-[#D4AF37] to-[#FFF5C2]">OUR ONLY MODE</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive 3D Globe (HIDDEN ON MOBILE FOR CLEAN VIEW) */}
            <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative min-h-[460px] w-full">
              <InteractiveGlobe />
            </div>
          </div>
        </div>
      </section>

      {/* 2. ORIGINAL SECTION: WARM CREAM THEME AUDITED OUTCOMES */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-20 border-b border-[#e3cfb3] font-sans">
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-7">
            {work.map((w, i) => (
              <Link
                key={i}
                href={w.href}
                className="hover-mimag-border group block bg-white border border-[#e4d7c5] rounded-lg p-4 sm:p-8 shadow-sm hover:border-transparent hover:shadow-lg transition-all duration-200"
              >
                <span className="text-[9.5px] sm:text-[11px] font-bold uppercase tracking-wider text-[#8e8477] block mb-2 sm:mb-3 line-clamp-1">
                  {w.kicker}
                </span>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#f0e8dc] pb-3 sm:pb-4 mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1c1a18] group-hover:text-[#5e8817] transition-colors">
                    {w.metric}
                  </span>
                  <span className="text-[9.5px] sm:text-[11px] font-bold uppercase text-left sm:text-right max-w-[140px] text-[#6b6257]">
                    {w.metricLabel}
                  </span>
                </div>
                <p className="text-[12.5px] sm:text-[15.5px] font-semibold text-[#2d2924] leading-snug group-hover:text-black line-clamp-3 sm:line-clamp-none">
                  {w.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ORIGINAL SECTION: DOMAIN MARQUEE & FLUENCY */}
      <section
        className="relative text-white py-12 lg:py-20 font-sans overflow-hidden"
        style={{
          backgroundImage: "url('/images/metallic_bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[#86bc25]/10 blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 border-l-4 border-[#86bc25] pl-4">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#f8f7f5] block mb-1">Domain Fluency & Vertical Reference Models</span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                Get The Full View Of <span className="font-semibold italic text-[#86bc25]">Industry Intelligence</span>
              </h2>
            </div>
            <p className="text-[13px] sm:text-[14px] text-zinc-300 max-w-sm mt-2 md:mt-0 font-light hidden sm:block">
              Comprehensive reference architectures and sovereign cloud benchmarks across high-consequence critical infrastructures.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
            {originalIndustries.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="hover-mimag-border group relative h-[160px] sm:h-[250px] rounded overflow-hidden border border-[#2b4b12] bg-[#0a1405] transition-all duration-300 hover:shadow-xl hover:border-transparent"
              >
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover opacity-60 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1405] via-[#0a1405]/60 to-transparent" />
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#faf7f2] text-black px-2 py-0.5 rounded text-[8px] sm:text-[9.5px] font-semibold uppercase tracking-wider shadow">
                  {item.label}
                </div>
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-5 flex flex-col justify-end">
                  <h3 className="text-[13px] sm:text-[16px] font-medium text-white leading-snug tracking-tight group-hover:text-white transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <span className="mt-1 sm:mt-2 inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#85531b] group-hover:text-white transition-colors">
                    Explore <ArrowRight className="h-3 w-3 text-[#85531b]" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SHARP GEOMETRIC CREAM TRANSITION */}
      <div className="relative z-20 bg-[#faf7f2] h-6 w-full shadow-inner border-t border-[#e3ded4]" />

      {/* 4. ORIGINAL SECTION: TRANSFORMATION CAPABILITIES */}
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

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-7">
            {services.map((s) => (
              <div
                key={s.title}
                className="hover-mimag-border group flex flex-col justify-between rounded-lg border border-[#e8dfcf] bg-white p-4 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-xl hover:border-transparent hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-5">
                    <div className="flex h-8 w-8 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-md bg-[#1c1a18] text-[#86bc25] font-bold group-hover:bg-[#86bc25] group-hover:text-black transition-colors">
                      <s.icon className="h-4 w-4 sm:h-5.5 sm:w-5.5" />
                    </div>
                    <span className="text-[9px] sm:text-[10.5px] font-extrabold uppercase tracking-widest text-[#7a736a]">PRACTICE 0{services.indexOf(s) + 1}</span>
                  </div>
                  <h3 className="text-[14px] sm:text-[20px] font-bold text-[#1c1a18] tracking-tight group-hover:text-[#5e8817] transition-colors mb-2 sm:mb-2.5">
                    {s.title}
                  </h3>
                  <p className="text-[12px] sm:text-[14px] text-[#5c564e] font-normal leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                    {s.body}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-3 sm:pt-4 border-t border-[#f2ece1]">
                  {s.tags.slice(0, 2).map((t) => (
                    <span key={t} className={`text-[9.5px] sm:text-[11px] font-semibold tracking-wide border rounded px-1.5 sm:px-2.5 py-0.5 ${s.tagColor}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ORIGINAL SECTION: DEEP SAPPHIRE-BLUE RESEARCH & FIRM MODEL */}
      <section className="relative bg-gradient-to-r from-[#0a162b] via-[#0e2140] to-[#0a162b] text-white py-16 lg:py-24 border-b border-[#1c3a6b] font-sans overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#2270d1]/10 blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 border-b border-[#1c3969]">
            <div>
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#63a3ff] flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#86bc25]" />
                Intelligence & Editorial Research
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight mt-1">
                Architectural Whitepapers & <span className="font-semibold text-white">Pragmatic Editorials</span>
              </h2>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <Link href="/blogs" className="inline-flex items-center gap-1 text-[13px] sm:text-[14px] font-semibold text-[#c7dbff] hover:text-white transition-colors">
                <BookOpen className="h-3.5 w-3.5 text-[#86bc25]" />
                <span>Blogs</span>
              </Link>
              <Link href="/reports" className="inline-flex items-center gap-1 text-[12.5px] sm:text-[13.5px] font-bold bg-[#14305c] border border-[#2b569e] text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded shadow hover:bg-[#86bc25] hover:text-black hover:border-[#86bc25] transition-all">
                <Download className="h-3.5 w-3.5 text-[#86bc25]" />
                <span>Whitepapers</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-7 mb-14 lg:mb-24">
            {insights.map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className="hover-mimag-border group flex flex-col justify-between bg-[#0b1a33]/90 border border-[#1e3c70] rounded-lg p-4 sm:p-7 hover:bg-[#11264a] hover:border-transparent hover:shadow-xl hover:shadow-blue-950/50 transition-all duration-200"
              >
                <div>
                  <span className="inline-block text-[9.5px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-[#183563] text-[#aedc5b] px-2 sm:px-3 py-0.5 sm:py-1 rounded border border-[#264c8c] mb-3 sm:mb-4 line-clamp-1">
                    {p.tag}
                  </span>
                  <h4 className="text-[13px] sm:text-[19px] font-semibold text-white leading-snug group-hover:text-white transition-colors mb-4 sm:mb-6 line-clamp-3">
                    {p.title}
                  </h4>
                </div>
                <div className="pt-3 sm:pt-4 border-t border-[#1d396b] flex items-center justify-between text-[11px] sm:text-[13px] text-[#b3cae3] font-normal">
                  <span className="truncate max-w-[90px] sm:max-w-none">{p.read}</span>
                  <span className="inline-flex items-center gap-1 text-white font-bold group-hover:text-[#86bc25] transition-colors shrink-0">
                    <span>{p.href === '/reports' ? 'PDF' : 'Read'}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* WHY MIMAG FIRM MODEL */}
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

      {/* 6. NEWLY ADDED SECTION 1: INDUSTRIES WE SERVE — BEIGE COLOR SECTION */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-16 lg:py-24 border-b border-[#e5dccf] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 border-l-4 border-[#86bc25] pl-4 sm:pl-5">
            <div>
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-1">
                Vertical Domain Expertise
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-[#1c1a18] tracking-tight">
                Industries We <span className="font-semibold text-black">Serve</span>
              </h2>
            </div>
            <p className="mt-2 md:mt-0 text-[13px] sm:text-[14.5px] text-[#6b6255] max-w-md font-light leading-relaxed hidden sm:block">
              Tailored reference architectures and compliance frameworks engineered specifically for high-consequence regulated environments.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {industriesData.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="hover-mimag-border group flex flex-col justify-between bg-white border border-[#e4d7c5] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="relative h-[120px] sm:h-[210px] w-full overflow-hidden bg-[#1c1a18]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a18]/90 via-[#1c1a18]/30 to-transparent" />
                    <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#faf7f2] text-black px-2 sm:px-3 py-0.5 sm:py-1 rounded text-[8px] sm:text-[10px] font-bold uppercase tracking-wider shadow truncate max-w-[90%]">
                      {item.label}
                    </span>
                  </div>

                  <div className="p-3 sm:p-7">
                    <h3 className="text-[14px] sm:text-[21px] font-bold text-[#1c1a18] tracking-tight group-hover:text-[#5e8817] transition-colors mb-1.5 sm:mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-[12px] sm:text-[14.5px] text-[#595248] font-normal leading-relaxed mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-none">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-3 sm:px-7 pb-3 sm:pb-6 pt-2 sm:pt-4 border-t border-[#f2ece2] flex items-center justify-between">
                  <span className="text-[10px] sm:text-[12px] font-bold text-[#784813] uppercase tracking-wider truncate max-w-[80px] sm:max-w-none">
                    {item.stats}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-[13px] font-bold text-[#1c1a18] group-hover:text-[#5e8817] transition-colors shrink-0">
                    <span>Explore</span> <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NEWLY ADDED SECTION 2: WHY CHOOSE US / ME — BLACK / BLUE COLOR SECTION */}
      <section className="relative bg-gradient-to-b from-[#080d1a] via-[#0a162b] to-[#080d1a] text-white py-12 lg:py-14 border-b border-[#1c3969] font-sans overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#3b82f6]/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#86bc25]/10 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 pb-4 border-b border-[#1e3b6e]">
            <div>
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#63a3ff] flex items-center gap-2 mb-1">
                <Sparkles className="h-3.5 w-3.5 text-[#86bc25]" />
                The MIMAG Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                Why Choose <span className="font-semibold text-white">Us</span>
              </h2>
            </div>
            <p className="mt-2 md:mt-0 text-[13px] sm:text-[14px] text-[#a9c4e6] max-w-md font-light leading-relaxed hidden sm:block">
              We replaced traditional, bloated consultancy pyramids with agile practitioner pods delivering audited outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {whyChooseUsData.map((item, idx) => (
              <div
                key={idx}
                className="hover-mimag-border group flex flex-col justify-between bg-[#0b1830]/90 border border-[#1d3969] rounded-xl p-4 sm:p-6 shadow-lg hover:border-transparent hover:bg-[#102447] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-[#142c54] text-[#86bc25] group-hover:bg-[#86bc25] group-hover:text-black transition-colors">
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span className="text-[9px] sm:text-[10.5px] font-extrabold uppercase tracking-widest bg-[#173461] text-[#9bc5ff] px-2 py-0.5 rounded border border-[#274c87] truncate max-w-[90px] sm:max-w-none">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-[14px] sm:text-[18px] font-bold text-white tracking-tight group-hover:text-[#86bc25] transition-colors mb-1.5 sm:mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-[12px] sm:text-[13.5px] text-[#b0cae8] font-light leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 sm:pt-3 border-t border-[#1b3663] flex items-center justify-between text-[10.5px] sm:text-[12.5px] text-[#84a9d4]">
                  <span className="truncate">Proven Model</span>
                  <CheckCircle className="h-3.5 w-3.5 text-[#86bc25] shrink-0" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#0c1c38] border border-[#1e3c70] rounded-lg p-5 text-center">
            <div>
              <span className="block text-2xl lg:text-3xl font-extrabold text-white">€1.9B+</span>
              <span className="text-[11px] font-semibold text-[#8caed8] uppercase tracking-wider">Infra Savings</span>
            </div>
            <div>
              <span className="block text-2xl lg:text-3xl font-extrabold text-[#86bc25]">100%</span>
              <span className="text-[11px] font-semibold text-[#8caed8] uppercase tracking-wider">Vendor Agnostic</span>
            </div>
            <div>
              <span className="block text-2xl lg:text-3xl font-extrabold text-white">24-Hr</span>
              <span className="text-[11px] font-semibold text-[#8caed8] uppercase tracking-wider">Partner SLA</span>
            </div>
            <div>
              <span className="block text-2xl lg:text-3xl font-extrabold text-[#86bc25]">0</span>
              <span className="text-[11px] font-semibold text-[#8caed8] uppercase tracking-wider">Junior Pass-Throughs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEWLY ADDED SECTION 3: CLIENT TESTIMONIAL — OFF-WHITE WITH ROTATING CARD ANIMATION */}
      <RotatingTestimonials />

      {/* 9. FINAL CONTACT FORM BEFORE FOOTER — ABOUT MIMANG & COMPACT CONTACT FORM */}
      <section id="contact-form" className="bg-[#faf7f2] text-[#1c1a18] py-16 border-t border-[#e5dccf] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Side: About Mimang */}
            <div className="lg:col-span-6 space-y-6 border-l-4 border-[#86bc25] pl-6 py-1">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-1">
                  About Mimang Technologies
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-[#1c1a18] tracking-tight mb-3">
                  Enterprise Technology <span className="font-bold">Advisory & Architecture</span>
                </h2>
                <p className="text-[14.5px] text-[#5c5449] font-light leading-relaxed mb-4">
                  Mimang Technologies is an independent enterprise technology consultancy providing software development, cloud modernization, applied AI solutions, and executive digital transformation. We replace bloated legacy consultancy pyramids with small, senior practitioner pods that deliver audited outcomes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-b border-[#e5dccf] py-4 text-[13.5px]">
                <div className="flex items-center gap-2 font-semibold text-[#2d2923]">
                  <CheckCircle className="h-4 w-4 text-[#86bc25]" />
                  <span>Senior Practitioners Only</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-[#2d2923]">
                  <CheckCircle className="h-4 w-4 text-[#86bc25]" />
                  <span>100% Vendor Agnostic</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-[#2d2923]">
                  <CheckCircle className="h-4 w-4 text-[#86bc25]" />
                  <span>Audited Financial SLAs</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-[#2d2923]">
                  <CheckCircle className="h-4 w-4 text-[#86bc25]" />
                  <span>Strict NDA Compliance</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-1 text-[13.5px] text-[#554e44]">
                <a
                  href="mailto:partners@mimag.tech"
                  className="inline-flex items-center gap-2 font-semibold text-[#5e8817] hover:underline"
                >
                  <Mail className="h-4 w-4 text-[#1c1a18]" /> partners@mimag.tech
                </a>
                <span className="flex items-center gap-2 font-bold text-[#1c1a18]">
                  <Phone className="h-4 w-4 text-[#5e8817]" /> +1 (212) 555–0117
                </span>
                <span className="flex items-center gap-1.5 font-medium"><Clock className="h-4 w-4 text-[#86bc25]" /> 24h Partner SLA</span>
              </div>
            </div>

            {/* Right Side: Compact Contact Form Card */}
            <div className="lg:col-span-6">
              <form
                onSubmit={onSubmit}
                className="hover-mimag-border bg-white border border-[#e2d8c9] rounded-xl p-6 md:p-7 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:border-transparent transition-all duration-300"
              >
                <div className="mb-5 border-b border-[#f0e7db] pb-4">
                  <h3 className="text-xl font-light text-[#1c1a18] tracking-tight">
                    Get in Touch with <span className="font-bold">Senior Partners</span>
                  </h3>
                  <p className="text-[13px] text-[#6b6257] mt-0.5 font-normal">
                    Direct partner response within 24 hours under mutual NDA.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                  <div>
                    <label className="text-[10.5px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] block mb-1">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={onChange}
                      placeholder="e.g. Dr. Marcus Vance"
                      className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded px-3.5 py-2 text-[14px] text-[#1c1a18] font-medium focus:outline-none focus:border-[#86bc25] focus:bg-white transition-colors placeholder:text-[#a0978b]"
                    />
                  </div>

                  <div>
                    <label className="text-[10.5px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] block mb-1">
                      Work Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="name@enterprise.com"
                      className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded px-3.5 py-2 text-[14px] text-[#1c1a18] font-medium focus:outline-none focus:border-[#86bc25] focus:bg-white transition-colors placeholder:text-[#a0978b]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[10.5px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] block mb-1">
                      Capability of Interest
                    </label>
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={onChange}
                      className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded px-3.5 py-2 text-[14px] text-[#1c1a18] font-medium focus:outline-none focus:border-[#86bc25] focus:bg-white transition-colors cursor-pointer"
                    >
                      {capabilityOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-white text-[#1c1a18]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[10.5px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] block mb-1">
                      Program Scope & Objectives *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      rows={3}
                      placeholder="Briefly describe your cloud, AI, or architecture requirements..."
                      className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded p-3 text-[14px] text-[#1c1a18] focus:outline-none focus:border-[#86bc25] focus:bg-white transition-colors resize-none placeholder:text-[#a0978b] font-light"
                    />
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#f0e7db] flex items-center justify-between gap-4">
                  <p className="text-[11.5px] text-[#736a5d] font-normal leading-tight">
                    Strict confidentiality under mutual NDA.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex items-center justify-center gap-2 rounded bg-[#86bc25] px-6 py-3 text-[13.5px] font-bold text-black hover:bg-[#97d031] shadow-md shadow-[#86bc25]/20 transition-all disabled:opacity-50 shrink-0"
                  >
                    <span>{submitting ? 'Transmitting...' : 'Submit Inquiry'}</span>
                    <ArrowUpRight className="h-4 w-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </PageShell>
  );
}
