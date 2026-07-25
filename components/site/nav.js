'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Menu, X, ArrowUpRight, ChevronDown, ChevronRight,
  Cloud, Cpu, ShieldCheck, Workflow, Database, Layers,
  Landmark, HeartPulse, Factory, Truck, Zap, ShoppingBag, Building2,
  Users2, Compass, LineChart, FileText, Newspaper, Briefcase, MapPin, BookOpen, Download
} from 'lucide-react';
import Logo from './logo';

const SKY_IMG =
  'https://images.unsplash.com/photo-1708651949057-34781b3cbdcd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBza3lzY3JhcGVyfGVufDB8fHxibGFja3wxNzgzMTY0MTAyfDA&ixlib=rb-4.1.0&q=85';
const DC_IMG =
  'https://images.unsplash.com/photo-1561233835-f937539b95b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwzfHxkYXRhJTIwY2VudGVyfGVufDB8fHxibGFja3wxNzgzMTY0MTAxfDA&ixlib=rb-4.1.0&q=85';
const ARCH_IMG =
  'https://images.unsplash.com/photo-1601785491008-d1153dfadd57?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwyfHxlbnRlcnByaXNlJTIwYXJjaGl0ZWN0dXJlfGVufDB8fHxibGFja3wxNzgzMTY0MTAyfDA&ixlib=rb-4.1.0&q=85';

