import { motion } from 'framer-motion';

export const Signature = () => (
  <motion.svg
    width="180"
    height="80"
    viewBox="0 0 180 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-accent"
  >
    <motion.path
      d="M6 60C20 20 40 20 50 55C60 90 80 10 100 25C120 40 140 40 160 25"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 5 }}
    />
  </motion.svg>
);
