'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'KNOWLEDGE CENTRE', href: '/knowledge-centre' },
    { name: 'CYBER CRIME', href: '/cyber-crime' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#7B828A] text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
        {/* LOGO */}
        <Link href="/" className="flex flex-col">
          <div className="text-lg font-black tracking-wider text-white sm:text-xl">
            SHAIKUL <span className="text-[#D4AF37]">KHAN</span>
          </div>
          <span className="text-[9px] font-medium tracking-[0.2em] text-slate-300">
            RAJASTHAN HIGH COURT
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href) && (link.href !== '/' || pathname === '/');
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-bold tracking-wider transition-colors hover:text-[#D4AF37] ${
                  isActive ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] pb-0.5' : 'text-slate-100'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-md bg-[#D4AF37] px-4 py-2 text-xs font-bold text-black uppercase tracking-wider transition-transform hover:scale-105"
          >
            CONTACT NOW
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 rounded-md bg-[#3A444E] px-3 py-1.5 text-xs font-bold text-[#D4AF37] border border-white/10 focus:outline-none"
          >
            <span>MENU</span>
            <span className="text-base">≡</span>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="absolute right-4 top-14 z-50 w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl md:hidden">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href) && (link.href !== '/' || pathname === '/');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-amber-50 text-[#B08A00]'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {link.name === 'HOME'
                    ? 'Home'
                    : link.name === 'ABOUT'
                    ? 'About'
                    : link.name === 'KNOWLEDGE CENTRE'
                    ? 'Knowledge Centre'
                    : 'Cyber Crime'}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
