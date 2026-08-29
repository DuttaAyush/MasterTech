'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Globe, ShieldCheck, CheckCircle, Building2, Users } from 'lucide-react';
import PageShell from '@/components/site/page-shell';

const globalLocations = [
  { city: 'New York', region: 'Americas Hub', address: '450 Lexington Ave, Suite 2800', phone: '+1 (212) 555-0117' },
  { city: 'London', region: 'EMEA Hub', address: '1 Canada Square, Canary Wharf', phone: '+44 20 7946 0912' },
  { city: 'Frankfurt', region: 'DACH & EU Central', address: 'Taunusanlage 8, Financial Center', phone: '+49 69 5007 2810' },
  { city: 'Dubai', region: 'MENA Practice Hub', address: 'DIFC Gate Precinct 4, Level 7', phone: '+971 4 312 9000' },
  { city: 'Singapore', region: 'APAC Regional Center', address: '1 Marina Boulevard, Marina Bay', phone: '+65 6789 1200' },
  { city: 'Toronto', region: 'North American Engineering', address: '100 King St West, Financial District', phone: '+1 (416) 555-0199' },
];

const principles = [
  {
    number: '01',
    title: 'Senior Practitioners Only',
    desc: 'Every client program is directed and executed exclusively by senior practice partners. Zero junior pass-throughs or layered consultancy bloat.',
  },
  {
    number: '02',
    title: 'Advisory That Ships',
    desc: 'We do not stop at slide decks. Our teams remain accountable through architecture, low-level engineering, security sign-off, and production scale.',
  },
  {
    number: '03',
    title: 'Fiercely Independent Counsel',
    desc: 'We maintain zero vendor kickbacks or reseller quotas across AWS, Azure, and GCP. Our recommendations optimize solely for client resilience and cost efficiency.',
  },
  {
    number: '04',
    title: 'Audited Financial SLAs',
    desc: 'Our delivery milestones are bound directly to audited revenue growth, infrastructure cost reductions, and verifiable latency metrics agreed upon upfront.',
  },
];

export default function AboutMimagPage() {
  return (
    <PageShell>
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#080d1a] text-white font-sans overflow-hidden border-b border-[#1c3969]">
        <div className="relative h-[340px] md:h-[420px] w-full overflow-hidden">
          <Image
            src="/images/optimized/digital_transformation.webp"
            alt="About MIMAG Technologies"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/40 to-transparent" />
          
          <div className="absolute top-8 left-6 md:left-12 z-10 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
            <Link href="/who-we-are" className="hover:underline text-white/70">Who we are</Link>
            <span>&gt;</span>
            <span className="text-[#86bc25]">About MIMAG</span>
          </div>

          <div className="absolute bottom-10 left-6 md:left-12 z-10 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
              About <span className="font-semibold text-[#86bc25]">MIMAG Technologies</span>
            </h1>
            <div className="mt-3 border-l-4 border-[#86bc25] pl-4 py-1">
              <p className="text-lg md:text-2xl font-light italic text-[#cbe395] leading-relaxed">
                &ldquo;Global presence, senior practitioner accountability, and unvarnished engineering craft.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-20 font-sans border-b border-[#e3ded4]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 space-y-20">
          
          {/* Overview Statement */}
          <div className="bg-white border border-[#e5dccf] rounded-xl p-8 md:p-10 shadow-sm">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-2">
              Enterprise Practice Profile
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#1c1a18] tracking-tight mb-4">
              Independent Technology Advisory for <span className="font-bold">Mission-Critical Enterprise Systems</span>
            </h2>
            <p className="text-[15.5px] text-[#5c5449] font-normal leading-relaxed max-w-4xl">
              MIMAG Technologies is an elite software architecture and executive advisory firm. We bridge boardroom strategy with low-level systems engineering, delivering zero-trust security perimeters, cloud modernization, and sovereign AI retrieval fabrics for financial institutions, defense contractors, healthcare networks, and energy grids worldwide.
            </p>
          </div>

          {/* Sub-Part A: Global Locations */}
          <div>
            <div className="flex items-center justify-between border-b border-[#e5dccf] pb-4 mb-8">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-[#5e8817]" />
                <h2 className="text-2xl font-bold text-[#1c1a18] tracking-tight">Global Practice Hubs</h2>
              </div>
              <span className="text-[12px] font-bold text-[#784813] uppercase tracking-wider">6 Regional Hubs</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {globalLocations.map((loc, idx) => (
                <div
                  key={idx}
                  className="hover-mimag-border bg-white border border-[#e5dccf] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#784813] bg-[#f4ece1] px-2.5 py-0.5 rounded">
                      {loc.region}
                    </span>
                    <MapPin className="h-4 w-4 text-[#86bc25]" />
                  </div>
                  <h3 className="text-[20px] font-bold text-[#1c1a18] mb-1">{loc.city}</h3>
                  <p className="text-[13.5px] text-[#6b6255] font-normal mb-3">{loc.address}</p>
                  <div className="pt-3 border-t border-[#f2ece2] flex items-center justify-between text-[12.5px] text-[#5e8817] font-semibold">
                    <span>Hotline: {loc.phone}</span>
                    <CheckCircle className="h-4 w-4 text-[#86bc25]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-Part B: Our Principles */}
          <div>
            <div className="flex items-center justify-between border-b border-[#e5dccf] pb-4 mb-8">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#5e8817]" />
                <h2 className="text-2xl font-bold text-[#1c1a18] tracking-tight">Our Operational Principles</h2>
              </div>
              <span className="text-[12px] font-bold text-[#784813] uppercase tracking-wider">Operational Rigor</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((item) => (
                <div
                  key={item.number}
                  className="hover-mimag-border bg-white border border-[#e5dccf] rounded-xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-5"
                >
                  <span className="text-2xl font-extrabold text-[#784813] bg-[#f4ece1] px-3.5 py-1.5 rounded shrink-0">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-[19px] font-bold text-[#1c1a18] mb-2">{item.title}</h3>
                    <p className="text-[14px] text-[#595248] leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Intake Card in Beige */}
          <div className="hover-mimag-border bg-white border border-[#e5dccf] rounded-xl p-8 md:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#784813] block mb-1">
                Direct Advisory Intake
              </span>
              <h3 className="text-2xl font-light text-[#1c1a18] tracking-tight">
                Connect with our Global Practice Partners
              </h3>
              <p className="text-[14px] text-[#6b6255] mt-1 font-normal max-w-2xl">
                Evaluate your architectural challenges under strict NDA with a senior practice partner.
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
