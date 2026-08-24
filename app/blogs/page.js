'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageShell from '@/components/site/page-shell';
import { ArrowUpRight, Clock, FileText, Download, Sparkles, CheckCircle } from 'lucide-react';

import { BLOGS_DATA } from '@/lib/blogs-data';
import { REPORTS_DATA } from '@/lib/reports-data';

const TABS = ['All', 'Artificial Intelligence', 'Cybersecurity', 'Cloud & FinOps', 'Digital Strategy'];

export default function BlogsPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredBlogs = useMemo(() => {
    if (activeTab === 'All') return BLOGS_DATA;
    return BLOGS_DATA.filter((b) => b.category === activeTab);
  }, [activeTab]);

  return (
    <PageShell>
      {/* 1. DARK EXECUTIVE HERO */}
      <section className="bg-[#000000] text-white py-16 lg:py-20 border-b border-[#1a1a1a] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#86bc25] mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#86bc25]" />
              Insights & Research
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-light tracking-[-0.02em] text-white leading-[1.12]">
              Intelligence Built for <span className="font-semibold text-[#86bc25]">Enterprise Decision-Makers.</span>
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-[#999999] font-light">
              Pragmatic field notes, architectural frameworks, whitepapers, and opinionated market briefings written directly by senior consulting directors.
            </p>
          </div>
        </div>
      </section>

      {/* MIMAG LOGO GRADIENT SEPARATOR LINE */}
      <div className="w-full h-[4px] bg-gradient-to-r from-[#ef4444] via-[#ec4899] to-[#a855f7] relative z-20 shadow-[0_2px_20px_rgba(236,72,153,0.35)]" />

      {/* 2. EXECUTIVE BLUE SECTION: MARKET RESEARCH REPORTS & WHITEPAPERS */}
      <section className="bg-gradient-to-b from-[#07152b] via-[#0c2247] to-[#07152b] text-white py-16 font-sans border-b border-[#1c3969] relative overflow-hidden">
        {/* Subtle decorative background blur */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative z-10">
          <div className="border-l-4 border-[#86bc25] pl-4 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#63a3ff] flex items-center gap-2 mb-1">
                <FileText className="h-3.5 w-3.5 text-[#86bc25]" /> MIMAG Institute Research
              </span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                Market Research Reports & <span className="font-semibold text-[#86bc25]">Whitepapers</span>
              </h2>
            </div>
            <Link
              href="/reports"
              className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#86bc25] hover:text-white transition-colors"
            >
              <span>Explore Full Research Library</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 3 SAMPLE MARKET RESEARCH REPORTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {REPORTS_DATA.slice(0, 3).map((report) => (
              <Link
                key={report.id}
                href={`/reports/${report.slug}`}
                className="hover-mimag-border group flex flex-col justify-between bg-[#0b1b38]/90 border border-[#1e3c70] rounded-xl overflow-hidden shadow-xl hover:border-transparent hover:bg-[#0f244a] transition-all duration-300"
              >
                <div>
                  {/* Image header with subsector badge */}
                  <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
                    <Image
                      src={report.image}
                      alt={report.title}
                      fill
                      sizes="33vw"
                      className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-95"
                    />
                    <div className="absolute top-3 left-3 bg-[#86bc25] text-black px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider shadow">
                      {report.subsector}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#07152b]/90 text-white border border-[#1e3c70] px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider">
                      {report.pages}
                    </div>
                  </div>

                  {/* Report Card Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11.5px] text-[#90b8f0] font-semibold mb-2.5">
                      <span>{report.category}</span>
                      <span>•</span>
                      <span className="text-[#86bc25]">{report.fileSize}</span>
                    </div>

                    <h3 className="text-[18px] font-semibold text-white leading-snug group-hover:text-[#86bc25] transition-colors mb-3">
                      {report.title}
                    </h3>

                    <p className="text-[13.5px] text-[#b3cbee] font-light leading-relaxed mb-4 line-clamp-3">
                      {report.summary}
                    </p>
                  </div>
                </div>

                {/* Footer bar */}
                <div className="p-6 pt-0 border-t border-[#1a3461] mt-auto flex items-center justify-between text-[12px] pt-4">
                  <span className="text-zinc-400 font-medium truncate max-w-[170px]">{report.author}</span>
                  <span className="inline-flex items-center gap-1 font-bold text-[#86bc25] group-hover:text-white transition-colors">
                    <span>Read Report</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FILTERABLE ARCHIVE (BLOGS GRID - KEPT EXACTLY AS IT IS) */}
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

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {filteredBlogs.map((b) => (
              <Link
                key={b.id}
                href={`/blogs/${b.slug}`}
                className="hover-mimag-border group flex flex-col justify-between bg-white border border-[#e8decb] rounded-lg p-7 hover:border-transparent hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5 text-[11.5px] font-extrabold">
                    <span className="text-[#65431b] bg-[#fdfaf5] border border-[#f5ecdd] px-2.5 py-0.5 rounded uppercase tracking-wider">{b.category}</span>
                    <span className="text-[#8c8275] font-semibold">{b.readTime}</span>
                  </div>
                  <h4 className="text-[18px] font-bold text-[#1c1a18] leading-snug group-hover:text-[#5e8817] transition-colors mb-2.5">
                    {b.title}
                  </h4>
                  <p className="text-[14px] text-[#5c564e] font-normal leading-relaxed mb-6 line-clamp-3">
                    {b.summary}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#f2ebe0] flex items-center justify-between text-[12px]">
                  <span className="text-[#8c8275] font-semibold">{b.date}</span>
                  <span className="inline-flex items-center gap-1 font-bold text-[#1c1a18] group-hover:text-[#5e8817]">
                    Read article <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
