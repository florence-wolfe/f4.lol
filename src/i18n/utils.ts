import { getNestedValue } from '../utils/get-nested-value';
import config from '../../astro.config.mjs';
import type { AreLocalesValid, Expect } from '../types/i18n.types';
import type { AstroUserConfig } from 'astro';
import en from '../../public/locales/en.json';
import fr from '../../public/locales/fr.json';

const translations = {
  en,
  fr,
} as const;

type ExtractLocales<T> = T extends AstroUserConfig<infer L, any> ? L : never;
type ConfigLocales = ExtractLocales<typeof config>;

type ValidLocale = ConfigLocales[number];
// Ensure that all imported locales match the structure of the first one
type Translations = (typeof translations)[ValidLocale];
/**
 * This is some magic. Add the locale file import type to the Translations list and it'll spit out a type error if the interfaces don't match the `en` locale
 * TODO: Add specific locale in the message.
 */
type _ValidLocales = Expect<AreLocalesValid<Translations>>;
const defaultLang = config.i18n?.defaultLocale ?? 'en';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if ((config.i18n?.locales ?? ([] as string[])).includes(lang)) return lang as ValidLocale;
  return defaultLang;
}

export function useTranslations(lang: ValidLocale) {
  return function t(key: Paths<Messages>) {
    return (
      getNestedValue(translations[lang], key) ??
      `[default] ${getNestedValue(translations[defaultLang], key)}` ??
      `[untranslated] ${key}`
    );
  };
}

export type TranslationPaths = Paths<Messages>;
