'use client';

import { motion } from 'framer-motion';
import { MapPin, Heart, Mail, Phone } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'MOMO LAB', href: '#momolab' },
  { label: 'Creator', href: '#creator' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-black py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo & tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-['Playfair_Display'] text-2xl font-bold gold-text">Pawan Basnet</span>
            <span className="text-xs text-white/30 tracking-widest uppercase">Chef · Entrepreneur · Creator</span>
            <span className="flex items-center gap-1.5 text-xs text-white/25 mt-1">
              <MapPin size={11} className="text-[var(--gold)]" />
              Auckland, New Zealand
            </span>
            <a
              href="mailto:aucklandnz96@gmail.com"
              className="flex items-center gap-1.5 text-xs text-white/25 hover:text-[var(--gold)] transition-colors mt-0.5"
            >
              <Mail size={11} className="text-[var(--gold)]" />
              aucklandnz96@gmail.com
            </a>
            <a
              href="tel:+64220643409"
              className="flex items-center gap-1.5 text-xs text-white/25 hover:text-[var(--gold)] transition-colors"
            >
              <Phone size={11} className="text-[var(--gold)]" />
              +64 22 064 3409
            </a>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-xs text-white/35 hover:text-[var(--gold)] transition-colors uppercase tracking-widest"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Pawan Basnet. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart size={11} className="text-[var(--gold)]" fill="currentColor" /> in Auckland, New Zealand
          </p>
        </div>
      </div>
    </footer>
  );
}
