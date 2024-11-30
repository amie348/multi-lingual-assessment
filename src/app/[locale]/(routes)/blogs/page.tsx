import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Blogs() {
  const t = useTranslations("Blogs");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <ul className="mt-8 space-y-4">
        <li>
          <Link
            href="/blogs/article-1"
            className="text-blue-500 hover:underline"
          >
            {t("article1")}
          </Link>
        </li>
        <li>
          <Link
            href="/blogs/article-2"
            className="text-blue-500 hover:underline"
          >
            {t("article2")}
          </Link>
        </li>
      </ul>
    </main>
  );
}
