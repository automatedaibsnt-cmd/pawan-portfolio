'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Tv2, Camera, Play, Film, Share2, Edit3 } from 'lucide-react';

const contentTypes = [
  {
    icon: <Camera size={22} />,
    title: 'Recipe Content',
    desc: 'Sharing authentic Himalayan and New Zealand-inspired recipes — from home-cook accessible dishes to professional kitchen techniques.',
    emoji: '📸',
  },
  {
    icon: <Tv2 size={22} />,
    title: 'Behind the Kitchen',
    desc: 'Real, unfiltered content from professional kitchens — plating, prep, service, and the everyday life of a working chef.',
    emoji: '🎬',
  },
  {
    icon: <Edit3 size={22} />,
    title: 'Food Entrepreneurship',
    desc: 'Documenting the journey of building MOMO LAB — from concept and branding to ghost kitchen operations and food business realities.',
    emoji: '📝',
  },
  {
    icon: <Share2 size={22} />,
    title: 'Cultural Storytelling',
    desc: 'Celebrating Himalayan food culture — exploring ingredients, traditions, and the stories that make food more than just a meal.',
    emoji: '🌏',
  },
];

const platforms = [
  { name: 'Instagram', handle: '@pawanbasnet', focus: 'Food photography · Recipe reels · Daily kitchen life' },
  { name: 'YouTube', handle: 'Pawan Basnet', focus: 'Full recipes · MOMO LAB journey · Chef vlogs' },
  { name: 'TikTok', handle: '@pawanbasnet', focus: 'Quick tips · Behind the scenes · Food culture' },
];

export default function DigitalCreator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="creator" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.2)] to-transparent" />
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: 'radial-gradient(ellipse at 20% 60%, rgba(201,168,76,0.05) 0%, transparent 50%)' }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[var(--gold)]" />
            <span className="section-label">Digital World</span>
            <div className="w-8 h-px bg-[var(--gold)]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold">
            Digital{' '}
            <span className="gold-text italic">Creator</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-lg mx-auto text-sm leading-relaxed">
            Beyond the kitchen, I create content that bridges professional culinary craft
            with food culture — sharing the stories, skills, and passion behind the plate.
          </p>
        </motion.div>

        {/* Content types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {contentTypes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-3xl p-8 flex gap-5 hover:border-[rgba(201,168,76,0.25)] transition-all duration-500 group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[rgba(201,168,76,0.1)] text-[var(--gold)] group-hover:bg-[rgba(201,168,76,0.15)] transition-colors">
                  {item.icon}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{item.emoji}</span>
                  <h3 className="font-semibold text-white group-hover:text-[var(--gold)] transition-colors">{item.title}</h3>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-center font-['Playfair_Display'] text-2xl font-bold mb-8">
            Find Me <span className="gold-text">Online</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-[rgba(201,168,76,0.25)] transition-all duration-300 group"
              >
                <h4 className="text-sm font-bold text-white group-hover:text-[var(--gold)] transition-colors mb-1">{p.name}</h4>
                <p className="text-xs text-[var(--gold)] font-medium mb-3">{p.handle}</p>
                <p className="text-xs text-white/40 leading-relaxed">{p.focus}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="rounded-3xl p-10 md:p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(0,0,0,0) 100%)',
            border: '1px solid rgba(201,168,76,0.18)',
          }}
        >
          <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-4">
            Collaborate on{' '}
            <span className="gold-text italic">Content</span>
          </h3>
          <p className="text-white/55 text-sm leading-relaxed max-w-lg mx-auto mb-8">
            If you're a food brand, hospitality company, or creator interested in collaborating
            on authentic culinary content — I'd love to connect.
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
