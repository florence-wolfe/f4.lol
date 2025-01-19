// Used for the global `useTranslations` hook typing
type Messages = typeof import('../../public/locales/en.json');

declare global {
  // Use type safe message keys
  interface IntlMessages extends Messages {}
}
