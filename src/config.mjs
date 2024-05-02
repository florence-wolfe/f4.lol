const CONFIG = {
  name: 'f4.lol',

  origin: 'https://f4.lol',
  basePathname: '/',
  trailingSlash: false,

  title: "f4.lol - Frank's home",
  description:
    'Personal website of Frank, a software engineer and a student. I write about programming, tech, and life.',

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',

  blog: {
    disabled: true,
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const DATE_FORMATTER = CONFIG.dateFormatter;
