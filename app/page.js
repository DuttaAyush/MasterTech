'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, ArrowRight, Cloud, Cpu, ShieldCheck, Workflow, Database, Layers,
  BookOpen, Download, CheckCircle, Sparkles, Mail, Phone, MapPin, Clock,
  Building2, Users, Award, Zap, Lock, Target, TrendingUp, ShieldAlert, FileText, ChevronRight,
  Globe, Smartphone, Code2, Bot
} from 'lucide-react';
import { toast } from 'sonner';
import PageShell from '@/components/site/page-shell';
import InteractiveGlobe from '@/components/site/interactive-globe';
import RotatingTestimonials from '@/components/site/rotating-testimonials';
import InteractiveProcess3D from '@/components/site/interactive-process-3d';

const HERO_IMG = '/images/optimized/hero_defense_tech.webp';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    body: 'High-performance, modern web applications engineered with lightning response times, SEO optimization, and responsive design systems.',
    tags: ['Next.js & React', 'Enterprise Design Systems', 'SEO & Performance'],
    tagColor: 'text-[#85531b] bg-[#fef3c7] border-[#fde68a]',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    body: 'Native and cross-platform mobile applications crafted for seamless iOS and Android user experiences with high security standards.',
    tags: ['iOS & Android', 'React Native / Flutter', 'Mobile UX/UI'],
    tagColor: 'text-[#047857] bg-[#ecfdf5] border-[#a7f3d0]',
  },
  {
    icon: Code2,
    title: 'Software Development',
    body: 'Custom enterprise software, API ecosystems, and scalable microservices designed for long-term operational resilience and growth.',
    tags: ['Custom SaaS', 'Cloud Microservices', 'API Architecture'],
    tagColor: 'text-[#1d4ed8] bg-[#eff6ff] border-[#bfdbfe]',
  },
  {
    icon: Building2,
    title: 'ERP Solutions',
    body: 'End-to-end Enterprise Resource Planning implementations, streamlining supply chains, inventory, finance, and operational workflows.',
    tags: ['Enterprise ERP', 'Workflow Automation', 'Operations & Supply'],
    tagColor: 'text-[#85531b] bg-[#fef3c7] border-[#fde68a]',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    body: 'Data-driven growth strategies, performance marketing, brand positioning, and conversion rate optimization that fuel business expansion.',
    tags: ['Growth Strategy', 'Performance Marketing', 'Brand Positioning'],
    tagColor: 'text-[#047857] bg-[#ecfdf5] border-[#a7f3d0]',
  },
  {
    icon: Bot,
    title: 'AI Agent Development',
    body: 'Autonomous AI agents, RAG retrieval fabrics, and custom LLM workflows built to automate complex enterprise decisioning and operations.',
    tags: ['Autonomous Agents', 'Custom LLMs & RAG', 'Enterprise Automation'],
    tagColor: 'text-[#1d4ed8] bg-[#eff6ff] border-[#bfdbfe]',
  },
];

