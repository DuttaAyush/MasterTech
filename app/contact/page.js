'use client';

import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
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

  const interests = ['Cloud Modernization', 'AI & Applied Intelligence', 'Cybersecurity', 'Digital Transformation', 'Data & Analytics', 'Enterprise Architecture', 'Something else'];

  return (
    <PageShell>
      <section className="dark bg-background text-foreground border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 pt-32 pb-16">
          <p className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-8 mimag-gradient" />
            Contact
          </p>
          <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight text-foreground text-balance max-w-5xl">
            Talk to a <em className="italic">senior partner.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
            Tell us what you are working on. Every inquiry is reviewed by a
            partner and receives a response within one business day.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-10">
              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">General inquiries</p>
                <a href="mailto:partners@mimag.tech" className="mt-3 flex items-center gap-2 text-[16px] text-foreground">
                  <Mail className="h-4 w-4" /> partners@mimag.tech
                </a>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">Press</p>
                <a href="mailto:press@mimag.tech" className="mt-3 flex items-center gap-2 text-[16px] text-foreground">
                  <Mail className="h-4 w-4" /> press@mimag.tech
                </a>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">Offices</p>
                <ul className="mt-3 space-y-2 text-[14.5px] text-foreground/90">
                  {['New York', 'London', 'Frankfurt', 'Dubai', 'Singapore', 'Toronto'].map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-muted-foreground" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] text-muted-foreground">Client hotline</p>
                <div className="mt-3 flex items-center gap-2 text-[16px] text-foreground">
                  <Phone className="h-4 w-4" /> +1 (212) 555–0117
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit} className="lg:col-span-8 border border-border rounded-sm p-8 lg:p-10 bg-background">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Full name*" name="name" value={form.name} onChange={onChange} />
                <Field label="Work email*" name="email" type="email" value={form.email} onChange={onChange} />
                <Field label="Company" name="company" value={form.company} onChange={onChange} />
                <Field label="Role / title" name="role" value={form.role} onChange={onChange} />
                <div className="md:col-span-2">
                  <label className="text-[11.5px] uppercase tracking-[0.18em] text-muted-foreground">Area of interest</label>
                  <select name="interest" value={form.interest} onChange={onChange} className="mt-2 w-full bg-transparent border-b border-border py-3 text-[15px] text-foreground focus:outline-none focus:border-foreground/60">
                    {interests.map((i) => <option key={i} value={i} className="bg-background">{i}</option>)}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-[11.5px] uppercase tracking-[0.18em] text-muted-foreground">How can we help?*</label>
                  <textarea name="message" value={form.message} onChange={onChange} rows={5} className="mt-2 w-full bg-transparent border-b border-border py-3 text-[15px] text-foreground focus:outline-none focus:border-foreground/60 resize-none" placeholder="Briefly describe the program, timeline, or challenge." />
                </div>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-[12.5px] text-muted-foreground max-w-md">
                  By submitting, you agree to MIMAG contacting you about your inquiry. Your details are not shared.
                </p>
                <button type="submit" disabled={submitting} className="group inline-flex items-center gap-2 rounded-sm bg-foreground px-6 py-3.5 text-[14px] font-medium text-background hover:-translate-y-0.5 transition-transform disabled:opacity-60">
                  {submitting ? 'Sending…' : 'Send inquiry'}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = 'text', value, onChange }) {
  return (
    <div>
      <label className="text-[11.5px] uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-2 w-full bg-transparent border-b border-border py-3 text-[15px] text-foreground focus:outline-none focus:border-foreground/60"
      />
    </div>
  );
}
