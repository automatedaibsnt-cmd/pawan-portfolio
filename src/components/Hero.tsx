'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, ArrowRight, MapPin } from 'lucide-react';

const roles = ['Chef', 'Entrepreneur', 'Digital Creator'];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 radial-bg opacity-50" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Gold dust particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,0.9) 0%, transparent 70%)',
            width: i % 2 === 0 ? '3px' : '2px',
            height: i % 2 === 0 ? '3px' : '2px',
            left: `${10 + i * 16}%`,
            top: `${20 + (i % 3) * 22}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.15, 0.55, 0.15], scale: [1, 1.6, 1] }}
          transition={{ duration: 4 + i * 0.6, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full"
      >
        {/*
          Mobile: portrait on top, text below
          Desktop: text left, portrait right
        */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-20 items-center min-h-screen pt-20 pb-20 gap-12">

          {/* ── PORTRAIT (top on mobile, right on desktop) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center items-center order-first lg:order-last"
          >
            {/* Outer ambient glow */}
            <div
              className="absolute rounded-full"
              style={{
                width: '360px',
                height: '360px',
                background:
                  'radial-gradient(circle, rgba(201,168,76,0.14) 0%, rgba(201,168,76,0.04) 40%, transparent 70%)',
                filter: 'blur(24px)',
              }}
            />

            {/* Rotating dashed orbit ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              className="absolute"
              style={{ width: '330px', height: '330px' }}
            >
              <svg width="330" height="330" viewBox="0 0 330 330" fill="none">
                <circle
                  cx="165"
                  cy="165"
                  r="160"
                  stroke="url(#orbitGrad)"
                  strokeWidth="1"
                  strokeDasharray="6 14"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="orbitGrad" x1="0" y1="0" x2="330" y2="330" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#E8C97A" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#C9A84C" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#9A7835" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Slow counter-rotate ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
              className="absolute"
              style={{ width: '290px', height: '290px' }}
            >
              <svg width="290" height="290" viewBox="0 0 290 290" fill="none">
                <circle
                  cx="145"
                  cy="145"
                  r="140"
                  stroke="rgba(201,168,76,0.12)"
                  strokeWidth="1"
                  strokeDasharray="2 20"
                />
              </svg>
            </motion.div>

            {/* Floating portrait wrapper */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/*
                Gold gradient border ring — 4 px padding with conic gradient
                Creates the gold ring effect around the circle
              */}
              <div
                className="rounded-full p-[4px]"
                style={{
                  background:
                    'conic-gradient(from 0deg, #9A7835 0deg, #E8C97A 90deg, #C9A84C 180deg, #9A7835 270deg, #E8C97A 360deg)',
                  boxShadow:
                    '0 0 0 1px rgba(201,168,76,0.15), 0 0 40px rgba(201,168,76,0.25), 0 0 80px rgba(201,168,76,0.1), 0 20px 60px rgba(0,0,0,0.7)',
                }}
              >
                {/* Inner white gap ring */}
                <div
                  className="rounded-full p-[2px]"
                  style={{ background: '#0A0A0A' }}
                >
                  {/* Circular image */}
                  <div
                    className="relative overflow-hidden rounded-full"
                    style={{
                      width: '240px',
                      height: '240px',
                    }}
                  >
                    <Image
                      src="/images/hero.png"
                      alt="Pawan Basnet — Chef, Entrepreneur, Digital Creator"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="240px"
                    />
                    {/* Very subtle inner vignette to blend edges */}
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          'radial-gradient(circle at center, transparent 60%, rgba(0,0,0,0.25) 100%)',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Gold shimmer sweep on the border (pseudo-animated via motion) */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-4px] rounded-full pointer-events-none"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 70%, rgba(232,201,122,0.55) 85%, transparent 95%)',
                }}
              />
            </motion.div>

            {/* ── Floating info badge — bottom-left ── */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="absolute -bottom-4 -left-6 lg:-left-10"
            >
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="glass-card rounded-2xl px-4 py-3 flex items-center gap-3"
                style={{ border: '1px solid rgba(201,168,76,0.2)' }}
              >
                <div className="text-xl">🥟</div>
                <div>
                  <p className="text-xs font-bold text-white/90 leading-tight">MOMO LAB</p>
                  <p className="text-[10px] text-[var(--gold)]">Founder</p>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Floating info badge — top-right ── */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              className="absolute -top-4 -right-6 lg:-right-10"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="glass-card rounded-2xl px-4 py-3 flex items-center gap-3"
                style={{ border: '1px solid rgba(201,168,76,0.2)' }}
              >
                <div className="text-xl">👨‍🍳</div>
                <div>
                  <p className="text-xs font-bold text-white/90 leading-tight">Kitchen Manager</p>
                  <p className="text-[10px] text-white/40">Auckland, NZ</p>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Availability pulse dot ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="absolute -bottom-10 right-0 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 pulse-gold" />
              <span className="text-[10px] text-white/35 tracking-widest uppercase">Open to Opportunities</span>
            </motion.div>
          </motion.div>

          {/* ── TEXT CONTENT (below portrait on mobile, left on desktop) ── */}
          <div className="flex flex-col gap-7 lg:gap-8 order-last lg:order-first">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-px bg-[var(--gold)]" />
              <span className="section-label">Portfolio</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              <span className="block text-white/90">Pawan</span>
              <span className="block gold-text">Basnet</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex items-center gap-2 h-9"
            >
              <span className="text-xl font-light text-white/35">—&nbsp;</span>
              <span className="text-xl font-light shimmer-text" style={{ minWidth: '210px' }}>
                {displayed}
                <span className="cursor-blink text-[var(--gold)]">|</span>
              </span>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex items-center gap-2 text-white/40 text-sm"
            >
              <MapPin size={13} className="text-[var(--gold)] flex-shrink-0" />
              <span>Auckland, New Zealand</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="text-white/55 text-base md:text-[17px] leading-relaxed max-w-md"
            >
              An experienced culinary professional, founder of{' '}
              <span className="text-[var(--gold)] font-semibold">MOMO LAB</span> — a premium Himalayan food
              concept — and digital creator passionate about food, culture, and building brands from the ground up.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider flex items-center gap-2 group"
              >
                Get in Touch
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider"
              >
                My Journey
              </button>
            </motion.div>

            {/* Role pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.15 }}
              className="flex flex-wrap gap-2.5 pt-5 border-t border-white/[0.06]"
            >
              {[
                { label: 'Kitchen Manager', emoji: '👨‍🍳' },
                { label: 'MOMO LAB Founder', emoji: '🥟' },
                { label: 'Digital Creator', emoji: '🎥' },
              ].map((item) => (
                <span
                  key={item.label}
                  className="flex items-center gap-2 text-xs px-4 py-2 glass-card rounded-full text-white/55"
                >
                  <span>{item.emoji}</span>
                  {item.label}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] tracking-[0.22em] uppercase text-white/25">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={15} className="text-[var(--gold)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