const NAV = [
  {
    label: 'Who We Are',
    href: '/who-we-are',
    panel: {
      lead: {
        title: 'The firm',
        description:
          'An independent enterprise technology consultancy built on senior practitioners, outcome accountability, and architectural craft.',
      },
      categories: [
        { label: 'The firm & ethos', href: '/who-we-are', icon: Users2 },
        { label: 'Senior Leadership', href: '/who-we-are', icon: Compass },
        { label: 'Global offices', href: '/contact', icon: MapPin },
        { label: 'Sustainability & Governance', href: '/who-we-are', icon: LineChart },
      ],
      pages: [
        { title: 'Our principles', desc: 'How we operate, staff, and deliver without pass-throughs.', href: '/who-we-are' },
        { title: 'Leadership & Advisors', desc: 'Senior practitioners accountable at every engagement level.', href: '/who-we-are' },
        { title: 'Global Locations', desc: 'Six regional operations across three continents.', href: '/contact' },
        { title: 'Newsroom & press', desc: 'Corporate announcements and client impact coverage.', href: '/insights' },
      ],
      featured: {
        tag: 'About MIMAG',
        title: 'Built for the next decade of demanding enterprise IT.',
        cta: 'Read the manifesto',
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
          'Six senior-led transformation practices covering the enterprise stack — from board strategy to production deployment.',
      },
      categories: [
        { label: 'All capabilities', href: '/what-we-do', icon: Layers },
        { label: 'By measurable outcome', href: '/what-we-do', icon: LineChart },
        { label: 'Senior delivery model', href: '/who-we-are', icon: Compass },
      ],
      pages: [
        { title: 'Cloud Modernization', desc: 'AWS, Azure, and GCP re-architecture at scale.', href: '/what-we-do', icon: Cloud },
        { title: 'AI & Applied Intelligence', desc: 'LLM ops, enterprise retrieval, and regulated governance.', href: '/what-we-do', icon: Cpu },
        { title: 'Cybersecurity & Zero Trust', desc: 'Identity modernization and SOC defense perimeter.', href: '/what-we-do', icon: ShieldCheck },
        { title: 'Digital Transformation', desc: 'Operating model, Agile engineering, and organizational change.', href: '/what-we-do', icon: Workflow },
        { title: 'Data & Analytics Fabric', desc: 'Lakehouse architectures and real-time semantic layers.', href: '/what-we-do', icon: Database },
        { title: 'Enterprise Architecture', desc: 'API integration strategy and long-term tech standards.', href: '/what-we-do', icon: Layers },
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
        title: 'Domain fluency',
        description:
          'Deep vertical fluency that moves at the speed of your regulators across global critical infrastructures.',
      },
      categories: [
        { label: 'Financial Services', href: '/industries', icon: Landmark },
        { label: 'Healthcare & Life Sciences', href: '/industries', icon: HeartPulse },
        { label: 'Industrial & Energy Ops', href: '/industries', icon: Factory },
        { label: 'Public Sector & Defense', href: '/industries', icon: Building2 },
      ],
      pages: [
        { title: 'Banking & Capital Markets', desc: 'Core platforms, instant payments, and compliance AI.', href: '/industries', icon: Landmark },
        { title: 'Insurance Intelligence', desc: 'Automated underwriting and zero-latency claims ops.', href: '/industries', icon: ShieldCheck },
        { title: 'Healthcare Data Fabrics', desc: 'Clinical platforms and HIPAA-compliant diagnostic AI.', href: '/industries', icon: HeartPulse },
        { title: 'Smart Manufacturing', desc: 'Industry 4.0 IoT analytics and connected supply lines.', href: '/industries', icon: Factory },
        { title: 'Logistics & Supply Chain', desc: 'Network optimization and autonomous visibility platforms.', href: '/industries', icon: Truck },
        { title: 'Energy & Utilities', desc: 'Smart grid reliability and real-time asset monitoring.', href: '/industries', icon: Zap },
        { title: 'Retail & Unified Commerce', desc: 'Omnichannel personalization and algorithmic demand forecast.', href: '/industries', icon: ShoppingBag },
        { title: 'Public Sector Modernization', desc: 'Secure high-consequence citizen service cloud platforms.', href: '/industries', icon: Building2 },
      ],
      featured: {
        tag: 'Perspective',
        title: 'Architecting regulatory-grade AI in European banking.',
        cta: 'Read the research paper',
        href: '/insights',
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
        { label: 'All case studies', href: '/our-work', icon: Briefcase },
        { label: 'By industry sector', href: '/industries', icon: Building2 },
        { label: 'By technology capability', href: '/what-we-do', icon: Layers },
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
        cta: 'See full architecture story',
        href: '/our-work',
        image: ARCH_IMG,
      },
    },
  },
  {
    label: 'Intelligence & Blogs',
    href: '/blogs',
    panel: {
      lead: {
        title: 'Thought leadership',
        description:
          'Field-grade technical research, architecture blogs, and downloadable whitepapers written by senior partners.',
      },
      categories: [
        { label: 'Enterprise Tech Blogs', href: '/blogs', icon: BookOpen },
        { label: 'Technical Whitepapers', href: '/reports', icon: Download },
        { label: 'Executive Perspectives', href: '/insights', icon: LineChart },
        { label: 'Newsroom & Press', href: '/insights', icon: Newspaper },
      ],
      pages: [
        { title: 'The Next Enterprise AI Stack', desc: 'Technical perspective · 12 min read.', href: '/blogs' },
        { title: 'Zero-Trust in Regulated Financials', desc: 'Downloadable architectural reference · Whitepaper.', href: '/reports' },
        { title: 'Why Platform Teams Outperform', desc: 'Field notes on scaling organizational agility.', href: '/blogs' },
        { title: 'FinOps as a Core Engineering Discipline', desc: 'Cloud cost optimization models for CIOs.', href: '/reports' },
      ],
      featured: {
        tag: 'Featured Editorial',
        title: 'What Global CIOs Must Architect For in 2026 & Beyond.',
        cta: 'Read the thought piece',
        href: '/blogs',
        image: DC_IMG,
      },
    },
  },
  {
    label: 'Careers',
    href: '/careers',
    panel: {
      lead: {
        title: 'Join MIMAG',
        description:
          'Do the most consequential work of your career alongside seasoned peers on mission-critical client programs.',
      },
      categories: [
        { label: 'All open senior roles', href: '/careers', icon: Briefcase },
        { label: 'Engineering & Platform', href: '/careers', icon: Cpu },
        { label: 'Strategy & Advisory', href: '/careers', icon: Compass },
        { label: 'Global Operations', href: '/careers', icon: Users2 },
      ],
      pages: [
        { title: 'Principal Cloud Architect', desc: 'London · Hybrid · Enterprise AWS/Azure', href: '/careers' },
        { title: 'Staff AI / MLOps Engineer', desc: 'New York · Hybrid · Enterprise LLM Systems', href: '/careers' },
        { title: 'Senior Security Partner', desc: 'Singapore · Hybrid · Zero-Trust & SOC', href: '/careers' },
        { title: 'Engagement Partner, Financials', desc: 'Frankfurt · Hybrid · Banking & Core Modernization', href: '/careers' },
      ],
      featured: {
        tag: 'Life at MIMAG',
        title: 'No pass-throughs. Senior talent with genuine client ownership.',
        cta: 'Explore firm culture',
        href: '/careers',
        image: SKY_IMG,
      },
    },
  },
];

