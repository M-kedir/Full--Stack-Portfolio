import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <motion.div variants={fadeIn('up', 0.05)} className="max-w-2xl space-y-3">
    <p className="text-xs uppercase tracking-[0.4em] text-slate/70 transition-theme dark:text-pewter/70">{eyebrow}</p>
    <h2 className="text-gradient text-4xl font-semibold leading-tight text-slate dark:text-smoke md:text-5xl">{title}</h2>
    {description && <p className="text-lg text-slate/80 transition-theme dark:text-pewter">{description}</p>}
  </motion.div>
);
