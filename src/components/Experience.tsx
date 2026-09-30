'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Kitchen Manager',
    company: 'Cater Plus (OfficeMax)',
    location: 'Auckland, New Zealand',
    type: 'Management',
    description:
      'Overseeing full kitchen operations for a high-volume corporate catering environment. Responsible for food cost control, labour budgeting, supplier relations, inventory management, and HACCP compliance. Leading and mentoring a kitchen team to consistently deliver quality service.',
    highlights: ['Kitchen Operations', 'Food Cost Control', 'Team Leadership', 'HACCP Compliance'],
    isCurrent: true,
  },
  {
    role: 'Senior Sous Chef',
    company: 'Hyundai Marine Sports Charitable Trust',
    location: 'Auckland, New Zealand',
    type: 'Senior Kitchen',
    description:
      'Supported the Head Chef in running a dynamic kitchen tied to a marine sports and events organisation. Managed day-to-day kitchen operations, menu development, staff training, and food safety compliance for events and regular service.',
    highlights: ['Menu Development', 'Staff Training', 'Events Catering', 'Food Safety'],
    isCurrent: false,
  },
  {
    role: 'Sous Chef',
    company: 'Bodrum Market',
    location: 'Auckland, New Zealand',
    type: 'Restaurant Kitchen',
    description:
      'Assisted in running a fast-paced market-style restaurant kitchen. Contributed to menu engineering, ingredient sourcing, and team coordination to maintain high food quality and efficient service flow.',
    highlights: ['Menu Engineering', 'Ingredient Sourcing', 'Kitchen Coordination', 'Quality Control'],
    isCurrent: false,
  },
  {
    role: 'Chef de Partie',
    company: 'Grand Windsor Hotel',
    location: 'Auckland, New Zealand',
    type: 'Fine Dining',
    description:
      'Managed a dedicated section within the kitchen of one of Auckland\'s premier luxury hotels. Developed strong fundamentals in classical cooking techniques, fine dining standards, and high-pressure service within an internationally acclaimed hospitality environment.',
    highlights: ['Fine Dining', 'Section Management', 'Classical Technique', 'Luxury Hospitality'],
    isCurrent: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="relative py-32 md:py-40 overflow-hidden">
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
            <span className="section-label">Career Journey</span>
            <div className="w-8 h-px bg-[var(--gold)]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold">
            Professional{' '}
            <span className="gold-text italic">Experience</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto text-sm leading-relaxed">
            From fine dining foundations to leading full kitchen operations across
            Auckland's top hospitality venues.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative md:pl-24"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-[25px] top-8 w-6 h-6 rounded-full items-center justify-center"
                  style={{
                    background: exp.isCurrent ? 'var(--gold)' : 'rgba(201,168,76,0.15)',
                    border: '1px solid rgba(201,168,76,0.4)',
                    boxShadow: exp.isCurrent ? '0 0 16px rgba(201,168,76,0.5)' : 'none',
                  }}
                >
                  {exp.isCurrent && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
                </div>

                {/* Card */}
                <div className="glass-card rounded-3xl p-7 hover:border-[rgba(201,168,76,0.25)] transition-all duration-500 group">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span
                          className="text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                          style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,0.2)' }}
                        >
                          {exp.type}
                        </span>
                        {exp.isCurrent && (
                          <span className="text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full text-green-400"
                            style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}
                          >
                            Current Role
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[var(--gold)] transition-colors">{exp.role}</h3>
                      <p className="text-[var(--gold)] font-semibold text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-white/35 flex-shrink-0 mt-1">
                      <MapPin size={11} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-sm text-white/55 leading-relaxed mb-5">{exp.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span key={h} className="text-[10px] px-3 py-1 rounded-full border border-white/10 text-white/40">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
