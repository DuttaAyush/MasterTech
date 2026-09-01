'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageShell from '@/components/site/page-shell';
import { ArrowUpRight, Clock, FileText, Download, Sparkles, CheckCircle, ChevronDown, ChevronUp, Filter, SlidersHorizontal, Check } from 'lucide-react';

import { BLOGS_DATA } from '@/lib/blogs-data';
import { REPORTS_DATA } from '@/lib/reports-data';

const TABS = ['All', 'Artificial Intelligence', 'Cybersecurity', 'Cloud & FinOps', 'Digital Strategy'];

export default function BlogsPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [sortBy, setSortBy] = useState('latest');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const filterRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
        setIsSortOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredAndSortedBlogs = useMemo(() => {
    let list = activeTab === 'All' ? [...BLOGS_DATA] : BLOGS_DATA.filter((b) => b.category === activeTab);
    if (sortBy === 'oldest') {
      list.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === 'latest') {
      list.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === 'title') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }
    return list;
  }, [activeTab, sortBy]);

  // Display 3 by default unless expanded
  const visibleBlogs = isExpanded ? filteredAndSortedBlogs : filteredAndSortedBlogs.slice(0, 3);

  return (
    <PageShell>
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#080d1a] text-white font-sans overflow-hidden border-b border-[#1c3969]">
        <div className="relative h-[340px] md:h-[420px] w-full overflow-hidden">
          <Image
            src="/images/optimized/data_analytics.webp"
            alt="Insights & Research - MIMAG Technologies"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/40 to-transparent" />
          
          <div className="absolute top-8 left-6 md:left-12 z-10 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
            <Link href="/" className="hover:underline text-white/70">Home</Link>
            <span>&gt;</span>
            <span className="text-[#86bc25]">Insights & Research</span>
          </div>

          <div className="absolute bottom-16 md:bottom-20 left-6 md:left-12 z-10 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
              Intelligence Built For <span className="font-semibold text-[#86bc25]">Enterprise Decision-Makers</span>
            </h1>
            <div className="mt-3 border-l-4 border-[#86bc25] pl-4 py-1">
              <p className="text-lg md:text-2xl font-light italic text-[#cbe395] leading-relaxed">
                &ldquo;Pragmatic field notes, architectural frameworks, whitepapers, and opinionated market briefings written directly by senior consulting directors.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MARKET RESEARCH REPORTS & WHITEPAPERS SECTION (Page Color Background with Blue Cards) */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-16 font-sans border-b border-[#e3ded4] relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative z-10">
          <div className="border-l-4 border-[#86bc25] pl-4 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#784813] flex items-center gap-2 mb-1">
                <FileText className="h-3.5 w-3.5 text-[#86bc25]" /> MIMAG Institute Research
              </span>
              <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-[#1c1a18]">
                Market Research Reports & <span className="font-bold text-black">Whitepapers</span>
              </h2>
            </div>
            <Link
              href="/reports"
              className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#1c1a18] hover:text-[#5e8817] transition-colors"
            >
              <span>Explore Full Research Library</span>
              <ArrowUpRight className="h-4 w-4 text-[#86bc25]" />
            </Link>
          </div>

          {/* 3 SAMPLE MARKET RESEARCH REPORTS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-7">
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

      {/* 3. FILTERABLE ARCHIVE (SHOWS 3 ARTICLES BY DEFAULT WITH EXPAND DROPDOWN) */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-20 font-sans border-t border-[#e8ded1] min-h-[600px]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          
          {/* Header Bar with Right-Aligned Filter Dropdowns */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#e6decb] pb-5 mb-10 gap-4" ref={filterRef}>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#85531b]">Knowledge Archive</span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#1c1a18] tracking-tight mt-1">
                Browse <span className="font-semibold">{activeTab === 'All' ? 'All Research Articles' : `${activeTab} Articles`}</span>
              </h3>
            </div>

            {/* RIGHT ALIGNED DROPDOWN FILTERS */}
            <div className="flex items-center gap-3 self-start md:self-auto relative z-30">
              
              {/* Category Dropdown Filter */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsCategoryOpen(!isCategoryOpen);
                    setIsSortOpen(false);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[#d6cbba] hover:border-[#86bc25] rounded-lg text-[13px] font-bold text-[#1c1a18] shadow-sm hover:shadow transition-all"
                >
                  <Filter className="h-4 w-4 text-[#86bc25]" />
                  <span>Category: <strong className="text-[#68461c]">{activeTab}</strong></span>
                  <ChevronDown className={`h-4 w-4 text-zinc-400 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                </button>

                {isCategoryOpen && (
                  <div className="absolute right-0 mt-2 w-60 bg-white border border-[#d6cbba] rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 border-b border-[#f0e8dc] mb-1">
                      Filter By Category
                    </div>
                    {TABS.map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => {
                          setActiveTab(tab);
                          setIsExpanded(false);
                          setIsCategoryOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-[13px] font-medium transition-colors flex items-center justify-between ${
                          activeTab === tab ? 'bg-[#faf5eb] text-[#704918] font-bold' : 'text-[#2e2b26] hover:bg-zinc-50'
                        }`}
                      >
                        <span>{tab}</span>
                        {activeTab === tab && <Check className="h-4 w-4 text-[#86bc25]" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* View / Sort Dropdown Filter */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsSortOpen(!isSortOpen);
                    setIsCategoryOpen(false);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[#d6cbba] hover:border-[#86bc25] rounded-lg text-[13px] font-bold text-[#1c1a18] shadow-sm hover:shadow transition-all"
                >
                  <SlidersHorizontal className="h-4 w-4 text-[#86bc25]" />
                  <span>View: <strong className="text-[#68461c]">{sortBy === 'latest' ? 'Latest First' : sortBy === 'oldest' ? 'Oldest First' : 'Alphabetical'}</strong></span>
                  <ChevronDown className={`h-4 w-4 text-zinc-400 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
                </button>

                {isSortOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-[#d6cbba] rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-zinc-400 border-b border-[#f0e8dc] mb-1">
                      Display Order
                    </div>
                    {[
                      { label: 'Latest First', value: 'latest' },
                      { label: 'Oldest First', value: 'oldest' },
                      { label: 'Alphabetical', value: 'title' }
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          setSortBy(opt.value);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-[13px] font-medium transition-colors flex items-center justify-between ${
                          sortBy === opt.value ? 'bg-[#faf5eb] text-[#704918] font-bold' : 'text-[#2e2b26] hover:bg-zinc-50'
                        }`}
                      >
                        <span>{opt.label}</span>
                        {sortBy === opt.value && <Check className="h-4 w-4 text-[#86bc25]" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Articles Grid (Displays 3 by default) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-7">
            {visibleBlogs.map((b) => (
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

          {/* VIEW ALL ARTICLES DROPDOWN TRIGGER BELOW GRID */}
          {filteredAndSortedBlogs.length > 3 && (
            <div className="mt-12 flex flex-col items-center justify-center">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#0b1b38] hover:bg-[#0f244a] text-white rounded-xl text-[13.5px] font-bold shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#1e3c70]"
              >
                <span>
                  {isExpanded
                    ? 'Collapse Research Archive'
                    : `View All Research Articles `}
                </span>
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4 text-[#86bc25] transition-transform group-hover:-translate-y-0.5" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-[#86bc25] transition-transform group-hover:translate-y-0.5" />
                )}
              </button>
            </div>
          )}

        </div>
      </section>
    </PageShell>
  );
}
