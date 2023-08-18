import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkHeader: '#02040A',
        lightHeader: '#f6f8fa',
        dark: '#0E1117',
        borderDark: '#30363D',
        lightCard: '#F6F8FA',
        darkCard: '#21262C',
        orange: '#FF7B72',
      },
    },
  },
  plugins: [],
};
export default config;
