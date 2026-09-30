'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flame, Globe, Layers, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: <Flame size={22} />,
    title: 'Premium Momo Experience',
    desc: 'Elevating the traditional Himalayan dumpling into a premium dining experience — with curated flavour profiles, high-quality ingredients, and a distinctive brand identity.',
    emoji: '🥟',
  },
  {
    icon: <Layers size={22} />,
    title: 'Ghost Kitchen Operations',
    desc: 'Built for scalability. MOMO LAB is designed around a lean, ghost kitchen model that enables consistent quality and rapid expansion without the overhead of a traditional restaurant.',
    emoji: '🏭',
  },
  {
    icon: <Globe size={22} />,
    title: 'Food Innovation & Branding',
    desc: 'Combining authentic Himalayan food traditions with modern food innovation, creative branding, and a storytelling approach that connects product with culture.',
    emoji: '✨',
  },
];

const conceptPoints = [
  { label: 'Concept', value: 'Himalayan Food' },
  { label: 'Specialty', value: 'Premium Momo' },
  { label: 'Model', value: 'Ghost Kitchen' },
  { label: 'Focus', value: 'Food Innovation' },
];

export default function MomoLab() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="momolab" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)' }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.25)] to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[var(--gold)]" />
            <span className="section-label">Entrepreneurship</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold leading-none">
                <span className="gold-text">MOMO</span>
                <br />
                <span className="text-white">LAB</span>
              </h2>
              <p className="mt-4 text-white/50 max-w-lg text-sm leading-relaxed">
                An innovative Himalayan food concept focused on premium momo experiences,
                food innovation, branding, and scalable ghost kitchen operations.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-black btn-gold">
                🥟 Himalayan Food Concept
              </span>
            </div>
          </div>
        </motion.div>

        {/* Concept points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {conceptPoints.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              className="glass-card rounded-2xl p-6 text-center hover:border-[rgba(201,168,76,0.3)] transition-all group"
            >
              <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2">{point.label}</div>
              <div className="text-base font-bold text-white group-hover:text-[var(--gold)] transition-colors">{point.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.12 }}
              className="glass-card rounded-3xl p-8 flex flex-col gap-5 hover:border-[rgba(201,168,76,0.25)] transition-all duration-500 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[rgba(201,168,76,0.1)] text-[var(--gold)] group-hover:bg-[rgba(201,168,76,0.15)] transition-colors">
                  {pillar.icon}
                </div>
                <span className="text-2xl">{pillar.emoji}</span>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-[var(--gold)] transition-colors">{pillar.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(0,0,0,0) 60%)',
            border: '1px solid rgba(201,168,76,0.15)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-10 md:p-14">
              <span className="section-label block mb-4">The Vision</span>
              <h3 className="font-['Playfair_Display'] text-3xl font-bold mb-6 leading-tight">
                Bringing Himalayan Flavours{' '}
                <span className="gold-text italic">to the World</span>
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                MOMO LAB was born from a deep respect for Himalayan food culture and a desire
                to share it authentically — without compromise. Momo is more than a dumpling.
                It is comfort, community, and craftsmanship wrapped in dough.
              </p>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                The concept is built for the modern food landscape — ghost kitchen first,
                brand-led, and focused on delivering a consistently premium product that
                tells the story of where it comes from.
              </p>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 text-[var(--gold)] text-sm font-semibold hover:gap-4 transition-all"
              >
                Enquire about MOMO LAB <ArrowRight size={16} />
              </a>
            </div>
            <div className="hidden md:flex items-center justify-center p-14">
              <div className="relative">
                <div
                  className="text-[120px] leading-none select-none"
                  style={{ filter: 'drop-shadow(0 0 60px rgba(201,168,76,0.3))' }}
                >
                  🥟
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div
                    className="w-48 h-48 rounded-full"
                    style={{ border: '1px solid rgba(201,168,76,0.15)', borderTopColor: 'rgba(201,168,76,0.5)' }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
