import { motion } from 'framer-motion';
import { profile } from '../data/content';
import { fadeIn, staggerContainer } from '../utils/motion';
import { SectionHeading } from '../components/SectionHeading';

const highlights = [
  {
    title: 'Interface translation',
    description: 'Move specs from Figma to code with consistent tokens, spacing, and accessibility states.',
  },
  {
    title: 'Measured craft',
    description: 'Keep type, grids, and rhythm aligned so junior work still feels production ready.',
  },
  {
    title: 'Reliable process',
    description: 'Ship in small slices, document decisions, and keep communication clear for leads.',
  },
];

export const About = () => (
  <motion.div
    variants={staggerContainer(0.15, 0.15)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    className="space-y-12"
  >
    <SectionHeading
      eyebrow="ABOUT"
      title="Practical UI delivery"
      description="I combine layout sense with focused implementation so product teams get reliable front-end support."
    />
    <motion.div
      variants={fadeIn('up', 0.2)}
  className="grid gap-8 rounded-[32px] border border-sand/70 bg-pearl/80 p-10 transition-theme dark:border-white/10 dark:bg-white/5 md:grid-cols-3"
    >
      {highlights.map((item) => (
        <div key={item.title} className="space-y-3 text-slate/80 transition-theme dark:text-pewter">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pewter/70">Snapshot</p>
          <h3 className="text-xl font-semibold text-slate dark:text-smoke">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </motion.div>
    <motion.div
      variants={fadeIn('up', 0.3)}
      className="space-y-3 rounded-[28px] border border-sand/60 bg-card-gradient-light p-8 shadow-soft transition-theme dark:border-white/10 dark:bg-card-gradient"
    >
      <p className="text-sm uppercase tracking-[0.4em] text-pewter/70">Philosophy</p>
      <p className="text-2xl font-medium text-slate dark:text-smoke">
        “Build for clarity first. Align design, implementation, and accessibility before adding polish.”
      </p>
      <p className="text-slate/80 dark:text-pewter">
        {profile.location} · {profile.availability}
      </p>
    </motion.div>
  </motion.div>
);
