import createMiddleware from "next-intl/middleware";
import { languages, defaultLanguage } from "./config/languages";

export default createMiddleware({
  locales: languages,
  defaultLocale: defaultLanguage,
  localePrefix: "as-needed",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
