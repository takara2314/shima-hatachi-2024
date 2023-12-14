/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Klee One"', 'Meiryo', 'sans-serif'],
        'heading': ['"Train One"', '"Klee One"', 'Meiryo', 'sans-serif']
      }
    }
  },
  plugins: []
};