export default function Nav() {
  const pathname = usePathname();
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    setActive(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openPanel = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(label);
  };
  
  const closePanelSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActive(null), 150);
  };

  const activeItem = NAV.find((n) => n.label === active);

  return (
    <header
      onMouseLeave={closePanelSoon}
      className="fixed top-0 inset-x-0 z-50 bg-[#000000] border-b border-[#1a1a1a] text-white font-sans transition-all duration-200"
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Primary Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2" onMouseLeave={closePanelSoon}>
            {NAV.map((item) => {
              const isActive = pathname === item.href || (item.label === 'Intelligence & Blogs' && (pathname === '/reports' || pathname === '/insights'));
              const isOpen = active === item.label;
              return (
                <div
                  key={item.label}
                  onMouseEnter={() => openPanel(item.label)}
                  onFocus={() => openPanel(item.label)}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={`relative inline-flex items-center gap-1.5 px-3.5 py-2.5 text-[14px] font-light tracking-tight transition-colors duration-200 ${
                      isActive || isOpen ? 'text-[#86bc25]' : 'text-[#d0d0ce] hover:text-white'
                    }`}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#86bc25]' : 'text-zinc-500'}`} />
                    
                    {/* IntelVist-style animated bottom bar */}
                    <span
                      className={`absolute left-0 right-0 bottom-0 h-[2px] transition-transform duration-300 ${
                        isActive || isOpen ? 'bg-[#86bc25] scale-x-100' : 'bg-white scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right Action Trigger */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] border border-[#262626] text-white text-[13.5px] font-medium tracking-tight rounded-sm transition-all duration-200 hover:bg-[#86bc25] hover:text-black hover:border-[#86bc25]"
            >
              <span>Talk to our experts</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              aria-label="Toggle Menu"
              onClick={() => setMobileOpen(true)}
              className="p-2 text-white hover:text-[#86bc25] transition-colors border border-[#262626] rounded-sm bg-[#1a1a1a]"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Executive Mega-Menu (IntelVist Layout) */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            key={activeItem.label}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => openPanel(activeItem.label)}
            className="hidden lg:block absolute inset-x-0 top-16 bg-[#000000] border-b border-[#1a1a1a] shadow-2xl z-50 overflow-hidden"
          >
            <div className="mx-auto max-w-[1600px]">
              <div className="grid grid-cols-12 min-h-[380px]">
                
                {/* Left Rail (IntelVist style #1a1a1a background) */}
                <div className="col-span-3 bg-[#1a1a1a] p-10 flex flex-col justify-between border-r border-[#262626]">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#86bc25] block mb-2">
                      {activeItem.panel.lead.title}
                    </span>
                    <h4 className="text-[17px] font-light leading-relaxed text-[#ffffff] text-pretty">
                      {activeItem.panel.lead.description}
                    </h4>
                  </div>
                  
                  <ul className="space-y-2 mt-8 border-t border-[#262626] pt-6">
                    {activeItem.panel.categories.map((c) => (
                      <li key={c.label}>
                        <Link
                          href={c.href}
                          onClick={() => setActive(null)}
                          className="group flex items-center justify-between py-2.5 px-3 -mx-3 rounded text-[14px] text-[#d0d0ce] font-medium hover:bg-[#262626] hover:text-white transition-all border-l-2 border-transparent hover:border-[#86bc25]"
                        >
                          <span className="flex items-center gap-3">
                            {c.icon && <c.icon className="h-4 w-4 text-[#86bc25]" />}
                            {c.label}
                          </span>
                          <ChevronRight className="h-4 w-4 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Center Main Navigation Links */}
                <div className="col-span-5 p-10 bg-[#000000] flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 block mb-6">
                      Explore Capabilities & Areas
                    </span>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-7">
                      {activeItem.panel.pages.map((p) => (
                        <Link key={p.title} href={p.href} onClick={() => setActive(null)} className="group block">
                          <div className="flex items-start gap-3">
                            {p.icon && (
                              <span className="mt-1 flex h-7 w-7 items-center justify-center rounded bg-[#1a1a1a] border border-[#262626] text-[#86bc25] group-hover:bg-[#86bc25] group-hover:text-black transition-colors">
                                <p.icon className="h-4 w-4" />
                              </span>
                            )}
                            <div className="min-w-0">
                              <h5 className="text-[14.5px] font-medium tracking-tight text-[#ffffff] group-hover:text-[#86bc25] transition-colors truncate">
                                {p.title}
                              </h5>
                              <p className="mt-1 text-[12.5px] leading-relaxed text-[#999999] font-light line-clamp-2">
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
                    className="mt-8 inline-flex items-center gap-2 border-b border-zinc-700 pb-1 text-[13.5px] font-medium text-[#86bc25] hover:text-white hover:border-white transition-colors w-max"
                  >
                    <span>View all {activeItem.label.toLowerCase()} overview</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Right Feature Spotlight (IntelVist Green border-left callout) */}
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
                  <Logo size="sm" />
                  <button
                    aria-label="Close menu"
                    onClick={() => setMobileOpen(false)}
                    className="p-2 border border-[#262626] rounded text-white hover:text-[#86bc25]"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="px-6 py-4">
                  <ul className="divide-y divide-[#1a1a1a]">
                    {NAV.map((item) => {
                      const open = mobileSection === item.label;
                      return (
                        <li key={item.label} className="py-2">
                          <button
                            onClick={() => setMobileSection(open ? null : item.label)}
                            className="w-full flex items-center justify-between py-3 text-left text-[17px] font-medium tracking-tight text-white hover:text-[#86bc25] transition-colors"
                          >
                            <span>{item.label}</span>
                            <ChevronDown className={`h-4 w-4 text-zinc-400 transition-transform duration-200 ${open ? 'rotate-180 text-[#86bc25]' : ''}`} />
                          </button>
                          <AnimatePresence initial={false}>
                            {open && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden bg-[#1a1a1a] rounded-lg px-4 mb-3 border border-[#262626]"
                              >
                                <div className="py-3 space-y-2.5">
                                  <Link
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center justify-between text-[14px] font-semibold text-[#86bc25] pb-2 border-b border-white/10"
                                  >
                                    <span>Overview</span>
                                    <ArrowUpRight className="h-4 w-4" />
                                  </Link>
                                  {item.panel.pages.map((p) => (
                                    <Link
                                      key={p.title}
                                      href={p.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block py-1 text-[13.5px] font-light text-zinc-300 hover:text-white"
                                    >
                                      {p.title}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="p-6 border-t border-[#1a1a1a] bg-[#000000]">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#86bc25] text-black font-semibold text-[15px] rounded-sm hover:bg-[#a0d63a] transition-colors"
                >
                  <span>Talk to an expert</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <div className="mt-6 text-center">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 block mb-1">Direct inquiries</span>
                  <a href="mailto:partners@mimag.tech" className="text-[14px] font-medium text-white underline decoration-[#86bc25]">
                    partners@mimag.tech
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
