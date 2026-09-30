'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { UtensilsCrossed, TrendingUp, Users } from 'lucide-react';

const values = [
  {
    icon: <UtensilsCrossed size={20} />,
    title: 'Culinary Excellence',
    desc: 'A career built across fine dining, corporate catering, and hospitality — from Chef de Partie in a five-star hotel to leading full kitchen operations.',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Food Entrepreneurship',
    desc: 'Founder of MOMO LAB — a Himalayan food concept focused on premium momo experiences, food innovation, branding, and ghost kitchen operations.',
  },
  {
    icon: <Users size={20} />,
    title: 'Leadership & Training',
    desc: 'Experienced in team leadership, staff training, labour budgeting, and building kitchen cultures that prioritise safety, efficiency, and quality.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/5]">
              <div
                className="absolute inset-0 rounded-3xl overflow-hidden gold-glow"
                style={{ border: '1px solid rgba(201,168,76,0.15)' }}
              >
                <Image
                  src="/images/hero.png"
                  alt="Pawan Basnet"
                  fill
                  className="object-cover object-top"
                  sizes="500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Corner accents */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-[rgba(201,168,76,0.4)] rounded-tl-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-[rgba(201,168,76,0.4)] rounded-br-2xl" />

              {/* Quote card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="absolute -right-10 bottom-16 glass-card rounded-2xl p-5 max-w-[220px]"
                style={{ border: '1px solid rgba(201,168,76,0.2)' }}
              >
                <p className="text-xs italic text-white/60 leading-relaxed">
                  "Food is the bridge between culture and community — every dish tells a story worth sharing."
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-6 h-px bg-[var(--gold)]" />
                  <span className="text-[10px] text-[var(--gold)] font-semibold tracking-wider">PAWAN BASNET</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[var(--gold)]" />
                <span className="section-label">About Me</span>
              </div>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold leading-tight">
                Chef, Founder &{' '}
                <span className="gold-text italic">Storyteller</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5 text-white/60 leading-relaxed"
            >
              <p>
                I'm Pawan Basnet — a culinary professional based in{' '}
                <span className="text-white/80 font-medium">Auckland, New Zealand</span>, with a career spanning
                fine dining hotels, marine sports hospitality, corporate catering, and market-style restaurants.
              </p>
              <p>
                My journey has taken me from the kitchens of the{' '}
                <span className="text-[var(--gold)] font-semibold">Grand Windsor Hotel</span> to leading full
                kitchen operations at <span className="text-[var(--gold)] font-semibold">Cater Plus (OfficeMax)</span>,
                developing expertise in food cost control, HACCP compliance, team leadership, and menu engineering
                along the way.
              </p>
              <p>
                Beyond the professional kitchen, I founded{' '}
                <span className="text-[var(--gold)] font-semibold">MOMO LAB</span> — an innovative Himalayan food
                concept bringing premium momo experiences and food innovation to life. I also create content
                around food, culture, and the craft of cooking.
              </p>
            </motion.div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                  className="glass-card rounded-2xl p-5 flex items-start gap-4 hover:border-[rgba(201,168,76,0.25)] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[rgba(201,168,76,0.1)] text-[var(--gold)] flex-shrink-0 group-hover:bg-[rgba(201,168,76,0.15)] transition-colors">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{val.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
