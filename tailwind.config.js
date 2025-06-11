/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Indigo
        secondary: '#1E293B', // Slate dark
        accent: '#F59E0B', // Amber
        success: '#10B981', // Emerald
        background: '#F8FAFC', // Light gray
        dimWhite: 'rgba(255, 255, 255, 0.7)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      boxShadow: {
        'glow': '0 0 15px -3px rgba(79, 70, 229, 0.4)',
        'glow-hover': '0 0 25px -5px rgba(79, 70, 229, 0.6)',
      }
    },
  },
  plugins: [],
} 