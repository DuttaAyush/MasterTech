'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageShell from '@/components/site/page-shell';
import { Search, Download, FileText, CheckCircle, ArrowUpRight, ShieldAlert, Sparkles } from 'lucide-react';

const WHITEPAPERS_DATA = [
  {
    id: 'wp-ai-banking',
    title: 'Regulatory-Grade AI & Sovereign LLM Deployments in Global Banking',
    subsector: 'Banking & Financial Markets',
    year: '2026',
    pages: '48 pages',
    summary: 'An architectural reference paper detailing model explainability, deterministic RAG retrieval, and ECB/FED compliance guidelines for tier-1 institutions.',
    fileSize: '4.2 MB PDF',
    image: 'https://images.unsplash.com/photo-1561233835-f937539b95b9?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
  {
    id: 'wp-zero-trust-cloud',
    title: 'Hybrid Cloud Security & Identity Fabric: Zero-Trust Implementation Guide',
    subsector: 'Cybersecurity & Infrastructure',
    year: '2026',
    pages: '36 pages',
    summary: 'Step-by-step migration frameworks for transitioning multi-cloud enterprises from VPN perimeters to continuous identity authentication and micro-segmentation.',
    fileSize: '3.8 MB PDF',
    image: 'https://images.unsplash.com/photo-1615225164633-69f53b1dfd74?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
  {
    id: 'wp-finops-elastic',
    title: 'Cloud Cost Optimization & FinOps Maturity Model for Executive CIOs',
    subsector: 'Cloud Modernization',
    year: '2026',
    pages: '32 pages',
    summary: 'Quantifying architectural technical debt, right-sizing cluster orchestration, and embedding real-time billing governance directly into CI/CD developer workflows.',
    fileSize: '2.9 MB PDF',
    image: 'https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
  {
    id: 'wp-healthcare-fabric',
    title: 'Clinical Data Interoperability: FHIR Fabrics and Real-Time Hospital Analytics',
    subsector: 'Healthcare & Life Sciences',
    year: '2025',
    pages: '54 pages',
    summary: 'Unifying patient records across disparate regional clinical management systems with zero diagnostic latency and rigorous HIPAA cryptographic standards.',
    fileSize: '5.1 MB PDF',
    image: 'https://images.unsplash.com/photo-1708651949057-34781b3cbdcd?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
  {
    id: 'wp-manufacturing-iot',
    title: 'Industry 4.0 Autonomous Operations & Edge Computing Analytics',
    subsector: 'Industrial & Energy Ops',
    year: '2025',
    pages: '40 pages',
    summary: 'Deploying robust machine learning inference models directly to manufacturing plant floor hardware for predictive maintenance and zero-defect quality control.',
    fileSize: '3.5 MB PDF',
    image: 'https://images.unsplash.com/photo-1601785491008-d1153dfadd57?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
];

export default function ReportsPage() {
  const [query, setQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');

  const sectors = useMemo(() => ['All', 'Banking & Financial Markets', 'Cybersecurity & Infrastructure', 'Cloud Modernization', 'Healthcare & Life Sciences', 'Industrial & Energy Ops'], []);

  const filteredReports = useMemo(() => {
    return WHITEPAPERS_DATA.filter((item) => {
      const matchSector = selectedSector === 'All' || item.subsector === selectedSector;
      const matchQuery = !query.trim() || [item.title, item.summary, item.subsector].join(' ').toLowerCase().includes(query.toLowerCase());
      return matchSector && matchQuery;
    });
  }, [query, selectedSector]);

  return (
    <PageShell>
      {/* 1. DARK EXECUTIVE HERO */}
      <section className="bg-[#000000] text-white py-16 lg:py-20 border-b border-[#1a1a1a] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#86bc25] mb-3 flex items-center gap-2">
              <FileText className="h-3.5 w-3.5 text-[#86bc25]" />
              MIMAG Research Institute
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-light tracking-[-0.02em] text-white leading-[1.12]">
              Technical Whitepapers & <span className="font-semibold text-[#86bc25]">Architectural Blueprints.</span>
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-[#999999] font-light">
              Free, peer-reviewed engineering research and reference architectures published directly by our practice partners. Zero commercial gatekeeping.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL TEST: MIMAG LOGO GRADIENT FIRST SEPARATOR LINE */}
      <div className="w-full h-[4px] bg-gradient-to-r from-[#ef4444] via-[#ec4899] to-[#a855f7] relative z-20 shadow-[0_2px_20px_rgba(236,72,153,0.35)]" />

      {/* 2. REDUCING GREEN GRADIENT SEARCH & DOMAIN TOOLBAR */}
      <section className="bg-gradient-to-b from-[#0e1b07] via-[#15270b] to-[#0e1b07] py-10 font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="hover-mimag-border bg-[#0b1405]/90 border border-[#264512] rounded-lg p-5 flex flex-col md:flex-row gap-6 items-center justify-between shadow-xl hover:border-transparent">
            <div className="relative w-full md:w-[450px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-zinc-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search blueprints by technology or domain..."
                className="w-full bg-[#112108] text-white text-[14px] pl-11 pr-4 py-3 rounded border border-[#2b4c16] focus:border-[#86bc25] focus:outline-none transition-colors placeholder:text-zinc-400 font-light"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
              <span className="text-[11.5px] uppercase tracking-wider text-[#aedc5b] font-bold mr-1">Domain Filter:</span>
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="bg-[#112108] text-white text-[13.5px] font-semibold px-4 py-3 rounded border border-[#2b4c16] focus:border-[#86bc25] focus:outline-none cursor-pointer hover:border-[#86bc25]"
              >
                {sectors.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WARM CREAM ALABASTER RESEARCH GRID (REFERENCE STYLE) */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-20 font-sans min-h-[600px] border-t border-[#e8ded1]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-[#e6decc]">
            <span className="text-[14px] text-[#5c564e] font-light">
              Showing <strong className="text-[#1c1a18] font-bold">{filteredReports.length}</strong> available architectural publications
            </span>
            <span className="text-[12px] font-extrabold uppercase tracking-widest text-[#5e8817] flex items-center gap-1.5 bg-[#edf7df] px-3 py-1 rounded border border-[#cbe6a3]">
              <CheckCircle className="h-3.5 w-3.5 text-[#5e8817]" /> Open Enterprise Access
            </span>
          </div>

          {filteredReports.length === 0 ? (
            <div className="py-20 text-center border border-[#e4dbce] rounded-lg bg-white max-w-xl mx-auto shadow-sm">
              <ShieldAlert className="h-12 w-12 text-[#86bc25] mx-auto mb-3" />
              <h3 className="text-xl font-bold text-[#1c1a18] mb-1">No technical reports match criteria</h3>
              <p className="text-[#6d6459] text-[14px] font-normal max-w-md mx-auto mb-6">
                Please reset your search filters to display the full library of available enterprise architecture studies.
              </p>
              <button
                type="button"
                onClick={() => { setQuery(''); setSelectedSector('All'); }}
                className="px-6 py-2.5 bg-[#86bc25] text-black font-extrabold text-[13px] rounded hover:bg-[#97d031]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {filteredReports.map((r) => (
                <div key={r.id} className="hover-mimag-border group flex flex-col justify-between bg-white border border-[#e8dfcf] rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-transparent hover:shadow-[0_8px_30px_rgba(134,188,37,0.15)] transition-all duration-300">
                  <div>
                    <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
                      <Image src={r.image} alt={r.title} fill sizes="33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute top-3 left-3 bg-[#1c1a18] text-[#86bc25] px-3 py-0.5 rounded text-[10.5px] font-extrabold uppercase tracking-wider shadow">
                        {r.subsector}
                      </div>
                    </div>

                    <div className="p-7">
                      <div className="flex items-center justify-between text-[11.5px] text-[#8c8275] font-semibold mb-3">
                        <span>Published: {r.year}</span>
                        <span>•</span>
                        <span>{r.pages}</span>
                        <span>•</span>
                        <span className="text-[#655b4e] font-extrabold">{r.fileSize}</span>
                      </div>

                      <h3 className="text-[19px] font-bold text-[#1c1a18] leading-snug group-hover:text-[#5e8817] transition-colors mb-3">
                        {r.title}
                      </h3>

                      <p className="text-[14px] text-[#5c564e] font-normal leading-relaxed mb-4">
                        {r.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-7 py-4 border-t border-[#f2ece1] bg-[#fbf9f5] flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#1c1a18] text-white text-[13px] font-bold px-4 py-2.5 rounded hover:bg-[#86bc25] hover:text-black transition-all"
                    >
                      <Download className="h-3.5 w-3.5 text-[#86bc25] group-hover:text-black" />
                      <span>Request PDF</span>
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-[13px] font-extrabold text-[#5e8817] hover:underline"
                    >
                      <span>Consult Author</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. SAPPHIRE BLUE BESPOKE RESEARCH INQUIRY */}
      <section className="bg-gradient-to-r from-[#0a162b] via-[#0e2140] to-[#0a162b] text-white py-16 border-t border-[#1e3c70] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#63a3ff] flex items-center gap-1.5 mb-1">
              <Sparkles className="h-3.5 w-3.5 text-[#86bc25]" /> Custom Feasibility Audits
            </span>
            <h4 className="text-2xl font-light text-white tracking-tight">Need custom infrastructure evaluation?</h4>
            <p className="text-[14.5px] text-[#b3cbee] font-light mt-1">Our practice partners conduct tailored technical risk studies and architecture audits.</p>
          </div>
          <Link
            href="/contact"
            className="rounded bg-[#86bc25] px-7 py-4 text-[14px] font-semibold text-black hover:bg-[#97d031] transition-all shrink-0 shadow-lg shadow-[#86bc25]/20 inline-flex items-center gap-1.5"
          >
            <span>Commission Bespoke Study</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
