'use client';

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import PageShell from '@/components/site/page-shell';
import { getReportBySlug, REPORTS_DATA } from '@/lib/reports-data';
import {
  ArrowLeft, ArrowUpRight, Download, Share2,
  CheckCircle, ChevronRight, BookOpen, BarChart3, Lock, ShieldCheck
} from 'lucide-react';
import { toast } from 'sonner';

export default function ReportDetailPage({ params }) {
  const resolvedParams = use(params);
  const report = getReportBySlug(resolvedParams.slug);

  if (!report) {
    notFound();
  }

  const relatedReports = REPORTS_DATA.filter((r) => r.id !== report.id).slice(0, 2);

  const handleDownload = () => {
    toast.success(`Downloading "${report.title}" (${report.fileSize})... PDF download started.`);
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Report link copied to clipboard.');
    }
  };

  return (
    <PageShell>
      {/* 1. DARK SAPPHIRE EXECUTIVE REPORT HERO (No Author Info) */}
      <section className="relative bg-gradient-to-b from-[#050c1a] via-[#091730] to-[#050c1a] text-white py-12 lg:py-16 border-b border-[#1c3969] font-sans overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#86bc25]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 relative z-10">
          {/* Navigation & Actions */}
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-[13px] font-bold text-[#86bc25] hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Insights & Research</span>
            </Link>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-zinc-300 bg-[#0d2247] border border-[#1e3c70] px-3.5 py-1.5 rounded hover:text-white hover:border-[#86bc25] transition-all"
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>Share</span>
              </button>
            </div>
          </div>

          <div className="max-w-4xl">
            {/* Badges Bar */}
            <div className="flex flex-wrap items-center gap-3 mb-4 text-[11px] font-extrabold uppercase tracking-wider">
              <span className="bg-[#86bc25] text-black px-3 py-1 rounded shadow">
                {report.subsector}
              </span>
              <span className="bg-[#122b54] text-[#7eb3ff] border border-[#1e3c70] px-3 py-1 rounded">
                {report.category}
              </span>
              <span className="text-zinc-400">•</span>
              <span className="text-zinc-300 font-semibold">{report.pages}</span>
              <span className="text-zinc-500">•</span>
              <span className="text-[#86bc25] font-extrabold">{report.fileSize}</span>
            </div>

            {/* Main Report Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-light tracking-[-0.02em] text-white leading-[1.18] mb-4">
              {report.title}
            </h1>

            {/* Abstract */}
            <p className="text-[16px] sm:text-[17px] text-[#b3cbee] font-light leading-relaxed mb-6">
              {report.abstract}
            </p>

            {/* Download CTA Bar */}
            <div className="pt-4 border-t border-[#1a3461] flex items-center justify-between">
              <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#86bc25]">
                Executive Publication • {report.year} Edition
              </span>
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center gap-2 bg-[#86bc25] text-black hover:bg-[#97d031] text-[13.5px] font-extrabold px-6 py-2.5 rounded shadow-lg shadow-[#86bc25]/20 transition-all"
              >
                <Download className="h-4 w-4" />
                <span>Download Full PDF ({report.fileSize})</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REPORT CONTENT BODY WITH FULL-WIDTH PROGRESSIVE BLUR & GATED ACCESS */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-12 lg:py-16 font-sans min-h-[700px]">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">

          {/* MAIN 2-COLUMN REPORT LAYOUT (LEFT CONTENT + RIGHT SIDEBAR) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-8 pr-0 lg:pr-2">

              {/* 1. Executive Summary Callout (FULLY VISIBLE) */}
              <div className="bg-white border-l-4 border-[#86bc25] p-6 sm:p-8 rounded-r-xl border-y border-r border-[#e4d7c5] shadow-sm">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#784813] block mb-2">
                  Executive Research Briefing
                </span>
                <p className="text-[16px] sm:text-[17.5px] text-[#332e28] font-normal leading-relaxed italic">
                  &ldquo;{report.summary}&rdquo;
                </p>
              </div>

              {/* 2. Report Table of Contents (FULLY VISIBLE) */}
              <div className="bg-white border border-[#e4d7c5] rounded-xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1c1a18] tracking-tight mb-6 pb-3 border-b border-[#f2ece2] flex items-center gap-2.5">
                  <BookOpen className="h-6 w-6 text-[#5e8817]" />
                  <span>Report Table of Contents</span>
                </h2>
                <div className="divide-y divide-[#f2ece2]">
                  {report.tableOfContents.map((ch) => (
                    <div key={ch.chapter} className="py-3.5 flex items-center gap-4 group">
                      <span className="text-[12.5px] font-mono font-extrabold text-[#85531b] bg-[#fdfaf5] border border-[#f5ecdd] px-2.5 py-1 rounded">
                        CH {ch.chapter}
                      </span>
                      <span className="text-[15.5px] font-semibold text-[#1c1a18] group-hover:text-[#5e8817] transition-colors">
                        {ch.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. KEY ANALYTICAL FINDINGS WITH OVERLAY BLUR CURTAIN */}
              <div className="relative bg-white border border-[#e4d7c5] rounded-xl p-6 sm:p-8 shadow-sm overflow-hidden min-h-[480px]">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1c1a18] tracking-tight mb-6 pb-3 border-b border-[#f2ece2] flex items-center gap-2.5">
                  <BarChart3 className="h-6 w-6 text-[#5e8817]" />
                  <span>Key Analytical & Architectural Findings</span>
                </h2>

                {/* All Key Findings Rendered Naturally */}
                <div className="space-y-4">
                  {report.keyFindings.map((finding, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-4 rounded-lg bg-[#fcfaf7] border border-[#f2ebe0]">
                      <CheckCircle className="h-5 w-5 text-[#5e8817] shrink-0 mt-0.5" />
                      <p className="text-[15px] text-[#3d372e] font-medium leading-relaxed">
                        {finding}
                      </p>
                    </div>
                  ))}

                  <div className="pt-4 space-y-3 opacity-60">
                    <h3 className="text-lg font-bold text-[#1c1a18]">
                      Chapter 1: Enterprise System Topology & Microservices Benchmark
                    </h3>
                    <p className="text-[14px] text-[#555] leading-relaxed">
                      Our empirical load tests across 45 enterprise Kubernetes clusters revealed significant latency overhead in default service mesh configurations. By migrating ingress routing to eBPF-native kernel filters, throughput increased by 42%.
                    </p>
                  </div>
                </div>

                {/* SOFT GRADIENT BLUR OVERLAY (STARTS WITH VERY LIGHT BLUR, FADING TO CREAM WITH CENTERED CTA) */}
                <div className="absolute inset-x-0 bottom-0 top-[170px] bg-gradient-to-b from-transparent via-[#faf7f2]/80 to-[#faf7f2] backdrop-blur-[2px] hover:backdrop-blur-sm transition-all flex items-center justify-center p-6 text-center z-20">
                  
                  {/* FLOATING DARK SAPPHIRE UNLOCK CTA CARD */}
                  <div className="max-w-md w-full bg-[#07152b] border-2 border-[#1e3c70] text-white rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl relative z-30 flex flex-col items-center">
                    
                    <div className="w-13 h-13 rounded-full bg-[#86bc25]/15 border border-[#86bc25]/40 flex items-center justify-center mb-3 text-[#86bc25] shadow-[0_0_20px_rgba(134,188,37,0.3)]">
                      <Lock className="h-6 w-6 text-[#86bc25]" />
                    </div>

                    <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#86bc25] mb-1">
                      Restricted Enterprise Content
                    </span>

                    <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                      Contact Us to Unlock
                    </h3>

                    <p className="text-[13px] text-[#b3cbee] font-light leading-relaxed mb-6">
                      Get full unrestricted access to this complete {report.pages} technical research whitepaper, architectural blueprints, and benchmark matrices.
                    </p>

                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#86bc25] text-black font-extrabold text-[13.5px] py-3.5 px-6 rounded-lg hover:bg-[#97d031] transition-all shadow-lg shadow-[#86bc25]/25 group"
                    >
                      <ShieldCheck className="h-4.5 w-4.5 text-black" />
                      <span>Contact Us to Unlock</span>
                      <ArrowUpRight className="h-4 w-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    <p className="text-[11px] text-zinc-400 mt-3 font-medium">
                      Immediate access • Direct partner response
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-7 sticky top-24">
              
              {/* 1. Featured Image Banner */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-lg border border-[#e4d7c5] bg-[#1c1a18]">
                <Image
                  src={report.image}
                  alt={report.title}
                  fill
                  priority
                  className="object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a18]/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 bg-[#1c1a18]/80 text-[#86bc25] text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded border border-white/10">
                  {report.subsector}
                </span>
              </div>

              {/* 2. Full Technical Report PDF Card */}
              <div className="bg-white border-2 border-[#86bc25] rounded-xl p-6 sm:p-7 shadow-lg">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#5e8817] block mb-2">
                  Full Technical Report
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-[#1c1a18] mb-2">{report.title}</h4>
                <p className="text-[13px] text-[#635a4f] mb-5 font-normal leading-relaxed">
                  Download the complete {report.pages} peer-reviewed whitepaper including full system diagrams and TCO frameworks.
                </p>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#86bc25] text-black font-extrabold text-[13.5px] py-3 rounded hover:bg-[#97d031] transition-all shadow"
                >
                  <Download className="h-4 w-4" />
                  <span>Download PDF ({report.fileSize})</span>
                </button>
              </div>

              {/* 3. Advisory Services CTA Card */}
              <div className="bg-gradient-to-b from-[#07152b] to-[#050c1a] text-white p-6 sm:p-7 rounded-xl border border-[#1e3c70] shadow-xl">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#86bc25] block mb-2">
                  Advisory Services
                </span>
                <h4 className="text-xl font-light text-white tracking-tight mb-3">
                  Schedule a tailored briefing
                </h4>
                <p className="text-[13px] text-[#a9c4e6] font-light leading-relaxed mb-6">
                  Discuss the findings of this report directly with our senior practice partners. Zero sales representatives.
                </p>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#86bc25] text-black font-bold text-[13.5px] px-5 py-3 rounded hover:bg-[#97d031] transition-all shadow-md"
                >
                  <span>Book Partner Briefing</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

            </div>

          </div>

          {/* Related Reports Footer Grid */}
          <div className="mt-20 pt-12 border-t border-[#e4d7c5]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#784813] block mb-1">
                  MIMAG Institute Library
                </span>
                <h3 className="text-2xl font-bold text-[#1c1a18]">Related Research Reports</h3>
              </div>
              <Link href="/reports" className="text-[13px] font-bold text-[#5e8817] hover:underline flex items-center gap-1">
                <span>View Full Library</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {relatedReports.map((r) => (
                <Link
                  key={r.id}
                  href={`/reports/${r.slug}`}
                  className="hover-mimag-border group flex flex-col justify-between bg-white border border-[#e4d7c5] rounded-xl p-7 hover:border-transparent hover:shadow-xl transition-all"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#784813] bg-[#f4ece1] px-2.5 py-0.5 rounded mb-3 inline-block">
                      {r.subsector}
                    </span>
                    <h4 className="text-[18px] font-bold text-[#1c1a18] group-hover:text-[#5e8817] transition-colors mb-2">
                      {r.title}
                    </h4>
                    <p className="text-[13.5px] text-[#5c5449] font-normal line-clamp-2 mb-4">
                      {r.summary}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#f2ece2] flex items-center justify-between text-[12px]">
                    <span className="text-[#784813] font-bold">{r.pages} • {r.fileSize}</span>
                    <span className="inline-flex items-center gap-1 font-bold text-[#1c1a18] group-hover:text-[#5e8817]">
                      Read Report <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageShell>
  );
}
