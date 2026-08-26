'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Building2, CheckCircle } from 'lucide-react';
import PageShell from '@/components/site/page-shell';

const leaders = [
  { name: 'Elena Marchetti', role: 'Chief Executive Officer', bio: '25+ years leading enterprise transformation across Tier-1 financial institutions and global infrastructure.' },
  { name: 'Ravi Nair', role: 'Chief Technology Officer', bio: 'Former principal architect for hyperscale cloud platforms, specializing in sovereign AI & distributed data fabrics.' },
  { name: 'Amara Osei', role: 'Head of Strategic Advisory', bio: 'Advises FTSE 100 boards on digital operating models, zero-trust security compliance, and cloud economics.' },
  { name: 'Julien Bertrand', role: 'Head of Cybersecurity', bio: 'National-security background leading defense-grade identity modernization and regulatory compliance perimeters.' },
];

export default function TheFirmPage() {
  return (
    <PageShell>
      {/* Editorial Hero */}
      <section className="relative bg-[#080d1a] text-white font-sans overflow-hidden border-b border-[#1c3969]">
        <div className="relative h-[320px] md:h-[400px] w-full overflow-hidden">
          <Image
            src="/images/optimized/energy_grid.webp"
            alt="The Firm - Mimang Technologies"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/40 to-transparent" />
          
          <div className="absolute top-8 left-6 md:left-12 z-10 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
            <Link href="/who-we-are" className="hover:underline text-white/70">Who we are</Link>
            <span>&gt;</span>
            <span className="text-[#86bc25]">The Firm</span>
          </div>

          <div className="absolute bottom-8 left-6 md:left-12 z-10 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
              The <span className="font-semibold text-[#86bc25]">Firm</span>
            </h1>
            <div className="mt-3 border-l-4 border-[#86bc25] pl-4 py-1">
              <p className="text-lg md:text-2xl font-light italic text-[#cbe395] leading-relaxed">
                &ldquo;Practitioners at the top. Accountable senior partners embedded on every client engagement.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Governance Section */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-20 border-b border-[#e5dccf] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="mb-14 border-l-4 border-[#86bc25] pl-5">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-1">
              Practitioners & Senior Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#1c1a18] tracking-tight">
              Senior Leadership & <span className="font-semibold text-black">Practitioners</span>
            </h2>
            <p className="mt-2 text-[15px] text-[#5c5449] font-light max-w-3xl leading-relaxed">
              Our leadership team spends the vast majority of its time directly embedded with clients on high-consequence initiatives, not in internal management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {leaders.map((l, idx) => (
              <div
                key={idx}
                className="hover-mimag-border bg-white border border-[#e5dccf] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
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

          {/* Consultation CTA */}
          <div className="hover-mimag-border bg-gradient-to-r from-[#0a162b] via-[#0e2140] to-[#0a162b] text-white rounded-xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#86bc25] block mb-1">
                Direct Advisory Channel
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                Initiate a Partner Consultation with <span className="font-bold">Mimang Technologies</span>
              </h3>
              <p className="text-[14px] text-[#a9c4e6] mt-1 font-light max-w-2xl">
                Connect directly with a senior practice partner to evaluate your cloud modernization, AI deployment, or architectural challenges under mutual NDA.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#86bc25] text-black text-[14px] font-bold px-8 py-4 rounded shadow-lg hover:bg-[#97d031] transition-all hover:-translate-y-0.5 shrink-0"
            >
              <span>Schedule a consultation</span>
              <ArrowUpRight className="h-4.5 w-4.5 text-black" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
