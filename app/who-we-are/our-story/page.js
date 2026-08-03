'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Building2, CheckCircle, Award, ShieldCheck } from 'lucide-react';
import PageShell from '@/components/site/page-shell';

const leaders = [
  { name: 'Elena Marchetti', role: 'Chief Executive Officer', bio: '25+ years leading enterprise transformation across Tier-1 financial institutions and global infrastructure.' },
  { name: 'Ravi Nair', role: 'Chief Technology Officer', bio: 'Former principal architect for hyperscale cloud platforms, specializing in sovereign AI & distributed data fabrics.' },
  { name: 'Amara Osei', role: 'Head of Strategic Advisory', bio: 'Advises FTSE 100 boards on digital operating models, zero-trust security compliance, and cloud economics.' },
  { name: 'Julien Bertrand', role: 'Head of Cybersecurity', bio: 'National-security background leading defense-grade identity modernization and regulatory compliance perimeters.' },
];

const milestones = [
  { metric: '€1.9B+', label: 'Run-Cost Saved', desc: 'Audited annual infrastructure run-cost reductions delivered to global clients.' },
  { metric: '14', label: 'Sovereign Markets', desc: 'Core banking and capital platforms modernized without micro-outages.' },
  { metric: '11.4M', label: 'Records Unified', desc: 'Clinical patient data fabric unified under defense-grade zero-trust security.' },
  { metric: '100%', label: 'Senior Talent', desc: 'Every project pod is directed exclusively by senior practice partners.' },
];

