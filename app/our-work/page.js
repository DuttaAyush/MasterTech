'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageShell from '@/components/site/page-shell';
import SectionHeading from '@/components/site/section-heading';

const studies = [
  { client: 'Global Tier-1 Bank', region: 'EMEA', title: 'Core banking modernization across 14 markets in 24 months.', metric: '€1.9B', metricLabel: 'annual run-cost reduction', image: '/images/optimized/energy_grid.webp' },
  { client: 'Fortune 100 Insurer', region: 'North America', title: 'Enterprise LLM platform for claims and underwriting decisions.', metric: '38%', metricLabel: 'faster claim resolution', image: '/images/optimized/bfsi_banking.webp' },
  { client: 'National Health System', region: 'APAC', title: 'Clinical data fabric across 220 hospitals with regulator sign-off.', metric: '11.4M', metricLabel: 'patient records unified', image: '/images/optimized/cyber_defense.webp' },
  { client: 'Global Energy Major', region: 'Global', title: 'Zero-trust rollout for 180,000 employees and 42 subsidiaries.', metric: '82%', metricLabel: 'reduction in incident MTTR', image: '/images/optimized/cloud_autonomous.webp' },
  { client: 'Public Transportation Authority', region: 'EMEA', title: 'Real-time operations platform for a metropolitan rail network.', metric: '24%', metricLabel: 'on-time performance improvement', image: '/images/optimized/healthcare_interop.webp' },
  { client: 'Global Consumer Retailer', region: 'Americas', title: 'Unified commerce platform serving 8,400 stores and 6 marketplaces.', metric: '2.1x', metricLabel: 'digital revenue growth', image: '/images/optimized/hero_defense_tech.webp' },
];

export default function Page() {
  return (
    <PageShell>
      <section className="dark bg-background text-foreground border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 pt-8 lg:pt-10 pb-16 lg:pb-20">
          <p className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-8 mimag-gradient" />
            Our work
          </p>
          <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight text-foreground text-balance max-w-5xl">
            Programs that <em className="italic">shipped</em> — and moved the numbers.
          </h1>
          <p className="mt-10 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
            A selection of engagements delivered with global enterprises. Client
            names are anonymized where confidentiality applies; outcomes are
            verified.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studies.map((s, i) => (
              <Link key={s.title} href="/contact" className="group block">
                <div className="relative aspect-[16/11] overflow-hidden rounded-sm border border-border">
                  <Image src={s.image} alt="" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover opacity-75 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Case Study 0{i + 1}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl md:text-5xl text-foreground tracking-tight font-medium">{s.metric}</div>
                      <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground max-w-[180px]">{s.metricLabel}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">{s.client} · {s.region}</p>
                    <h3 className="mt-3 text-[20px] leading-snug tracking-tight text-foreground text-pretty">{s.title}</h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
