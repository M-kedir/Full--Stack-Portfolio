import { motion } from 'framer-motion';
import type { ReactElement } from 'react';
import { skills, type SkillIconKey } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { fadeIn, staggerContainer } from '../utils/motion';

type SkillKey = SkillIconKey;

const iconMap: Record<SkillKey, () => ReactElement> = {
  html: (): ReactElement => (
    <svg viewBox="0 0 32 32" fill="none" className="h-9 w-9">
      <path d="M6 4h20l-2 20-8 4-8-4L6 4Z" fill="currentColor" opacity={0.15} />
      <path
        d="M12 10h8l-.4 4h-7.2l.3 3h6.3l-.3 3.2-2.7.9-2.8-.9-.1-1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  css: (): ReactElement => (
    <svg viewBox="0 0 32 32" fill="none" className="h-9 w-9">
      <path d="M6 4h20l-2 20-8 4-8-4L6 4Z" fill="currentColor" opacity={0.15} />
      <path
        d="M20 10h-8l-.3 3.2H19l-.4 4.1-2.6.7-2.3-.7-.2-1.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 13.2h5.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  javascript: (): ReactElement => (
    <svg viewBox="0 0 32 32" fill="none" className="h-9 w-9">
      <rect x="7" y="7" width="18" height="18" rx="4" fill="currentColor" opacity={0.15} />
      <path
        d="M14 11v10c0 2 1.2 3 3 3 1.2 0 2.1-.4 2.8-1.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 11c0 2.2 1.1 3.3 3.1 3.3 1.1 0 2-.3 2.9-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  typescript: (): ReactElement => (
    <svg viewBox="0 0 32 32" fill="none" className="h-9 w-9">
      <rect x="7" y="7" width="18" height="18" rx="3" fill="currentColor" opacity={0.15} />
      <path d="M12 16h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M16 16v7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18.5 19.5c1-.8 2-.8 3 0s1 1.9 0 2.7l-3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  react: (): ReactElement => (
    <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9">
      <circle cx="20" cy="20" r="3" fill="currentColor" />
      <ellipse cx="20" cy="20" rx="14" ry="6" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="20" cy="20" rx="14" ry="6" stroke="currentColor" strokeWidth="1.6" transform="rotate(60 20 20)" />
      <ellipse cx="20" cy="20" rx="14" ry="6" stroke="currentColor" strokeWidth="1.6" transform="rotate(120 20 20)" />
    </svg>
  ),
  tailwind: (): ReactElement => (
    <svg viewBox="0 0 32 32" fill="none" className="h-9 w-9">
      <path
        d="M6 16c2-4 4-6 7-6s5 2 7 6 4 6 7 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 22c2-4 4-6 7-6s5 2 7 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.6}
      />
    </svg>
  ),
  framer: (): ReactElement => (
    <svg viewBox="0 0 32 32" fill="none" className="h-9 w-9">
      <path d="M9 6h14v8H9l7-8v20l-7-8h14v8H9" fill="currentColor" opacity={0.15} />
      <path d="M9 6h14v8H9l7-8v20l-7-8h14v8H9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  figma: (): ReactElement => (
    <svg viewBox="0 0 32 32" fill="none" className="h-9 w-9">
      <path d="M12 6h4v8h-4a4 4 0 1 1 0-8Z" fill="currentColor" opacity={0.15} />
      <path d="M16 6h4a4 4 0 1 1 0 8h-4V6Z" fill="currentColor" opacity={0.3} />
      <path d="M12 14h4v8h-4a4 4 0 1 1 0-8Z" fill="currentColor" opacity={0.3} />
      <path d="M16 14h2a4 4 0 1 1 0 8h-2V14Z" fill="currentColor" opacity={0.5} />
      <circle cx="18" cy="24" r="4" fill="currentColor" opacity={0.8} />
    </svg>
  ),
  git: (): ReactElement => (
    <svg viewBox="0 0 32 32" fill="none" className="h-9 w-9">
      <path d="M8 16 16 8l8 8-8 8-8-8Z" fill="currentColor" opacity={0.15} />
      <path d="M12 12 20 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M20 12 12 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" />
      <circle cx="20" cy="20" r="1.3" fill="currentColor" />
    </svg>
  ),
  notion: (): ReactElement => (
    <svg viewBox="0 0 32 32" fill="none" className="h-9 w-9">
      <rect x="7" y="7" width="18" height="18" rx="3" fill="currentColor" opacity={0.15} />
      <path d="M12 12h8v12l-8-12v12" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
};

export const Skills = () => (
  <motion.div
    className="space-y-12"
    variants={staggerContainer(0.1, 0.08)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
  >
    <SectionHeading
      eyebrow="SKILLS"
      title="Core toolkit"
      description="Icon set representing the tools I reach for on every build."
    />
    <motion.div
      variants={fadeIn('up', 0.2)}
      className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 md:gap-6"
    >
      {skills.map((skill) => {
        const Icon = iconMap[skill.icon];
        return (
          <motion.div
            key={skill.label}
            title={skill.label}
            whileHover={{ y: -4 }}
            className="flex aspect-square items-center justify-center rounded-2xl border border-sand/60 bg-pearl/80 p-4 text-slate/80 shadow-soft transition-theme dark:border-white/15 dark:bg-white/5 dark:text-smoke"
            aria-label={skill.label}
          >
            <span className="sr-only">{skill.label}</span>
            {Icon && <Icon />}
          </motion.div>
        );
      })}
    </motion.div>
  </motion.div>
);
