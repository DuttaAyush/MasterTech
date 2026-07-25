'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageShell from '@/components/site/page-shell';
import { ArrowUpRight, BookOpen, Clock, Sparkles } from 'lucide-react';

const BLOGS_DATA = [
  {
    id: 'ai-stack-2026',
    title: 'The Next Enterprise AI Stack: What CIOs Must Architect for in 2026',
    slug: 'next-enterprise-ai-stack-2026',
    category: 'Artificial Intelligence',
    readTime: '12 min read',
    date: 'July 18, 2026',
    author: 'Dr. Aris Thorne, Senior Partner',
    summary: 'Moving beyond prototype LLMs into resilient, auditable retrieval architectures and sovereign AI deployments in regulated financial banking.',
    image: 'https://images.unsplash.com/photo-1561233835-f937539b95b9?crop=entropy&cs=srgb&fm=jpg&q=85',
    featured: true,
  },
  {
    id: 'zero-trust-regulated',
    title: 'Zero-Trust Architecture in Regulated European Markets: A Complete Blueprint',
    slug: 'zero-trust-blueprint-regulated-markets',
    category: 'Cybersecurity',
    readTime: '9 min read',
    date: 'July 10, 2026',
    author: 'Elena Rostova, SOC Managing Director',
    summary: 'How to implement identity modernization and cryptographic perimeter defense across institutions managing over 100,000 corporate identities.',
    image: 'https://images.unsplash.com/photo-1615225164633-69f53b1dfd74?crop=entropy&cs=srgb&fm=jpg&q=85',
    featured: true,
  },
  {
    id: 'platform-teams-agility',
    title: 'Why Autonomous Platform Teams Outperform Legacy PMO Models at Scale',
    slug: 'platform-teams-vs-pmo-at-scale',
    category: 'Digital Strategy',
    readTime: '7 min read',
    date: 'June 28, 2026',
    author: 'Marcus Vance, Transformation Fellow',
    summary: 'Replacing layered consulting pyramids and slow waterfall oversight with accountable senior engineering pods that ship production code weekly.',
    image: 'https://images.unsplash.com/photo-1708651949057-34781b3cbdcd?crop=entropy&cs=srgb&fm=jpg&q=85',
    featured: true,
  },
  {
    id: 'finops-cloud-discipline',
    title: 'FinOps as a Core Architectural Discipline in Cloud Migration',
    slug: 'finops-cloud-architecture-discipline',
    category: 'Cloud & FinOps',
    readTime: '10 min read',
    date: 'June 15, 2026',
    author: 'Samuel K. Sterling, Cloud Practice Head',
    summary: 'Containing cloud compute inflation through automated workload elasticity and semantic container provisioning across AWS and Azure.',
    image: 'https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?crop=entropy&cs=srgb&fm=jpg&q=85',
    featured: false,
  },
  {
    id: 'data-mesh-banking',
    title: 'Deconstructing the Data Mesh: Real-Time Governance in Capital Markets',
    slug: 'data-mesh-governance-capital-markets',
    category: 'Artificial Intelligence',
    readTime: '14 min read',
    date: 'May 30, 2026',
    author: 'Vatsal N., Senior Data Fabric Advisor',
    summary: 'Bridging isolated organizational data silos without sacrificing strict GDPR compliance or ultra-low-latency high-frequency trade analytics.',
    image: 'https://images.unsplash.com/photo-1601785491008-d1153dfadd57?crop=entropy&cs=srgb&fm=jpg&q=85',
    featured: false,
  },
  {
    id: 'quantum-readiness-encryption',
    title: 'Post-Quantum Cryptography: Auditing Enterprise TLS and Vault Infrastructures',
    slug: 'post-quantum-cryptography-enterprise-audit',
    category: 'Cybersecurity',
    readTime: '11 min read',
    date: 'May 12, 2026',
    author: 'Elena Rostova, SOC Managing Director',
    summary: 'Preparing sovereign healthcare and banking infrastructures for next-generation algorithmic decoding risks long before hardware thresholds are reached.',
    image: 'https://images.unsplash.com/photo-1618722983535-6784e0b53ea9?crop=entropy&cs=srgb&fm=jpg&q=85',
    featured: false,
  },
];

const TABS = ['All', 'Artificial Intelligence', 'Cybersecurity', 'Cloud & FinOps', 'Digital Strategy'];

