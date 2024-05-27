/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'fade-in': 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        '3d-effect': {
          '0%, 100%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'rotateX(15deg) rotateY(15deg)' },
        },
      },
      animation: {
        '3d-effect': '3d-effect 10s infinite ease-in-out',
      },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-3d-effect': {
          backgroundImage: 'linear-gradient(45deg, #ff0000, #ff00ff, #0000ff, #00ffff, #00ff00, #ffff00, #ff0000)',
          animation: 'gradientAnimation 15s ease infinite',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};