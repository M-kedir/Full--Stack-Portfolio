export const profile = {
  name: 'Mohammed Kedir',
  role: 'Front-end Developer · UI Designer',
  summary:
    'I design and code responsive product surfaces with React, Tailwind, and Figma, keeping accessibility and polish in sync.',
  location: 'Addis Ababa, Ethiopia · Remote',
  availability: 'Available for junior front-end roles & select freelance briefs',
  mantra: 'Calm delivery, precise interfaces.',
};

export type SkillIconKey =
  | 'html'
  | 'css'
  | 'javascript'
  | 'typescript'
  | 'react'
  | 'tailwind'
  | 'framer'
  | 'figma'
  | 'git'
  | 'notion';

export const skills: ReadonlyArray<{ label: string; icon: SkillIconKey }> = [
  { label: 'HTML5', icon: 'html' },
  { label: 'CSS3', icon: 'css' },
  { label: 'JavaScript', icon: 'javascript' },
  { label: 'TypeScript', icon: 'typescript' },
  { label: 'React', icon: 'react' },
  { label: 'Tailwind CSS', icon: 'tailwind' },
  { label: 'Framer Motion', icon: 'framer' },
  { label: 'Figma', icon: 'figma' },
  { label: 'Git', icon: 'git' },
  { label: 'Notion', icon: 'notion' },
];

export const experiences = [
  {
    title: 'Front-end Intern',
    company: 'Studio Nova',
    period: 'Feb 2025 — Present',
    description: 'Deliver React/Tailwind marketing pages for retail clients alongside the product design team.',
    contributions: ['Translated signed-off Figma files into accessible UI', 'Documented spacing, color, and motion tokens'],
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Freelance Web Designer',
    company: 'Independent',
    period: '2023 — Present',
    description: 'Own lightweight brand sites end-to-end—from structure and copy to deploy-ready builds.',
    contributions: ['Ran discovery workshops and style references', 'Shipped static builds with Netlify + Git workflows'],
    stack: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Git'],
  },
];

export const projects = [
  {
    title: 'Atlas Dashboard',
    description: 'Concept dashboard with responsive cards, chart shells, and subtle micro-interactions.',
    tags: ['React', 'TypeScript', 'Framer Motion'],
    year: '2025',
  },
  {
    title: 'Lumen Portfolio',
    description: 'Personal portfolio exploring layered layouts, scroll cues, and reusable sections.',
    tags: ['HTML', 'CSS', 'Tailwind CSS'],
    year: '2024',
  },
  {
    title: 'Neighborhood Bakehouse',
    description: 'Small bakery site with menu highlights, warm colors, and accessible forms.',
    tags: ['Web Design', 'Figma', 'JavaScript'],
    year: '2024',
  },
];

export const socialLinks = [
  { label: 'Email', value: 'hello@mohammedkedir.dev' },
  { label: 'LinkedIn', value: 'linkedin.com/in/mohammedkedir' },
  { label: 'GitHub', value: 'github.com/mohammedkedir' },
  { label: 'Figma', value: 'figma.com/@mohammedkedir' },
];
