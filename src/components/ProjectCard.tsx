import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  year: string;
  index: number;
}

const palette = ['from-accent/30 to-pearl/10', 'from-citrus/40 to-accent/20', 'from-accent/25 to-citrus/20'];

export const ProjectCard = ({ title, description, tags, year, index }: ProjectCardProps) => (
  <motion.article
    whileHover={{ y: -8 }}
    className="group relative overflow-hidden rounded-[30px] border border-sand/60 bg-pearl/85 p-8 shadow-soft transition-theme dark:border-white/10 dark:bg-gradient-to-br dark:from-carbon dark:to-slate"
  >
    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <div
        className={clsx(
          'pointer-events-none absolute inset-y-0 right-0 w-2/5 bg-gradient-to-br blur-[90px]',
          palette[index % palette.length],
        )}
      />
    </div>
    <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-slate/70 dark:text-pewter/70">
      <span>Case Study</span>
      <span>{year}</span>
    </div>
    <h3 className="mt-6 text-2xl font-semibold text-slate dark:text-smoke">{title}</h3>
    <p className="mt-3 text-slate/80 dark:text-pewter">{description}</p>
    <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate/70 dark:text-pewter">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-sand/70 px-3 py-1 text-slate/80 transition-theme dark:border-white/20 dark:text-smoke/80"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.article>
);
