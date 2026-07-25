'use client';

import Link from 'next/link';
import { ArrowUpRight, Landmark, ShieldCheck, HeartPulse, Factory, Truck, Zap, ShoppingBag, Building2 } from 'lucide-react';
import PageShell from '@/components/site/page-shell';
import SectionHeading from '@/components/site/section-heading';

const list = [
  { icon: Landmark, name: 'Banking & Capital Markets', copy: 'Core banking modernization, real-time payments, regulatory-grade AI, and trading infrastructure.' },
  { icon: ShieldCheck, name: 'Insurance', copy: 'Underwriting intelligence, claims automation, policy platforms, and reinsurance operations.' },
  { icon: HeartPulse, name: 'Healthcare & Life Sciences', copy: 'Clinical data platforms, HIPAA-grade AI, R&D acceleration, and payer-provider integration.' },
  { icon: Factory, name: 'Manufacturing', copy: 'Industry 4.0, connected operations, quality intelligence, and supply-chain modernization.' },
  { icon: Truck, name: 'Logistics & Supply Chain', copy: 'Network optimization, visibility platforms, autonomous operations, and last-mile intelligence.' },
  { icon: Zap, name: 'Energy & Utilities', copy: 'Grid modernization, asset intelligence, sustainability reporting, and trading platforms.' },
  { icon: ShoppingBag, name: 'Retail & Consumer', copy: 'Unified commerce, personalization at scale, demand intelligence, and store operations.' },
  { icon: Building2, name: 'Public Sector', copy: 'Citizen platforms, secure cloud, mission-critical AI, and legacy modernization at scale.' },
];

export default function Page() {
  return (
    <PageShell>
      <section className="dark bg-background text-foreground border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 pt-32 pb-24">
          <p className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-8 mimag-gradient" />
            Industries
          </p>
          <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight text-foreground text-balance max-w-5xl">
            Domain fluency in the most{' '}
            <em className="italic">regulated, complex</em> environments.
          </h1>
          <p className="mt-10 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
            We operate where the stakes are highest. Our teams combine vertical
            depth with cross-industry pattern recognition to move faster,
            safely.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {list.map((i) => (
              <div key={i.name} className="group bg-background p-10 hover:bg-secondary/30 transition-colors">
                <div className="flex items-center gap-4">
                  <i.icon className="h-6 w-6 text-foreground shrink-0" />
                  <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground">{i.name}</h3>
                </div>
                <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground">{i.copy}</p>
                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <Link href="/our-work" className="text-[13px] text-foreground/90 inline-flex items-center gap-1.5">
                    Selected work <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link href="/contact" className="text-[13px] text-muted-foreground hover:text-foreground">Speak with a partner</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

