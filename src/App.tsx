import { useEffect, useState } from 'react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { NavBar } from './components/NavBar';
import { FloatingAccent } from './components/FloatingAccent';

const navigation = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const sectionProps = {
  className: 'max-w-6xl mx-auto px-6 md:px-12 lg:px-16',
};
type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem('portfolio-theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    root.setAttribute('data-theme', theme);
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const handleToggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className="relative min-h-screen bg-bone text-slate transition-theme dark:bg-ink dark:text-smoke">
      <FloatingAccent />
      <NavBar items={navigation} theme={theme} onToggleTheme={handleToggleTheme} />
      <main className="space-y-32 pb-32">
        <section id="hero" {...sectionProps}>
          <Hero />
        </section>
        <section id="about" {...sectionProps}>
          <About />
        </section>
        <section id="skills" {...sectionProps}>
          <Skills />
        </section>
        <section id="experience" {...sectionProps}>
          <Experience />
        </section>
        <section id="projects" {...sectionProps}>
          <Projects />
        </section>
        <section id="contact" {...sectionProps}>
          <Contact />
        </section>
      </main>
    </div>
  );
}
