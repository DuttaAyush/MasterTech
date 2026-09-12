'use client';

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import PageShell from '@/components/site/page-shell';
import { getBlogBySlug, BLOGS_DATA } from '@/lib/blogs-data';
import {
  ArrowLeft, ArrowUpRight, Clock, Calendar, Quote,
  CheckCircle, Share2, ChevronRight, Sparkles
} from 'lucide-react';
import { toast } from 'sonner';

export default function BlogDetailPage({ params }) {
  const resolvedParams = use(params);
  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = BLOGS_DATA.filter((b) => b.slug !== blog.slug).slice(0, 2);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Blog link copied to clipboard.');
    }
  };

  return (
    <PageShell>
      {/* 1. DARK EXECUTIVE BLOG HERO (Clean & No Author Profile) */}
      <section className="relative bg-[#000000] text-white py-12 lg:py-16 border-b border-[#1a1a1a] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-[13px] font-bold text-[#86bc25] hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Knowledge Archive</span>
            </Link>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-zinc-400 bg-[#1a1a1a] border border-[#262626] px-3 py-1.5 rounded hover:text-white hover:border-[#86bc25] transition-all"
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>Share Blog</span>
              </button>
            </div>
          </div>

          <div className="max-w-4xl">
            {/* Category & Read Time */}
            <div className="flex flex-wrap items-center gap-3 mb-4 text-[11px] font-bold uppercase tracking-wider">
              <span className="bg-[#86bc25] text-black px-3 py-1 rounded shadow">
                {blog.category}
              </span>
              <span className="text-[#a0c283] flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-[#86bc25]" /> {blog.readTime}
              </span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-400 flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-zinc-500" /> {blog.date}
              </span>
            </div>

            {/* Blog Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-light tracking-[-0.02em] text-white leading-[1.15]">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. BLOG CONTENT BODY (Natural Unenclosed Blog Text & Right Sidebar) */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-12 lg:py-16 font-sans min-h-[700px]">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            
            {/* LEFT SIDE CONTENT: Natural text flow, no outer box card wrapper */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-8 pr-0 lg:pr-4">
              
              {/* Executive Summary Callout (Dark Blue Card with 3-5 lines of summary) */}
              <div className="bg-[#0b1b38] text-white p-6 sm:p-8 rounded-xl border border-[#1e3c70] shadow-lg relative overflow-hidden">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#63a3ff] flex items-center gap-2 mb-3">
                  <Sparkles className="h-3.5 w-3.5 text-[#86bc25]" /> Executive Briefing Summary
                </span>
                <p className="text-[15.5px] sm:text-[17px] text-[#e6f0ff] font-light leading-relaxed italic">
                  &ldquo;{blog.summary}&rdquo;
                </p>
              </div>

              {/* White Background Quote Box with Bold Black Text */}
              {blog.quote && (
                <div className="bg-white border border-[#e4d7c5] p-7 sm:p-8 rounded-xl shadow-sm relative overflow-hidden my-6">
                  <Quote className="h-10 w-10 text-[#86bc25]/40 absolute top-4 right-4" />
                  <p className="text-[16.5px] sm:text-[18.5px] font-bold leading-relaxed text-black relative z-10">
                    &ldquo;{blog.quote}&rdquo;
                  </p>
                </div>
              )}

              {/* Natural Blog Typography (Direct text flow sits directly on page canvas, no outer box card) */}
              <div className="space-y-8 pt-2">
                {blog.content.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#1c1a18] tracking-tight pb-2 border-b border-[#e4d7c5]">
                      {sec.heading}
                    </h2>
                    <p className="text-[16.5px] sm:text-[17.5px] text-[#3b352d] font-normal leading-[1.8]">
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Architectural Takeaways */}
              {blog.takeaways && (
                <div className="bg-[#f3edd0]/70 border border-[#e2d5ad] rounded-xl p-6 sm:p-8 mt-8">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#784813] block mb-4">
                    Key Architectural Takeaways
                  </span>
                  <ul className="space-y-3">
                    {blog.takeaways.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] text-[#3b3225] font-medium leading-relaxed">
                        <CheckCircle className="h-5 w-5 text-[#5e8817] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* RIGHT SIDEBAR: Pushed further right with Featured Image + Consulting CTA Card */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-8 sticky top-24">
              
              {/* Featured Blog Image */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-lg border border-[#e4d7c5] bg-[#1c1a18]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  priority
                  className="object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a18]/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 bg-[#1c1a18]/80 text-[#86bc25] text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded border border-white/10">
                  {blog.category}
                </span>
              </div>

              {/* Diagnostic CTA Box */}
              <div className="bg-gradient-to-b from-[#0a162b] to-[#080d1a] text-white p-7 rounded-xl border border-[#1c3969] shadow-xl">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#86bc25] block mb-2">
                  Direct Advisory Access
                </span>
                <h4 className="text-xl font-light text-white tracking-tight mb-3">
                  Need tailored guidance on {blog.category}?
                </h4>
                <p className="text-[13px] text-[#a9c4e6] font-light leading-relaxed mb-6">
                  Schedule a 30-minute diagnostic briefing with senior practice partners. Zero junior pass-throughs.
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

          {/* 3. RELATED INSIGHTS SECTION */}
          <div className="mt-20 pt-12 border-t border-[#e4d7c5]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#784813] block mb-1">
                  Related Insights
                </span>
                <h3 className="text-2xl font-bold text-[#1c1a18]">Explore Related Blogs</h3>
              </div>
              <Link href="/blogs" className="text-[13px] font-bold text-[#5e8817] hover:underline flex items-center gap-1">
                <span>View All Insights</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {relatedBlogs.map((b) => (
                <Link
                  key={b.id}
                  href={`/blogs/${b.slug}`}
                  className="hover-mimag-border group flex flex-col justify-between bg-white border border-[#e4d7c5] rounded-xl p-7 hover:border-transparent hover:shadow-xl transition-all"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#784813] bg-[#f4ece1] px-2.5 py-0.5 rounded mb-3 inline-block">
                      {b.category}
                    </span>
                    <h4 className="text-[18px] font-bold text-[#1c1a18] group-hover:text-[#5e8817] transition-colors mb-2">
                      {b.title}
                    </h4>
                    <p className="text-[13.5px] text-[#5c5449] font-normal line-clamp-2 mb-4">
                      {b.summary}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#f2ece2] flex items-center justify-between text-[12px]">
                    <span className="text-[#784813] font-bold">{b.readTime}</span>
                    <span className="inline-flex items-center gap-1 font-bold text-[#1c1a18] group-hover:text-[#5e8817]">
                      Read Blog <ArrowUpRight className="h-3.5 w-3.5" />
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
