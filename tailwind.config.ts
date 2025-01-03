/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        shine: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        shine: 'shine 8s ease-in-out infinite',
      },
      colors: {
        gold: '#D9B16A',
        lightblue: '#00B8D9',
        blueCustom: '#27C0EF',
        gradientblue: '#004680',
        softblue: '#DDEEFF',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        home: 'url(/bg/bg-home.png)',
        home_wide: 'url(/bg/home-wide.png)',
        home_two: 'url(/bg/bg-home-2.png)',
        home_two_wide: 'url(/bg/home-2-wide.png)',
        button: 'url(/bg/button.png)',
        relevant: 'url(/bg/relevant.png)',
        doa: 'url(/bg/doa.png)',
        doa_wide: 'url(/bg/doa-wide.png)',
        lkpd: 'url(/bg/lkpd.png)',
        activity_one: 'url(/bg/activity-one.png)',
        activity_assignment: 'url(/bg/soal.png)',
        activity_two: 'url(/bg/activity-two.png)',
        activity_three: 'url(/bg/acitivity-three.png)',
        activity_three_wide: 'url(/bg/activity-three-wide.png)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