const consultingVerticals = [
  {
    title: 'Business Consulting',
    category: 'Strategic Advisory',
    image: '/images/optimized/bfsi_banking.webp',
    href: '/what-we-do/business-consulting',
    description: 'Enterprise transformation, digital operating models, corporate governance, performance optimization, and audited value realization.',
    highlights: [
      'Digital Operating Models & Business Transformation',
      'Corporate Governance & Board-Level Advisory',
      'Performance Optimization & Cost Realization',
    ],
    metrics: 'Audited Strategy & Operational Excellence',
    tags: ['Corporate Strategy', 'Operating Models', 'Value Realization'],
    linkText: 'Explore Business Consulting',
    cardBg: 'bg-white hover:bg-[#faf7f2] border-[#e4d7c5]',
    titleColor: 'text-[#1c1a18]',
    descColor: 'text-[#5c564e]',
    tagStyle: 'bg-[#f4efe6] text-[#4a4237] border-[#dfd4c2]',
    metricColor: 'text-[#6e5842]',
    badgeStyle: 'bg-[#1c1a18] text-white',
    linkColor: 'text-[#1c1a18] group-hover:text-[#5e8817]',
    borderColor: 'border-[#f0e6d8]',
  },
  {
    title: 'IT Consulting',
    category: 'Tech Architecture',
    image: '/images/optimized/cloud_autonomous.webp',
    href: '/what-we-do/it-consulting',
    description: 'Cloud modernization, zero-trust cybersecurity architecture, custom software engineering, ERP implementations, and autonomous AI fabrics.',
    highlights: [
      'Cloud Microservices & Hyperscale Infrastructure',
      'Zero-Trust Security & Cryptographic Perimeters',
      'Custom Enterprise SaaS & Autonomous AI Agents',
    ],
    metrics: 'Hyperscale Resilience & Cloud Optimization',
    tags: ['Cloud Architecture', 'Zero-Trust Security', 'AI & Data Fabrics'],
    linkText: 'Explore IT Consulting',
    cardBg: 'bg-white hover:bg-[#faf7f2] border-[#e4d7c5]',
    titleColor: 'text-[#1c1a18]',
    descColor: 'text-[#5c564e]',
    tagStyle: 'bg-[#f4efe6] text-[#4a4237] border-[#dfd4c2]',
    metricColor: 'text-[#6e5842]',
    badgeStyle: 'bg-[#1c1a18] text-white',
    linkColor: 'text-[#1c1a18] group-hover:text-[#5e8817]',
    borderColor: 'border-[#f0e6d8]',
  },
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
    image: '/images/optimized/bfsi_banking.webp',
    href: '/industries/bfsi',
    label: 'Financial Infra',
    description: 'Core banking modernization, real-time ledger orchestration, and audited financial latency optimization across global jurisdictions.',
    stats: '€1.9B Infra Savings Delivered',
  },
  {
    title: 'Cyber AI & Defense Systems',
    image: '/images/optimized/hero_defense_tech.webp',
    href: '/industries/cybersecurity-defense',
    label: 'National Security',
    description: 'Zero-trust perimeter security, sovereign LLM air-gapped deployments, and automated SOC threat analysis for critical defense networks.',
    stats: 'Zero-Trust Audited',
  },
  {
    title: 'Cloud & Autonomous Ops',
    image: '/images/optimized/cloud_autonomous.webp',
    href: '/industries/cloud-infrastructure',
    label: 'Autonomous Systems',
    description: 'Self-healing platform engineering, multi-cloud FinOps governance, and automated Kubernetes control planes for mission-critical apps.',
    stats: '99.999% Operational Uptime',
  },
  {
    title: 'Energy Transition & Grid AI',
    image: '/images/optimized/energy_grid.webp',
    href: '/industries/energy-smart-grid',
    label: 'Grid Resiliency',
    description: 'Real-time telemetry streaming, smart-grid load forecasting ML models, and regulatory compliance for power & utility providers.',
    stats: 'Sub-10ms Streaming Latency',
  },
  {
    title: 'Healthcare Interoperability',
    image: '/images/optimized/healthcare_interop.webp',
    href: '/industries/healthcare-life-sciences',
    label: 'Clinical Fabrics',
    description: 'FHIR diagnostic record interoperability, secure patient data fabrics, and HIPAA-compliant clinical predictive analytics.',
    stats: '11.4M Unified Patient Records',
  },
  {
    title: 'Retail & Digital Supply Chain',
    image: '/images/optimized/logistics_supply.webp',
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
    'Website Development',
    'Mobile App Development',
    'Software Development',
    'ERP Solutions',
    'Digital Marketing',
    'AI Agent Development',
    'Executive Advisory Inquiry',
  ];

  return (
    <PageShell>
      {/* 1. TOP SECTION: EXECUTIVE BLACK HERO WITH 3D ORBITAL SPHERE (STICKY PINNED & PROPORTIONALLY SCALED) */}
      <section className="sticky top-0 z-0 bg-[#000000] text-white overflow-hidden font-sans border-b border-[#1a1a1a] min-h-[calc(100vh-64px)] flex flex-col justify-between">
        <div className="absolute inset-0 -z-10">
          <Image src={HERO_IMG} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/90 to-[#000000]/70" />
        </div>

        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 pt-6 lg:pt-8 pb-8 lg:pb-10 my-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Executive Copy & Actions */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.24em] text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A00] via-[#D4AF37] to-[#FFF5C2]"
              >
                <span className="h-2 w-2 rounded-full bg-[#86bc25] animate-pulse" />
                Executive Technology Advisory & Architecture
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mt-4 sm:mt-7 text-[32px] sm:text-[48px] lg:text-[62px] font-light leading-[1.1] sm:leading-[1.06] tracking-[-0.025em] text-white text-balance"
              >
                Intelligence That Shapes <br className="hidden sm:inline" />
                <strong className="font-semibold text-white">Better Enterprise Decisions.</strong>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-[16px] md:text-[18.5px] font-light leading-[1.7] text-[#a3a3a3] max-w-2xl"
              >
                We connect cloud modernization, applied AI, and zero-trust cybersecurity directly to audited revenue and latency outcomes. Built for demanding C-suite leaders where the cost of a wrong architectural move is too high to guess.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 rounded-sm px-7 py-4 text-[14.5px] font-semibold text-[#ffffff] transition-all hover:opacity-90 shadow-lg"
                  style={{
                    backgroundImage: "url('/images/metallic_bg.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <span>Talk to senior partners</span>
                  <ArrowUpRight className="h-4.5 w-4.5" />
                </a>
                <Link
                  href="/what-we-do"
                  className="inline-flex items-center gap-2 rounded-sm border border-[#333333] bg-[#141414] px-7 py-4 text-[14.5px] font-medium text-white transition-all hover:border-[#86bc25]"
                >
                  <span>Explore capabilities</span>
                  <ArrowRight className="h-4.5 w-4.5 text-[#86bc25]" />
                </Link>
              </motion.div>

              {/* EXECUTIVE TRUST BAR */}
              <div className="hidden md:grid mt-12 grid-cols-1 sm:grid-cols-3 gap-8 border-t border-[#262626] pt-7">
                <div>
                  <span className="block text-[15.5px] font-semibold text-white tracking-tight">Revenue-Linked</span>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A00] via-[#D4AF37] to-[#FFF5C2]">EVERY ENGAGEMENT</span>
                </div>
                <div className="sm:border-l sm:border-[#262626] sm:pl-7">
                  <span className="block text-[15.5px] font-semibold text-white tracking-tight">C-Suite Ready</span>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A00] via-[#D4AF37] to-[#FFF5C2]">DELIVERABLE STANDARD</span>
                </div>
                <div className="sm:border-l sm:border-[#262626] sm:pl-7">
                  <span className="block text-[15.5px] font-semibold text-white tracking-tight">Senior-Practitioners</span>
                  <span className="text-[11px] font-medium uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#8B5A00] via-[#D4AF37] to-[#FFF5C2]">OUR ONLY MODE</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive 3D Globe */}
            <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative min-h-[500px] w-full">
              <InteractiveGlobe />
            </div>
          </div>
        </div>

        {/* GOLD / DELOITTE GRADIENT ACCENT BAR AT BOTTOM OF HERO */}
        <div className="w-full h-[3px] bg-gradient-to-r from-[#8B5A00] via-[#D4AF37] to-[#FFF5C2] opacity-90 shrink-0" />
      </section>

      {/* STACKING CARD WRAPPER: SLIDES OVER THE STICKY HERO ON SCROLL (FLAT STRAIGHT EDGES) */}
      <div className="relative z-10 bg-[#faf7f2] shadow-[0_-25px_80px_rgba(0,0,0,0.9)] border-t-2 border-[#86bc25]">
        {/* 2. SECTION: WARM CREAM THEME AUDITED OUTCOMES */}
        <section className="bg-[#faf7f2] text-[#1c1a18] py-14 lg:py-18 border-b border-[#e3cfb3] font-sans relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-l-4 border-[#86bc25] pl-4 sm:pl-5">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-1">
                Audited Enterprise Performance
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-[#1c1a18] tracking-tight">
                Transformation Impact <span className="font-semibold text-black">Delivered & Verified</span>
              </h2>
            </div>
            <Link
              href="/our-work"
              className="inline-flex items-center gap-1.5 text-[14px] text-underline font-bold text-[#5e8817] hover:text-black transition-colors mt-3 md:mt-0"
            >
              <span>Explore All Case Benchmark Studies</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* OUTCOMES CARDS GRID - 2 cards side-by-side on mobile view */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-7">
            {work.map((w, i) => (
              <Link
                key={i}
                href={w.href}
                className="hover-mimag-border group flex flex-col justify-between bg-white border border-[#e4d7c5] rounded-xl p-3.5 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-transparent hover:shadow-[0_12px_35px_rgba(134,188,37,0.15)] transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-4 text-[9px] sm:text-[10.5px] font-extrabold uppercase tracking-wider text-[#8e8477]">
                    <span className="truncate max-w-[85%]">{w.kicker}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#86bc25] group-hover:scale-150 transition-transform shrink-0" />
                  </div>

                  <div className="border-b border-[#f0e8dc] pb-2 sm:pb-4 mb-2 sm:mb-4">
                    <span className="block text-2xl sm:text-4xl lg:text-5xl font-black text-[#1c1a18] group-hover:text-[#5e8817] transition-colors tracking-tight leading-tight">
                      {w.metric}
                    </span>
                    <span className="text-[9.5px] sm:text-[11px] font-bold uppercase tracking-wider text-[#6b6257] block mt-0.5">
                      {w.metricLabel}
                    </span>
                  </div>

                  <p className="text-[12px] sm:text-[14.5px] font-medium text-[#2d2924] leading-relaxed group-hover:text-black line-clamp-2 sm:line-clamp-3">
                    {w.title}
                  </p>
                </div>

                <div className="pt-2 sm:pt-4 border-t border-[#f7f2ea] mt-3 sm:mt-6 flex items-center justify-between text-[10.5px] sm:text-[12px] font-bold text-[#5e8817] group-hover:text-black transition-colors">
                  <span className="truncate max-w-[80%]">View Study</span>
                  <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION: DOMAIN MARQUEE & VERTICAL REFERENCE MODELS */}
      <section
        className="relative text-white py-10 lg:py-14 font-sans overflow-hidden border-b border-[#1f3c10]"
        style={{
          backgroundImage: "url('/images/metallic_bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[#86bc25]/15 blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 border-l-4 border-[#86bc25] pl-4 sm:pl-5">
            <div>
              <span className="text-[10.5px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#f8f7f5] block mb-1">
                Domain Fluency & Reference Frameworks
              </span>
              <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
                Vertical Intelligence Across <span className="font-semibold text-[#86bc25]">Critical Sectors</span>
              </h2>
            </div>
            <p className="text-[13.5px] sm:text-[14.5px] text-zinc-300 max-w-md mt-2 md:mt-0 font-light leading-relaxed hidden sm:block">
              Architectural reference models tailored to stringent financial, healthcare, defense, and smart-grid regulatory demands.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-9">
            {consultingVerticals.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`hover-mimag-border group flex flex-col ${item.cardBg} border rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5`}
              >
                {/* Practice Image */}
                <div className="relative w-full h-[120px] sm:h-[220px] shrink-0 overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover opacity-100 transition-transform duration-700 group-hover:scale-108"
                  />
                  <span className={`absolute top-2.5 left-2.5 ${item.badgeStyle} px-2 py-0.5 rounded text-[8.5px] sm:text-[10px] font-extrabold uppercase tracking-wider shadow-md z-10`}>
                    {item.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-3 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className={`text-[15px] sm:text-3xl font-bold ${item.titleColor} tracking-tight transition-colors mb-1.5 sm:mb-2.5 leading-snug`}>
                      {item.title}
                    </h3>
                    <p className={`text-[12px] sm:text-[14.5px] ${item.descColor} font-light leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none`}>
                      {item.description}
                    </p>

                    {/* Key Practice Highlights */}
                    <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-6 hidden xs:block sm:block">
                      {item.highlights.slice(0, 2).map((h, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] sm:text-[13px] font-medium text-[#2d2924]">
                          <CheckCircle className="h-3.5 w-3.5 text-[#5e8817] shrink-0 mt-0.5" />
                          <span className="line-clamp-1 sm:line-clamp-none">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className={`pt-2.5 sm:pt-4 ${item.borderColor} border-t flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2.5`}>
                      <span className={`text-[9.5px] sm:text-[11px] font-extrabold uppercase tracking-wider ${item.metricColor} truncate`}>
                        {item.metrics}
                      </span>
                      <span className={`inline-flex items-center gap-1 text-[11px] sm:text-[13px] font-bold ${item.linkColor} transition-colors shrink-0`}>
                        <span>Explore</span>
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION: TRANSFORMATION CAPABILITIES */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-20 lg:py-24 border-b border-[#e3ded4] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-baseline justify-between mb-12 border-b border-[#e6dfd5] pb-6">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#85531b] block">
                Engineering Capabilities
              </span>
              <h2 className="mt-1 text-3xl sm:text-4xl font-light tracking-tight text-[#1c1a18]">
                Senior-Led Practices. <span className="font-semibold">Accountable Delivery.</span>
              </h2>
            </div>
            <Link
              href="/what-we-do"
              className="mt-4 lg:mt-0 inline-flex items-center gap-1.5 text-[14px] font-bold text-[#5e8817] hover:underline"
            >
              <span>View All Practice Specifications</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-7">
            {services.map((s, idx) => (
              <div
                key={s.title}
                className="hover-mimag-border group flex flex-col justify-between rounded-xl border border-[#e8dfcf] bg-white p-3.5 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-2xl hover:border-transparent hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 mb-3 sm:mb-4">
                    <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-[#1c1a18] text-[#86bc25] font-bold group-hover:bg-[#86bc25] group-hover:text-black transition-colors shadow-md">
                      <s.icon className="h-4.5 w-4.5 sm:h-5.5 sm:w-5.5" />
                    </div>
                    <h3 className="text-[14.5px] sm:text-[19px] font-bold text-[#1c1a18] tracking-tight group-hover:text-[#5e8817] transition-colors leading-snug">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-[12px] sm:text-[14.5px] text-[#5c564e] font-normal leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                    {s.body}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-3 sm:pt-4 border-t border-[#f2ece1]">
                  {s.tags.slice(0, 2).map((t) => (
                    <span key={t} className={`text-[9.5px] sm:text-[11px] font-bold tracking-wide border rounded px-1.5 sm:px-2.5 py-0.5 ${s.tagColor} truncate max-w-full`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECTION: DEEP SAPPHIRE-BLUE RESEARCH & WHITEPAPERS */}
      <section className="relative bg-gradient-to-r from-[#07152b] via-[#0c2247] to-[#07152b] text-white py-12 sm:py-20 lg:py-24 border-b border-[#1c3a6b] font-sans overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 pb-4 border-b border-[#1c3969]">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#63a3ff] flex items-center gap-2 mb-1">
                <Sparkles className="h-3.5 w-3.5 text-[#86bc25]" />
                MIMAG Institute Publications
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
                Architectural Whitepapers & <span className="font-semibold text-[#86bc25]">Market Research</span>
              </h2>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 mt-4 md:mt-0">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-1.5 text-[12px] sm:text-[14px] font-semibold text-[#c7dbff] hover:text-white transition-colors bg-[#0d2247] sm:bg-transparent px-3 py-1.5 sm:p-0 rounded border border-[#1e3c70] sm:border-none"
              >
                <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#86bc25]" />
                <span>Executive Articles</span>
              </Link>
              <Link
                href="/reports"
                className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13.5px] font-bold bg-[#14305c] border border-[#2b569e] text-white px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded shadow hover:bg-[#86bc25] hover:text-black hover:border-[#86bc25] transition-all"
              >
                <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#86bc25]" />
                <span>Whitepaper Library</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-7 mb-12 lg:mb-24">
            {insights.map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className="hover-mimag-border group flex flex-col justify-between bg-[#0b1b38]/90 border border-[#1e3c70] rounded-xl p-3.5 sm:p-7 hover:bg-[#0f244a] hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <span className="inline-block text-[9px] sm:text-[10.5px] font-extrabold uppercase tracking-wider bg-[#183563] text-[#aedc5b] px-2 sm:px-3 py-0.5 sm:py-1 rounded border border-[#264c8c] mb-2 sm:mb-4 truncate max-w-full">
                    {p.tag}
                  </span>
                  <h4 className="text-[13.5px] sm:text-[18px] font-semibold text-white leading-snug group-hover:text-[#86bc25] transition-colors mb-3 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                    {p.title}
                  </h4>
                </div>
                <div className="pt-2 sm:pt-4 border-t border-[#1d396b] flex items-center justify-between text-[10.5px] sm:text-[12.5px] text-[#b3cae3] font-medium">
                  <span className="truncate max-w-[120px] sm:max-w-[170px]">{p.read}</span>
                  <span className="inline-flex items-center gap-1 text-white font-bold group-hover:text-[#86bc25] transition-colors shrink-0">
                    <span>{p.href === '/reports' ? 'PDF' : 'Read'}</span>
                    <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* WHY MIMAG FIRM MODEL */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-10 border-t border-[#1a3869]/80">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#86bc25] block mb-1">
                Consulting Governance Model
              </span>
              <h2 className="text-3xl font-light text-white tracking-tight mb-4">
                A Consultancy Model <span className="font-semibold text-white">Engineered for Results</span>
              </h2>
              <p className="text-[15.5px] text-[#c0d4ec] font-light leading-relaxed mb-6">
                Independent. Senior by design. Totally outcome accountable. We replace bloated legacy consultancy pyramids with small, high-density practitioner pods that ship production cloud architectures.
              </p>
              <Link
                href="/who-we-are"
                className="inline-flex items-center gap-2 font-bold text-[#86bc25] text-[15px] hover:underline"
              >
                <span>Meet Our Senior Practice Leads</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 gap-3 sm:gap-6">
              {[
                { t: 'Senior Practitioners', d: 'Every program is directed and staffed by partners who personally architect at scale. Zero junior pass-throughs.' },
                { t: 'Fiercely Independent', d: 'We remain 100% vendor agnostic. Our structural guidance optimizes solely for corporate resilience and cost efficiency.' },
                { t: 'Audited Outcome SLAs', d: 'Our delivery milestones and governance cadences are explicitly bound to audited technical and financial outcomes.' },
                { t: 'Boardroom to Code', d: 'One cohesive team taking full ownership through architectural advisory, systems engineering, and production scale.' }
              ].map((p, idx) => (
                <div
                  key={idx}
                  className="hover-mimag-border bg-[#0b172e] p-3.5 sm:p-6 border border-[#1e3b6e] rounded-xl shadow-lg hover:border-transparent transition-all"
                >
                  <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#86bc25] shrink-0" />
                    <h4 className="text-[13.5px] sm:text-[17px] font-bold text-white leading-tight">{p.t}</h4>
                  </div>
                  <p className="text-[11.5px] sm:text-[14px] text-[#a1bcdc] font-light leading-relaxed line-clamp-3 sm:line-clamp-none">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: INDUSTRIES WE SERVE GRID (CREAM STAGE) */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-20 lg:py-24 border-b border-[#e5dccf] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-l-4 border-[#86bc25] pl-4 sm:pl-5">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-1">
                Vertical Practice Hubs
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-[#1c1a18] tracking-tight">
                Industries We <span className="font-semibold text-black">Serve & Architect</span>
              </h2>
            </div>
            <p className="mt-2 md:mt-0 text-[14.5px] text-[#6b6255] max-w-md font-light leading-relaxed hidden sm:block">
              Tailored reference architectures and compliance frameworks engineered specifically for high-consequence regulated environments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-7">
            {industriesData.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="hover-mimag-border group flex flex-col justify-between bg-white border border-[#e4d7c5] rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className="relative h-[115px] sm:h-[210px] w-full overflow-hidden bg-[#1c1a18]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover opacity-75 group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a18]/90 via-[#1c1a18]/30 to-transparent" />
                    <span className="absolute top-2.5 left-2.5 bg-[#faf7f2] text-black px-2 py-0.5 rounded text-[8.5px] sm:text-[10px] font-extrabold uppercase tracking-wider shadow">
                      {item.label}
                    </span>
                  </div>

                  <div className="p-3.5 sm:p-7">
                    <h3 className="text-[14px] sm:text-[21px] font-bold text-[#1c1a18] tracking-tight group-hover:text-[#5e8817] transition-colors mb-1.5 sm:mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11.5px] sm:text-[14.5px] text-[#595248] font-normal leading-relaxed mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-3.5 sm:px-7 pb-3 sm:pb-6 pt-2.5 sm:pt-4 border-t border-[#f2ece2] flex items-center justify-between">
                  <span className="text-[9.5px] sm:text-[12px] font-extrabold text-[#784813] uppercase tracking-wider truncate max-w-[65%]">
                    {item.stats}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-[13px] font-extrabold text-[#1c1a18] group-hover:text-[#5e8817] transition-colors shrink-0">
                    <span>Hub</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION: WHY CHOOSE US / THE MIMAG ADVANTAGE (SAPPHIRE BLUE) */}
      <section className="relative bg-gradient-to-b from-[#080d1a] via-[#0a162b] to-[#080d1a] text-white py-16 lg:py-20 border-b border-[#1c3969] font-sans overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#3b82f6]/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#86bc25]/10 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 pb-4 border-b border-[#1e3b6e]">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#63a3ff] flex items-center gap-2 mb-1">
                <Sparkles className="h-3.5 w-3.5 text-[#86bc25]" />
                The MIMAG Advantage
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
                Why Global Enterprises <span className="font-semibold text-white">Trust MIMAG</span>
              </h2>
            </div>
            <p className="mt-2 md:mt-0 text-[14.5px] text-[#a9c4e6] max-w-md font-light leading-relaxed hidden sm:block">
              We replaced traditional, bloated consultancy pyramids with agile practitioner pods delivering audited outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {whyChooseUsData.map((item, idx) => (
              <div
                key={idx}
                className="hover-mimag-border group flex flex-col justify-between bg-[#0b1830]/90 border border-[#1d3969] rounded-xl p-3.5 sm:p-7 shadow-lg hover:border-transparent hover:bg-[#102447] transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 sm:mb-5">
                    <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-[#142c54] text-[#86bc25] group-hover:bg-[#86bc25] group-hover:text-black transition-colors shadow-md shrink-0">
                      <item.icon className="h-4.5 w-4.5 sm:h-5.5 sm:w-5.5" />
                    </div>
                    <span className="text-[9px] sm:text-[10.5px] font-extrabold uppercase tracking-widest bg-[#173461] text-[#9bc5ff] px-2 sm:px-2.5 py-0.5 rounded border border-[#274c87] truncate max-w-full">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-[14px] sm:text-[19px] font-bold text-white tracking-tight group-hover:text-[#86bc25] transition-colors mb-1.5 sm:mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11.5px] sm:text-[14px] text-[#b0cae8] font-light leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-3 border-t border-[#1b3663] flex items-center justify-between text-[10.5px] sm:text-[12.5px] text-[#84a9d4] font-medium">
                  <span className="truncate max-w-[80%]">Proven Model</span>
                  <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#86bc25] shrink-0" />
                </div>
              </div>
            ))}
          </div>

          {/* KEY STATISTICS TICKER BAR - Mobile-first grid-cols-2 expanding to md:grid-cols-4 */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-[#0c1c38] border border-[#1e3c70] rounded-xl p-5 sm:p-6 text-center shadow-xl">
            <div>
              <span className="block text-3xl lg:text-4xl font-extrabold text-white">€1.9B+</span>
              <span className="text-[11.5px] font-bold text-[#8caed8] uppercase tracking-wider">Infra Savings</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-extrabold text-[#86bc25]">100%</span>
              <span className="text-[11.5px] font-bold text-[#8caed8] uppercase tracking-wider">Vendor Agnostic</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-extrabold text-white">24-Hr</span>
              <span className="text-[11.5px] font-bold text-[#8caed8] uppercase tracking-wider">Partner SLA</span>
            </div>
            <div>
              <span className="block text-3xl lg:text-4xl font-extrabold text-[#86bc25]">0</span>
              <span className="text-[11.5px] font-bold text-[#8caed8] uppercase tracking-wider">Junior Pass-Throughs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE 3D METHODOLOGY: FROM IDEA TO IMPACT */}
      <InteractiveProcess3D />

      {/* 9. CLIENT TESTIMONIALS WITH ROTATING CARDS */}
      <RotatingTestimonials />

      {/* 9. EXECUTIVE PARTNER BRIEFING & COMPACT CONTACT FORM */}
      <section id="contact-form" className="bg-[#faf7f2] text-[#1c1a18] py-20 border-t border-[#e5dccf] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Side: About MIMAG Technologies */}
            <div className="lg:col-span-6 space-y-6 border-l-4 border-[#86bc25] pl-6 sm:pl-8 py-1">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-1">
                  About MIMAG Technologies
                </span>
                <h2 className="text-2xl sm:text-4xl font-light text-[#1c1a18] tracking-tight mb-4">
                  Enterprise Technology <span className="font-bold">Advisory & Architecture</span>
                </h2>
                <p className="text-[15.5px] text-[#5c5449] font-light leading-relaxed mb-4">
                  MIMAG Technologies is an independent enterprise technology consultancy providing cloud modernization, applied AI solutions, zero-trust cybersecurity, and executive digital transformation. We replace bloated legacy consultancy pyramids with small, senior practitioner pods that deliver audited outcomes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-b border-[#e5dccf] py-5 text-[14px]">
                <div className="flex items-center gap-2.5 font-semibold text-[#2d2923]">
                  <CheckCircle className="h-4.5 w-4.5 text-[#86bc25]" />
                  <span>Senior Practitioners Only</span>
                </div>
                <div className="flex items-center gap-2.5 font-semibold text-[#2d2923]">
                  <CheckCircle className="h-4.5 w-4.5 text-[#86bc25]" />
                  <span>100% Vendor Agnostic</span>
                </div>
                <div className="flex items-center gap-2.5 font-semibold text-[#2d2923]">
                  <CheckCircle className="h-4.5 w-4.5 text-[#86bc25]" />
                  <span>Audited Financial SLAs</span>
                </div>
                <div className="flex items-center gap-2.5 font-semibold text-[#2d2923]">
                  <CheckCircle className="h-4.5 w-4.5 text-[#86bc25]" />
                  <span>Strict NDA Compliance</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-1 text-[14px] text-[#554e44]">
                <a
                  href="mailto:partners@mimag.tech"
                  className="inline-flex items-center gap-2 font-bold text-[#5e8817] hover:underline"
                >
                  <Mail className="h-4.5 w-4.5 text-[#1c1a18]" /> partners@mimag.tech
                </a>
                <span className="flex items-center gap-2 font-bold text-[#1c1a18]">
                  <Phone className="h-4.5 w-4.5 text-[#5e8817]" /> +1 (212) 555–0117
                </span>
                <span className="flex items-center gap-2 font-medium">
                  <Clock className="h-4.5 w-4.5 text-[#86bc25]" /> 24h Partner SLA
                </span>
              </div>
            </div>

            {/* Right Side: Executive Contact Form */}
            <div className="lg:col-span-6">
              <form
                onSubmit={onSubmit}
                className="hover-mimag-border bg-white border border-[#e2d8c9] rounded-xl p-7 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-transparent transition-all duration-300"
              >
                <div className="mb-6 border-b border-[#f0e7db] pb-4">
                  <h3 className="text-2xl font-light text-[#1c1a18] tracking-tight">
                    Schedule an Executive <span className="font-bold">Partner Briefing</span>
                  </h3>
                  <p className="text-[13.5px] text-[#6b6257] mt-1 font-normal">
                    Direct senior partner response within 24 hours under mutual NDA. Zero sales representatives.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] block mb-1">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={onChange}
                      placeholder="e.g. Dr. Marcus Vance"
                      className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded px-4 py-2.5 text-[14.5px] text-[#1c1a18] font-medium focus:outline-none focus:border-[#86bc25] focus:bg-white transition-colors placeholder:text-[#a0978b]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] block mb-1">
                      Work Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="name@enterprise.com"
                      className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded px-4 py-2.5 text-[14.5px] text-[#1c1a18] font-medium focus:outline-none focus:border-[#86bc25] focus:bg-white transition-colors placeholder:text-[#a0978b]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] block mb-1">
                      Capability of Interest
                    </label>
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={onChange}
                      className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded px-4 py-2.5 text-[14.5px] text-[#1c1a18] font-medium focus:outline-none focus:border-[#86bc25] focus:bg-white transition-colors cursor-pointer"
                    >
                      {capabilityOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-white text-[#1c1a18]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] block mb-1">
                      Program Scope & Objectives *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      rows={3}
                      placeholder="Briefly describe your cloud, AI, or architecture requirements..."
                      className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded p-3.5 text-[14.5px] text-[#1c1a18] focus:outline-none focus:border-[#86bc25] focus:bg-white transition-colors resize-none placeholder:text-[#a0978b] font-light"
                    />
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f0e7db] flex items-center justify-between gap-4">
                  <p className="text-[12px] text-[#736a5d] font-medium leading-tight">
                    Strict confidentiality under mutual NDA.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex items-center justify-center gap-2 rounded bg-[#86bc25] px-7 py-3.5 text-[14px] font-extrabold text-black hover:bg-[#97d031] shadow-lg shadow-[#86bc25]/20 transition-all disabled:opacity-50 shrink-0"
                  >
                    <span>{submitting ? 'Transmitting...' : 'Submit Inquiry'}</span>
                    <ArrowUpRight className="h-4.5 w-4.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
      </div>
    </PageShell>
  );
}
