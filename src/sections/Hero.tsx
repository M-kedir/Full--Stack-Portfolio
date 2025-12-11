import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { Signature } from '../components/Signature';
import { profile } from '../data/content';
import { fadeIn, staggerContainer } from '../utils/motion';

const stack = ['React', 'TypeScript', 'Tailwind', 'Framer', 'Figma', 'Accessibility'];

export const Hero = () => (
  <motion.div
    className="grid gap-12 py-24 lg:grid-cols-2 lg:items-center"
    variants={staggerContainer(0.2, 0.2)}
    initial="hidden"
    animate="show"
  >
    <motion.div variants={fadeIn('up')} className="space-y-8">
      <div className="inline-flex items-center gap-3 rounded-full border border-sand/70 bg-pearl/80 px-4 py-2 text-xs uppercase tracking-[0.4em] text-slate/80 dark:border-white/10 dark:bg-white/5 dark:text-pewter">
        <span className="h-2 w-2 rounded-full bg-accent" />
        Product UI · 2025
      </div>
      <h1 className="text-5xl font-semibold leading-tight text-slate dark:text-white sm:text-6xl lg:text-7xl">
        {profile.name}
        <span className="block text-gradient text-3xl sm:text-4xl">{profile.role}</span>
      </h1>
      <p className="max-w-xl text-lg text-slate/80 dark:text-pewter">{profile.summary}</p>
      <p className="text-base text-slate/70 dark:text-pewter/90">{profile.mantra}</p>
      <div className="flex flex-wrap gap-4">
        <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
          Featured projects
        </Button>
        <Button
          variant="secondary"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Say hello
        </Button>
      </div>
      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-pewter/80">
        <span>{profile.location}</span>
        <span>•</span>
        <span>{profile.availability}</span>
      </div>
      <div className="flex flex-wrap gap-2 text-sm text-slate/80 dark:text-pewter">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-sand/70 bg-pearl/70 px-4 py-1 transition-theme dark:border-white/10 dark:bg-transparent"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
    <motion.div
      variants={fadeIn('up', 0.2)}
      className="relative rounded-3xl border border-sand/70 bg-card-gradient-light p-10 shadow-card transition-theme dark:border-white/10 dark:bg-card-gradient"
    >
      <div className="absolute -top-6 right-10 text-xs uppercase tracking-[0.4em] text-slate/50 dark:text-smoke/40">
        Signature
      </div>
      <Signature />
      <div className="mt-10 space-y-2 text-sm text-slate/80 dark:text-pewter">
        <p className="text-2xl font-semibold text-slate dark:text-smoke">{profile.name}</p>
        <p>{profile.role}</p>
      </div>
    </motion.div>
  </motion.div>
);
