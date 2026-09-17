/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F1E8',
        terracotta: '#C1603A',
        forest: '#3C4A3E',
        obsidian: {
          DEFAULT: '#050505',
          950: '#050505',
          900: '#0A0A0A',
          850: '#0F0F0F',
          800: '#141414',
          700: '#1F1F1F',
          border: 'rgba(255, 255, 255, 0.07)'
        },
        gold: {
          light: '#EAD186',
          DEFAULT: '#D4AF37', // Premium metallic gold
          dark: '#B38F24',
          glow: 'rgba(212, 175, 55, 0.15)',
          glowStrong: 'rgba(212, 175, 55, 0.40)'
        }
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(212, 175, 55, 0.12)',
        'gold-md': '0 0 30px rgba(212, 175, 55, 0.22)',
        'gold-lg': '0 10px 40px rgba(212, 175, 55, 0.35)',
        'glass-card': '0 20px 50px rgba(0, 0, 0, 0.7)'
      },
      keyframes: {
        antiGravity: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        antiGravitySubtle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' }
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        'antigravity': 'antiGravity 6s ease-in-out infinite',
        'antigravity-subtle': 'antiGravitySubtle 5s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite'
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        'maker-serif': ['var(--font-fraunces)', 'serif'],
        'maker-sans': ['var(--font-inter)', 'sans-serif']
      }
    }
  },
  plugins: []
};
