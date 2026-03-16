import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product-grid";
import { getCategoryBySlug, getProducts } from "@/lib/store";
import { Locale } from "@/lib/types";

export default async function CategoryPage({
  params
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = getProducts({ category: slug });

  return (
    <section>
      <div className="section-header">
        <div>
          <p className="eyebrow">{locale === "en" ? "Collection" : "Kolekcija"}</p>
          <h1>{category.name[locale]}</h1>
          <p>{category.description[locale]}</p>
        </div>
      </div>
      <ProductGrid locale={locale} products={products} />
    </section>
  );
}
