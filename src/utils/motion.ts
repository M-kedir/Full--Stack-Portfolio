import { Variants } from 'framer-motion';

type FadeDirection = 'up' | 'down' | 'left' | 'right';

const distance: Record<FadeDirection, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
};

export const fadeIn = (direction: FadeDirection = 'up', delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    ...distance[direction],
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

export const staggerContainer = (delayChildren = 0.1, stagger = 0.1): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 24 },
  show: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.9, ease: [0.33, 1, 0.68, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};
