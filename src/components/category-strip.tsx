import Link from "next/link";
import { Locale } from "@/lib/types";
import { getCategories } from "@/lib/store";

export function CategoryStrip({ locale }: { locale: Locale }) {
  const categories = getCategories();

  return (
    <section className="category-strip">
      {categories.map((category) => (
        <Link key={category.id} href={`/${locale}/catalog/${category.slug}`} className="category-chip">
          <span>{category.name[locale]}</span>
          <small>{category.description[locale]}</small>
        </Link>
      ))}
    </section>
  );
}
