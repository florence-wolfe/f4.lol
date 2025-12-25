module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      screens: {
        xs: '540px',
        xxs: '480px',
      },
    },
  },
};
