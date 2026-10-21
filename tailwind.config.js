/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Clash Display"', '"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      colors: {
        obsidian: {
          DEFAULT: '#060708',
          deep: '#040506',
          sunk: '#0A0C0F',
          card: '#0E1116',
          elevated: '#141920',
          line: '#1B222C',
          muted: '#8A99A8',
        },
        cyan: {
          electric: '#00F0FF',
          pulse: '#22D3EE',
          deep: '#0891B2',
          abyss: '#041E24',
        },
        fg: {
          DEFAULT: '#F2F6F8',
          muted: '#94A3B4',
          faint: '#596777',
        },
        accent: {
          DEFAULT: '#00F0FF',
          hover: '#38F6FF',
          dim: 'rgba(0, 240, 255, 0.14)',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 34s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
