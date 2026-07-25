'use client';

import Link from 'next/link';
import { ArrowUpRight, Cloud, Cpu, ShieldCheck, Workflow, Database, Layers } from 'lucide-react';
import PageShell from '@/components/site/page-shell';
import SectionHeading from '@/components/site/section-heading';

const practices = [
  { icon: Cloud, title: 'Cloud Modernization', desc: 'Cloud strategy, workload migration, landing zones, platform engineering, and FinOps discipline for AWS, Azure, and GCP.', capabilities: ['Cloud strategy & TCO', 'Migration factories', 'Platform engineering', 'FinOps & governance', 'SRE enablement'] },
  { icon: Cpu, title: 'AI & Applied Intelligence', desc: 'From executive AI strategy to production LLM systems, retrieval pipelines, evaluation, and governance in regulated environments.', capabilities: ['AI operating model', 'LLM & agent platforms', 'RAG & data pipelines', 'MLOps & evaluation', 'AI governance & safety'] },
  { icon: ShieldCheck, title: 'Cybersecurity', desc: 'Zero-trust architecture, identity modernization, threat detection engineering, and executive-grade cyber risk programs.', capabilities: ['Zero-trust architecture', 'IAM modernization', 'Threat detection', 'Cloud security', 'Cyber risk & board reporting'] },
  { icon: Workflow, title: 'Digital Transformation', desc: 'Operating model design, product engineering at scale, and change execution that survives the org chart.', capabilities: ['Operating model', 'Product engineering', 'Agile at scale', 'Change management', 'Portfolio steering'] },
  { icon: Database, title: 'Data & Analytics', desc: 'Modern data platforms, real-time analytics, semantic layers, and decision intelligence.', capabilities: ['Lakehouse architecture', 'Streaming & real-time', 'Semantic layers', 'Decision intelligence', 'Data governance'] },
  { icon: Layers, title: 'Enterprise Architecture', desc: 'Reference architectures, API and integration strategy, and technology standards designed to scale across decades.', capabilities: ['Reference architecture', 'API strategy', 'Integration platforms', 'Technology standards', 'Tech radar & governance'] },
];

export default function Page() {
  return (
    <PageShell>
      <section className="dark bg-background text-foreground border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 pt-32 pb-24">
          <p className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-8 mimag-gradient" />
            What we do
          </p>
          <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight text-foreground text-balance max-w-5xl">
            Six practices. One accountable{' '}
            <em className="italic">enterprise partner.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
            Our capabilities are built around the systems that run modern
            enterprises. Every practice is led by senior partners with delivery
            scars, not slide decks.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-24">
          <div className="grid gap-px bg-border border border-border">
            {practices.map((p, i) => (
              <div key={p.title} className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-background p-8 lg:p-14">
                <div className="lg:col-span-7">
                  <div className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground mb-4">Practice 0{i + 1}</div>
                  <div className="flex items-center gap-4">
                    <p.icon className="h-8 w-8 text-foreground shrink-0" />
                    <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">{p.title}</h3>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[16px] leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Capabilities</p>
                  <ul className="mt-4 space-y-2">
                    {p.capabilities.map((c) => (
                      <li key={c} className="text-[13.5px] text-foreground/90 flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-foreground/60 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link href="/contact" className="group inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-3 text-[14px] font-medium text-background hover:-translate-y-0.5 transition-transform">
              Discuss your program <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
