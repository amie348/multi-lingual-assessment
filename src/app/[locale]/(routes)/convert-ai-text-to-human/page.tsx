import { useTranslations } from "next-intl";

export default function AIHumanizer() {
  const t = useTranslations("AIHumanizer");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <p className="mt-4 text-xl">{t("description")}</p>
    </main>
  );
}
