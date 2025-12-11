import { motion } from 'framer-motion';

export const FloatingAccent = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <motion.div
      className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-hero-gradient-light opacity-60 blur-[200px] dark:bg-hero-gradient"
      animate={{ y: [0, -30, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute right-4 top-1/3 h-40 w-40 rounded-full bg-citrus/30 blur-[140px] dark:bg-glow/30"
      animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
    />
  </div>
);
