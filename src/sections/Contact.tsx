import { motion } from 'framer-motion';
import type { FormEvent } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { socialLinks } from '../data/content';
import { fadeIn, staggerContainer } from '../utils/motion';

export const Contact = () => (
  <motion.div
    className="space-y-12"
    variants={staggerContainer(0.1, 0.08)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
  >
    <SectionHeading
      eyebrow="CONTACT"
      title="Open for collaboration"
      description="Share a brief and I’ll respond within two business days."
    />
    <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
      <motion.form
        variants={fadeIn('up', 0.1)}
  className="space-y-6 rounded-[32px] border border-sand/70 bg-pearl/90 p-8 shadow-soft transition-theme dark:border-white/10 dark:bg-white/5"
        onSubmit={(event: FormEvent<HTMLFormElement>) => event.preventDefault()}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm text-slate/80 dark:text-pewter">
            Name
            <input
              className="mt-2 w-full rounded-2xl border border-sand/60 bg-pearl px-4 py-3 text-slate placeholder:text-pewter/50 focus:border-accent focus:outline-none dark:border-white/10 dark:bg-ink/40 dark:text-smoke"
              placeholder="Your name"
            />
          </label>
          <label className="text-sm text-slate/80 dark:text-pewter">
            Email
            <input
              type="email"
              className="mt-2 w-full rounded-2xl border border-sand/60 bg-pearl px-4 py-3 text-slate placeholder:text-pewter/50 focus:border-accent focus:outline-none dark:border-white/10 dark:bg-ink/40 dark:text-smoke"
              placeholder="hello@studio.com"
            />
          </label>
        </div>
        <label className="text-sm text-slate/80 dark:text-pewter">
          Project Brief
          <textarea
            className="mt-2 min-h-[160px] w-full rounded-3xl border border-sand/60 bg-pearl px-4 py-4 text-slate placeholder:text-pewter/50 focus:border-accent focus:outline-none dark:border-white/10 dark:bg-ink/40 dark:text-smoke"
            placeholder="Looking for a partner on..."
          />
        </label>
        <Button type="submit" className="w-full justify-center">
          Send message
        </Button>
      </motion.form>
      <motion.div
        variants={fadeIn('up', 0.2)}
        className="space-y-6 rounded-[32px] border border-sand/60 bg-card-gradient-light p-8 shadow-soft transition-theme dark:border-white/10 dark:bg-card-gradient"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-slate/70 dark:text-smoke/70">Connect</p>
        <ul className="space-y-4 text-lg text-slate/80 dark:text-smoke">
          {socialLinks.map((link) => (
            <li key={link.label} className="flex items-center justify-between text-slate/70 dark:text-pewter">
              <span className="text-sm uppercase tracking-[0.3em] text-slate/80 dark:text-smoke/80">{link.label}</span>
              <span>{link.value}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </motion.div>
);