export default function OurStorySubPage() {
  return (
    <PageShell>
      {/* Editorial Top Hero Banner */}
      <section className="relative bg-[#080d1a] text-white font-sans overflow-hidden border-b border-[#1c3969]">
        <div className="relative h-[320px] md:h-[400px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1601785491008-d1153dfadd57?crop=entropy&cs=srgb&fm=jpg&q=85"
            alt="Our Story - Mimang Technologies"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/40 to-transparent" />
          
          <div className="absolute top-8 left-6 md:left-12 z-10 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
            <Link href="/who-we-are" className="hover:underline text-white/70">Who we are</Link>
            <span>&gt;</span>
            <span className="text-[#86bc25]">Our Story</span>
          </div>

          <div className="absolute bottom-8 left-6 md:left-12 z-10 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
              Our <span className="font-semibold text-[#86bc25]">Story</span>
            </h1>
            <div className="mt-3 border-l-4 border-[#86bc25] pl-4 py-1">
              <p className="text-lg md:text-2xl font-light italic text-[#cbe395] leading-relaxed">
                &ldquo;An independent enterprise technology consultancy built on senior practitioners, outcome accountability, and architectural craft.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Beige Content Area */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-20 font-sans border-b border-[#e3ded4]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 space-y-20">
          
          {/* Section A: The Origins & Philosophy */}
          <div>
            <div className="mb-10 border-l-4 border-[#86bc25] pl-5">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-1">
                Firm Origins & Evolution
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#1c1a18] tracking-tight">
                Built to Replace <span className="font-bold text-black">Consultancy Bloat</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-center bg-white border border-[#e5dccf] rounded-xl p-8 md:p-12 shadow-sm">
              <div className="lg:col-span-7 space-y-5">
                <p className="text-[16px] text-[#4a4338] font-normal leading-relaxed">
                  Mimang Technologies was established with a singular objective: to provide Tier-1 enterprise clients with direct access to senior technology leaders who write production code and design resilient architectures.
                </p>
                <p className="text-[15px] text-[#6b6255] leading-relaxed font-normal">
                  We rejected the traditional consulting pyramid model—where senior partners pitch contracts and then pass execution down to inexperienced junior teams. Every Mimang engagement is staffed 100% by battle-tested practitioners with decades of domain experience.
                </p>

                <div className="pt-4 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#f6f2ea] rounded-lg border border-[#e8dfd1]">
                    <div className="flex items-center gap-2 mb-1">
                      <ShieldCheck className="h-4 w-4 text-[#5e8817]" />
                      <span className="text-[13px] font-bold text-[#1c1a18]">Zero Vendor Kickbacks</span>
                    </div>
                    <p className="text-[12.5px] text-[#6b6255]">We remain 100% vendor-agnostic across AWS, Azure, GCP, and open source.</p>
                  </div>
                  <div className="p-4 bg-[#f6f2ea] rounded-lg border border-[#e8dfd1]">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="h-4 w-4 text-[#5e8817]" />
                      <span className="text-[13px] font-bold text-[#1c1a18]">Audited SLA Commitments</span>
                    </div>
                    <p className="text-[12.5px] text-[#6b6255]">Every milestone is tied directly to verifiable financial and technical outcomes.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-[300px] md:h-[360px] rounded-xl overflow-hidden bg-[#1c1a18]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Mimang Founders"
                  fill
                  className="object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a18]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[11px] font-bold text-[#86bc25] uppercase tracking-wider block mb-1">Founding Philosophy</span>
                  <p className="text-[13.5px] text-white font-medium italic">
                    &ldquo;Strategy through execution for high-consequence enterprise systems.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section B: Proven Impact Milestones */}
          <div>
            <div className="mb-10 border-l-4 border-[#86bc25] pl-5">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-1">
                Audited Performance Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#1c1a18] tracking-tight">
                Proven <span className="font-bold text-black">Enterprise Outcomes</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="hover-mimag-border bg-white border border-[#e5dccf] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span className="text-3xl md:text-4xl font-extrabold text-[#1c1a18] block mb-1">{m.metric}</span>
                  <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#784813] block mb-2">{m.label}</span>
                  <p className="text-[13px] text-[#6b6255] font-normal leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section C: Senior Leadership */}
          <div>
            <div className="mb-10 border-l-4 border-[#86bc25] pl-5">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-1">
                Practitioners & Governance
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#1c1a18] tracking-tight">
                Senior Leadership & <span className="font-bold text-black">Practice Heads</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leaders.map((l, idx) => (
                <div
                  key={idx}
                  className="hover-mimag-border bg-white border border-[#e5dccf] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#1c1a18] text-[#86bc25] font-bold">
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-[16px] font-bold text-[#1c1a18] tracking-tight">{l.name}</h3>
                        <p className="text-[11.5px] uppercase tracking-wider text-[#784813] font-extrabold">{l.role}</p>
                      </div>
                    </div>
                    <p className="text-[13.5px] text-[#595248] font-normal leading-relaxed mb-6">{l.bio}</p>
                  </div>

                  <div className="pt-3 border-t border-[#f2ece2] flex items-center justify-between text-[12px] font-bold text-[#5e8817]">
                    <span>Senior Partner</span>
                    <CheckCircle className="h-3.5 w-3.5 text-[#86bc25]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section D: Intake Banner */}
          <div className="hover-mimag-border bg-white border border-[#e5dccf] rounded-xl p-8 md:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#784813] block mb-1">
                Direct Advisory intake
              </span>
              <h3 className="text-2xl font-light text-[#1c1a18] tracking-tight">
                Initiate a Partner Consultation with <span className="font-bold">Mimang</span>
              </h3>
              <p className="text-[14px] text-[#6b6255] mt-1 font-normal max-w-2xl">
                Connect directly with a senior practice partner to evaluate your cloud modernization, AI deployment, or architectural challenges under mutual NDA.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1c1a18] text-white text-[14px] font-bold px-7 py-3.5 rounded shadow hover:bg-[#86bc25] hover:text-black transition-all shrink-0"
            >
              <span>Schedule a consultation</span>
              <ArrowUpRight className="h-4.5 w-4.5" />
            </Link>
          </div>

        </div>
      </section>
    </PageShell>
  );
}
