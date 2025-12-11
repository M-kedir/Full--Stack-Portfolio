# Porty · Premium Portfolio

A modern personal portfolio built with React, Vite, TailwindCSS, and Framer Motion. The layout emphasizes generous whitespace, tactile micro-interactions, and a neutral palette for showcasing high-end creative work.

## Features

- ⚡️ **Vite + React** foundation with TypeScript and hot-module reloading.
- 🎨 **TailwindCSS** for a fully utility-driven design system with custom tokens.
- 🌀 **Framer Motion** animations for smooth fades, slides, and hover states.
- 🌗 **Light / dark theme toggle** with smooth transitions and persisted preference.
- 💼 **Expanded content**: hero, about, skills, projects, experience, and contact sections with sticky navigation.
- ♻️ **Reusable components** for buttons, headings, cards, signature animation, and floating gradients.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to preview the site.

## Production Build

```bash
npm run build
npm run preview
```

`npm run build` outputs an optimized bundle in `dist/`. Use `npm run preview` to test the production build locally.

## Project Structure

```text
src/
├── components/   # UI building blocks (buttons, nav, cards, signature)
├── sections/     # Page sections (Hero, About, Skills, Projects, Contact)
├── data/         # Structured content and social links
├── hooks/        # Reusable hooks (scroll spy navigation)
├── utils/        # Motion presets and helpers
```

## Customization

- Update `src/data/content.ts` with your own profile, skills, experience timeline, and projects.
- Adjust the Tailwind theme inside `tailwind.config.js` for alternative palettes or fonts (light/dark tokens live here).
- Extend `src/components/` or `src/sections/` to introduce new storytelling blocks while reusing the shared motion + typography system.

## License

This project is provided as-is for portfolio inspiration. Customize freely for your personal use.