export default function BlogsPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredBlogs = useMemo(() => {
    if (activeTab === 'All') return BLOGS_DATA;
    return BLOGS_DATA.filter((b) => b.category === activeTab);
  }, [activeTab]);

  const featuredBlogs = useMemo(() => BLOGS_DATA.filter((b) => b.featured), []);

  return (
    <PageShell>
      {/* 1. DARK EXECUTIVE HERO */}
      <section className="bg-[#000000] text-white py-16 lg:py-20 border-b border-[#1a1a1a] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#86bc25] mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#86bc25]" />
              Thought Leadership & Perspectives
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-light tracking-[-0.02em] text-white leading-[1.12]">
              Intelligence Built for <span className="font-semibold text-[#86bc25]">Enterprise Decision-Makers.</span>
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-[#999999] font-light">
              Pragmatic field notes, architectural frameworks, and opinionated market briefings written directly by senior consulting directors.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL TEST: MIMAG LOGO GRADIENT FIRST SEPARATOR LINE */}
      <div className="w-full h-[4px] bg-gradient-to-r from-[#ef4444] via-[#ec4899] to-[#a855f7] relative z-20 shadow-[0_2px_20px_rgba(236,72,153,0.35)]" />

      {/* 2. REDUCING GREEN GRADIENT STAGE (FEATURED EDITORIALS) */}
      <section className="bg-gradient-to-b from-[#0e1b07] via-[#15270b] to-[#0e1b07] text-white py-16 font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="border-l-4 border-[#86bc25] pl-3 mb-8 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#86bc25] block">Spotlight Perspectives</span>
              <h2 className="text-2xl font-light tracking-tight text-white">Featured <span className="font-semibold text-[#86bc25]">Editorials</span></h2>
            </div>
            <span className="text-[12.5px] text-zinc-300 hidden sm:block font-light">Partner field notes updated weekly</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBlogs.map((b) => (
              <div key={b.id} className="hover-mimag-border group flex flex-col bg-[#0b1506]/90 border border-[#264512] rounded-lg overflow-hidden shadow-lg hover:border-transparent transition-all duration-300">
                <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
                  <Image src={b.image} alt={b.title} fill sizes="33vw" className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-95" />
                  <div className="absolute top-3 left-3 bg-[#86bc25] text-black px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider shadow">
                    {b.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[11.5px] text-[#a0c283] font-medium mb-3">
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3 text-[#86bc25]" /> {b.readTime}</span>
                      <span>•</span>
                      <span>{b.date}</span>
                    </div>
                    <h3 className="text-[18px] font-semibold text-white leading-snug group-hover:text-[#86bc25] transition-colors mb-3">
                      {b.title}
                    </h3>
                    <p className="text-[13.5px] text-zinc-300 font-light leading-relaxed mb-4 line-clamp-2">
                      {b.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#233b12] flex items-center justify-between text-[12px]">
                    <span className="text-zinc-400 font-medium truncate max-w-[180px]">{b.author}</span>
                    <span className="inline-flex items-center gap-1 font-bold text-white group-hover:text-[#86bc25]">
                      <span>Read article</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CURATED WARM CREAM ALABASTER THEME (FILTERABLE REPOSITORY) */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-20 font-sans border-t border-[#e8ded1] min-h-[600px]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="mb-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#85531b]">Knowledge Archive</span>
            <h3 className="text-2xl sm:text-3xl font-light text-[#1c1a18] tracking-tight mt-1">Browse <span className="font-semibold">All Research Articles</span></h3>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-[#e6decb] pb-5 mb-12">
            {TABS.map((tab) => {
              const active = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4.5 py-2 rounded-sm text-[13px] font-semibold transition-all ${
                    active
                      ? 'bg-[#86bc25] text-black shadow-md shadow-[#86bc25]/20'
                      : 'bg-white text-[#524a3f] border border-[#e4dcce] hover:bg-[#86bc25] hover:text-black hover:border-[#86bc25]'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Articles Grid with Minimalist Mimang Logo Hover Boundary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {filteredBlogs.map((b) => (
              <div key={b.id} className="hover-mimag-border group flex flex-col justify-between bg-white border border-[#e8decb] rounded-lg p-7 hover:border-transparent hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-3.5 text-[11.5px] font-extrabold">
                    <span className="text-[#65431b] bg-[#fdfaf5] border border-[#f5ecdd] px-2.5 py-0.5 rounded uppercase tracking-wider">{b.category}</span>
                    <span className="text-[#8c8275] font-semibold">{b.readTime}</span>
                  </div>
                  <h4 className="text-[18px] font-bold text-[#1c1a18] leading-snug group-hover:text-[#5e8817] transition-colors mb-2.5">
                    {b.title}
                  </h4>
                  <p className="text-[14px] text-[#5c564e] font-normal leading-relaxed mb-6">
                    {b.summary}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#f2ebe0] flex items-center justify-between text-[12px]">
                  <span className="text-[#8c8275] font-semibold">{b.date}</span>
                  <span className="inline-flex items-center gap-1 font-extrabold text-[#1c1a18] group-hover:text-[#5e8817]">
                    Explore essay <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SAPPHIRE BLUE ADVISORY DIALOGUE & BLACK FOOTER CTA TRANSITION */}
      <section className="bg-gradient-to-r from-[#0a162b] via-[#0e2140] to-[#0a162b] text-white py-16 border-t border-[#1e3c70] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#63a3ff] flex items-center gap-1.5 mb-1">
              <Sparkles className="h-3.5 w-3.5 text-[#86bc25]" /> Bespoke Advisory
            </span>
            <h4 className="text-2xl font-light text-white tracking-tight">Looking for customized transformation methodologies?</h4>
            <p className="text-[14.5px] text-[#c4d7ec] font-light mt-1">Our practice partners publish custom architectural briefs for active engineering pods.</p>
          </div>
          <Link
            href="/contact"
            className="rounded bg-[#86bc25] px-7 py-4 text-[14px] font-semibold text-black hover:bg-[#97d031] transition-all shrink-0 shadow-lg shadow-[#86bc25]/20 inline-flex items-center gap-1.5"
          >
            <span>Request Diagnostic Briefing</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
