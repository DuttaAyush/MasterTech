'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import PageShell from '@/components/site/page-shell';
import SectionHeading from '@/components/site/section-heading';

const leaders = [
  { name: 'Elena Marchetti', role: 'Chief Executive Officer', bio: '25 years leading enterprise programs across financial services and public sector.' },
  { name: 'Ravi Nair', role: 'Chief Technology Officer', bio: 'Former principal engineer for hyperscale cloud platforms and AI infrastructure.' },
  { name: 'Amara Osei', role: 'Head of Strategy', bio: 'Advises boards on digital operating models and technology-led transformation.' },
  { name: 'Julien Bertrand', role: 'Head of Cybersecurity', bio: 'National-security background, now leading zero-trust programs for regulated clients.' },
];

export default function Page() {
  return (
    <PageShell>
      <section className="dark bg-background text-foreground relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1601785491008-d1153dfadd57?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwyfHxlbnRlcnByaXNlJTIwYXJjaGl0ZWN0dXJlfGVufDB8fHxibGFja3wxNzgzMTY0MTAyfDA&ixlib=rb-4.1.0&q=85"
            alt=""
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 pt-8 lg:pt-10 pb-16 lg:pb-20">
          <p className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-8 mimag-gradient" />
            Who we are
          </p>
          <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight text-foreground text-balance max-w-5xl">
            An independent firm for enterprises that treat technology as{' '}
            <em className="italic">strategy.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
            MIMAG Technologies was founded to bring senior, opinionated
            technology counsel to the boardroom and accountable delivery to the
            production floor &mdash; without the pyramid economics of legacy consulting.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-28">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Our principles" title="How we operate." />
            </div>
            <div className="lg:col-span-7 space-y-10">
              {[
                { t: 'Small teams, senior people.', d: 'Every engagement is led by partners who remain hands-on. Our leverage model is designed for expertise, not headcount.' },
                { t: 'Advisory that ships.', d: 'We do not stop at slides. Our teams stay through architecture, engineering, and steady-state operations.' },
                { t: 'Independence over incentives.', d: 'No vendor kickbacks. No reseller quotas. Our recommendations serve the client and the client only.' },
                { t: 'Craft as a discipline.', d: 'Code quality, systems thinking, and design taste are treated as first-class professional standards.' },
              ].map((p, i) => (
                <div key={p.t} className="border-t border-border pt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-2 text-[12px] uppercase tracking-[0.18em] text-muted-foreground">0{i + 1}</div>
                  <div className="md:col-span-10">
                    <h3 className="text-3xl font-medium tracking-tight text-foreground">{p.t}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground max-w-xl">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-28">
          <SectionHeading eyebrow="Leadership" title="Practitioners at the top." description="Our leadership team spends most of its time with clients, not in internal meetings." />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {leaders.map((l) => (
              <div key={l.name} className="bg-background p-8 min-h-[240px]">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-sm mimag-gradient opacity-90" />
                  <div>
                    <h4 className="text-[17px] font-medium tracking-tight text-foreground">{l.name}</h4>
                    <p className="mt-1 text-[12.5px] uppercase tracking-[0.14em] text-muted-foreground">{l.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-[13.5px] leading-relaxed text-muted-foreground">{l.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <SectionHeading eyebrow="Talk to us" title="Let’s see if we’re the right partner." />
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-3 text-[14px] font-medium text-background hover:-translate-y-0.5 transition-transform shrink-0">
              Contact MIMAG <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
