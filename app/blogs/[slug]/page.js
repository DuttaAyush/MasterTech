'use client';

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import PageShell from '@/components/site/page-shell';
import { getBlogBySlug, BLOGS_DATA } from '@/lib/blogs-data';
import {
  ArrowLeft, ArrowUpRight, Clock, Calendar, User, Quote,
  CheckCircle, Sparkles, Share2, Bookmark, ChevronRight
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
      toast.success('Article link copied to clipboard.');
    }
  };

  return (
    <PageShell>
      {/* 1. DARK EXECUTIVE ARTICLE HERO */}
      <section className="bg-[#000000] text-white py-14 lg:py-20 border-b border-[#1a1a1a] font-sans">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between mb-8">
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
                <span>Share</span>
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

            {/* Article Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-light tracking-[-0.02em] text-white leading-[1.18] mb-6">
              {blog.title}
            </h1>

            {/* Author Profile Bar */}
            <div className="flex items-center gap-4 pt-6 border-t border-[#1a1a1a]">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-[#86bc25] shadow-md shrink-0">
                <Image src={blog.authorAvatar} alt={blog.author} fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-white">{blog.author}</h4>
                <p className="text-[12.5px] text-[#a0c283] font-medium">{blog.authorRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRADIENT SEPARATOR LINE */}
      <div className="w-full h-[4px] bg-gradient-to-r from-[#ef4444] via-[#ec4899] to-[#a855f7] relative z-20 shadow-[0_2px_20px_rgba(236,72,153,0.35)]" />

      {/* 2. MAIN EDITORIAL ARTICLE BODY (CREAM / ELEGANT ALABASTER STAGE) */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-16 lg:py-24 font-sans min-h-[700px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          {/* Featured Header Banner Image */}
          <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden shadow-2xl border border-[#e4d7c5] mb-12 bg-[#1c1a18]">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a18]/70 via-transparent to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-10">
              {/* Executive Summary Callout */}
              <div className="bg-white border-l-4 border-[#86bc25] p-6 sm:p-8 rounded-r-xl border-y border-r border-[#e4d7c5] shadow-sm">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#784813] block mb-2">
                  Executive Briefing Summary
                </span>
                <p className="text-[16px] sm:text-[17px] text-[#332e28] font-normal leading-relaxed italic">
                  &ldquo;{blog.summary}&rdquo;
                </p>
              </div>

              {/* Styled Quote Box */}
              {blog.quote && (
                <div className="bg-[#0b1830] text-white p-8 rounded-xl border border-[#1d3969] shadow-xl relative overflow-hidden my-8">
                  <Quote className="h-10 w-10 text-[#86bc25]/20 absolute top-4 right-4" />
                  <p className="text-[17px] sm:text-[19px] font-light leading-relaxed text-[#e6f0ff] relative z-10">
                    {blog.quote}
                  </p>
                </div>
              )}

              {/* Article Content Sections */}
              <div className="space-y-8">
                {blog.content.map((sec, idx) => (
                  <div key={idx} className="bg-white border border-[#e4d7c5] rounded-xl p-6 sm:p-9 shadow-sm">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#1c1a18] tracking-tight mb-4 pb-3 border-b border-[#f2ece2]">
                      {sec.heading}
                    </h2>
                    <p className="text-[15px] sm:text-[16px] text-[#4a4338] font-normal leading-relaxed">
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Architectural Takeaways Box */}
              {blog.takeaways && (
                <div className="bg-[#f3edd0]/60 border border-[#e2d5ad] rounded-xl p-6 sm:p-8">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#6b4712] block mb-4">
                    Key Architectural Takeaways
                  </span>
                  <ul className="space-y-3">
                    {blog.takeaways.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14.5px] text-[#3b3225] font-medium leading-relaxed">
                        <CheckCircle className="h-5 w-5 text-[#5e8817] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar Column */}
            <div className="lg:col-span-4 space-y-8">
              {/* Author Card */}
              <div className="bg-white border border-[#e4d7c5] rounded-xl p-6 shadow-sm">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#784813] block mb-4">
                  About the Author
                </span>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-[#86bc25] shadow shrink-0">
                    <Image src={blog.authorAvatar} alt={blog.author} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#1c1a18]">{blog.author}</h4>
                    <p className="text-[12px] text-[#5e8817] font-semibold">{blog.authorRole}</p>
                  </div>
                </div>
                <p className="text-[13px] text-[#5c5449] font-normal leading-relaxed border-t border-[#f2ece2] pt-4">
                  Senior practice director specializing in complex enterprise deployments, regulatory governance, and sovereign cloud architectures.
                </p>
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

          {/* Related Articles Footer Section */}
          <div className="mt-20 pt-12 border-t border-[#e4d7c5]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#784813] block mb-1">
                  Further Reading
                </span>
                <h3 className="text-2xl font-bold text-[#1c1a18]">Related Executive Insights</h3>
              </div>
              <Link href="/blogs" className="text-[13px] font-bold text-[#5e8817] hover:underline flex items-center gap-1">
                <span>View All Articles</span>
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
                      Read Article <ArrowUpRight className="h-3.5 w-3.5" />
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
