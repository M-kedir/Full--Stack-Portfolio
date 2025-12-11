import { motion } from 'framer-motion';
import { Button } from './Button';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { profile } from '../data/content';
import clsx from 'clsx';

interface NavItem {
  id: string;
  label: string;
}

interface NavBarProps {
  items: NavItem[];
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const NavBar = ({ items, theme, onToggleTheme }: NavBarProps) => {
  const activeId = useScrollSpy(items.map((item) => item.id), 100);
  const isDark = theme === 'dark';

  return (
  <header className="sticky top-0 z-50 w-full border-b border-sand/50 bg-pearl/85 backdrop-blur-2xl transition-theme dark:border-white/5 dark:bg-ink/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12 lg:px-16">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_24px_rgba(110,123,255,0.8)]" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate/80 dark:text-pewter">{profile.name}</p>
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-pewter/70">Front-end · UI</p>
          </div>
        </div>
        <nav className="hidden items-center gap-1 rounded-full border border-sand/50 bg-white/70 p-1 text-sm font-medium text-slate/80 shadow-sm transition-theme dark:border-white/10 dark:bg-white/5 dark:text-pewter md:flex">
          {items.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className={clsx(
                'relative rounded-full px-4 py-2 transition-colors',
                activeId === item.id ? 'text-ink dark:text-smoke' : 'text-slate/70 dark:text-pewter/80',
              )}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {activeId === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-pearl/80 dark:bg-white/10"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              {item.label}
            </motion.button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle color theme"
            onClick={onToggleTheme}
            className="rounded-full border border-sand/70 bg-white/80 p-2 text-slate transition-theme dark:border-white/20 dark:bg-white/10 dark:text-smoke"
          >
            {isDark ? (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 12.79A9 9 0 1 1 11.21 3c-.13.64-.21 1.31-.21 2a7 7 0 0 0 7 7c.69 0 1.36-.08 2-.21Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36-1.42-1.42M7.05 7.05 5.64 5.64m12.02 0-1.41 1.41M7.05 16.95l-1.41 1.41" />
              </svg>
            )}
          </motion.button>
          <Button
            variant="secondary"
            className="hidden text-xs uppercase tracking-[0.2em] md:inline-flex"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
};
