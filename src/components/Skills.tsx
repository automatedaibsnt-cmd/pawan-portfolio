'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillGroups = [
  {
    title: 'Kitchen Operations',
    emoji: '🍳',
    skills: [
      { name: 'Kitchen Operations & Management' },
      { name: 'Menu Engineering' },
      { name: 'Food Cost Control' },
      { name: 'Inventory Management' },
      { name: 'Supplier Relations' },
    ],
  },
  {
    title: 'Safety & Compliance',
    emoji: '✅',
    skills: [
      { name: 'Food Safety Compliance' },
      { name: 'HACCP' },
      { name: 'Health & Safety Standards' },
      { name: 'Allergen Management' },
      { name: 'Kitchen Hygiene Protocols' },
    ],
  },
  {
    title: 'Leadership & Business',
    emoji: '💼',
    skills: [
      { name: 'Team Leadership' },
      { name: 'Staff Training & Development' },
      { name: 'Labour Budgeting' },
      { name: 'Food Entrepreneurship' },
      { name: 'Brand Building' },
    ],
  },
];

const tools = [
  'HACCP Systems', 'Inventory Software', 'Recipe Costing', 'POS Systems',
  'Food Safety Audits', 'Supplier Negotiation', 'Shift Scheduling',
  'Ghost Kitchen Operations', 'Menu Development', 'Content Creation',
];

function SkillPill({ name, delay }: { name: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="flex items-center gap-3 p-4 glass-card rounded-xl hover:border-[rgba(201,168,76,0.25)] transition-all duration-300 group"
    >
      <div
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: 'var(--gold)', boxShadow: '0 0 8px rgba(201,168,76,0.5)' }}
      />
      <span className="text-sm text-white/70 group-hover:text-white transition-colors">{name}</span>
    </motion.div>
  );
}

function SkillColumn({ title, emoji, skills, delay }: {
  title: string;
  emoji: string;
  skills: { name: string }[];
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="glass-card rounded-3xl p-8 hover:border-[rgba(201,168,76,0.2)] transition-all duration-500 flex flex-col"
    >
      <div className="flex items-center gap-3 mb-7">
        <span className="text-2xl">{emoji}</span>
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-col gap-2.5 flex-1">
        {skills.map((skill, i) => (
          <SkillPill key={skill.name} name={skill.name} delay={delay + i * 0.07} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
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
            <span className="section-label">Expertise</span>
            <div className="w-8 h-px bg-[var(--gold)]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold">
            Skills &{' '}
            <span className="gold-text italic">Capabilities</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto text-sm leading-relaxed">
            A professional skill set refined across fine dining, corporate catering,
            and food entrepreneurship.
          </p>
        </motion.div>

        {/* Skill columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group, i) => (
            <SkillColumn
              key={group.title}
              title={group.title}
              emoji={group.emoji}
              skills={group.skills}
              delay={0.1 + i * 0.1}
            />
          ))}
        </div>

        {/* Tools & areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <p className="section-label mb-6">Areas of Practice</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.04 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(201,168,76,0.5)' }}
                className="px-4 py-2 text-xs text-white/60 rounded-full glass-card hover:text-[var(--gold)] transition-colors cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
