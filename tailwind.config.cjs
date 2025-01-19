module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  daisyui: {
    themes: true,
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
