'use client';

import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';
import PageShell from '@/components/site/page-shell';

const roles = [
  { title: 'Principal Cloud Architect', team: 'Cloud & Platform', location: 'London · Hybrid' },
  { title: 'Staff AI Engineer, LLM Platforms', team: 'AI & Data', location: 'New York · Hybrid' },
  { title: 'Senior Security Consultant, Zero Trust', team: 'Cybersecurity', location: 'Singapore · On-site' },
  { title: 'Engagement Partner, Financial Services', team: 'Advisory', location: 'Frankfurt · Hybrid' },
  { title: 'Principal Data Architect, Lakehouse', team: 'AI & Data', location: 'Toronto · Remote' },
  { title: 'Head of FinOps Practice', team: 'Cloud & Platform', location: 'Dubai · On-site' },
];

export default function Page() {
  return (
    <PageShell>
      <section className="dark bg-background text-foreground border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 pt-8 lg:pt-10 pb-16 lg:pb-20">
          <p className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-8 mimag-gradient" />
            Careers
          </p>
          <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight text-foreground text-balance max-w-5xl">
            Do the best work of your career{' '}
            <em className="italic">alongside senior peers.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
            No pyramids. No layered subcontractors. We hire experienced
            professionals who want ownership, complex problems, and clients
            worth caring about.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-20">
          <div className="flex items-baseline justify-between border-b border-border pb-6">
            <h2 className="text-3xl font-medium tracking-tight text-foreground">Open positions</h2>
            <span className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">{roles.length} roles</span>
          </div>
          <div className="divide-y divide-border">
            {roles.map((r) => (
              <Link key={r.title} href="/contact" className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-8 items-center hover:bg-secondary/20 -mx-6 lg:-mx-10 px-6 lg:px-10 transition-colors">
                <div className="md:col-span-6">
                  <h3 className="text-[22px] tracking-tight text-foreground">{r.title}</h3>
                </div>
                <div className="md:col-span-3 text-[13.5px] text-muted-foreground">{r.team}</div>
                <div className="md:col-span-2 flex items-center gap-1.5 text-[13.5px] text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {r.location}
                </div>
                <div className="md:col-span-1 flex md:justify-end">
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
