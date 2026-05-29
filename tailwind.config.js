export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          green: '#00e5cc',
          dark: '#0a0e1a',
          navy: '#0d1b2e',
          card: '#111827',
          accent: '#00c9b1',
        }
      },
      fontFamily: {
        display: ['Orbitron',"Caudex", 'sans-serif'],
        body: ['Exo 2', 'sans-serif'],
        tamil: ['"Noto Serif Tamil"', 'serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'slide-left': 'slideLeft 0.5s ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
        slideLeft: { '0%': { transform: 'translateX(100%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
        fadeUp: { '0%': { transform: 'translateY(30px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        pulseGlow: { '0%,100%': { boxShadow: '0 0 20px rgba(0,229,204,0.3)' }, '50%': { boxShadow: '0 0 40px rgba(0,229,204,0.7)' } },
      }
    }
  },
  plugins: []
}
