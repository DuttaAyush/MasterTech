'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Menu, X, ArrowUpRight, ChevronDown, ChevronRight, Download
} from 'lucide-react';
import Logo from './logo';
import RenderIcon from './icon-map';

const SKY_IMG =
  '/images/optimized/healthcare_interop.webp';
const DC_IMG =
  '/images/optimized/bfsi_banking.webp';
const ARCH_IMG =
  '/images/optimized/energy_grid.webp';

const NAV = [
  {
    label: 'Who We Are',
    href: '/who-we-are',
    panel: {
      lead: {
        title: 'Who We Are',
        description:
          'An independent enterprise technology consultancy built on senior practitioners, outcome accountability, and architectural craft.',
      },
      categories: [
        { label: 'About MIMAG', href: '/who-we-are/about-mimag', icon: 'Building2' },
        { label: 'Mission & Values', href: '/who-we-are/mission-and-values', icon: 'ShieldCheck' },
        { label: 'Our Vision', href: '/who-we-are/our-vision', icon: 'Layers' },
        { label: 'Who We Are', href: '/who-we-are', icon: 'Building2' },
      ],
      pages: [
        { title: 'About MIMAG', desc: 'Global practice hubs and our core operational principles.', href: '/who-we-are/about-mimag', icon: 'Building2' },
        { title: 'Mission & Values', desc: 'Mandate, ethos, and single-pod outcome accountability.', href: '/who-we-are/mission-and-values', icon: 'ShieldCheck' },
        { title: 'Our Vision', desc: 'Architecting sovereign, zero-trust enterprise fabrics for 2030.', href: '/who-we-are/our-vision', icon: 'Layers' },
        { title: 'Who We Are', desc: 'Practitioner governance, firm overview, and core operational principles.', href: '/who-we-are', icon: 'Building2' },
      ],
      featured: {
        tag: 'About MIMAG',
        title: 'Built for the next decade of demanding enterprise IT.',
        cta: 'About MIMAG',
        href: '/who-we-are',
        image: ARCH_IMG,
      },
    },
  },
  {
    label: 'What We Do',
    href: '/what-we-do',
    panel: {
      lead: {
        title: 'Capabilities',
        description:
          'Seven senior-led transformation practices covering the enterprise stack — from board strategy to production deployment.',
      },
      categories: [
        { label: 'Cloud Modernization', href: '/what-we-do/cloud-modernization', icon: 'Cloud' },
        { label: 'AI & Intelligence', href: '/what-we-do/ai-applied-intelligence', icon: 'Cpu' },
        { label: 'Cybersecurity', href: '/what-we-do/cybersecurity-zero-trust', icon: 'ShieldCheck' },
        { label: 'View All Practices', href: '/what-we-do', icon: 'Layers' },
      ],
      pages: [
        { title: 'Cloud Modernization', desc: 'AWS, Azure, and GCP re-architecture at scale.', href: '/what-we-do/cloud-modernization', icon: 'Cloud' },
        { title: 'AI & Applied Intelligence', desc: 'LLM ops, enterprise retrieval, and regulated governance.', href: '/what-we-do/ai-applied-intelligence', icon: 'Cpu' },
        { title: 'Cybersecurity & Zero Trust', desc: 'Identity modernization and SOC defense perimeter.', href: '/what-we-do/cybersecurity-zero-trust', icon: 'ShieldCheck' },
        { title: 'Digital Transformation', desc: 'Operating model, Agile engineering, and org change.', href: '/what-we-do/digital-transformation', icon: 'Workflow' },
        { title: 'Data & Analytics Fabric', desc: 'Lakehouse architectures and real-time semantic layers.', href: '/what-we-do/data-analytics-fabric', icon: 'Database' },
        { title: 'Enterprise Architecture', desc: 'API integration strategy and long-term tech standards.', href: '/what-we-do/enterprise-architecture', icon: 'Layers' },
      ],
      featured: {
        tag: 'Case Study',
        title: 'Core banking modernization across 14 sovereign markets.',
        cta: 'View case study',
        href: '/our-work',
        image: SKY_IMG,
      },
    },
  },
  {
    label: 'Industries',
    href: '/industries',
    panel: {
      lead: {
        title: 'Sector Expertise',
        description:
          'Deep vertical domain fluency across banking, healthcare, retail, logistics, and critical infrastructure.',
      },
      categories: [
        { label: 'BFSI & Banking', href: '/industries/bfsi', icon: 'Landmark' },
        { label: 'AI Solutions', href: '/industries/ai-solutions', icon: 'Cpu' },
        { label: 'Cybersecurity', href: '/industries/cybersecurity-defense', icon: 'ShieldCheck' },
        { label: 'View All Verticals', href: '/industries', icon: 'Landmark' },
      ],
      pages: [
        { title: 'BFSI & Capital Markets', desc: 'Core banking strangler patterns & instant payments.', href: '/industries/bfsi', icon: 'Landmark' },
        { title: 'AI Solutions & Agents', desc: 'Isolated RAG fabrics & enterprise AI safety.', href: '/industries/ai-solutions', icon: 'Cpu' },
        { title: 'Logistics & Supply Chain', desc: 'IoT telemetry & automated route dispatch.', href: '/industries/logistics-supply-chain', icon: 'Truck' },
        { title: 'Retail & Commerce', desc: 'Unified inventory & composable storefronts.', href: '/industries/retail-commerce', icon: 'ShoppingBag' },
        { title: 'Healthcare & Life Sciences', desc: 'FHIR data fabrics & clinical AI compute.', href: '/industries/healthcare-life-sciences', icon: 'HeartPulse' },
        { title: 'Cloud & Infrastructure', desc: 'Sovereign landing zones & 5G edge clusters.', href: '/industries/cloud-infrastructure', icon: 'Cloud' },
      ],
      featured: {
        tag: 'Perspective',
        title: 'Architecting regulatory-grade AI in European banking.',
        cta: 'Read the research paper',
        href: '/blogs',
        image: DC_IMG,
      },
    },
  },
  {
    label: 'Our Work',
    href: '/our-work',
    panel: {
      lead: {
        title: 'Client impact',
        description:
          'Audited outcomes delivered with Fortune 100 leaders, global banks, and state healthcare institutions.',
      },
      categories: [
        { label: 'All case studies', href: '/our-work', icon: 'Building2' },
        { label: 'By industry sector', href: '/industries', icon: 'Building2' },
        { label: 'By technology capability', href: '/what-we-do', icon: 'Layers' },
      ],
      pages: [
        { title: 'Core Banking Modernization', desc: 'Tier-1 global bank · 14 markets unified.', href: '/our-work' },
        { title: 'Enterprise LLM Underwriter', desc: 'Fortune 100 insurer · 38% faster claims.', href: '/our-work' },
        { title: 'National Clinical Data Fabric', desc: '220 regional hospitals · 11.4M records unified.', href: '/our-work' },
        { title: 'Global Zero-Trust Perimeter', desc: '180,000 corporate identity credentials secured.', href: '/our-work' },
      ],
      featured: {
        tag: 'Featured Outcome',
        title: '€1.9B annual infrastructure run-cost reduction.',
        cta: 'Read client study',
        href: '/our-work',
        image: ARCH_IMG,
      },
    },
  },
  {
    label: 'Insights & Research',
    href: '/blogs',
    panel: {
      lead: {
        title: 'Thought Leadership',
        description:
          'Peer-reviewed analysis, technical benchmarks, and regulatory briefs written exclusively by senior practice leads.',
      },
      categories: [
        { label: 'All Publications', href: '/blogs', icon: 'Layers' },
        { label: 'AI & Machine Learning', href: '/blogs?category=AI', icon: 'Cpu' },
        { label: 'Cloud & Infrastructure', href: '/blogs?category=Cloud', icon: 'Cloud' },
        { label: 'Security & Compliance', href: '/blogs?category=Security', icon: 'ShieldCheck' },
      ],
      pages: [
        { title: 'Sovereign LLM Architecture 2026', desc: 'Isolated RAG fabrics for European financial institutions.', href: '/blogs/sovereign-llm-architecture-2026', icon: 'Cpu' },
        { title: 'NIS2 & DORA Compliance Guide', desc: 'Audited SecOps playbooks for critical infrastructure.', href: '/blogs/nis2-dora-compliance-guide', icon: 'ShieldCheck' },
        { title: 'Multi-Cloud FinOps Optimization', desc: 'Eliminating cloud waste across AWS, Azure, and GCP.', href: '/blogs/multi-cloud-finops-optimization', icon: 'Cloud' },
        { title: 'Zero-Trust Identity Perimeters', desc: 'Passwordless PKI credentialing for Tier-1 banks.', href: '/blogs/zero-trust-identity-perimeters', icon: 'ShieldCheck' },
      ],
      featured: {
        tag: 'Featured Paper',
        title: 'Architecting Sovereign RAG Pipelines in Regulated Financial Verticals.',
        cta: 'Read full report',
        href: '/blogs/sovereign-llm-architecture-2026',
        image: SKY_IMG,
      },
    },
  },
];

