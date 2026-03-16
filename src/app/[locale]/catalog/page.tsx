import { CatalogFilters } from "@/components/catalog-filters";
import { ProductGrid } from "@/components/product-grid";
import { getProducts } from "@/lib/store";
import { Locale } from "@/lib/types";

export default async function CatalogPage({
  params,
  searchParams
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ q?: string; sort?: "featured" | "price-asc" | "price-desc" | "name" }>;
}) {
  const { locale } = await params;
  const { q, sort } = await searchParams;
  const products = getProducts({ query: q, sort });

  return (
    <section>
      <div className="section-header">
        <div>
          <p className="eyebrow">{locale === "en" ? "Catalog" : "Katalogs"}</p>
          <h1>{locale === "en" ? "Professional stock for nail desks" : "Profesionalais sortiments nagu meistariem"}</h1>
        </div>
      </div>
      <CatalogFilters locale={locale} />
      <ProductGrid locale={locale} products={products} />
    </section>
  );
}
