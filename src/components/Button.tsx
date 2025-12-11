import { motion, type HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';

const styles = {
  primary: 'bg-accent text-ink hover:bg-accentMuted shadow-glow dark:shadow-card',
  secondary:
    'bg-pearl text-slate border border-sand/60 hover:bg-pearl/90 dark:bg-white/5 dark:text-smoke dark:border-white/15 dark:hover:bg-white/10',
} as const;

type ButtonVariant = keyof typeof styles;

type ButtonProps = HTMLMotionProps<'button'> & {
  variant?: ButtonVariant;
};

export const Button = ({ variant = 'primary', className, children, ...props }: ButtonProps) => {
  const tone: ButtonVariant = variant ?? 'primary';

  return (
    <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={clsx(
      'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-theme duration-300',
      styles[tone],
      className,
    )}
    {...props}
  >
    {children}
    </motion.button>
  );
};
