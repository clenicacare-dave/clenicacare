import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        clBlue: '#1b4f73',
        clNavy: '#12344d'
      },
      keyframes: {
        'float-pulse': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        'pulse-slow': 'float-pulse 3s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
