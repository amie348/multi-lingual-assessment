import createMiddleware from "next-intl/middleware";
import {
  languages,
  defaultLanguage,
  urlTranslations,
} from "./config/languages";

function getOriginalPath(path: string, locale: string) {
  for (const [originalPath, translations] of Object.entries(urlTranslations)) {
    if (translations[locale] === path) {
      return originalPath;
    }
  }
  return path;
}

export default createMiddleware({
  locales: languages,
  defaultLocale: defaultLanguage,
  localePrefix: "always",
  pathnames: {
    "/convert-ai-text-to-human": {
      en: "/convert-ai-text-to-human",
      es: "/convertir-texto-ai-a-humano",
      pt: "/converter-texto-ai-para-humano",
      ja: "/ai-テキストを人間に変換",
    },
  },
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
