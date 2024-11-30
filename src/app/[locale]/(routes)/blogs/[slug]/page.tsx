// src/app/[locale]/(routes)/blogs/[slug]/page.tsx
import { useTranslations } from "next-intl";

export default function BlogArticle({ params }: { params: { slug: string } }) {
  const t = useTranslations("BlogArticle");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">
        {t("title", { slug: params.slug })}
      </h1>
      <p>{t("content")}</p>
    </main>
  );
}
