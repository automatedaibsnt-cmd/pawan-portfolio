'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'MOMO LAB — Brand & Concept',
    category: 'Food Entrepreneurship',
    description:
      'Developed the full brand identity and operational concept for MOMO LAB — an innovative Himalayan food concept built around premium momo experiences, ghost kitchen operations, and food innovation. From name and visual identity through to kitchen systems and product development.',
    tags: ['Brand Identity', 'Ghost Kitchen', 'Himalayan Cuisine', 'Food Innovation'],
    emoji: '🥟',
    status: 'In Development',
  },
  {
    title: 'Menu Engineering & Cost Control',
    category: 'Culinary Operations',
    description:
      'Across multiple venues — including corporate catering, fine dining, and market restaurants — developed and optimised menus with a focus on food cost control, seasonal sourcing, and profitability. Applied structured recipe costing and supplier negotiation strategies.',
    tags: ['Menu Engineering', 'Food Costing', 'Supplier Relations', 'Profitability'],
    emoji: '📋',
    status: 'Ongoing',
  },
  {
    title: 'Corporate Kitchen Management',
    category: 'Operations Leadership',
    description:
      'As Kitchen Manager at Cater Plus (OfficeMax), led a full kitchen team responsible for high-volume corporate catering. Implemented HACCP systems, managed labour budgets, established inventory workflows, and raised food safety compliance standards.',
    tags: ['HACCP', 'Labour Budgeting', 'Team Leadership', 'Corporate Catering'],
    emoji: '🏢',
    status: 'Active',
  },
  {
    title: 'Fine Dining Foundation — Grand Windsor',
    category: 'Culinary Excellence',
    description:
      'Gained foundational excellence in fine dining as Chef de Partie at the Grand Windsor Hotel — one of Auckland\'s most prestigious establishments. Developed precision in classical technique, plating, and the standards of luxury hospitality service.',
    tags: ['Fine Dining', 'Classical Technique', 'Luxury Hotel', 'Auckland'],
    emoji: '🏨',
    status: 'Completed',
  },
  {
    title: 'Digital Food Content Creation',
    category: 'Digital Media',
    description:
      'Creating authentic content around Himalayan cuisine, professional cooking techniques, and the MOMO LAB journey across social media platforms — connecting food culture with digital audiences.',
    tags: ['Content Creation', 'Food Photography', 'Social Media', 'Storytelling'],
    emoji: '🎬',
    status: 'Ongoing',
  },
  {
    title: 'Events & Marine Sports Hospitality',
    category: 'Events Catering',
    description:
      'As Senior Sous Chef at the Hyundai Marine Sports Charitable Trust, managed kitchen operations for a sports and events organisation — delivering high-quality food service for events, functions, and regular dining.',
    tags: ['Events Catering', 'Sports Hospitality', 'Staff Training', 'Menu Development'],
    emoji: '⚓',
    status: 'Completed',
  },
];

const statusColors: Record<string, string> = {
  'In Development': '#C9A84C',
  Ongoing: '#a855f7',
  Active: '#22c55e',
  Completed: '#60a5fa',
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.2)] to-transparent" />

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
            <span className="section-label">Work</span>
            <div className="w-8 h-px bg-[var(--gold)]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold">
            Key{' '}
            <span className="gold-text italic">Projects</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto text-sm leading-relaxed">
            A selection of professional projects, entrepreneurial ventures, and
            culinary initiatives across my career.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl overflow-hidden hover:border-[rgba(201,168,76,0.25)] transition-all duration-500 group flex flex-col"
            >
              {/* Card header */}
              <div className="p-8 flex items-start justify-between"
                style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 100%)' }}
              >
                <div className="text-5xl">{project.emoji}</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: statusColors[project.status] }} />
                  <span className="text-[10px] font-semibold tracking-wider uppercase" style={{ color: statusColors[project.status] }}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 px-8 pb-8 flex flex-col gap-4">
                <div>
                  <span className="text-[10px] text-[var(--gold)] font-semibold tracking-widest uppercase">{project.category}</span>
                  <h3 className="text-base font-bold text-white mt-1 group-hover:text-[var(--gold)] transition-colors leading-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-white/50 leading-relaxed flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full border border-white/10 text-white/35">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-xs text-[var(--gold)] font-semibold flex items-center gap-1.5 hover:gap-3 transition-all group/btn"
                  >
                    Discuss This Project <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-14"
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide"
          >
            Let's Work Together →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
