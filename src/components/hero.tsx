import Link from "next/link";
import { Locale } from "@/lib/types";
import { getHomepageContent } from "@/lib/store";

export function Hero({ locale }: { locale: Locale }) {
  const content = getHomepageContent();

  return (
    <section className="hero-panel">
      <div>
        <p className="eyebrow">Latvia-first pro supply</p>
        <h1>{content[0].title[locale]}</h1>
        <p>{content[0].body[locale]}</p>
        <div className="hero-actions">
          <Link href={`/${locale}/catalog`} className="button-primary">
            {locale === "en" ? "Shop catalog" : "Skatit katalogu"}
          </Link>
          <Link href="/admin" className="button-secondary">
            {locale === "en" ? "Open admin" : "Atvert administraciju"}
          </Link>
        </div>
      </div>
      <div className="hero-aside">
        {content.slice(1).map((block) => (
          <article key={block.key} className="hero-note">
            <h2>{block.title[locale]}</h2>
            <p>{block.body[locale]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
