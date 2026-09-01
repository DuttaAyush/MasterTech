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
      className={`fixed right-4 bottom-5 sm:right-8 sm:bottom-8 z-50 flex flex-col items-end transition-all duration-300 ${
        open ? 'w-auto' : ''
      }`}
    >
      {/* Expandable Shutter Popup Menu */}
      <div
        className={`transition-all duration-300 ease-out origin-bottom-right mb-3 ${
          open
            ? 'scale-100 opacity-100 pointer-events-auto translate-y-0'
            : 'scale-95 opacity-0 pointer-events-none translate-y-4'
        }`}
      >
        <div className="bg-white dark:bg-[#090b0f] border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden p-3 min-w-[260px] sm:min-w-[280px]">
          <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-slate-100 dark:border-zinc-800">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#784813] dark:text-[#86bc25]">
              Schedule Consultation
            </span>
            <button
              onClick={close}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-bold px-1.5 py-0.5 rounded"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-1.5">
            <Link
              href="/contact"
              onClick={close}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/90 text-slate-900 dark:text-zinc-100 text-xs sm:text-sm font-medium transition-all hover:bg-[#86bc25]/15 dark:hover:bg-[#86bc25]/20 hover:text-[#86bc25]"
            >
              <Calendar className="h-4 w-4 text-[#86bc25] shrink-0" />
              <span>Schedule an Advisory Call</span>
            </Link>

            <Link
              href="/reports"
              onClick={close}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/90 text-slate-900 dark:text-zinc-100 text-xs sm:text-sm font-medium transition-all hover:bg-[#86bc25]/15 dark:hover:bg-[#86bc25]/20 hover:text-[#86bc25]"
            >
              <FileText className="h-4 w-4 text-[#86bc25] shrink-0" />
              <span>Request Whitepapers</span>
            </Link>

            <a
              href="mailto:partners@mimag.tech?subject=Enterprise%20Consulting%20Inquiry"
              onClick={close}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/90 text-slate-900 dark:text-zinc-100 text-xs sm:text-sm font-medium transition-all hover:bg-[#86bc25]/15 dark:hover:bg-[#86bc25]/20 hover:text-[#86bc25]"
            >
              <Mail className="h-4 w-4 text-[#86bc25] shrink-0" />
              <span>Email Senior Partners</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Trigger Button: Pure 48px circle on mobile (!open), full pill on desktop */}
      <button
        type="button"
        onClick={() => setOpen((val) => !val)}
        aria-expanded={open}
        title="Schedule a consultation"
        className={`flex items-center justify-center bg-black dark:bg-[#1a1a1a] text-white transition-all duration-300 shadow-2xl border border-white/15 hover:border-[#86bc25]/50 ${
          open
            ? 'h-12 px-5 rounded-full text-xs font-bold text-[#86bc25]'
            : 'w-12 h-12 rounded-full sm:w-auto sm:h-auto sm:px-6 sm:py-3.5 sm:rounded-2xl'
        }`}
      >
        <MessageSquare className="h-5 w-5 sm:h-4 sm:w-4 text-[#86bc25] shrink-0" />
        <span className={`${open ? 'inline ml-2 text-white' : 'hidden sm:inline sm:ml-2.5'} text-[14px] font-semibold tracking-tight`}>
          {open ? 'Close' : 'Schedule a consultation'}
        </span>
      </button>
    </div>
  );
}
