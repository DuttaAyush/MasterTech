'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageShell from '@/components/site/page-shell';

const posts = [
  { tag: 'Point of View', title: 'The next enterprise AI stack: what CIOs must architect for in 2026.', excerpt: 'A pragmatic reference model for enterprises moving from pilots to production LLM systems, including governance, evaluation, and retrieval.', date: 'June 2025', read: '12 min read' },
  { tag: 'Research', title: 'Zero-trust in regulated industries: a reference architecture.', excerpt: 'Lessons from six large-scale zero-trust rollouts in banking, insurance, and healthcare, distilled into an implementable blueprint.', date: 'May 2025', read: '9 min read' },
  { tag: 'Field Notes', title: 'Why platform teams outperform program offices at scale.', excerpt: 'How the platform-team operating model changes the economics of large enterprise transformation programs.', date: 'April 2025', read: '7 min read' },
  { tag: 'Point of View', title: 'The end of the vendor-led modernization era.', excerpt: 'A case for independent counsel in a market increasingly shaped by hyperscaler and vendor incentives.', date: 'March 2025', read: '8 min read' },
  { tag: 'Research', title: 'FinOps as an executive discipline, not a tooling category.', excerpt: 'What separates the top quartile of cloud-cost outcomes from the rest — hint: it is not the dashboard.', date: 'February 2025', read: '10 min read' },
  { tag: 'Field Notes', title: 'Building AI systems that survive procurement.', excerpt: 'How to design generative AI programs that clear risk, legal, and security committees without collapsing scope.', date: 'January 2025', read: '11 min read' },
];

export default function Page() {
  return (
    <PageShell>
      <section className="dark bg-background text-foreground border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 pt-8 lg:pt-10 pb-16 lg:pb-20">
          <p className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-8 mimag-gradient" />
            Insights
          </p>
          <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight text-foreground text-balance max-w-5xl">
            Field-grade research and{' '}
            <em className="italic">points of view.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
            Opinionated, pragmatic, and grounded in delivery. Written by the
            partners and principals doing the work with our clients.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-16">
          <div className="divide-y divide-border border-y border-border">
            {posts.map((p, i) => (
              <Link key={p.title} href="#" className="group grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 hover:bg-secondary/20 transition-colors -mx-6 lg:-mx-10 px-6 lg:px-10">
                <div className="lg:col-span-2 text-[12px] uppercase tracking-[0.18em] text-muted-foreground">
                  {p.tag}
                </div>
                <div className="lg:col-span-7">
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground text-pretty">{p.title}</h3>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{p.excerpt}</p>
                </div>
                <div className="lg:col-span-3 flex lg:justify-end lg:items-start">
                  <div className="text-right">
                    <p className="text-[13px] text-foreground/90">{p.date}</p>
                    <p className="mt-1 text-[12px] text-muted-foreground">{p.read}</p>
                    <ArrowUpRight className="mt-3 h-4 w-4 ml-auto text-muted-foreground group-hover:text-foreground" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
