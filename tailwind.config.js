/***********************************************************
 * Tailwind Configuration
 ***********************************************************/
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0c0f18',
        carbon: '#11131c',
        midnight: '#05060c',
        smoke: '#f0eee7',
        bone: '#ede9df',
        pearl: '#f6f2e8',
        sand: '#d8d2c4',
        pewter: '#8d909b',
        slate: '#1b1f2b',
        accent: '#5f6bf4',
        accentMuted: '#8d96ff',
        glow: '#e4defc',
        citrus: '#f3c28a',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', ...fontFamily.sans],
        serif: ['"Instrument Serif"', ...fontFamily.serif],
      },
      boxShadow: {
        soft: '0 20px 60px -30px rgba(15, 23, 42, 0.35)',
        card: '0 18px 40px -20px rgba(15, 23, 42, 0.45)',
        glow: '0 25px 50px -20px rgba(110, 123, 255, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(110,123,255,0.25), transparent 60%)',
  'hero-gradient-light': 'radial-gradient(circle at top, rgba(237,233,223,0.85), transparent 65%)',
  'card-gradient': 'linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.6))',
  'card-gradient-light': 'linear-gradient(135deg, rgba(255,255,255,0.85), rgba(226,223,212,0.75))',
      },
      borderRadius: {
        xl: '28px',
      },
      spacing: {
        18: '4.5rem',
      },
      transitionProperty: {
        theme: 'background-color, color, border-color, fill, stroke',
      },
    },
  },
  plugins: [],
};
