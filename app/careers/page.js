'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageShell from '@/components/site/page-shell';
import RenderIcon from '@/components/site/icon-map';
import {
  ArrowUpRight, MapPin, Briefcase, Sparkles, X, Send
} from 'lucide-react';
import { toast } from 'sonner';

const ROLES = [
  {
    id: 'backend-engineer',
    title: 'Senior Backend Engineer',
    team: 'Core Platform & Microservices',
    location: 'London / Remote',
    type: 'Full-Time',
    experience: '6+ Years',
    tags: ['Go', 'Node.js', 'PostgreSQL', 'Kubernetes'],
    description: 'Design and deploy high-throughput microservices, distributed transaction ledgers, and zero-downtime REST/gRPC API gateways for global enterprise clients.'
  },
  {
    id: 'fullstack-web-developer',
    title: 'Fullstack Web Developer',
    team: 'Product Engineering',
    location: 'New York / Remote',
    type: 'Full-Time',
    experience: '5+ Years',
    tags: ['Next.js 15', 'React', 'TypeScript', 'Tailwind CSS'],
    description: 'Architect state-of-the-art web applications, internal developer portals, and real-time dashboard fabrics with modern React & Next.js ecosystem.'
  },
  {
    id: 'frontend-designer',
    title: 'Frontend Designer & UI Architect',
    team: 'Design Systems',
    location: 'Frankfurt / Hybrid',
    type: 'Full-Time',
    experience: '5+ Years',
    tags: ['Figma', 'Design Systems', 'Vanilla CSS', 'Framer Motion'],
    description: 'Craft ultra-premium, executive-level design systems, micro-animations, and dynamic visual components that wow C-Suite stakeholders.'
  },
  {
    id: 'ai-engineer',
    title: 'AI & LLM Systems Engineer',
    team: 'AI & Applied Intelligence',
    location: 'San Francisco / Remote',
    type: 'Full-Time',
    experience: '5+ Years',
    tags: ['Python', 'PyTorch', 'RAG Vectors', 'LLMOps'],
    description: 'Engineer private retrieval-augmented generation (RAG) fabrics, multi-agent orchestration frameworks, and sovereign AI safety perimeters.'
  },
  {
    id: 'cloud-devops-architect',
    title: 'Cloud Infrastructure & DevOps Architect',
    team: 'Cloud & FinOps',
    location: 'Singapore / Hybrid',
    type: 'Full-Time',
    experience: '7+ Years',
    tags: ['AWS', 'Azure', 'Terraform', 'FinOps'],
    description: 'Lead multi-cloud landing zone migrations, infrastructure-as-code automation, and site reliability engineering (SRE) for Tier-1 banks.'
  },
  {
    id: 'cybersecurity-zero-trust',
    title: 'Cybersecurity & Zero-Trust Lead',
    team: 'Security & Defense',
    location: 'Dubai / Hybrid',
    type: 'Full-Time',
    experience: '8+ Years',
    tags: ['Zero-Trust', 'IAM', 'SOC Automation', 'NIS2/DORA'],
    description: 'Build defense-grade identity perimeters, passwordless authentication models, and automated SOC incident containment for critical infrastructure.'
  }
];

