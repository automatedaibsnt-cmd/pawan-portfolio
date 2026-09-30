'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Camera, Tv2, Globe } from 'lucide-react';

const socials = [
  { icon: <Camera size={20} />, label: 'Instagram', href: 'https://instagram.com/pawanbasnet' },
  { icon: <Tv2 size={20} />, label: 'YouTube', href: 'https://youtube.com' },
  { icon: <Globe size={20} />, label: 'LinkedIn', href: 'https://linkedin.com' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full bg-transparent border rounded-xl px-5 py-4 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 ${
      focused === field
        ? 'border-[rgba(201,168,76,0.5)] bg-[rgba(201,168,76,0.03)]'
        : 'border-white/10 hover:border-white/20'
    }`;

  return (
    <section id="contact" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.25)] to-transparent" />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 60%)' }}
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
            <span className="section-label">Let's Connect</span>
            <div className="w-8 h-px bg-[var(--gold)]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold">
            Get in{' '}
            <span className="gold-text italic">Touch</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto text-sm leading-relaxed">
            Open to culinary roles, MOMO LAB partnerships, content collaborations,
            or a simple conversation about food and entrepreneurship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-white mb-4">
                Let's Build Something Together
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Whether you're looking for an experienced culinary professional,
                want to explore a collaboration with MOMO LAB, or are interested
                in food content partnerships — I'm always open to the right conversations.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[rgba(201,168,76,0.1)] text-[var(--gold)] flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest">Email</p>
                  <a
                    href="mailto:aucklandnz96@gmail.com"
                    className="text-sm text-white/80 hover:text-[var(--gold)] transition-colors"
                  >
                    aucklandnz96@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[rgba(201,168,76,0.1)] text-[var(--gold)] flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest">Phone</p>
                  <a
                    href="tel:+64220643409"
                    className="text-sm text-white/80 hover:text-[var(--gold)] transition-colors"
                  >
                    +64 22 064 3409
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[rgba(201,168,76,0.1)] text-[var(--gold)] flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest">Location</p>
                  <p className="text-sm text-white/80">Auckland, New Zealand</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-[10px] text-white/30 uppercase tracking-widest mb-4">Find Me Online</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title={s.label}
                    className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-white/50 hover:text-[var(--gold)] hover:border-[rgba(201,168,76,0.3)] transition-all"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* What I'm open to */}
            <div
              className="rounded-2xl p-6 space-y-3"
              style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.12)' }}
            >
              <p className="text-xs font-semibold text-[var(--gold)] tracking-wider uppercase mb-3">Open To</p>
              {[
                'Culinary leadership & management roles',
                'MOMO LAB investment & partnership enquiries',
                'Food content & brand collaborations',
                'Consulting — menus, food cost, kitchen operations',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-[var(--gold)] mt-1.5 flex-shrink-0" />
                  <p className="text-xs text-white/50 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-3xl p-12 text-center flex flex-col items-center gap-6 h-full justify-center"
              >
                <div className="text-6xl">✉️</div>
                <h3 className="font-['Playfair_Display'] text-2xl font-bold gold-text">Message Sent!</h3>
                <p className="text-white/55 text-sm leading-relaxed max-w-xs">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', subject: '', message: '' }); }}
                  className="btn-outline px-6 py-2.5 rounded-full text-sm"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-10 flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 md:col-span-1">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className={inputClass('name')}
                      required
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className={inputClass('email')}
                      required
                    />
                  </div>
                </div>

                <select
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass('subject')} appearance-none cursor-pointer`}
                  required
                >
                  <option value="" disabled className="bg-black">What's this about?</option>
                  <option value="role" className="bg-black">Culinary Role / Opportunity</option>
                  <option value="momolab" className="bg-black">MOMO LAB Partnership</option>
                  <option value="content" className="bg-black">Content Collaboration</option>
                  <option value="consulting" className="bg-black">Consulting Enquiry</option>
                  <option value="other" className="bg-black">Other</option>
                </select>

                <textarea
                  placeholder="Tell me more..."
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  className={`${inputClass('message')} resize-none`}
                  required
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-gold w-full py-4 rounded-xl flex items-center justify-center gap-3 text-sm font-semibold tracking-wide"
                >
                  <Send size={16} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
