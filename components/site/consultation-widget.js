'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, Mail, FileText, MessageSquare } from 'lucide-react';

export default function ConsultationWidget() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [open, setOpen] = useState(false);
  const [homeScrollReady, setHomeScrollReady] = useState(true);
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (e) => {
      if (!widgetRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  useEffect(() => {
    if (!isHome) {
      setHomeScrollReady(true);
      return;
    }
    const checkScroll = () => {
      if (window.matchMedia('(min-width: 769px)').matches) {
        setHomeScrollReady(true);
      } else {
        setHomeScrollReady(window.scrollY > 150);
      }
    };
    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, [isHome]);

  const close = () => setOpen(false);

  if (!homeScrollReady) return null;

  return (
    <div
      ref={widgetRef}
      className={`fixed right-4 bottom-5 sm:right-8 sm:bottom-8 z-50 flex flex-col items-stretch rounded-full sm:rounded-2xl overflow-hidden bg-black dark:bg-[#090b0f] border border-black/10 dark:border-white/10 shadow-2xl transition-all duration-300 ${
        open ? 'shadow-[#86bc25]/20 ring-1 ring-[#86bc25]/30 rounded-2xl' : 'hover:border-[#86bc25]/50'
      }`}
    >
      {/* Expandable Shutter Menu */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden bg-white dark:bg-[#090b0f]">
          <div className="flex flex-col gap-2 p-3 w-full min-w-[240px]">
            <Link
              href="/contact"
              onClick={close}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/90 text-slate-900 dark:text-zinc-100 text-sm font-medium transition-all hover:bg-[#86bc25]/15 dark:hover:bg-[#86bc25]/20 hover:text-[#86bc25] hover:translate-x-0.5"
            >
              <Calendar className="h-4 w-4 text-[#86bc25]" />
              <span>Schedule an Advisory Call</span>
            </Link>

            <Link
              href="/reports"
              onClick={close}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/90 text-slate-900 dark:text-zinc-100 text-sm font-medium transition-all hover:bg-[#86bc25]/15 dark:hover:bg-[#86bc25]/20 hover:text-[#86bc25] hover:translate-x-0.5"
            >
              <FileText className="h-4 w-4 text-[#86bc25]" />
              <span>Request Technical Whitepapers</span>
            </Link>

            <a
              href="mailto:partners@mimag.tech?subject=Enterprise%20Consulting%20Inquiry"
              onClick={close}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/90 text-slate-900 dark:text-zinc-100 text-sm font-medium transition-all hover:bg-[#86bc25]/15 dark:hover:bg-[#86bc25]/20 hover:text-[#86bc25] hover:translate-x-0.5"
            >
              <Mail className="h-4 w-4 text-[#86bc25]" />
              <span>Email Senior Partners</span>
            </a>
          </div>
        </div>
      </div>

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen((val) => !val)}
        aria-expanded={open}
        title="Schedule a consultation"
        className="flex items-center justify-center gap-2 p-3.5 sm:px-6 sm:py-3.5 bg-black dark:bg-[#1a1a1a] text-white text-[14.5px] font-medium tracking-tight transition-colors hover:bg-[#262626]"
      >
        <MessageSquare className="h-5 w-5 sm:h-4 sm:w-4 text-[#86bc25] shrink-0" />
        <span className="hidden sm:inline">{open ? 'Close options' : 'Schedule a consultation'}</span>
      </button>
    </div>
  );
}
