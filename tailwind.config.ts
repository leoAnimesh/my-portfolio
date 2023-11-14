import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkHeader: '#02040A',
        lightHeader: '#f6f8fa',
        dark: '#0E1117',
        themeBlue: '#2F6FEB',
        darkBlue: '#18283E',
        borderDark: '#30363D',
        lightCard: '#F6F8FA',
        darkCard: '#21262C',
        orange: '#FF7B72',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
