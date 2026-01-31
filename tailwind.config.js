/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // zinc-800
        input: "var(--color-input)", // zinc-800
        ring: "var(--color-ring)", // zinc-600
        background: "var(--color-background)", // neutral-950
        foreground: "var(--color-foreground)", // white
        primary: {
          DEFAULT: "var(--color-primary)", // white
          foreground: "var(--color-primary-foreground)", // neutral-950
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // zinc-800
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // red-500
          foreground: "var(--color-destructive-foreground)", // white
        },
        success: {
          DEFAULT: "var(--color-success)", // emerald-500
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // amber-500
          foreground: "var(--color-warning-foreground)", // white
        },
        error: {
          DEFAULT: "var(--color-error)", // red-500
          foreground: "var(--color-error-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // zinc-800
          foreground: "var(--color-muted-foreground)", // zinc-400
        },
        accent: {
          DEFAULT: "var(--color-accent)", // zinc-700
          foreground: "var(--color-accent-foreground)", // white
        },
        popover: {
          DEFAULT: "var(--color-popover)", // zinc-900
          foreground: "var(--color-popover-foreground)", // white
        },
        card: {
          DEFAULT: "var(--color-card)", // zinc-900
          foreground: "var(--color-card-foreground)", // white
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(40px)',
            filter: 'blur(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0)',
          },
        },
        slideInBlur: {
          from: {
            opacity: '0',
            transform: 'translateX(-40px)',
            filter: 'blur(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
            filter: 'blur(0)',
          },
        },
        fadeInScale: {
          from: {
            opacity: '0',
            transform: 'scale(0.9)',
            filter: 'blur(8px)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
            filter: 'blur(0)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        slideInBlur: 'slideInBlur 1.2s ease-out forwards',
        fadeInScale: 'fadeInScale 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        bounce: 'bounce 1s infinite',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}