export default function Nav() {
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActive(null);
    setMobileOpen(false);
  }, [pathname]);

  const activeItem = NAV.find((n) => n.label === active);

  return (
    <header
      ref={navRef}
      onMouseLeave={() => setActive(null)}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#000000] border-b border-[#1f1f1f] shadow-2xl py-3'
          : 'bg-[#000000] border-b border-[#141414] py-4'
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV.map((item) => {
            const isActive = active === item.label;
            const isCurrentPage = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

            return (
              <div
                key={item.label}
                onMouseEnter={() => setActive(item.label)}
                className="relative py-2"
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 text-[14px] font-medium transition-all rounded-md ${
                    isCurrentPage
                      ? 'text-[#86bc25] font-semibold'
                      : isActive
                      ? 'text-white bg-[#141414]'
                      : 'text-zinc-300 hover:text-white hover:bg-[#0f0f0f]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      isActive ? 'rotate-180 text-[#86bc25]' : 'text-zinc-500'
                    }`}
                  />
                </Link>
              </div>
            );
          })}
          <Link
            href="/careers"
            className={`px-4 py-2 text-[14px] font-medium transition-all rounded-md ${
              pathname === '/careers' ? 'text-[#86bc25] font-semibold' : 'text-zinc-300 hover:text-white hover:bg-[#0f0f0f]'
            }`}
          >
            Careers
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#86bc25] text-black hover:bg-[#97d031] text-[13.5px] font-bold px-5 py-2.5 rounded shadow transition-all duration-200 hover:shadow-lg hover:shadow-[#86bc25]/20"
          >
            <span>Partner Briefing</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Desktop Mega-Menu Dropdown Panel */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 bg-[#000000] border-b border-[#1f1f1f] shadow-2xl text-white overflow-hidden"
          >
            <div className="mx-auto max-w-[1600px] border-t border-[#1a1a1a]">
              <div className="grid grid-cols-12 min-h-[380px]">
                
                {/* Left Category Column */}
                <div className="col-span-3 p-8 bg-[#000000] border-r border-[#1a1a1a] flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#86bc25] block mb-2">
                      {activeItem.panel.lead.title}
                    </span>
                    <p className="text-[13.5px] leading-relaxed text-zinc-300 font-light mb-8">
                      {activeItem.panel.lead.description}
                    </p>

                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#86bc25] block mb-3">
                      Sub-practices & Focus
                    </span>
                    <ul className="space-y-2">
                      {activeItem.panel.categories.map((c) => (
                        <li key={c.label}>
                          <Link
                            href={c.href}
                            onClick={() => setActive(null)}
                            className="inline-flex items-center gap-2.5 text-[13.5px] text-zinc-300 hover:text-[#86bc25] font-medium transition-colors group"
                          >
                            <RenderIcon name={c.icon} className="h-4 w-4 text-[#86bc25] group-hover:scale-110 transition-transform" />
                            <span>{c.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Main Navigation Links */}
                <div className="col-span-5 p-10 bg-[#000000] flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-semibold block mb-6">
                      Explore Capabilities & Areas
                    </span>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-7">
                      {activeItem.panel.pages.map((p) => (
                        <Link key={p.title} href={p.href} onClick={() => setActive(null)} className="group block">
                          <div className="flex items-start gap-3">
                            {p.icon && (
                              <span className="mt-1 flex h-7 w-7 items-center justify-center rounded bg-[#1a1a1a] border border-[#262626] text-[#86bc25] group-hover:bg-[#86bc25] group-hover:text-black transition-colors shrink-0">
                                <RenderIcon name={p.icon} className="h-4 w-4" />
                              </span>
                            )}
                            <div className="min-w-0">
                              <h5 className="text-[15px] font-semibold tracking-tight text-white group-hover:text-[#86bc25] transition-colors truncate">
                                {p.title}
                              </h5>
                              <p className="mt-1 text-[12.5px] leading-relaxed text-zinc-400 font-light line-clamp-2">
                                {p.desc}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={activeItem.href}
                    onClick={() => setActive(null)}
                    className="mt-8 inline-flex items-center gap-2 border-b border-zinc-700 pb-1 text-[13.5px] font-semibold text-[#86bc25] hover:text-white hover:border-white transition-colors w-max"
                  >
                    <span>View all {activeItem.label.toLowerCase()} overview</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Right Feature Spotlight */}
                <div className="col-span-4 p-10 bg-[#000000] border-l border-[#1a1a1a] flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#86bc25] block mb-4">
                      {activeItem.panel.featured.tag}
                    </span>
                    <Link
                      href={activeItem.panel.featured.href}
                      onClick={() => setActive(null)}
                      className="group block border-l-2 border-[#86bc25] pl-6 py-1 transition-all hover:border-white"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden rounded mb-5 border border-[#262626]">
                        <Image
                          src={activeItem.panel.featured.image}
                          alt=""
                          fill
                          sizes="450px"
                          className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <h5 className="text-[20px] font-medium leading-snug tracking-tight text-white group-hover:text-[#86bc25] transition-colors text-pretty">
                        {activeItem.panel.featured.title}
                      </h5>
                      <span className="mt-4 inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#86bc25] group-hover:translate-x-1 transition-transform">
                        <span>{activeItem.panel.featured.cta}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 lg:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-50 w-[90%] max-w-[400px] bg-[#090b0f] border-l border-[#1a1a1a] text-white flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div>
                <div className="sticky top-0 z-10 flex h-16 items-center justify-between px-6 border-b border-[#1a1a1a] bg-[#090b0f]">
                  <Logo />
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 text-zinc-400 hover:text-white"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  {NAV.map((item) => (
                    <div key={item.label} className="border-b border-[#1a1a1a] pb-4">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-lg font-bold text-white hover:text-[#86bc25] block mb-2"
                      >
                        {item.label}
                      </Link>
                      <div className="pl-3 space-y-2">
                        {item.panel.pages.slice(0, 4).map((p) => (
                          <Link
                            key={p.title}
                            href={p.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-sm text-zinc-400 hover:text-white block py-1"
                          >
                            {p.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div>
                    <Link
                      href="/careers"
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-bold text-white hover:text-[#86bc25] block"
                    >
                      Careers
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-[#1a1a1a] bg-[#090b0f]">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#86bc25] text-black font-bold text-sm py-3 rounded shadow"
                >
                  <span>Partner Briefing</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