const CULTURE_PILLARS = [
  {
    icon: 'Users2',
    title: 'Senior Practitioners Only',
    desc: 'No junior pass-throughs or layered consultancy pyramids. You will build and deploy alongside experienced practice directors who write real production code.'
  },
  {
    icon: 'Zap',
    title: 'High Autonomy & Velocity',
    desc: 'We strip away bureaucratic red tape and slow PMO committee meetings. Engineering pods take direct ownership from initial blueprint to live production.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Fiercely Independent Stack',
    desc: 'We are completely vendor-agnostic. You will evaluate and implement the absolute best tools and reference architectures for every unique corporate challenge.'
  },
  {
    icon: 'Building2',
    title: 'Top-Tier Compensation & Equity',
    desc: 'Industry-leading compensation packages, transparent revenue-share bonuses, flexible hybrid/remote arrangements, and continuous learning budgets.'
  }
];

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [applicantForm, setApplicantForm] = useState({ name: '', email: '', portfolio: '', note: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleApplyClick = (role) => {
    setSelectedRole(role);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!applicantForm.name || !applicantForm.email) {
      toast.error('Please enter your name and email address.');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success(`Application submitted for ${selectedRole.title}! Our practice leads will reach out within 48 hours.`);
      setSelectedRole(null);
      setApplicantForm({ name: '', email: '', portfolio: '', note: '' });
    }, 1200);
  };

  return (
    <PageShell>
      {/* 1. TOP CAREER HERO BANNER */}
      <section className="bg-[#000000] text-white py-16 lg:py-24 border-b border-[#1a1a1a] font-sans relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#86bc25]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#86bc25] mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#86bc25]" />
              Careers at Mimang Technologies
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-light tracking-tight text-white leading-[1.12]">
              Do the best engineering work of your life <span className="font-semibold text-[#86bc25]">alongside senior peers.</span>
            </h1>
            <p className="mt-5 text-[16px] sm:text-[18px] leading-relaxed text-zinc-300 font-light max-w-2xl">
              We replaced bloated consultancy pyramids with agile practitioner pods. Join a culture built on technical mastery, zero bureaucracy, and audited client impact.
            </p>
          </div>
        </div>
      </section>

      {/* GRADIENT SEPARATOR LINE */}
      <div className="w-full h-[4px] bg-gradient-to-r from-[#ef4444] via-[#ec4899] to-[#a855f7] relative z-20 shadow-[0_2px_20px_rgba(236,72,153,0.35)]" />

      {/* 2. ABOUT MIMANG & WORK CULTURE SECTION */}
      <section className="bg-gradient-to-b from-[#080d1a] via-[#0a162b] to-[#080d1a] text-white py-16 lg:py-24 border-b border-[#1c3969] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="max-w-3xl mb-12 border-l-4 border-[#86bc25] pl-5">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#63a3ff] block mb-1">
              Our Operating Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              About <span className="font-semibold text-white">Mimang & Our Culture</span>
            </h2>
            <p className="mt-3 text-[15px] text-[#c4d7ec] font-light leading-relaxed">
              Mimang Technologies was founded by enterprise architects who grew tired of traditional consulting firms passing off junior grads onto critical accounts. Here, every engineer is a hands-on practitioner with sole accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CULTURE_PILLARS.map((item, idx) => (
              <div
                key={idx}
                className="hover-mimag-border group flex flex-col justify-between bg-[#0b1830]/90 border border-[#1d3969] rounded-xl p-6 shadow-lg hover:border-transparent hover:bg-[#102447] transition-all duration-300"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#142c54] text-[#86bc25] group-hover:bg-[#86bc25] group-hover:text-black transition-colors mb-5">
                    <RenderIcon name={item.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="text-[18px] font-bold text-white mb-2 tracking-tight group-hover:text-[#86bc25] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] text-[#a9c4e6] font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OPEN POSITIONS SECTION */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-20 font-sans border-t border-[#e8ded1]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#e4d7c5]">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#784813] block mb-1">
                Active Engineering Opportunities
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-[#1c1a18] tracking-tight">
                Current <span className="font-semibold text-black">Open Roles</span>
              </h2>
            </div>
            <span className="mt-2 md:mt-0 text-[13px] font-bold text-[#5e8817] bg-[#f4f7ed] border border-[#d6e8b8] px-4 py-1.5 rounded-full">
              {ROLES.length} Open Positions Globally
            </span>
          </div>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {ROLES.map((role) => (
              <div
                key={role.id}
                className="hover-mimag-border group flex flex-col justify-between bg-white border border-[#e4d7c5] rounded-xl p-7 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#f4ece1] text-[#784813] px-2.5 py-0.5 rounded">
                      {role.team}
                    </span>
                    <span className="text-[11px] font-semibold text-[#666666] flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-[#5e8817]" /> {role.location}
                    </span>
                  </div>

                  <h3 className="text-[20px] font-bold text-[#1c1a18] mb-2 tracking-tight group-hover:text-[#5e8817] transition-colors">
                    {role.title}
                  </h3>

                  <p className="text-[13.5px] text-[#5c5449] font-normal leading-relaxed mb-5 line-clamp-3">
                    {role.description}
                  </p>

                  {/* Role Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {role.tags.map((tag, i) => (
                      <span key={i} className="text-[10.5px] font-semibold bg-[#faf7f2] border border-[#e8ded1] text-[#4a4338] px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#f2ece2] flex items-center justify-between">
                  <span className="text-[12px] font-bold text-[#784813]">
                    {role.experience} · {role.type}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleApplyClick(role)}
                    className="inline-flex items-center gap-1 text-[13px] font-bold text-[#1c1a18] bg-[#86bc25] text-black px-4 py-2 rounded shadow-sm hover:bg-[#97d031] transition-all"
                  >
                    <span>Apply Now</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPLICATION MODAL DRAWER */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-[#e4d7c5] rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-[#1c1a18]">
            <button
              type="button"
              onClick={() => setSelectedRole(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-zinc-500 hover:text-black hover:bg-zinc-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#784813] bg-[#f4ece1] px-2.5 py-0.5 rounded inline-block mb-2">
              Application for {selectedRole.team}
            </span>
            <h3 className="text-2xl font-bold text-[#1c1a18] mb-1">{selectedRole.title}</h3>
            <p className="text-[12.5px] text-[#666666] mb-6 flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[#5e8817]" /> {selectedRole.location}
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-[12px] font-bold text-[#4a4338] mb-1 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Lin"
                  value={applicantForm.name}
                  onChange={(e) => setApplicantForm({ ...applicantForm, name: e.target.value })}
                  className="w-full bg-[#faf7f2] border border-[#e4d7c5] rounded px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[#86bc25]"
                />
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#4a4338] mb-1 uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah.lin@example.com"
                  value={applicantForm.email}
                  onChange={(e) => setApplicantForm({ ...applicantForm, email: e.target.value })}
                  className="w-full bg-[#faf7f2] border border-[#e4d7c5] rounded px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[#86bc25]"
                />
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#4a4338] mb-1 uppercase tracking-wider">
                  LinkedIn / GitHub / Portfolio URL
                </label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/username"
                  value={applicantForm.portfolio}
                  onChange={(e) => setApplicantForm({ ...applicantForm, portfolio: e.target.value })}
                  className="w-full bg-[#faf7f2] border border-[#e4d7c5] rounded px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[#86bc25]"
                />
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#4a4338] mb-1 uppercase tracking-wider">
                  Short Note / Key Achievements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us briefly about your engineering background and recent projects..."
                  value={applicantForm.note}
                  onChange={(e) => setApplicantForm({ ...applicantForm, note: e.target.value })}
                  className="w-full bg-[#faf7f2] border border-[#e4d7c5] rounded px-3.5 py-2.5 text-[14px] focus:outline-none focus:border-[#86bc25] resize-none"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#86bc25] text-black font-bold text-[14px] py-3 rounded shadow hover:bg-[#97d031] transition-all disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  <span>{submitting ? 'Submitting Application...' : 'Submit Application'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </PageShell>
  );
}
