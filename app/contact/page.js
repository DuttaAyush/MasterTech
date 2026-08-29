'use client';

import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import PageShell from '@/components/site/page-shell';

export default function Page() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', interest: 'Cloud Modernization', message: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please complete the required fields.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      toast.success('Thank you. A senior partner will reach out within one business day.');
      setForm({ name: '', email: '', company: '', role: '', interest: 'Cloud Modernization', message: '' });
    } catch {
      toast.error('Something went wrong. Please email partners@mimag.tech.');
    } finally {
      setSubmitting(false);
    }
  };

  const interests = ['Cloud Modernization', 'AI & Applied Intelligence', 'Cybersecurity & Zero Trust', 'Digital Transformation', 'Data Fabric & Analytics', 'Enterprise Architecture', 'Bespoke Advisory Inquiry'];

  return (
    <PageShell>
      {/* 1. TOPMOST SECTION: EXECUTIVE DEEP BLACK HERO */}
      <section className="relative bg-[#000000] text-white py-16 lg:py-24 border-b border-[#1a1a1a] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#86bc25] mb-3">
              <span className="h-2 w-2 rounded-full bg-[#86bc25] animate-pulse" />
              Confidential Advisory Dialogue
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-light leading-[1.08] tracking-[-0.02em] text-white">
              Connect Directly With A <strong className="font-semibold text-[#86bc25]">Senior Practice Partner.</strong>
            </h1>
            <p className="mt-5 max-w-2xl text-[16px] md:text-[17.5px] font-light leading-relaxed text-[#a3a3a3]">
              Tell us about your mission-critical initiative or structural technology challenge. Every inquiry is evaluated strictly by practice directors and answered within 24 hours.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-[#222222] text-[13px] text-[#cccccc]">
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-[#86bc25]" /> 24-Hour Partner SLA</span>
              <span>•</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#86bc25]" /> Strict NDA Compliance</span>
              <span>•</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#86bc25]" /> Zero Junior Pass-Throughs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT FORM & ADVISORY CONTENT */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-20 lg:py-28 font-sans min-h-[700px] border-b border-[#e6ded2]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Sidebar: Clearly Visible Typography Beside Form */}
            <div className="lg:col-span-4 space-y-9 border-l-4 border-[#86bc25] pl-6 py-1">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85531b] block mb-1">Direct Partner Channel</span>
                <p className="text-[20px] font-bold text-[#1c1a18] tracking-tight mb-2">General Advisory Inquiries</p>
                <a href="mailto:partners@mimag.tech" className="inline-flex items-center gap-2 text-[15.5px] font-semibold text-[#5e8817] hover:underline hover:text-black transition-colors">
                  <Mail className="h-4.5 w-4.5 text-[#1c1a18]" /> partners@mimag.tech
                </a>
                <p className="mt-1.5 text-[13.5px] text-[#635b51] font-light">Monitored 24/7 by global executive coordinators.</p>
              </div>

              <div className="border-t border-[#e8ded2] pt-7">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85531b] block mb-1">Media & Newsroom</span>
                <p className="text-[18px] font-bold text-[#1c1a18] tracking-tight mb-2">Corporate Press & Analyst Relations</p>
                <a href="mailto:press@mimag.tech" className="inline-flex items-center gap-2 text-[15.5px] font-semibold text-[#5e8817] hover:underline hover:text-black transition-colors">
                  <Mail className="h-4 w-4 text-[#1c1a18]" /> press@mimag.tech
                </a>
              </div>

              <div className="border-t border-[#e8ded2] pt-7">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85531b] block mb-2">Global Operations</span>
                <p className="text-[18px] font-bold text-[#1c1a18] tracking-tight mb-3.5">Six Regional Practice Headquarters</p>
                <ul className="grid grid-cols-2 gap-y-3 text-[14.5px] font-medium text-[#2d2923]">
                  {['New York', 'London', 'Frankfurt', 'Dubai', 'Singapore', 'Toronto'].map((city) => (
                    <li key={city} className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#86bc25] fill-[#1c1a18]" />
                      <span>{city}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[#e8ded2] pt-7">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85531b] block mb-1">Immediate Escalations</span>
                <p className="text-[18px] font-bold text-[#1c1a18] tracking-tight mb-2">Client Architecture Hotline</p>
                <div className="flex items-center gap-2.5 text-[16px] font-bold text-[#1c1a18]">
                  <Phone className="h-4 w-4 text-[#5e8817]" /> +1 (212) 555–0117
                </div>
                <p className="mt-1 text-[13px] text-[#786f64] font-light">Available for active SLA client accounts.</p>
              </div>
            </div>

            {/* Right Side: Elevated White Connect Form with Minimalist MIMAG Hover Border */}
            <div className="lg:col-span-8">
              <form
                onSubmit={onSubmit}
                className="hover-mimag-border bg-white border border-[#e2d8c9] rounded-lg p-8 md:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:border-transparent transition-all duration-300"
              >
                <div className="mb-8 border-b border-[#f0e7db] pb-6">
                  <h3 className="text-2xl font-light text-[#1c1a18] tracking-tight">
                    Initiate Your <span className="font-bold">Confidential Briefing</span>
                  </h3>
                  <p className="text-[14px] text-[#6b6257] mt-1 font-normal">
                    Please provide your executive coordinates and primary technical requirements.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-7 gap-x-8">
                  <Field label="Full Name*" name="name" value={form.name} onChange={onChange} placeholder="e.g. Dr. Aris Thorne" />
                  <Field label="Work Email*" name="email" type="email" value={form.email} onChange={onChange} placeholder="name@enterprise-domain.com" />
                  <Field label="Company / Institution" name="company" value={form.company} onChange={onChange} placeholder="e.g. Global Financial Corp" />
                  <Field label="Executive Role / Title" name="role" value={form.role} onChange={onChange} placeholder="e.g. Chief Information Officer" />

                  <div className="md:col-span-2">
                    <label className="text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-[#71675b] block mb-2">
                      Primary Transformation Capability
                    </label>
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={onChange}
                      className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded px-4 py-3.5 text-[15px] text-[#1c1a18] font-medium focus:outline-none focus:border-[#86bc25] focus:bg-white transition-colors cursor-pointer shadow-inner"
                    >
                      {interests.map((i) => (
                        <option key={i} value={i} className="bg-white text-[#1c1a18] font-medium py-1">
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-[#71675b] block mb-2">
                      Program Scope & Strategic Objective*
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      rows={5}
                      className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded p-4 text-[15px] text-[#1c1a18] focus:outline-none focus:border-[#86bc25] focus:bg-white transition-colors resize-none placeholder:text-[#a0978b] font-light shadow-inner"
                      placeholder="Briefly outline your architectural challenges, target audit outcomes, or expected timelines..."
                    />
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-[#f0e7db] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <p className="text-[12.5px] text-[#736a5d] font-normal max-w-md leading-relaxed">
                    By submitting this request, you consent to secure outreach from a MIMAG Technologies practice partner. Zero commercial data sharing.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex items-center justify-center gap-2.5 rounded bg-[#86bc25] px-8 py-4 text-[14.5px] font-bold text-black hover:bg-[#97d031] shadow-md shadow-[#86bc25]/20 transition-all hover:-translate-y-0.5 disabled:opacity-50 shrink-0"
                  >
                    <span>{submitting ? 'Encrypting & Sending…' : 'Transmit Inquiry'}</span>
                    <ArrowUpRight className="h-4.5 w-4.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = 'text', value, onChange, placeholder }) {
  return (
    <div>
      <label className="text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-[#71675b] block mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded px-4 py-3 text-[15px] text-[#1c1a18] font-medium focus:outline-none focus:border-[#86bc25] focus:bg-white transition-colors placeholder:text-[#a0978b] font-light shadow-inner"
      />
    </div>
  );
}
