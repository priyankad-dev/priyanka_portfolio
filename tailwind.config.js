/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        elevated: 'rgb(var(--c-elevated) / <alpha-value>)',
        content: 'rgb(var(--c-text) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
        accent2: 'rgb(var(--c-accent-2) / <alpha-value>)',
        'accent-soft': 'rgb(var(--c-accent-soft) / <alpha-value>)',
        line: 'rgb(var(--c-border) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        base: ['1.0625rem', { lineHeight: '1.7' }],
      },
      letterSpacing: {
        label: '0.16em',
      },
      maxWidth: {
        shell: '1120px',
      },
      boxShadow: {
        card: '0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px -12px rgb(0 0 0 / 0.12)',
        lift: '0 2px 4px rgb(0 0 0 / 0.05), 0 18px 40px -16px rgb(0 0 0 / 0.22)',
      },
      keyframes: {
        /* Section and card entrances. */
        riseIn: {
          from: { opacity: '0', transform: 'translate3d(0, 20px, 0)' },
          to: { opacity: '1', transform: 'none' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translate3d(-18px, 0, 0)' },
          to: { opacity: '1', transform: 'none' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translate3d(18px, 0, 0)' },
          to: { opacity: '1', transform: 'none' },
        },
        /* Portrait entrance: fade + slight rise + gentle settle. Runs once. */
        scaleIn: {
          from: { opacity: '0', transform: 'translate3d(0, 16px, 0) scale(0.97)' },
          to: { opacity: '1', transform: 'none' },
        },
        /* The nav brand dot, once on load. */
        dotIn: {
          from: { opacity: '0', transform: 'scale(0)' },
          to: { opacity: '1', transform: 'none' },
        },
        /* Masthead rules and the spine draw themselves in. */
        drawX: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        drawY: {
          from: { transform: 'scaleY(0)' },
          to: { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'rise-in': 'riseIn 520ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-in-left': 'slideInLeft 560ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-in-right': 'slideInRight 560ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'scale-in': 'scaleIn 620ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'dot-in': 'dotIn 520ms cubic-bezier(0.34, 1.4, 0.64, 1) both',
        'draw-x': 'drawX 700ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'draw-y': 'drawY 700ms cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
